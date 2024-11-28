const User = require("../models/User");
const crypto = require("crypto");
const sendGmail = require("../utils/sendGmail");
const GoogleAuthService = require("../utils/googleAuthService");
const Token = require("../models/token");
const googleAuthService = new GoogleAuthService();
const { resetPasswordTemplate } = require("../templates");
// authController.js

// Function to check if user exists in the database
async function checkUserExists(email, shouldExist = true) {
  const user = await User.findOne({ email });
  if (shouldExist && !user) {
    throw new Error("User Not Found");
  } else if (!shouldExist && user) {
    throw new Error("User Already Exists");
  }
  return user;
}

// Auth controller
const authController = {
  // Register a new user
  async register(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("All fields are required");
      }
      await checkUserExists(email, false);

      //use local strategy to register user
      const newUser = new User({ email });
      await User.register(newUser, password);
      res.status(201).json({
        message: "User registered successfully",
        user: { id: newUser._id, email: newUser.email },
      });
      console.log("User registered successfully: ", newUser.email);
    } catch (error) {
      next(error);
    }
  },

  // Login a user
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("All fields are required");
      }
      const user = await checkUserExists(email);

      //use local strategy to authenticate user
      user.authenticate(password, (err, authenticatedUser) => {
        if (err || !authenticatedUser) {
          return next(new Error("Unauthorized"));
        }

        req.login(authenticatedUser, (err) => {
          if (err) {
            return next(new Error(loginErr.message));
          }
          res.status(200).json({
            message: "User logged in successfully",
            user: { id: authenticatedUser._id, email: authenticatedUser.email },
          });
          console.log("User logged in successfully: ", user.email);
        });
      });
    } catch (error) {
      next(error);
    }
  },

  // Logout a user
  logout(req, res, next) {
    const user = req.user;
    try {
      req.logout((err) => {
        // Use async callback
        if (err) {
          return next(err);
        }
        // Send success response after logout and session destruction
        res.status(200).json({ message: "User logged out successfully" });
        console.log("User logged out successfully: ", user.email);
      });
    } catch (error) {
      next(error);
    }
  },

  // Google auth callback
  googleAuthCallback(req, res) {
    const user = { googleId: req.user.googleId, email: req.user.email };
    req.session.user = user;
    console.log("User logged in successfully: ", user.email);
    res.redirect(
      `http://localhost:3000/diary?state=success&email=${user.email}&googleId=${user.googleId}`
    );
  },

  // Check if user is logged in
  async checkCurrentUser(req, res, next) {
    try {
      const { googleId, email } = req.body;
      if (
        req.session.user &&
        req.session.user.googleId === googleId &&
        req.session.user.email === email
      ) {
        res.status(200).json({
          message: "User is logged in by google",
          user: { id: req.session.googleId, email: req.session.user.email },
        });
        console.log("User is logged in by google: ", email, googleId);
      } else {
        throw new Error("Unauthorized");
      }
    } catch (error) {
      next(error);
    }
  },

  // Request a password reset code
  async requestResetCode(req, res, next) {
    try {
      const user = await checkUserExists(req.body.email);
      const resetCode = crypto.randomInt(100000, 999999).toString();
      // Set reset code and expiration
      user.resetCode = resetCode;
      user.resetCodeExpiration = Date.now() + 3600000;
      await user.save();
      // Send reset code to user's email
      await sendGmail({
        to: user.email,
        subject: "Your Password Reset Code",
        html: resetPasswordTemplate(resetCode),
      });

      res.status(200).json({ message: "Reset code sent to your email" });
      console.log("Reset code sent to ", req.body.email, ":", resetCode);
    } catch (error) {
      next(error);
    }
  },

  // Verify a password reset code
  async verifyResetCode(req, res, next) {
    const { email, resetCode } = req.body;
    try {
      const user = await checkUserExists(email);
      // Check if reset code is valid and not expired
      if (
        user.resetCode !== resetCode ||
        user.resetCodeExpiration < Date.now()
      ) {
        throw new Error("Unauthorized");
      }
      res.status(200).json({ message: "Reset code verified" });
      console.log("Reset code verified: ", resetCode, " for ", email);
    } catch (error) {
      next(error);
    }
  },

  // Reset a user's password
  async resetPassword(req, res, next) {
    const { email, resetCode, password } = req.body;
    try {
      const user = await checkUserExists(email);
      // Check if reset code is valid and not expired
      if (
        user.resetCode !== resetCode ||
        user.resetCodeExpiration < Date.now()
      ) {
        throw new Error("Invalid or expired reset code");
      }

      await user.setPassword(password);
      user.resetCode = null;
      user.resetCodeExpiration = null;
      await user.save();
      res.status(200).json({ message: "Password reset successful" });
      console.log("Password reset successful for ", email);
    } catch (error) {
      next(error);
    }
  },

  // Google OAuth
  async startAuth(req, res) {
    try {
      // Get OAuth URL
      const authUrl = googleAuthService.getAuthUrl();
      res.json({ authUrl });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Internal server error", details: error.message });
    }
  },

  // Handle OAuth callback
  async handleCallback(req, res) {
    try {
      const { code } = req.query;

      if (!code) {
        return res.status(400).json({ error: "Missing code parameter" });
      }
      // Handle OAuth callback
      const tokens = await googleAuthService.handleCallback(code);
      // Save token to database
      const tokenDoc = await Token.create({
        refreshToken: tokens.refresh_token,
        accessToken: tokens.access_token,
      });
      // Redirect to frontend with token info
      const redirectUrl = new URL("http://localhost:8888");
      redirectUrl.searchParams.append("message", "OAuth successful");
      redirectUrl.searchParams.append("tokenId", tokenDoc._id);
      redirectUrl.searchParams.append("createdAt", tokenDoc.createdAt);
      res.redirect(redirectUrl.toString());
    } catch (error) {
      console.error("Oauth failed:", error);
      res.status(500).json({
        error: "Oauth failed",
        details: error.message,
      });
    }
  },

  // Get token info
  async getTokenInfo(req, res) {
    try {
      const latestToken = await Token.findOne()
        .sort({ createdAt: -1 })
        .select("-refreshToken -accessToken"); // Exclude sensitive fields

      if (!latestToken) {
        return res.status(404).json({ error: "No token found" });
      }

      res.json({
        tokenId: latestToken._id,
        createdAt: latestToken.createdAt,
      });
    } catch (error) {
      res.status(500).json({ error: "No token found" });
    }
  },
};

module.exports = authController;

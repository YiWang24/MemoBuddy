const User = require("../models/User");
const crypto = require("crypto");
const sendGmail = require("../utils/sendGmail");
const GoogleAuthService = require("../utils/googleAuthService");
const Token = require("../models/token");
const googleAuthService = new GoogleAuthService();

// authController.js

const generateEmailTemplate = (code, redirectUrl) => {
  const logoUrl = `${redirectUrl}/logo.svg`;
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Reset Your Password</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f7f7f7;">
      <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; margin: 0; padding: 0;">
        <tr>
          <td style="padding: 20px 0; text-align: center; background-color: #ffffff;">
            <img src=/logo.svg" alt="MemoBuddy" style="width: 150px; height: auto;">
          </td>
        </tr>
        <tr>
          <td style="padding: 40px 30px; background-color: #ffffff;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding-bottom: 30px;">
                  <h1 style="margin: 0; font-size: 24px; line-height: 1.2; color: #333333; font-weight: bold;">
                    Reset Your Password
                  </h1>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom: 20px; color: #666666; font-size: 16px; line-height: 1.5;">
                  <p>Hello,</p>
                  <p>We received a request to reset your password. Enter this verification code to proceed:</p>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom: 30px; text-align: center;">
                  <div style="display: inline-block; background-color: #f5f5f5; padding: 15px 30px; border-radius: 6px; letter-spacing: 6px; font-size: 24px; font-weight: bold; color: #333333;">
                    ${code}
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom: 20px; color: #666666; font-size: 16px; line-height: 1.5;">
                  <p>This code will expire in 10 minutes for security reasons.</p>
                  <p>If you didn't request this password reset, please ignore this email.</p>
                </td>
              </tr>
              <tr>
                <td style="padding-top: 30px; border-top: 1px solid #eeeeee; color: #999999; font-size: 14px;">
                  <p>Best regards,<br>The MemoBuddy Team</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px; text-align: center; background-color: #f7f7f7; color: #999999; font-size: 12px;">
            <p>This is an automated message, please do not reply.</p>
            <p>&copy; ${new Date().getFullYear()} MemoBuddy. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};

async function checkUserExists(email, shouldExist = true) {
  const user = await User.findOne({ email });
  if (shouldExist && !user) {
    throw new Error("User Not Found");
  } else if (!shouldExist && user) {
    throw new Error("User Already Exists");
  }
  return user;
}

const authController = {
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

  googleAuthCallback(req, res) {
    const user = { googleId: req.user.googleId, email: req.user.email };
    req.session.user = user;
    console.log("User logged in successfully: ", user.email);
    res.redirect(
      `http://localhost:3000/diary?state=success&email=${user.email}&googleId=${user.googleId}`
    );
  },

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

  async requestResetCode(req, res, next) {
    try {
      const user = await checkUserExists(req.body.email);
      const resetCode = crypto.randomInt(100000, 999999).toString();
      user.resetCode = resetCode;
      user.resetCodeExpiration = Date.now() + 3600000;
      await user.save();

      await sendGmail({
        to: user.email,
        subject: "Your Password Reset Code",
        html: generateEmailTemplate(resetCode),
      });

      res.status(200).json({ message: "Reset code sent to your email" });
      console.log("Reset code sent to ", req.body.email, ":", resetCode);
    } catch (error) {
      next(error);
    }
  },

  async verifyResetCode(req, res, next) {
    const { email, resetCode } = req.body;
    try {
      const user = await checkUserExists(email);
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

  async resetPassword(req, res, next) {
    const { email, resetCode, password } = req.body;
    try {
      const user = await checkUserExists(email);

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

  async startAuth(req, res) {
    try {
      const authUrl = googleAuthService.getAuthUrl();
      res.json({ authUrl });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Internal server error", details: error.message });
    }
  },

  async handleCallback(req, res) {
    try {
      const { code } = req.query;

      if (!code) {
        return res.status(400).json({ error: "Missing code parameter" });
      }

      const tokens = await googleAuthService.handleCallback(code);

      const tokenDoc = await Token.create({
        refreshToken: tokens.refresh_token,
        accessToken: tokens.access_token,
      });

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

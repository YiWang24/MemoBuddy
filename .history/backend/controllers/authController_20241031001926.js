const User = require("../models/User");
const crypto = require("crypto");
const sendGmail = require("../utils/sendGmail");

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
  checkCurrentUser(req, res, next) {
    try {
     const {go}
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
        to: req.body.email,
        subject: "Password Reset Code",
        text:
          `Your password reset code is: ${resetCode}\n\n` +
          `This code will expire in 1 hour.`,
      });

      res.status(200).json({ message: "Reset code sent to your email" });
      console.log("Reset code sent to ", req.body.email, ":", resetCode);
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
      console.log(user);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authController;

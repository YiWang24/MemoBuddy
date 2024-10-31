const User = require("../models/User");
const crypto = require("crypto");
const sendGmail = require("../utils/sendGmail");

const authController = {
  async checkUserExists(email) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User Not Found");
    return user;
  },

  async register(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("All fields are required");
      }
      await this.checkUserExists(email);

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
      const user = await this.checkUserExists(email);

      //use local strategy to authenticate user
      user.authenticate(password, (err, authenticatedUser, msg) => {
        if (err) {
          throw new Error(err.message);
        }
        if (!authenticatedUser) {
          throw new Error("Unauthorized");
        }

        req.login(authenticatedUser, (err) => {
          if (err) {
            throw new Error(err.message);
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
          throw new Error(err.message);
        }
        // Send success response after logout and session destruction
        res.status(200).json({ message: "User logged out successfully" });
        console.log("User logged out successfully: ", user.email);
      });
    } catch (error) {
      next(error);
    }
  },

  async requestResetCode(req, res,next) {
    try {
      const user = await this.checkUserExists( req.body.email);
      const resetCode = crypto.randomInt(100000, 999999).toString();
      user.resetCode = resetCode;
      user.resetCodeExpiration = Date.now() + 3600000;
      await user.save();

      await sendGmail({
        to: email,
        subject: "Password Reset Code",
        text:
          `Your password reset code is: ${resetCode}\n\n` +
          `This code will expire in 1 hour.`,
      });

      res.status(200).json({ message: "Reset code sent to your email" });
      console.log("Reset code sent to ", email, ":", resetCode);
    } catch (error) {
      next
    }
  },

  async resetPassword(req, res) {
    const { email, resetCode, password } = req.body;
    try {
      console.log(req.body);
      const user = await User.findOne({ email });
      console.log(user);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (
        user.resetCode !== resetCode ||
        user.resetCodeExpiration < Date.now()
      ) {
        return res
          .status(400)
          .json({ message: "Invalid or expired reset code" });
      }

      await user.setPassword(password);
      user.resetCode = null;
      user.resetCodeExpiration = null;
      await user.save();
      res.status(200).json({ message: "Password reset successful" });
      console.log(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = authController;

const User = require("../models/User");
const crypto = require("crypto");
const sendGmail = require("../utils/sendGmail");

const authController = {
  async register(req, res) {
    try {
      const { email, password } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }
      //use local strategy to register user
      const newUser = new User({ email });
      await User.register(newUser, password);
      res.status(201).json({
        message: "User registered successfully",
        user: { id: newUser._id, email: newUser.email },
      });
      console.log("User registered successfully: ", newUser.email);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      //use local strategy to authenticate user
      user.authenticate(password, (err, authenticatedUser, msg) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        if (!authenticatedUser) {
          return res
            .status(401)
            .json({ message: msg || "Invalid credentials" });
        }

        req.login(authenticatedUser, (err) => {
          if (err) {
            return res.status(500).json({ message: err.message });
          }
          res.status(200).json({
            message: "User logged in successfully",
            user: { id: authenticatedUser._id, email: authenticatedUser.email },
          });
          console.log("User logged in successfully: ", user.email);
        });
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  logout(req, res) {
    try {
      req.logout((err) => {
        // Use async callback
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        // Send success response after logout and session destruction
        res.status(200).json({ message: "User logged out successfully" });
        console.log("User logged out successfully: ", req.user.email);
      });
    } catch (err) {
      if(!res.headersSent) {  
      res.status(500).json({ message: err.message });
    }
  },

  async requestResetCode(req, res) {
    const { email } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
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
    } catch (err) {
      res.status(500).json({ message: err.message });
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

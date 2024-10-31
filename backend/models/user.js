const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
// Define the user schema
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email address of the user
 *         password:
 *           type: string
 *           description: The password of the user (required if not using Google OAuth)
 *         googleId:
 *           type: string
 *           description: The Google ID of the user (required if using Google OAuth)
 *         resetCode:
 *           type: string
 *           description: The password reset code sent to the user's email
 *         resetCodeExpires:
 *           type: string
 *           format: date-time
 *           description: The expiration date of the password reset code
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the user was created
 *       example:
 *         email: user@my.yorku.ca
 *         password: password123
 *         googleId: null
 */

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true, // Allows null values to be unique
  },
  resetCode: { type: String, default: null },
  resetCodeExpires: { type: Date, default: null },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
UserSchema.plugin(passportLocalMongoose, {
  usernameField: "email", // Use email as the username field
  attempts: true, // Enable login
  maxAttempts: 10, // Increase the number of attempts allowed
  interval: 1000, // Increase the interval between attempts
});

module.exports = mongoose.model("User", UserSchema);

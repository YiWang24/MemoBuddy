const authController = require("../controllers/authController");
const express = require("express");

const passport = require("passport");
const isLogged = require("../middleware/authMiddleware");
const router = express.Router();
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     email:
 *                       type: string
 *       400:
 *         description: Bad request
 *       409:
 *         description: User already exists
 *       500:
 *         description: Server error
 */

router.post("/register", authController.register);
/**
 *
 * @swagger
 * /api/auth/login:
 *  post:
 *   summary: Login a user
 *   tags: [Auth]
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/User'
 *   responses:
 *     200:
 *       description: User logged in successfully
 *       content:
 *        application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     email:
 *                       type: string
 *     400:
 *       description: Bad request
 *     401:
 *       description: Invalid credentials
 *     500:
 *       description: Server error
 */

router.post("/login", authController.login);
/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Logs the user out
 *     description: Logs out the currently authenticated user by ending their session.
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: User logged out successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Logged out successfully"
 *       401:
 *         description: Unauthorized - User is not logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized: Please log in"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error logging out"
 */

router.post("/logout", isLogged, authController.logout);

/**
 * @swagger
 * /api/auth/request-password-reset:
 *   post:
 *     summary: Request a password reset code
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user requesting the password reset.
 *                 example: user@example.com
 *             required:
 *               - email
 *     responses:
 *       200:
 *         description: Password reset code sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Password reset email sent successfully."
 *       400:
 *         description: Bad request (e.g., missing email)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Email is required."
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User not found."
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while processing the request."
 */

router.post("/request-reset-password", authController.requestResetCode);

/**
 * @swagger
 * /api/auth/reset-password:
 *   post:
 *     summary: Reset user password
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user requesting the password reset.
 *                 example: user@example.com
 *               resetCode:
 *                 type: string
 *                 description: The password reset code sent to the user's email.
 *                 example: "123456"
 *               newPassword:
 *                 type: string
 *                 description: The new password for the user.
 *                 example: "newPassword123"
 *             required:
 *               - email
 *               - resetCode
 *               - newPassword
 *     responses:
 *       200:
 *         description: Password reset successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Password has been reset successfully."
 *       400:
 *         description: Bad request (e.g., missing fields)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "All fields are required."
 *       404:
 *         description: Invalid reset code or user not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid reset code or user not found."
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while processing the request."
 */

router.post("/reset-password", authController.resetPassword);

/**
 * @swagger
 * /api/auth/google:
 *     get:
 *       tags: [Auth]
 *       summary: Start Google OAuth authentication
 *       description: Initiates the Google authentication process and requests the user's profile and email.
 *       responses:
 *         302:
 *           description: Redirects to Google's authentication page.
 *         401:
 *           description: Unauthorized if the user is not authenticated.
 *
 */
//google login
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    keepSessionInfo: true,
  })
);

/**
 * @swagger
 * /api/auth/google/callback:
 *     get:
 *       tags: [Auth]
 *       summary: Google OAuth callback endpoint
 *       description: Handles the callback from Google after user authentication and redirects to the app.
 *       responses:
 *         302:
 *           description: Redirects to the specified URL after successful authentication.
 *         401:
 *           description: Unauthorized if authentication fails.
 *         500:
 *           description: Internal server error if there is an error during authentication.
 */

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    keepSessionInfo: true,
  }),
  (req, res) => res.redirect("http://localhost:8888/docs")
);

module.exports = router;

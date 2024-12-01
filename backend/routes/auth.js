const authController = require("../controllers/authController");
const express = require("express");
const passport = require("passport");
const middlewares = require("../middleware/index");
const router = express.Router();


router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", middlewares.authMiddleware, authController.logout);

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

router.post("/request-password-reset", authController.requestResetCode);

router.post("/verify-reset-code", authController.verifyResetCode);

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
    failureRedirect: "http://localhost:3000/login",
    keepSessionInfo: true,
  }),
  authController.googleAuthCallback
);

/**
 * @swagger
 * /api/auth/currentUser:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Check current user
 *     description: Returns the current authenticated user.
 *     operationId: checkCurrentUser
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               googleId:
 *                 type: string
 *                 description: The Google ID of the user
 *               email:
 *                 type: string
 *                 description: The email of the user
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.post(
  "/currentUser",
  middlewares.authMiddleware,
  authController.checkCurrentUser
);

/**
 * @swagger
 * /api/auth/start:
 *   get:
 *     summary: Start OAuth2 authentication
 *     tags: [Auth]
 *     responses:
 *       302:
 *         description: Redirect to Google OAuth2 consent screen
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while starting authentication."
 */

/**
 * @swagger
 * /api/auth/callback:
 *   get:
 *     summary: OAuth2 callback
 *     tags: [Auth]
 *     parameters:
 *       - in: query
 *         name: code
 *         schema:
 *           type: string
 *         required: true
 *         description: The authorization code returned by Google
 *     responses:
 *       200:
 *         description: Authentication successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                 refreshToken:
 *                   type: string
 *                 expiryDate:
 *                   type: string
 *       400:
 *         description: Invalid authorization code
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid authorization code."
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while handling the callback."
 */

/**
 * @swagger
 * /api/auth/token-info:
 *   get:
 *     summary: Get token information
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Token information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                 refreshToken:
 *                   type: string
 *                 expiryDate:
 *                   type: string
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while retrieving token information."
 */

router.get("/start", authController.startAuth);

router.get("/callback", authController.handleCallback);

router.get("/token-info", authController.getTokenInfo);

module.exports = router;

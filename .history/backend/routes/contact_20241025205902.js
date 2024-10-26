const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Send a contact message
 *     description: Submit a contact form with a name, email, subject, and message.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the sender
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 description: Email address of the sender
 *                 example: johndoe@example.com
 *               subject:
 *                 type: string
 *                 description: Subject of the message
 *                 example: Inquiry about services
 *               message:
 *                 type: string
 *                 description: Message content
 *                 example: I would like to know more about your services.
 *     responses:
 *       200:
 *         description: Email sent successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Email sent successfully.
 *       400:
 *         description: Bad request, all fields are required.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: All fields are required
 *       500:
 *         description: Internal server error, email sending failed.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error sending email.
 */



router.post("/", contactController.contact);

module.exports = router;

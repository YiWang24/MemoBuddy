const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Send a contact message
 *     tags=[]
 *     description: Send a contact message
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       200:
 *         description: A successful response
 */


router.post("/", contactController.contact);

module.exports = router;

const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

/**
 * @swagger
 * /api/contact:
 *  post:
 *   summary: Send a contact message
 *  description: Send a contact message
 *  requestBody:
 *   required: true
 *  content:
 *  application/json:
 *  schema:
 * $ref: '#/components/schemas/Contact'
 * 
 */
router.post("/", contactController.contact);

module.exports = router;
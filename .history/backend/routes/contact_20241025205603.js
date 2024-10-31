const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

/**
 * @swagger
 * /api/contact:
 *  post:
 * 
 */
router.post("/", contactController.contact);

module.exports = router;
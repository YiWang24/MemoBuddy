import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the schema for the Contact model
/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - subject
 *         - message
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the contact person
 *         email:
 *           type: string
 *         description: The email address of the contact person
 *         subject:
 *           type: string
 *           description: The subject of the contact message
 *         message:
 *           type: string
 *           description: The message content
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the contact was created
 * 
 */

const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

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
 *           description: The name of the person sending the message
 *           example: John Doe
 *         email:
 *           type: string
 *           description: The email address of the sender
 *           example: johndoe@example.com
 *         subject:
 *           type: string
 *           description: The subject of the message
 *           example: Inquiry about services
 *         message:
 *           type: string
 *           description: The content of the message
 *           example: I would like to know more about your services.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the contact message was created
 *           example: 2024-10-24T14:48:00.000Z
 *         user:
 *           type: string
 *           description: Reference to the user sending the message (if available)
 *           example: 615c0f3b1c4f2b6f8f9e1b9e
 *       timestamps:
 *         createdAt: The date the document was created
 *         updatedAt: The date the document was last updated
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

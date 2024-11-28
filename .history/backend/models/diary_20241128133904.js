const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a new schema for the diary
/**
 * @swagger
 * components:
 *   schemas:
 *     Diary:
 *       type: object
 *       required:
 *         - title
 *         - content
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the diary entry
 *         content:
 *           type: array
 *           description: The content of the diary entry
 *         images:
 *           type: string
 *           description: The image associated with the diary entry
 *         locked:
 *           type: boolean
 *           description: The lock status of the diary entry
 *         password:
 *           type: string
 *           description: The password for the locked diary entry
 *         user:
 *           type: string
 *           description: The user ID who created the diary entry
 *       example:
 *         - title: "My Diary Entry"
 *           content: "This is the content of my diary entry."
 *           image: "https://example.com/image.jpg"
 *           locked: false
 *           password: ""
 *           user: "60f7e8d9e7c9d00015f7e8d9"
 *         - title: "Another Diary Entry"
 *           content: "This is another entry."
 *           image: "https://example.com/another-image.jpg"
 *           locked: true
 *           password: "532123"
 *           user: "60f7e8d9e7c9d00015f7e8d9"
 */

const diarySchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
        required: false,
      },
    ],
    locked: {
      type: Boolean,
      default: false,
    },
    password:{
      type: String,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Diary", diarySchema);

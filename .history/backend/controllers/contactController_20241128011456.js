const sendGmail = require("../utils/sendGmail");
const config = require("../config/config");
const Contact = require("../models/contact");
const { contactContent } = require("../templates");

// this controller is responsible for handling contact form submissions
const contactController = {
  async contact(req, res, next) {
    try {
      const { name, email, subject, message } = req.body;
      // Create contact with optional user field
      const contactData = {
        name,
        email,
        subject,
        message,
      };

      // Only add user if authenticated
      if (req.user) {
        contactData.user = req.user._id;
      }
      // Save contact
      await new Contact(contactData).save();

      // Send email confirmation to admin

      if (!name || !email || !subject || !message) {
        throw new Error("All fields are required");
      }
      const adminEmails = config.email.admin.email
        .split(",")
        .map((email) => email.trim());
      await sendGmail({
        to: adminEmails, //admin email
        subject: `Contact Form Submission: ${subject}`,
        html: contactContent({ email, message }),
      });
      return res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = contactController;

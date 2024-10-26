const sendGmail = require("../utils/sendGmail");
const config = require("../config/config");
const Contact = require("../models/contact");
const contactController = {
  async contact(req, res) {
    try {
      const { name, email, subject, message } = req.body;
      
      const htmlContent = `
            <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px;">
                <h2 style="color: #333;">Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;">${message}</p>
                <p>Thank you for reaching out!</p>
                <footer style="margin-top: 20px; font-size: 0.8em; color: #666;">
                    <p>This email was sent from the contact form on your website.</p>
                </footer>
                </body>
            </html>
            `;

      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const adminEmails = config.email.admin.email
        .split(",")
        .map((email) => email.trim());
      console.log(adminEmails);
      await sendGmail({
        to: adminEmails, //admin email
        subject: `Contact Form Submission: ${subject}`,
        html: htmlContent,
      });
      return res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error sending email." });
    }
  },
};

module.exports = contactController;

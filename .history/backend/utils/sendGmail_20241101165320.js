const nodemailer = require("nodemailer");
const config = require("../config/config");
const GoogleAuthService = require("./googleAuthService");
const googleAuthService = new GoogleAuthService();


async function sendGmail({ to, subject, text, html }) {
  const tokens = await googleAuthService.getToken();

  const transporter = nodemailer.createTransport({
    // service: "gmail",
    host: config.email.smtp.host,
    port: config.email.smtp.port,
    secure: config.email.smtp.secure,
    auth: {
      type: config.email.smtp.auth.type,
      user: "memobuddy2024@gmail.com",
      clientId: config.google.clientID,
      clientSecret: config.google.clientSecret,
      refreshToken: tokens.refreshToken,
      accessToken: tokens.accessToken,
    },
  });

  const mailOptions = {
    from: `${config.email.from.name} <${config.email.from.email}>`,
    to: to,
    subject,
    ...(text && { text }), // Only include text if it's provided
    ...(html && { html }), // Only include html if it's provided
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = sendGmail;

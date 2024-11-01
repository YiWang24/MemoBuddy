const nodemailer = require("nodemailer");
const config = require("../config/config");
const 


async function sendGmail({ to, subject, text, html }) {
  const tokens = await getToken();
  console.log("tokens:-------" + tokens);

  const transporter = nodemailer.createTransport({
    // service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
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

const nodemailer = require("nodemailer");
const config = require("../config/config");



async function sendGmail({ to, subject, text, html }) {
  

  // Create a transporter object using the SMTP configuration
  const { smtp } = config.email;
  const { from } = config.email;

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: {
      type: smtp.auth.type,
      user: smtp.auth.user,
      clientId: smtp.auth.clientId,
      clientSecret: smtp.auth.clientSecret,
      refreshToken: refreshToken,
      accessToken:  accessToken,
    },
  });

  const mailOptions = {
    from: `${from.name} <${from.email}>`,
    to: to,
    subject,
    ...(text && { text }), // Only include text if it's provided
    ...(html && { html }), // Only include html if it's provided
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully: " + info.response);
    }
  });
}

module.exports = sendGmail;

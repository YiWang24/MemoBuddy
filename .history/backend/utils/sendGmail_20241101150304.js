const nodemailer = require("nodemailer");
const config = require("../config/config");
const { google } = require("googleapis");
const Token = require("../models/token");

async function getToken() {
  const oauth2Client = new google.auth.OAuth2(
    config.email.smtp.auth.clientId,
    config.email.smtp.auth.clientSecret,
    config.email.smtp.auth.redirectUri
  );

  const tokenDoc = await Token.findOne().sort({ createdAt: -1 });
  if (!tokenDoc) {
    throw new Error("No token found");
  }

  oauth2Client.setCredentials({
    refresh_token: tokenDoc.refreshToken,
  });

  const accessToken = await oauth2Client.getAccessToken().catch((error) => {
    throw new Error("Failed to obtain access token: " + error);
  });

  return {
    refreshToken: tokenDoc.refreshToken,
    accessToken: accessToken,
  };
}

async function sendGmail({ to, subject, text, html }) {
  const tokens = await getToken();

  // Create a transporter object using the SMTP configuration
  const { smtp } = config.email;
  const { from } = config.email;

  const transporter = nodemailer.createTransport({
    service: config.email.smtp.service,
    host: config.email.smtp.host,
    port: config.email.smtp.port,
    secure: true,
    auth: {
      type: config.email.smtp.auth.type,
      user: config.email.smtp.auth.user,
      clientId: config.email.smtp.auth.clientId,
      clientSecret: config.email.smtp.auth.clientSecret,
      refreshToken: tokens.refreshToken,
      accessToken: tokens.accessToken,
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
const nodemailer = require("nodemailer");
const config = require("../config/config");
const { google } = require("googleapis");
import Token from "../models/token.model";



async function sendGmail({ to, subject, text, html }) {
  const oauth2Client = new google.auth.OAuth2(
    config.email.smtp.auth.clientId,
    config.email.smtp.auth.clientSecret,
    "https://developers.google.com/oauthplayground"
  );

  const tokenDoc = await Token.findOne().sort({ createdAt: -1 });
  if(!tokenDoc){
    throw new Error("No token found");
  }

  oauth2Client.setCredentials({
    refresh_token: tokenDoc.refreshToken,
  });
  const {token}
  const accessToken = await oauth2Client.getAccessToken();

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
      refreshToken: smtp.auth.refreshToken,
      accessToken: accessToken,
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

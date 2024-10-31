const nodemailer = require("nodemailer");
const config = require("../config/config");
const { google } = require("googleapis");

async function sendGmail({to, subject, text,html}) {
  const OAuth2 = google.auth.OAuth2;
  const oauth2Client = new OAuth2(
    config.email.smtp.auth.clientId,
    config.email.smtp.auth.clientSecret,
    "https://developers.google.com/oauthplayground"
  );
  oauth2Client.setCredentials({
    refresh_token: config.email.smtp.auth.refreshToken,
  });
  const accessToken = await oauth2Client.getAccessToken();

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

  console.log(from.name, from.email, to, subject, text);
  if (!from.name || !from.email) {
    throw new Error("No from name or email provided");
  }

  if (!to) {
    throw new Error("No email address provided");
  }
  if (!subject) {
    throw new Error("No subject provided");
  }
  if (!text) {
    throw new Error("No text provided");
  }

  const mailOptions = {
    from: `${from.name} <${from.email}>`,
    to: to,
    subject: subject,
    (textext: text,
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

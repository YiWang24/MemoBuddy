const { google } = require("googleapis");
const config = require("../config/config");

class GoogleAuthService {
  constructor() {
    this.oauth2Client = new google.auth.OAuth2(
      config.google.clientID,
      config.google.clientSecret,
      config.email.smtp.auth.redirectUri
    );
  }

  getAuthUrl() {
    return this.oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["https://www.googleapis.com/auth/gmail.send"],
      prompt: "consent",

    });
  }

  async handleCallback(code) {
    const { tokens } = await this.oauth2Client.getToken(code);
    this.oauth2Client.setCredentials(tokens);
    return tokens;
  }
}
module.exports = GoogleAuthService;

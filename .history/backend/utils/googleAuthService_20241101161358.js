const { google } = require("googleapis");
const config = require("../config/config");

class GoogleAuthService {
  constructor() {
    this.oauth2Client = new google.auth.OAuth2(
      config.google.clientID,
      config.google.clientSecret,
      "http://localhost:8888/api/auth/callback"
    );
  }

  getAuthUrl() {
    return this.oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["https://mail.google.com/"https://www.googleapis.com/auth/gmail.send"],
      prompt: "consent",
    });
  }

  async handleCallback(code) {
    try {
      const { tokens } = await this.oauth2Client.getToken(code);
      this.oauth2Client.setCredentials(tokens);
      return tokens;
    } catch (error) {
      console.error("Error retrieving access token", error);
      throw new Error("Failed to retrieve access token");
    }
  }
}
module.exports = GoogleAuthService;

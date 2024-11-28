const { google } = require("googleapis");
const config = require("../config/config");
const Token = require("../models/token");

//
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
      scope: [
        "https://mail.google.com/",
        "https://www.googleapis.com/auth/gmail.send",
      ],
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

  async getToken() {
    const tokenDoc = await Token.findOne().sort({ createdAt: -1 });
    if (!tokenDoc) {
      throw new Error("No token found");
    }

    this.oauth2Client.setCredentials({
      refresh_token: tokenDoc.refreshToken,
    });

    const accessToken = await this.oauth2Client
      .getAccessToken()
      .catch((error) => {
        throw new Error("Failed to obtain access token: " + error);
      });

    return {
      refreshToken: tokenDoc.refreshToken,
      accessToken: accessToken.token,
    };
  }
}
module.exports = GoogleAuthService;

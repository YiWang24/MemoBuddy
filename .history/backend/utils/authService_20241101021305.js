const {google}  = require('googleapis');
const config = require('../config/config');

class GoogleAuthService {
    constructor() {
        this.oauth2Client  = new google.auth.OAuth2(
            config.google.clientID,
            config.google.clientSecret,
            config.google.callbackURL
        );
    }

    getAuthUrl() {
        return this.oauth2Client.generateAuthUrl({
          access_type: 'offline',
          scope: [
            'https://mail.google.com/',
            'https://www.googleapis.com/auth/gmail.modify',
            'https://www.googleapis.com/auth/gmail.compose',
            'https://www.googleapis.com/auth/gmail.send'
          ],
          prompt: 'consent' 
        });
      }

      async han
        
}
}
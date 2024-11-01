const {google}  = require('googleapis');
const config = require('../config/config');

class GoogleAuthService {
    constructor() {
        this.oauth2Client  = new google.auth.OAuth2(
            config.googleAuth.clientID,
            config.googleAuth.clientSecret,
            config.googleAuth.redirectURI
        );
    }

    getAuthUrl() {
        const scopes = [
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile',
        ];
}
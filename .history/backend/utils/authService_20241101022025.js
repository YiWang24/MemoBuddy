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

      async handleCallback(req, res) {
    try {
      const { code } = req.query;
      
      if (!code) {
        return res.status(400).json({ error: '未收到授权码' });
      }

      // 获取tokens
      const tokens = await googleAuthService.handleCallback(code);
      
      // 存储tokens
      const tokenDoc = await TokenModel.create({
        refreshToken: tokens.refresh_token,
        accessToken: tokens.access_token
      });

      res.json({
        message: '授权成功',
        // 可以返回一些非敏感信息
        tokenId: tokenDoc._id,
        createdAt: tokenDoc.createdAt
      });

    } catch (error) {
      console.error('处理OAuth回调失败:', error);
      res.status(500).json({ 
        error: '处理OAuth回调失败',
        details: error.message 
      });
    }
  }
        
}
exports.GoogleAuthService = GoogleAuthService;
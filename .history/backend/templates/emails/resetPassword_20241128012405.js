// Used by: backend/controllers/authController.js
const resetPasswordTemplate = (code) => {
  const logoUrl = `https://1000logos.net/wp-content/uploads/2017/02/Apple-Logosu.png`;
  return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Reset Your Password</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f7f7f7;">
        <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; margin: 0; padding: 0;">
          <tr>
            <td style="padding: 20px 0; text-align: center; background-color: #ffffff;">
              <img src=${logoUrl}" alt="MemoBuddy" style="width: 150px; height: auto;">
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px; background-color: #ffffff;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding-bottom: 30px;">
                    <h1 style="margin: 0; font-size: 24px; line-height: 1.2; color: #333333; font-weight: bold;">
                      Reset Your Password
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 20px; color: #666666; font-size: 16px; line-height: 1.5;">
                    <p>Hello,</p>
                    <p>We received a request to reset your password. Enter this verification code to proceed:</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 30px; text-align: center;">
                    <div style="display: inline-block; background-color: #f5f5f5; padding: 15px 30px; border-radius: 6px; letter-spacing: 6px; font-size: 24px; font-weight: bold; color: #333333;">
                      ${code}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 20px; color: #666666; font-size: 16px; line-height: 1.5;">
                    <p>This code will expire in 10 minutes for security reasons.</p>
                    <p>If you didn't request this password reset, please ignore this email.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 30px; border-top: 1px solid #eeeeee; color: #999999; font-size: 14px;">
                    <p>Best regards,<br>The MemoBuddy Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px; text-align: center; background-color: #f7f7f7; color: #999999; font-size: 12px;">
              <p>This is an automated message, please do not reply.</p>
              <p>&copy; ${new Date().getFullYear()} MemoBuddy. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;
};

module.exports = resetPasswordTemplate;

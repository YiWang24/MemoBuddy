// Used by: backend/controllers/contactController.js
const contactContent = ({ email, message }) => {
  return `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Thank you for contacting us</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f7f7f7; -webkit-font-smoothing: antialiased;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; margin: 0; padding: 0;">
              <!-- Header with Logo -->
              <tr>
                  <td style="padding: 30px 0; text-align: center; background: linear-gradient(135deg, #6B73FF 0%, #000DFF 100%);">
                      <h1 style="color: white; font-size: 28px; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
                          MemoBuddy
                      </h1>
                  </td>
              </tr>
              
              <!-- Main Content -->
              <tr>
                  <td style="padding: 40px 30px; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <!-- Welcome Message -->
                          <tr>
                              <td style="padding-bottom: 30px;">
                                  <h2 style="margin: 0; font-size: 24px; color: #333333; font-weight: 600;">
                                      Thank You for Reaching Out!
                                  </h2>
                              </td>
                          </tr>
                          
                          <!-- Message Content -->
                          <tr>
                              <td style="padding-bottom: 20px; color: #666666; font-size: 16px; line-height: 1.6;">
                                  <p>Hello,</p>
                                  <p>We've received your message and our team will get back to you within 24 hours.</p>
                                  <p>Here's what ${email} shared with us:</p>
                                  <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                                      <p style="margin: 0; color: #444;">
                                          "${message}"
                                      </p>
                                  </div>
                              </td>
                          </tr>
      
                          <!-- Call to Action -->
                          <tr>
                              <td style="padding: 30px 0; text-align: center;">
                                  <a href="https://localhost:3000" 
                                     style="background-color: #4F46E5; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">
                                      View Our FAQ
                                  </a>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
      
              <!-- Footer -->
              <tr>
                  <td style="padding: 20px; text-align: center; background-color: #f7f7f7;">
                      <p style="margin: 0 0 10px; color: #666666; font-size: 14px;">
                          Follow us on social media
                      </p>
                      <div style="margin-bottom: 20px;">
                          <a href="#" style="text-decoration: none; margin: 0 10px;">Twitter</a>
                          <a href="#" style="text-decoration: none; margin: 0 10px;">LinkedIn</a>
                          <a href="#" style="text-decoration: none; margin: 0 10px;">Instagram</a>
                      </div>
                      <p style="margin: 0; color: #999999; font-size: 12px;">
                          © ${new Date().getFullYear()} MemoBuddy. All rights reserved.
                      </p>
                  </td>
              </tr>
          </table>
      </body>
      </html>
      `;
};

module.exports = contactContent;

import nodemailer from "nodemailer";
import sendGmail from "../utils/sendGmail";
import GoogleAuthService from "../utils/googleAuthService";

vi.mock("../utils/googleAuthService", () => ({
  default: vi.fn().mockImplementation(() => ({
    getToken: vi.fn().mockResolvedValue({
      accessToken: "mock-access-token",
      refreshToken: "mock-refresh-token",
    }),
  })),
}));

vi.mock("nodemailer", () => ({
  createTransport: vi.fn().mockReturnValue({
    sendMail: vi.fn().mockResolvedValue({ response: "Email sent successfully!" }),
  }),
}));

describe("sendGmail", () => {
  test("should configure the transporter with correct settings", async () => {
    const emailDetails = {
      to: "test@example.com",
      subject: "Test Subject",
      text: "Test Text",
      html: "<p>Test HTML</p>",
    };

    await sendGmail(emailDetails);

    // 验证 googleAuthService.getToken 被正确调用
    expect(GoogleAuthService.prototype.getToken).toHaveBeenCalled();

    // 验证 nodemailer.createTransport 被正确配置
    expect(nodemailer.createTransport).toHaveBeenCalledWith({
      host: expect.any(String),
      port: expect.any(Number),
      secure: expect.any(Boolean),
      auth: {
        type: expect.any(String),
        user: expect.any(String),
        clientId: expect.any(String),
        clientSecret: expect.any(String),
        refreshToken: "mock-refresh-token",
        accessToken: "mock-access-token",
      },
    });

    // 验证 sendMail 被调用
    const transporter = nodemailer.createTransport();
    expect(transporter.sendMail).toHaveBeenCalledWith({
      from: expect.any(String),
      to: "test@example.com",
      subject: "Test Subject",
      text: "Test Text",
      html: "<p>Test HTML</p>",
    });
  });
});

const { describe, it, expect, vi } = require("vitest");
const nodemailer = require("nodemailer");
const GoogleAuthService = require("./googleAuthService");
const sendGmail = require("../utils/sendGmail");

// Mock 配置
vi.mock("nodemailer");
vi.mock("../config/config", () => ({
  smtpConfig: {
    host: "smtp.example.com",
    port: 587,
    user: "test@example.com",
    clientId: "test-client-id",
    clientSecret: "test-client-secret",
  },
}));
vi.mock("./googleAuthService", () => ({
  GoogleAuthService: vi.fn(() => ({
    getToken: vi.fn().mockResolvedValue({
      refreshToken: "test-refresh-token",
      accessToken: "test-access-token",
    }),
  })),
}));

describe("sendGmail", () => {
  it("should configure the transporter correctly", async () => {
    const sendMailMock = vi.fn().mockResolvedValue({ response: "250 OK" });
    nodemailer.createTransport.mockReturnValue({ sendMail: sendMailMock });

    await sendGmail({
      to: "recipient@example.com",
      subject: "Test Subject",
      text: "Test Text",
    });

    expect(nodemailer.createTransport).toHaveBeenCalledWith({
      host: "smtp.example.com",
      port: 587,
      secure: false,
      auth: {
        type: "OAuth2",
        user: "test@example.com",
        clientId: "test-client-id",
        clientSecret: "test-client-secret",
        refreshToken: "test-refresh-token",
        accessToken: "test-access-token",
      },
    });
  });

  it("should send an email with the correct options", async () => {
    const sendMailMock = vi.fn().mockResolvedValue({ response: "250 OK" });
    nodemailer.createTransport.mockReturnValue({ sendMail: sendMailMock });

    await sendGmail({
      to: "recipient@example.com",
      subject: "Test Subject",
      text: "Test Text",
      html: "<p>Test HTML</p>",
    });

    expect(sendMailMock).toHaveBeenCalledWith({
      from: "Test Sender <sender@example.com>",
      to: "recipient@example.com",
      subject: "Test Subject",
      text: "Test Text",
      html: "<p>Test HTML</p>",
    });
  });

  it("should log an error if sending email fails", async () => {
    const sendMailMock = vi
      .fn()
      .mockRejectedValue(new Error("Failed to send email"));
    nodemailer.createTransport.mockReturnValue({ sendMail: sendMailMock });

    const consoleErrorMock = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    await sendGmail({
      to: "recipient@example.com",
      subject: "Test Subject",
      text: "Test Text",
    });

    expect(consoleErrorMock).toHaveBeenCalledWith(
      "Error sending email:",
      expect.any(Error)
    );

    consoleErrorMock.mockRestore();
  });

  it("should only include text if html is not provided", async () => {
    const sendMailMock = vi.fn().mockResolvedValue({ response: "250 OK" });
    nodemailer.createTransport.mockReturnValue({ sendMail: sendMailMock });

    await sendGmail({
      to: "recipient@example.com",
      subject: "Test Subject",
      text: "Test Text",
    });

    expect(sendMailMock).toHaveBeenCalledWith({
      from: "Test Sender <sender@example.com>",
      to: "recipient@example.com",
      subject: "Test Subject",
      text: "Test Text",
    });
  });

  it("should only include html if text is not provided", async () => {
    const sendMailMock = vi.fn().mockResolvedValue({ response: "250 OK" });
    nodemailer.createTransport.mockReturnValue({ sendMail: sendMailMock });

    await sendGmail({
      to: "recipient@example.com",
      subject: "Test Subject",
      html: "<p>Test HTML</p>",
    });

    expect(sendMailMock).toHaveBeenCalledWith({
      from: "Test Sender <sender@example.com>",
      to: "recipient@example.com",
      subject: "Test Subject",
      html: "<p>Test HTML</p>",
    });
  });
});

const { describe, it, expect, vi } = require("vitest");
const nodemailer = require("nodemailer");
const sendGmail = require("../utils/sendGmail");
const GoogleAuthService = require("../utils/googleAuthService");

// Mock 配置
vi.mock("nodemailer");
vi.mock("../config/config", () => ({
  email: {
    smtp: {
      host: "smtp.example.com",
      port: 587,
      secure: false,
      auth: {
        type: "OAuth2",
        user: "test@example.com",
      },
    },
    from: {
      name: "Test Sender",
      email: "sender@example.com",
    },
  },
  google: {
    clientID: "test-client-id",
    clientSecret: "test-client-secret",
  },
}));
vi.mock("../utils/googleAuthService", () => ({
  GoogleAuthService: vi.fn(() => ({
    getToken: vi.fn().mockResolvedValue({
      refreshToken: "test-refresh-token",
      accessToken: "test-access-token",
    }),
  })),
}));

describe("sendGmail", () => {
  it("should configure the transporter with correct settings", async () => {
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

  it("should include only text when html is not provided", async () => {
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

  it("should include only html when text is not provided", async () => {
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

  it("should log an error if email sending fails", async () => {
    const sendMailMock = vi
      .fn()
      .mockRejectedValue(new Error("Failed to send email"));
    nodemailer.createTransport.mockReturnValue({ sendMail: sendMailMock });

    const consoleErrorMock = vi.spyOn(console, "error").mockImplementation(() => {});

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
});

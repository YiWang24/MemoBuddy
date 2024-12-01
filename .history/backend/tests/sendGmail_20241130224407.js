const { describe, it, expect, vi } = require("vitest");
const nodemailer = require("nodemailer");
const config = require("../config/config");
const GoogleAuthService = require("./googleAuthService");
const sendGmail = require("./sendGmail");

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
vi.mock("./googleAuthService");

describe("sendGmail", () => {
  it("should configure the transporter correctly", async () => {
    const tokens = {
      refreshToken: "test-refresh-token",
      accessToken: "test-access-token",
    };
    GoogleAuthService.prototype.getToken.mockResolvedValue(tokens);
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
    const tokens = {
      refreshToken: "test-refresh-token",
      accessToken: "test-access-token",
    };
    GoogleAuthService.prototype.getToken.mockResolvedValue(tokens);
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
    const tokens = {
      refreshToken: "test-refresh-token",
      accessToken: "test-access-token",
    };
    GoogleAuthService.prototype.getToken.mockResolvedValue(tokens);
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
      new Error("Failed to send email")
    );

    consoleErrorMock.mockRestore();
  });

  it("should only include text if html is not provided", async () => {
    const tokens = {
      refreshToken: "test-refresh-token",
      accessToken: "test-access-token",
    };
    GoogleAuthService.prototype.getToken.mockResolvedValue(tokens);
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
    const tokens = {
      refreshToken: "test-refresh-token",
      accessToken: "test-access-token",
    };
    GoogleAuthService.prototype.getToken.mockResolvedValue(tokens);
    const sendMailMock = vi.fn().mockResolvedValue({ response: "250 OK" });
    nodemailer.createTransport.mockReturnValue({ sendMail: sendMailMock });

    await sendGmail({
      to: "recipient@example.com",
      subject: "Test Subject",
      html: "<p>Test HTML</p>",
    });

    expect(sendMailMock).toHaveBeenCalledWith({
      from: "Test Sender <sender@example.com>",
      to: "recipient@example.com>",
      subject: "Test Subject",
      html: "<p>Test HTML</p>",
    });
  });
});
vi.mock("./googleAuthService");

describe("sendGmail", () => {
  it("should configure the transporter correctly", async () => {
    const tokens = {
      refreshToken: "test-refresh-token",
      accessToken: "test-access-token",
    };
    GoogleAuthService.prototype.getToken.mockResolvedValue(tokens);
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
    const tokens = {
      refreshToken: "test-refresh-token",
      accessToken: "test-access-token",
    };
    GoogleAuthService.prototype.getToken.mockResolvedValue(tokens);
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
    const tokens = {
      refreshToken: "test-refresh-token",
      accessToken: "test-access-token",
    };
    GoogleAuthService.prototype.getToken.mockResolvedValue(tokens);
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
      new Error("Failed to send email")
    );

    consoleErrorMock.mockRestore();
  });
});

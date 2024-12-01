import { describe, it, expect, vi } from "vitest";
import nodemailer from "nodemailer";
import sendGmail from "../utils/sendGmail";
import GoogleAuthService from "../utils/googleAuthService";

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
  default: vi.fn(() => ({
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
});

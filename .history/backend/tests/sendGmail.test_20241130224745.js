const { describe, it, expect, vi } = require("vitest");
const nodemailer = require("nodemailer");
const config = require("../config/config");
const GoogleAuthService = require("./googleAuthService");
const sendGmail = require("../utils/sendGmail");

vi.mock("nodemailer");
vi.mock("../config/config", () => ({
  ...config,
}));
vi.mock("./googleAuthService");


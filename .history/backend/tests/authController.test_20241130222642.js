// authController.test.js
import { describe, it, expect, vi, beforeEach } from "vitest";
import { authController } from "../controllers/authController";
import User from "../models/User";
import bcrypt from "bcrypt";

// Mock dependencies
vi.mock("../models/User");
vi.mock("bcrypt");

describe("authController.register", () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {
      body: {
        username: "testuser",
        email: "test@example.com",
        password: "password123",
      },
    };
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
    next = vi.fn();

    // Clear mocks
    vi.clearAllMocks();
  });

  it("should successfully register a new user", async () => {
    // Mock bcrypt hash
    bcrypt.hash.mockResolvedValue("hashedPassword");

    // Mock User.findOne and User.create
    User.findOne.mockResolvedValue(null);
    User.create.mockResolvedValue({
      username: "testuser",
      email: "test@example.com",
      password: "hashedPassword",
    });

    await register(req, res, next);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "User registered successfully",
    });
  });

  it("should return 400 if email already exists", async () => {
    User.findOne.mockResolvedValue({ email: "test@example.com" });

    await register(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: "Email already exists",
    });
  });

  it("should handle missing required fields", async () => {
    req.body = {};

    await register(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: "All fields are required",
    });
  });

  it("should handle database errors", async () => {
    User.findOne.mockRejectedValue(new Error("Database error"));

    await register(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});

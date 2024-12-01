import { describe, it, expect, vi, beforeEach } from "vitest";
import { checkUserExists } from "../controllers/authController";

// Set global timeout
vi.setConfig({ testTimeout: 10000 }); // 10 seconds

vi.mock("../models/User", () => ({
  default: {
    findOne: vi.fn()
  }
}));

import User from "../models/User";

describe("checkUserExists", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return user when user exists and shouldExist is true", async () => {
    const mockUser = {
      email: "existing@example.com"
    };

    User.findOne.mockResolvedValue(mockUser);
    const result = await checkUserExists("existing@example.com", true);

    expect(User.findOne).toHaveBeenCalledWith({ email: "existing@example.com" });
    expect(result).toEqual(mockUser);
  }, 5000); // Individual test timeout

  it("should throw error when user doesn't exist and shouldExist is true", async () => {
    User.findOne.mockResolvedValue(null);
    
    await expect(
      checkUserExists("nonexistent@example.com", true)
    ).rejects.toThrow("User Not Found");
  }, 5000);

  it("should return null when user doesn't exist and shouldExist is false", async () => {
    User.findOne.mockResolvedValue(null);
    
    const result = await checkUserExists("nonexistent@example.com", false);
    expect(result).toBeNull();
  }, 5000);

  it("should throw error when user exists and shouldExist is false", async () => {
    const mockUser = { email: "existing@example.com" };
    User.findOne.mockResolvedValue(mockUser);
    
    await expect(
      checkUserExists("existing@example.com", false)
    ).rejects.toThrow("User Already Exists");
  }, 5000);
});
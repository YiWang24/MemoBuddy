import { describe, it, expect, vi, beforeEach } from "vitest";
import { checkUserExists } from "../controllers/authController"; // Adjust the import path
import User from "../models/User"; // Adjust the import path

vi.mock("../models/User", () => {
    return {
      default: {
        findOne: vi.fn()
      }
    }
  });
  

describe("checkUserExists", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  it("should return user when user exists and shouldExist is true", async () => {
    const mockUser = {
      email: "existing@example.com",
      _id: "user123",
    };

    // Mock User.findOne to return the mock user
    User.findOne.mockResolvedValue(mockUser);

    const result = await checkUserExists("existing@example.com");

    expect(User.findOne).toHaveBeenCalledWith({
      email: "existing@example.com",
    });
    expect(result).toEqual(mockUser);
  });
});

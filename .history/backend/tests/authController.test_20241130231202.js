import { describe, it, expect, vi, beforeEach } from "vitest";
import { checkUserExists } from "../controllers/authController";

// Mock the User model correctly
vi.mock("../models/User", () => {
  return {
    default: {
      findOne: vi.fn(),
    },
  };
});

// Get the mocked User model
import User from "../models/User";

describe("checkUserExists", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return user when user exists and shouldExist is true", async () => {
    const mockUser = {
      email: "existing@example.com",
      _id: "user123",
    };

    // Mock the findOne method
    User.findOne.mockResolvedValue(mockUser);

    // Test the function
    const result = await checkUserExists(
      { email: "existing@example.com" },
      true
    );

    // Assertions
    expect(User.findOne).toHaveBeenCalledWith({
      email: "existing@example.com",
    });
    expect(result).toEqual(mockUser);
  });
});

import { describe, it, expect, vi, beforeEach } from "vitest";
import { authController } from "../controllers/authController";
import User from "../models/User";

// More comprehensive mock for User model
vi.mock("../models/User", () => {
  const User = {
    findOne: vi.fn(),
    register: vi.fn(),
    // Simulate Mongoose model with save method
    prototype: {
      save: vi.fn(),
    },
  };

  // Add default export
  User.default = User;
  return User;
});
describe("authController - register", () => {
  let mockReq, mockRes, mockNext;

  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();

    // Setup mock request, response, and next function
    mockReq = {
      body: {
        email: "test@example.com",
        password: "strongpassword123",
      },
    };

    mockRes = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };

    mockNext = vi.fn();
  });

  it("should successfully register a new user", async () => {
    // Simulate no existing user
    User.findOne.mockResolvedValue(null);

    // Mock User.register to simulate successful registration
    const mockNewUser = {
      _id: "mockUserId",
      email: "test@example.com",
    };
    User.register.mockImplementation((user, password, callback) => {
      user._id = mockNewUser._id;
      return Promise.resolve(user);
    });

    await authController.register(mockReq, mockRes, mockNext);

    // Assertions
    expect(User.findOne).toHaveBeenCalledWith({ email: "test@example.com" });
    expect(User.register).toHaveBeenCalled();
    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "User registered successfully",
      user: {
        id: "mockUserId",
        email: "test@example.com",
      },
    });
    expect(mockNext).not.toHaveBeenCalled();
  });

  it("should throw an error if email is missing", async () => {
    // Remove email from request
    mockReq.body.email = "";

    await authController.register(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "All fields are required",
      })
    );
  });

  it("should throw an error if password is missing", async () => {
    // Remove password from request
    mockReq.body.password = "";

    await authController.register(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "All fields are required",
      })
    );
  });

  it("should throw an error if user already exists", async () => {
    // Simulate existing user
    User.findOne.mockResolvedValue({
      email: "test@example.com",
    });

    await authController.register(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "User Already Exists",
      })
    );
    expect(User.register).not.toHaveBeenCalled();
  });

  it("should handle registration errors", async () => {
    // Simulate no existing user
    User.findOne.mockResolvedValue(null);

    // Mock registration to throw an error
    User.register.mockRejectedValue(new Error("Registration failed"));

    await authController.register(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalledWith(expect.any(Error));
  });
});
describe("authController - checkUserExists", () => {
  let mockEmail;

  beforeEach(() => {
    vi.clearAllMocks();
    mockEmail = "test@example.com";
  });

  it("should return user when user exists and shouldExist=true", async () => {
    const mockUser = { email: mockEmail };
    User.findOne.mockResolvedValue(mockUser);

    const result = await authController.checkUserExists(mockEmail, true);

    expect(User.findOne).toHaveBeenCalledWith({ email: mockEmail });
    expect(result).toEqual(mockUser);
  });

  it("should return null when user does not exist and shouldExist=false", async () => {
    User.findOne.mockResolvedValue(null);

    const result = await authController.checkUserExists(mockEmail, false);

    expect(User.findOne).toHaveBeenCalledWith({ email: mockEmail });
    expect(result).toBeNull();
  });

  it('should throw "User Not Found" when user does not exist and shouldExist=true', async () => {
    User.findOne.mockResolvedValue(null);

    await expect(
      authController.checkUserExists(mockEmail, true)
    ).rejects.toThrow("User Not Found");

    expect(User.findOne).toHaveBeenCalledWith({ email: mockEmail });
  });

  it('should throw "User Already Exists" when user exists and shouldExist=false', async () => {
    const mockUser = { email: mockEmail };
    User.findOne.mockResolvedValue(mockUser);

    await expect(
      authController.checkUserExists(mockEmail, false)
    ).rejects.toThrow("User Already Exists");

    expect(User.findOne).toHaveBeenCalledWith({ email: mockEmail });
  });
});

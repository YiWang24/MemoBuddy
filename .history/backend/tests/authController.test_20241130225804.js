import { describe, it, expect, vi, beforeEach } from 'vitest';
import { authController } from '../controllers/authController';
import User from '../models/User';

// Mock dependencies
vi.mock('../models/User', () => ({
  findOne: vi.fn(),
  register: vi.fn(),
}));

describe('authController - register', () => {
  let mockReq, mockRes, mockNext;

  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();

    // Setup mock request, response, and next function
    mockReq = {
      body: {
        email: 'test@example.com',
        password: 'strongpassword123'
      }
    };

    mockRes = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    };

    mockNext = vi.fn();
  });

  it('should successfully register a new user', async () => {
    // Simulate no existing user
    User.findOne.mockResolvedValue(null);

    // Mock User.register to simulate successful registration
    const mockNewUser = { 
      _id: 'mockUserId', 
      email: 'test@example.com' 
    };
    User.register.mockImplementation((user, password, callback) => {
      user._id = mockNewUser._id;
      return Promise.resolve(user);
    });

    await authController.register(mockReq, mockRes, mockNext);

    // Assertions
    expect(User.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
    expect(User.register).toHaveBeenCalled();
    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: 'User registered successfully',
      user: { 
        id: 'mockUserId', 
        email: 'test@example.com' 
      }
    });
    expect(mockNext).not.toHaveBeenCalled();
  });

  it('should throw an error if email is missing', async () => {
    // Remove email from request
    mockReq.body.email = '';

    await authController.register(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalledWith(expect.objectContaining({
      message: 'All fields are required'
    }));
  });

  it('should throw an error if password is missing', async () => {
    // Remove password from request
    mockReq.body.password = '';

    await authController.register(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalledWith(expect.objectContaining({
      message: 'All fields are required'
    }));
  });

  it('should throw an error if user already exists', async () => {
    // Simulate existing user
    User.findOne.mockResolvedValue({
      email: 'test@example.com'
    });

    await authController.register(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalledWith(expect.objectContaining({
      message: 'User Already Exists'
    }));
    expect(User.register).not.toHaveBeenCalled();
  });

  it('should handle registration errors', async () => {
    // Simulate no existing user
    User.findOne.mockResolvedValue(null);

    // Mock registration to throw an error
    User.register.mockRejectedValue(new Error('Registration failed'));

    await authController.register(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalledWith(expect.any(Error));
  });
});
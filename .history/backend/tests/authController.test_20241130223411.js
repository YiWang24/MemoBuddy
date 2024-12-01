import { describe, it, expect, vi, beforeEach } from 'vitest';
import { register } from '../controllers/authController';

// Mock User model
vi.mock('../models/User', () => ({
  default: {
    findOne: vi.fn(),
    create: vi.fn()
  }
}));

// Mock bcrypt
vi.mock('bcrypt', () => ({
  default: {
    hash: vi.fn()
  }
}));

// Import mocks after mocking
import User from '../models/User';
import bcrypt from 'bcrypt';

describe('authController.register', () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {
      body: {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123'
      }
    };
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    };
    next = vi.fn();
    vi.clearAllMocks();
  });

  it('should successfully register a new user', async () => {
    bcrypt.hash.mockResolvedValue('hashedPassword');
    User.findOne.mockResolvedValue(null);
    User.create.mockResolvedValue({
      username: 'testuser',
      email: 'test@example.com',
      password: 'hashedPassword'
    });

    await register(req, res, next);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: 'User registered successfully'
    });
  });

  it('should return 400 if email already exists', async () => {
    User.findOne.mockResolvedValue({ email: 'test@example.com' });

    await register(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Email already exists'
    });
  });

  it('should return 400 if required fields are missing', async () => {
    req.body = {};

    await register(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'All fields are required'
    });
  });

  it('should handle database errors', async () => {
    const error = new Error('Database error');
    User.findOne.mockRejectedValue(error);

    await register(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
  });

  it('should handle password hashing errors', async () => {
    User.findOne.mockResolvedValue(null);
    bcrypt.hash.mockRejectedValue(new Error('Hashing failed'));

    await register(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});
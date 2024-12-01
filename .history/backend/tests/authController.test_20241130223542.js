import { describe, it, expect, vi, beforeEach } from 'vitest';
import { authController } from '../controllers/authController';

// Mock modules
vi.mock('../models/User', () => ({
  default: {
    findOne: vi.fn(),
    create: vi.fn()
  }
}));

vi.mock('bcrypt', () => ({
  hash: vi.fn() // Remove default nesting
}));

import User from '../models/User';
import bcrypt from 'bcrypt';

describe('authController.register', () => {
  let req, res, next;

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
      json: vi.fn().mockReturnThis()
    };
    next = vi.fn();
    vi.clearAllMocks();
  });

  it('should successfully register a new user', async () => {
    // Setup mocks
    bcrypt.hash.mockResolvedValueOnce('hashedPassword');
    User.findOne.mockResolvedValueOnce(null);
    User.create.mockResolvedValueOnce({
      username: 'testuser',
      email: 'test@example.com',
      password: 'hashedPassword'
    });

    // Execute
    await authController.register(req, res, next);

    // Assert
    expect(bcrypt.hash).toHaveBeenCalledWith('password123', 10);
    expect(User.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
    expect(User.create).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: 'User registered successfully' });
  }, 10000); // Increased timeout

  it('should return 400 if email already exists', async () => {
    User.findOne.mockResolvedValueOnce({ email: 'test@example.com' });
    
    await authController.register(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Email already exists' });
  }, 10000);

  it('should handle database errors', async () => {
    const error = new Error('Database error');
    User.findOne.mockRejectedValueOnce(error);
    
    await authController.register(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
  }, 10000);
});
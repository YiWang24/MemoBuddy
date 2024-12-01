const { describe, it, expect, vi } = require('vitest');
const supertest = require('supertest');
const app = require('../../app'); // Assuming your Express app is exported from app.js
const User = require('../../models/User');
const authController = require('../../controllers/authController');
const { checkUserExists } = require('../../controllers/authController');

vi.mock('../../models/User');
vi.mock('../../controllers/authController', () => ({
  ...vi.requireActual('../../controllers/authController'),
  checkUserExists: vi.fn(),
}));

describe('Auth Controller - Register', () => {
  it('should register a new user successfully', async () => {
    const req = {
      body: {
        email: 'test@example.com',
        password: 'password123',
      },
    };
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
    const next = vi.fn();

    checkUserExists.mockResolvedValue(null);
    User.register.mockResolvedValue({ _id: '123', email: 'test@example.com' });

    await authController.register(req, res, next);

    expect(checkUserExists).toHaveBeenCalledWith('test@example.com', false);
    expect(User.register).toHaveBeenCalledWith(expect.any(User), 'password123');
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: 'User registered successfully',
      user: { id: '123', email: 'test@example.com' },
    });
  });

  it('should return an error if email or password is missing', async () => {
    const req = {
      body: {
        email: '',
        password: '',
      },
    };
    const res = {};
    const next = vi.fn();

    await authController.register(req, res, next);

    expect(next).toHaveBeenCalledWith(new Error('All fields are required'));
  });

  it('should return an error if user already exists', async () => {
    const req = {
      body: {
        email: 'test@example.com',
        password: 'password123',
      },
    };
    const res = {};
    const next = vi.fn();

    checkUserExists.mockResolvedValue({ email: 'test@example.com' });

    await authController.register(req, res, next);

    expect(checkUserExists).toHaveBeenCalledWith('test@example.com', false);
    expect(next).toHaveBeenCalledWith(new Error('User Already Exists'));
  });
});
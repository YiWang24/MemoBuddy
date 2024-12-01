import { describe, it, expect, vi } from "vitest";
import errorMiddleware from "../middleware/errorMiddleware";

describe("errorMiddleware", () => {
  let mockRequest;
  let mockResponse;
  let mockNext;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
    mockNext = vi.fn();
  });

  it("should handle standard Error", () => {
    const error = new Error("Test error");

    errorMiddleware(error, mockRequest, mockResponse, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: "Test error",
      stack: expect.any(String),
    });
  });

  it("should handle custom error with status code", () => {
    const error = new Error("Not Found");
    error.statusCode = 404;

    errorMiddleware(error, mockRequest, mockResponse, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: "Not Found",
      stack: expect.any(String),
    });
  });

  it("should handle validation error", () => {
    const error = new Error("Validation Error");
    error.name = "ValidationError";
    error.errors = [{ message: "Field is required" }];

    errorMiddleware(error, mockRequest, mockResponse, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: "Validation Error",
      stack: expect.any(String),
    });
  });

  it("should handle production environment", () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "production";

    const error = new Error("Production Error");

    errorMiddleware(error, mockRequest, mockResponse, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: "Production Error",
      stack: undefined,
    });

    process.env.NODE_ENV = originalEnv;
  });
});

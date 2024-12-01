import { describe, it, expect, vi } from "vitest";
import errorMiddleware from "../middleware/errorMiddleware";

describe("errorMiddleware", () => {
  let mockRequest;
  let mockResponse;
  let mockNext;
  let consoleSpy;

  beforeAll(() => {
    // Spy on console.error and prevent actual logging
    consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
  });

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
      message: "Something went wrong",
    });
  });

  it("should handle custom error message", () => {
    const error = new Error("User Not Found");

    errorMiddleware(error, mockRequest, mockResponse, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: "User Not Found",
    });
  });

  it("should handle custom error message", () => {
    const error = new Error("Diary is locked");

    errorMiddleware(error, mockRequest, mockResponse, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: "Diary is locked",
    });
  });

  it("should handle custom error message", () => {
    const error = new Error("User Already Exists");

    errorMiddleware(error, mockRequest, mockResponse, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(409);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: "User Already Exists",
    });
  });

  it("should handle custom error message", () => {
    const error = new Error("Forbidden");

    errorMiddleware(error, mockRequest, mockResponse, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(403);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: "Forbidden",
    });
  });
});
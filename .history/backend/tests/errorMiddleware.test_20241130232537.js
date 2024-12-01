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

  
});

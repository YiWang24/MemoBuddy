

vi.mock("../models/User", () => ({
  default: {
    findOne: vi.fn(),
  },
}));

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

  it("should throw error when user does not exist and shouldExist is true", async () => {
    // Mock User.findOne to return null
    User.findOne.mockResolvedValue(null);

    await expect(checkUserExists("nonexistent@example.com")).rejects.toThrow(
      "User Not Found"
    );
  });

  it("should return null when user does not exist and shouldExist is false", async () => {
    // Mock User.findOne to return null
    User.findOne.mockResolvedValue(null);

    const result = await checkUserExists("new@example.com", false);

    expect(User.findOne).toHaveBeenCalledWith({ email: "new@example.com" });
    expect(result).toBeNull();
  });

  it("should throw error when user exists and shouldExist is false", async () => {
    const mockUser = {
      email: "existing@example.com",
      _id: "user123",
    };

    // Mock User.findOne to return the mock user
    User.findOne.mockResolvedValue(mockUser);

    await expect(
      checkUserExists("existing@example.com", false)
    ).rejects.toThrow("User Already Exists");
  });

  it("should handle database errors", async () => {
    // Simulate a database error
    User.findOne.mockRejectedValue(new Error("Database connection error"));

    await expect(checkUserExists("test@example.com")).rejects.toThrow(
      "Database connection error"
    );
  });
});

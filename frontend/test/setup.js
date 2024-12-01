// Extend Jest matchers with @testing-library/jest-dom
import "@testing-library/jest-dom";

// Mock global fetch API
global.fetch = vi.fn(() => Promise.resolve({
    json: () => Promise.resolve({ message: "Mocked fetch response" }),
}));

// Set a global environment variable
process.env.REACT_APP_API_URL = "http://localhost:3000";

// Automatically clean up DOM after each test
import { cleanup } from "@testing-library/react";
afterEach(() => {
    cleanup();
    vi.clearAllMocks(); // Clear mocks after each test
});

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,          // Enable global test APIs like 'describe', 'it', etc.
        environment: "jsdom",   // Use jsdom for front-end tests
        setupFiles: "./test/setup.js", // Optional: Global setup for tests
        coverage: {             // Optional: Coverage configuration
            provider: "istanbul", // Coverage provider
            reporter: ["text", "html"], // Output types
        },
    },
});

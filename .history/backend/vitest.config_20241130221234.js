import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,  // Allow using globals like describe, it, etc.
        environment: 'node',  // Use Node environment for backend testing
        include: ['tests/**/*.test.js'],  // Path to your test files
    },
});

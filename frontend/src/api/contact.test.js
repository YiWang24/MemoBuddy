import { describe, it, expect, vi } from 'vitest';  // Import vitest functions
import request from "../lib/axios";                   // Import axios instance
import { contactApi } from './contact';
import { API_ROUTES } from "../constants/index";

// Mock axios request post method
vi.mock('../utils/weatherService', () => ({
    getWeatherByCoords: vi.fn(),  // Mocking the function
}));

describe("GET /api/weather/:lat/:lon", () => {
    it("should return weather data", async () => {
        const mockWeatherData = { temperature: 22, condition: 'Clear' };

        // Ensure the mock returns the data
        const { getWeatherByCoords } = require('../utils/weatherService');
        // getWeatherByCoords.mockResolvedValue(mockWeatherData);  // Return mock data

        const response = await request(app).get('/api/weather/40.7128/-74.0060');

        // Assertions
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockWeatherData);
    });
});
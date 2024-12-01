import request from 'supertest';
import express from 'express';
import weather from "../routes/weather"
// import weather from '../routes/weatherRoutes';  // Adjust this import based on your file structure
import { vi } from 'vitest';

const app = express();

// Use the weather router in the app
app.use('/api/weather', weather);

// Mock the weatherService to control its output during tests
vi.mock('../utils/weatherService', () => ({
    getWeatherByCoords: vi.fn(),  // Mocking the function
}));

describe("GET /api/weather/:lat/:lon", () => {
    it("should return weather data", async () => {
        const mockWeatherData = { temperature: 22, condition: 'Clear' };

        // Ensure the mock returns the data
        const { getWeatherByCoords } = require('../utils/weatherService');
        getWeatherByCoords.mockResolvedValue(mockWeatherData);  // Return mock data

        const response = await request(app).get('/api/weather/40.7128/-74.0060');

        // Assertions
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockWeatherData);
    });
});
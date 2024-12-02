import { describe, it, expect, vi } from "vitest";
import { weatherApi } from "./weather";
import request from "../lib/axios";
import { API_ROUTES } from "../constants/index";

// Mock the axios request
vi.mock("../lib/axios");

//testing weather api response data with dummy data
describe("weatherApi", () => {
    const mockLat = 40.7128;
    const mockLon = -74.0060;
    const mockResponse = { data: { weather: "sunny", temperature: 25 } };

    // Mock API route
    API_ROUTES.WEATHER = {
        GET: (lat, lon) => `/weather?lat=${lat}&lon=${lon}`,
    };

    it("should fetch weather data successfully", async () => {
        // Mock the request.get implementation
        request.get.mockResolvedValueOnce(mockResponse);

        // Call the getWeather function
        const result = await weatherApi.getWeather(mockLat, mockLon);

        // Assert that the correct data is returned
        expect(result).toEqual(mockResponse.data);

        // Ensure the request was made with the correct URL
        expect(request.get).toHaveBeenCalledWith(
            API_ROUTES.WEATHER.GET(mockLat, mockLon)
        );
    });
});



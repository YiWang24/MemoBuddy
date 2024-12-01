
import {buildWeatherUrl} from "../utils/weatherService";


// // Use the weather router in the app
// app.use("/api/weather", weather);

// // Mock the weatherService to control its output during tests
// vi.mock("../utils/weatherService", () => ({
//   getWeatherByCoords: vi.fn(), // Mocking the function
// }));

// describe("GET /api/weather/:lat/:lon", () => {
//   it("should return weather data", async () => {
//     const mockWeatherData = { temperature: 22, condition: "Clear" };

//     // Ensure the mock returns the data
//     const { getWeatherByCoords } = require("../utils/weatherService");
//     getWeatherByCoords.mockResolvedValue(mockWeatherData); // Return mock data

//     const response = await request(app).get("/api/weather/40.7128/-74.0060");

//     // Assertions
//     expect(response.status).toBe(200);
//     expect(response.body).toEqual(mockWeatherData);
//   });
// });


describe('buildWeatherUrl', () => {
    const API_KEY = 'test-api-key';
  
    it('should build correct URL with valid parameters', () => {
      const url = buildWeatherUrl(45.5, -122.6, API_KEY);
      expect(url).toBe(
        'https://api.openweathermap.org/data/2.5/weather?lat=45.5&lon=-122.6&appid=test-api-key&units=metric'
      );
    });
  
    it('should handle integer coordinates', () => {
      const url = buildWeatherUrl(45, -122, API_KEY);
      expect(url).toBe(
        'https://api.openweathermap.org/data/2.5/weather?lat=45&lon=-122&appid=test-api-key&units=metric'
      );
    });
  
    it('should throw error when missing latitude', () => {
      expect(() => buildWeatherUrl(null, -122.6, API_KEY)).toThrow('Missing required parameters');
    });
  
    it('should throw error when missing longitude', () => {
      expect(() => buildWeatherUrl(45.5, null, API_KEY)).toThrow('Missing required parameters');
    });
  
    it('should throw error when missing API key', () => {
      expect(() => buildWeatherUrl(45.5, -122.6, null)).toThrow('Missing required parameters');
    });
  });

import {buildWeatherUrl} from "../utils/weatherService";


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
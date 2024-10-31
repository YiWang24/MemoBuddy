import request from "../lib/axios";
import { API_ROUTES } from "../constants/index";
export const weatherApi = {
  getWeather: async (lat, lon) => {
    try {
      const response = await request.get(
        `${API_ROUTES.WEATHER}?lat=${lat}&lon=${lon}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  },
};

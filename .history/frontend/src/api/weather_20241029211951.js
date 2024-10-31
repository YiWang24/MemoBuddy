import request from "../lib/axios";
import { API_ROUTES } from "../constants/index";
export const weatherApi = {
  getWeather: async (lat, lon) => {
    try {
      const response = await request.get(
       A
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

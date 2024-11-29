import request from "../lib/axios";
import { API_ROUTES } from "../constants/index";
export const weatherApi = {
  getWeather: async ({ lat, lon }) => {
    try {
      
      const response = await request.get(API_ROUTES.WEATHER.GET(lat, lon));
      return await response.data;
    } catch (error) {
      return { error: error.response.data };
    }
  },
};

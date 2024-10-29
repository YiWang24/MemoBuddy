import request from "@/lib/axios/";
import { API_ROUTES } from "@/constants";
export const weatherApi = {
  getWeather: async (lat, lon) => {
    return await request.get(API_ROUTES.WEATHER.GET({ lat, lon }));
  },
};

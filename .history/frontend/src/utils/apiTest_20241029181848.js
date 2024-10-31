import { weatherApi } from "../api/weatherApi";

export const apiTest = {
    getWeather: async (lat, lon) => {
        const response = await weatherApi.getWeather(lat, lon);
        return response.data;
    }
}
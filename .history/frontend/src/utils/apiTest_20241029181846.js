import { weatherApi } from "../api"

export const apiTest = {
    getWeather: async (lat, lon) => {
        const response = await weatherApi.getWeather(lat, lon);
        return response.data;
    }
}
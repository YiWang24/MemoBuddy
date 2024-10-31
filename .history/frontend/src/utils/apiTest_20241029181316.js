import weather from './weather';

export const apiTest = {
    getWeather: async (lat, lon) => {
        const response = await weather.getWeather(lat, lon);
        return response.data;
    }
}
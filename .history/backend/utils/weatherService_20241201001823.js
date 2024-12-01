const axios = require("axios");
const config = require("../config/config");

// weatherService.js
const buildWeatherUrl = (lat, lon, apiKey) => {
  if (!lat || !lon || !apiKey) {
    throw new Error("Missing required parameters");
  }
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
};

// Get weather data by coordinates
async function getWeatherByCoords(lat, lon, next) {
  apiKey = config.openWeatherMap.apiKey;
  const url = buildWeatherUrl(lat, lon, config.openWeatherMap.apiKey);
  try {
    console.log("waether service", lat, lon);
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return next(error);
  }
}

module.exports = { buildWeatherUrl, getWeatherByCoords };

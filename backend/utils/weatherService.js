const axios = require("axios");
const config = require("../config/config");

// Get weather data by coordinates
async function getWeatherByCoords(lat, lon, next) {
  const apiKey = config.openWeatherMap.apiKey;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  console.log(url)
  try {
    console.log("waether service",lat,lon)
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return next(error);
  }
}

module.exports = getWeatherByCoords;

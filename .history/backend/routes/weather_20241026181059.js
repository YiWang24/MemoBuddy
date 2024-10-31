const express = require("express");
const router = express.Router();
const getWeatherByCoords = require("../utils/weatherService");
const 
router.get("/weather/:lat/:lon", async (req, res) => {
  const { lat, lon } = req.params;
  if(!lat || !lon) throw new Error("Latitude and longitude are required");

  try {
    const weatherData = await getWeatherByCoords(lat, lon);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const getWeatherByCoords = require("../utils/weatherService");

router.get("/weather/:lat/:lon", async (req, res) => {
  const { lat, lon } = req.params;
  if(!lat || !lon) return res.status(400).json({ error: "Missing required parameters" });
  
  try {
    const weatherData = await getWeatherByCoords(lat, lon);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

module.exports = router;
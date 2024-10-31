const express = require("express");
const router = express.Router();
const getWeatherByCoords = require("../utils/weatherService");

router.get("/weather/:lat/:lon", async (req, res,next) => {
  const { lat, lon } = req.params;
  if(!lat || !lon) throw new Error("All fields are required");

  try {
    const weatherData = await getWeatherByCoords(lat, lon);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

module.exports = router;

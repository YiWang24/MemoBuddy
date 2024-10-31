const express = require("express");
const router = express.Router();
const getWeatherByCoords = require("../utils/weatherService");

router.get("/weather/:lat/:lon", async (req, res, next) => {
  const { lat, lon } = req.params;
  if (!lat || !lon) throw new Error("All fields are required");

  try {
    const weatherData = await getWeatherByCoords(lat, lon);
    res.status(200).json(weatherData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
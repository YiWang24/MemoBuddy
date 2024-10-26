const express = require("express");
const router = express.Router();
const getWeatherByCoords = require("../utils/weatherService");

/**
 * @swagger
 * /weather/{lat}/{lon}:
 *   get:
 *     summary: Get weather by coordinates
 *     description: Retrieve weather data for the specified latitude and longitude.
 *     parameters:
 *       - in: path
 *         name: lat
 *         required: true
 *         description: Latitude of the location.
 *         schema:
 *           type: string
 *       - in: path
 *         name: lon
 *         required: true
 *         description: Longitude of the location.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Weather data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 coord:
 *                   type: object
 *                   properties:
 *                     lon:
 *                       type: number
 *                     lat:
 *                       type: number
 *                 weather:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       main:
 *                         type: string
 *                       description:
 *                         type: string
 *                       icon:
 *                         type: string
 *                 main:
 *                   type: object
 *                   properties:
 *                     temp:
 *                       type: number
 *                     feels_like:
 *                       type: number
 *                     temp_min:
 *                       type: number
 *                     temp_max:
 *                       type: number
 *                     pressure:
 *                       type: integer
 *                     humidity:
 *                       type: integer
 *                 name:
 *                   type: string
 *       400:
 *         description: Bad request, missing parameters
 *       500:
 *         description: Internal server error
 */

router.get("/weather/:lat/:lon", async (req, res, next) => {
  const { lat, lon } = req.params;
  console.log(lat,lon)
  if (!lat || !lon) throw new Error("All fields are required");

  try {
    const weatherData = await getWeatherByCoords(lat, lon);
    res.status(200).json(weatherData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

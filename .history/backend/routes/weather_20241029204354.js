const express = require("express");
const router = express.Router();
const getWeatherByCoords = require("../utils/weatherService");

/**
 * @swagger
 * /weather/{lat}/{lon}:
 *   post:
 *     summary: Get weather information by coordinates
 *     description: Fetches weather data from OpenWeatherMap API based on latitude and longitude coordinates.
 *     tags: [Weather]
 *     parameters:
 *       - in: path
 *         name: lat
 *         required: true
 *         description: Latitude of the location
 *         schema:
 *           type: number
 *           example: 12
 *       - in: path
 *         name: lon
 *         required: true
 *         description: Longitude of the location
 *         schema:
 *           type: number
 *           example: 12
 *     responses:
 *       200:
 *         description: Weather data successfully retrieved
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
 *                       example: 12
 *                     lat:
 *                       type: number
 *                       example: 12
 *                 weather:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 803
 *                       main:
 *                         type: string
 *                         example: Clouds
 *                       description:
 *                         type: string
 *                         example: broken clouds
 *                       icon:
 *                         type: string
 *                         example: 04n
 *                 base:
 *                   type: string
 *                   example: stations
 *                 main:
 *                   type: object
 *                   properties:
 *                     temp:
 *                       type: number
 *                       example: 25.32
 *                     feels_like:
 *                       type: number
 *                       example: 24.43
 *                     temp_min:
 *                       type: number
 *                       example: 25.32
 *                     temp_max:
 *                       type: number
 *                       example: 25.32
 *                     pressure:
 *                       type: integer
 *                       example: 1012
 *                     humidity:
 *                       type: integer
 *                       example: 20
 *                     sea_level:
 *                       type: integer
 *                       example: 1012
 *                     grnd_level:
 *                       type: integer
 *                       example: 970
 *                 visibility:
 *                   type: integer
 *                   example: 10000
 *                 wind:
 *                   type: object
 *                   properties:
 *                     speed:
 *                       type: number
 *                       example: 3.36
 *                     deg:
 *                       type: integer
 *                       example: 38
 *                     gust:
 *                       type: number
 *                       example: 5.8
 *                 clouds:
 *                   type: object
 *                   properties:
 *                     all:
 *                       type: integer
 *                       example: 55
 *                 dt:
 *                   type: integer
 *                   example: 1729982239
 *                 sys:
 *                   type: object
 *                   properties:
 *                     country:
 *                       type: string
 *                       example: NG
 *                     sunrise:
 *                       type: integer
 *                       example: 1729918992
 *                     sunset:
 *                       type: integer
 *                       example: 1729961305
 *                 timezone:
 *                   type: integer
 *                   example: 3600
 *                 id:
 *                   type: integer
 *                   example: 2345521
 *                 name:
 *                   type: string
 *                   example: Damaturu
 *                 cod:
 *                   type: integer
 *                   example: 200
 *       404:
 *         description: Location not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "Not Found"
 *       500:
 *         description: Server error
 */

router.get("/:lat/:lon", async (req, res, next) => {
  const { lat, lon } = req.params;
  console.log(lat, lon);
  if (!lat || !lon) throw new Error("All fields are required");

  try {
    const weatherData = await getWeatherByCoords(lat, lon);
    res.status(200).json(weatherData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

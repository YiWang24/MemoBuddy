const axios = require('axios');
const config = require("../config/config");

const getWeatherByCoords = async (lat,lon)=>
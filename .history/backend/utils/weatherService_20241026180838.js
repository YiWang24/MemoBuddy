const axios = require('axios');
const config = require("../config/config");

const getWeatherByCoords = async (lat,lon)=>{
    const apiKey = config.openWeatherMap.apiKey;
    const url = `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const response = await axios.get(url);
    return response.data;
}
}
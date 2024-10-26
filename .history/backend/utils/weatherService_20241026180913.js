const axios = require('axios');
const config = require("../config/config");

const getWeatherByCoords = async (lat,lon)=>{
    const apiKey = config.openWeatherMap.apiKey;
    const url = `https://api.openweathermap.org/data/2.5/weather?$lat={lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    try{
        const response = await axios.get(url);
        return response.data;
    }catch(error){
        console.error(error);
        return null;
    }
    }
}
}
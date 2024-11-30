import React, { useEffect, useState } from "react";
import Button from "@/components/navigation/Button";
import { locationApi } from "@/api";
import { weatherApi } from "@/api";

const WeatherData = () => {
  const [coord, setcoord] = useState(false);
  const [weatherData, setWeatherData] = useState(false);

  const getFromSessionStorage = async () => {
    const localCoordinates = sessionStorage.getItem("user-coordinate");
    if (!localCoordinates) {
      setcoord(false);
    } else {
      setcoord(true);
      const parsedLoc = JSON.parse(localCoordinates);
      const lat = parsedLoc.lat;
      const lon = parsedLoc.lon;
      await fetchUserWeatherInfo(lat, lon);
      const response = weatherApi.getWeather(lat, lon);
      console.log(response + "test");
      console.log(lat, lon);
    }
  };
  useEffect(() => {
    getFromSessionStorage();
  }, []);
  const handleClick = async () => {
    try {
        const coordinates = await locationApi.getLocation();
        const { lat, lon } = coordinates;
        
        // Save to sessionStorage
        sessionStorage.setItem(
          "user-coordinate", 
          JSON.stringify({ lat, lon })
        );
        // Fetch weather data immediately
        await fetchUserWeatherInfo(lat, lon);
        setcoord(true);
      }
    } catch (error) {
      console.error("Error getting location:", error);
    }
  };

  const fetchUserWeatherInfo = async (lat, lon) => {
    console.log("I am running");
    console.log(lat, "I should");
    const response = await weatherApi.getWeather(lat, lon);
    console.log("I am doubt");
    setWeatherData(response);
    console.log(weatherData.sys);
    console.log(response);
  };
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      {coord ? (
        <div className="w-full grid grid-cols-3 gap-4 p-2 text-center">
          {/* col1 */}
          <div className="flex flex-col">
            <div className="flex justify-center">
              <img
                className="h-[20px] w-[25px]"
                src={`https://flagcdn.com/144x108/${weatherData?.sys?.country.toLowerCase()}.png`}
                alt={`Flag of ${weatherData?.sys?.country}`}
              />
            </div>
            <p className="text-md font-semibold">{weatherData.name}</p>
            <div className="font-bold text-2xl">
              <h2>{weatherData?.main?.temp} °C</h2>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-center">
              <img className="h-[20px] w-[25px]" src="/wind.png" alt="wind" />
            </div>
            <p className="text-md font-semibold">Windspeed</p>
            <div className="font-bold text-2xl">
              <h2>{weatherData?.wind?.speed} m/s</h2>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-center">
              <img
                className="h-[20px] w-[25px]"
                src="/humidity.png"
                alt="humidity"
              />
            </div>
            <p className="text-md font-semibold">Humidity</p>
            <div className="font-bold text-2xl">
              <h2>{weatherData?.main?.humidity} %</h2>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className=" p-2 rounded-lg">
            <img
              src="https://c.animaapp.com/ldsw5inR/img/image-2@2x.png"
              alt="location"
              className="h-[50px]"
            ></img>
          </div>
          <div>
            <Button onClick={handleClick}>GRANT ACCESS</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherData;

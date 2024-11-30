import React, { useEffect, useState } from "react";
import Button from "@/components/navigation/Button";
import { locationApi } from "@/api";
import { weatherApi } from "@/api";
import Spinner from "./Spinner";

const WeatherData = () => {
  const [coord, setCoord] = useState(false); // Whether coordinates are available
  const [weatherData, setWeatherData] = useState({}); // Weather data state
  const [loader, setLoader] = useState(false); // Loader state

  // Get coordinates from sessionStorage when the component mounts
  const getFromSessionStorage = async () => {
    const localCoordinates = sessionStorage.getItem("user-coordinate");
    if (!localCoordinates) {
      setCoord(false);
    } else {
      const parsedLoc = JSON.parse(localCoordinates);
      const lat = parsedLoc.lat;
      const lon = parsedLoc.lon;
      await fetchUserWeatherInfo(lat, lon); // Fetch weather info if coordinates are available
    }
  };

  useEffect(() => {
    getFromSessionStorage();
  }, []);

  // Handle click to get the user's location and fetch weather data
  const handleClick = async () => {
    setLoader(true); // Start loading as soon as the button is clicked
    try {
      const coordinates = await locationApi.getLocation();
      const { lat, lon } = coordinates;

      // Save to sessionStorage
      sessionStorage.setItem("user-coordinate", JSON.stringify({ lat, lon }));

      // Fetch weather data immediately after coordinates are retrieved
      await fetchUserWeatherInfo(lat, lon);
    } catch (error) {
      console.error("Error getting location:", error);
      setLoader(false); // Hide loader if there was an error getting location
    }
  };

  // Fetch weather information for the user's coordinates
  const fetchUserWeatherInfo = async (lat, lon) => {
    try {
      const response = await weatherApi.getWeather(lat, lon);
      setWeatherData(response); // Set the fetched weather data
      setCoord(true); // Set coord to true to display weather data
      setLoader(false); // Hide loader once weather data is available
    } catch (e) {
      console.log(e);
      setLoader(false); // Hide loader in case of an error fetching weather data
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      {loader ? (
        <div><Spinner></Spinner></div> // Show loading if loader is true
      ) : coord ? (
        <div className="w-full grid grid-cols-3 gap-4 p-2 text-center">
          {/* Weather data display */}
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
              <img className="h-[20px] w-[25px]" src="/humidity.png" alt="humidity" />
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

import React, { useEffect, useState } from "react";
import Button from "@/components/navigation/Button";
import { locationApi } from "@/api";
import { weatherApi } from "@/api";

const WeatherData = () => {
  const [coord, setcoord] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const getFromSessionStorage = async () => {
    const localCoordinates = sessionStorage.getItem("user-coordinate");
    if (!localCoordinates) {
      setcoord(false);
    } else {
      const parsedLoc = JSON.parse(localCoordinates);
      const lat = parsedLoc.lat;
      const lon = parsedLoc.lon;
      setcoord(true);
      await fetchUserWeatherInfo(lat, lon);
    }
  };
  useEffect(() => {
    getFromSessionStorage();
  }, []);
  const handleClick = async () => {
    try {
      const location = await locationApi.getLocation();
      if (location) {
        const { lat, lon } = location;

        sessionStorage.setItem("user-coordinate", JSON.stringify({ lat, lon }));
        setCoord(true);
        await fetchUserWeatherInfo(lat, lon);
      }
    } catch (error) {
      console.error("Failed to get location:", error);
    }
  };
  const fetchUserWeatherInfo = async (lat, lon) => {
    const handleClick = async () => {
      try {
        const location = await locationApi.getLocation();
        if (location) {
          const { lat, lon } = location;
          // 将位置存储到 sessionStorage
          sessionStorage.setItem(
            "user-coordinate",
            JSON.stringify({ lat, lon })
          );
          setCoord(true); // 设置状态为已获取位置
          await fetchUserWeatherInfo(lat, lon); // 获取天气信息
        }
      } catch (error) {
        console.error("Failed to get location:", error);
      }
    };
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
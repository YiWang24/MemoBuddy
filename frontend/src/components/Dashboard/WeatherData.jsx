import React, { useEffect, useState } from "react";
import Button from "@/components/navigation/Button";
import { locationApi } from "@/api";
import { weatherApi } from "@/api";

const WeatherData = () => {
    const [coord, setcoord] = useState(false);
    const [weatherD, setWeatherD] = useState({});
    // const []


    const getFromSessionStorage = async () => {
        const localCoordinates = sessionStorage.getItem("user-coordinate");
        if (!localCoordinates) {
            setcoord(false)
        }
        else {
            setcoord(true);
            const parsedLoc = JSON.parse(localCoordinates);
            const lat = parsedLoc.lat;
            const lon = parsedLoc.lon;
            fetchUserWeatherInfo(lat, lon);

        }
    }

    useEffect(() => {
        console.log("rerender");
        // getFromSessionStorage()
        locationApi.getLocation();
        if (weatherD.name !== undefined) {
            getFromSessionStorage();
        }
        console.log("again render");
    }, [])
    const handleClick = async () => {
        await locationApi.getLocation();
        // setcoord(true);
        console.log(locationApi.getLocation());

        await getFromSessionStorage();

        console.log("tes11t", weatherD);

        // setcoord(true)
        // console.log("session" + loc);
        // console.log(await );
    }
    console.log(weatherD.name)

    const fetchUserWeatherInfo = async (lat, lon) => {

        const response = await weatherApi.getWeather(lat, lon);
        console.log("Komal" + response)
        setcoord(true);
        setWeatherD(response);
    }

    return (
        <div className='flex flex-col gap-2 items-center justify-center'>
            {
                coord ? (
                    <div className='w-full grid grid-cols-3 gap-4 p-2 text-center'>
                        {/* col1 */}
                        <div className='flex flex-col'>
                            <div className='flex justify-center'>
                                <img className="h-[20px] w-[25px]"
                                    src={`https://flagcdn.com/144x108/${weatherD?.sys?.country.toLowerCase()}.png`}
                                    alt={`Flag of ${weatherD?.sys?.country}`}
                                />
                            </div>
                            <p className='text-md font-semibold'>{weatherD.name}
                            </p>
                            <div className='font-bold text-2xl'>
                                <h2>{weatherD?.main?.temp} °C</h2>
                            </div>
                        </div>


                        <div className='flex flex-col'>
                            <div className='flex justify-center'>
                                <img className="h-[20px] w-[25px]"
                                    src="/wind.png"
                                    alt="wind"
                                />
                            </div>
                            <p className='text-md font-semibold'>Windspeed
                            </p>
                            <div className='font-bold text-2xl'>
                                <h2>{weatherD?.wind?.speed} m/s</h2>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <div className='flex justify-center'>
                                <img className="h-[20px] w-[25px]"
                                    src="/humidity.png"
                                    alt="humidity"
                                />
                            </div>
                            <p className='text-md font-semibold'>Humidity
                            </p>
                            <div className='font-bold text-2xl'>
                                <h2>{weatherD?.main?.humidity} %</h2>
                            </div>
                        </div>

                    </div>)
                    : (
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
                        </>)
            }

        </div>
    )
}

export default WeatherData;

"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCheckUser } from "@/lib/features/auth/authSlice";
import { useSearchParams } from "next/navigation";
import Dashboard from "../../../components/Dashboard/Dashboard";
import { diaryApi, weatherApi, locationApi } from "@/api";
import { message } from "antd";

export default function dashboard() {
  const [newCheck, setNewCheck] = useState(false);
  const [diaryData, setDiaryData] = useState({ title: "", content: "" });
  const [diaryList, setDiaryList] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const auth = sessionStorage.getItem("authState");
  const userId = JSON.parse(auth).user.id;

  // get Diary data
  const fetchDiaries = async () => {
    try {
      const diaries = await diaryApi.getDiaries(userId);
      console.log(diaries);
      const myDiaries = diaries.data.map()
      setDiaryList(diaries.data);
    } catch (error) {
      console.error("Error fetching diaries:", error);
    }
  };

  // handle weather
  const handleWeather = async () => {
    try {
      await locationApi.getLocation();

      // Retrieve coordinates from sessionStorage
      const location = JSON.parse(sessionStorage.getItem("user-coordinate"));
      if (!location) {
        throw new Error("Failed to retrieve user coordinates");
      }

      // Fetch weather data
      const weather = await weatherApi.getWeather(location);
      console.log(weather);
      // setWeatherData(weather);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleAddDiary = async (e) => {
    e.preventDefault();
    setNewCheck(false);

    try {
      const response = await diaryApi.createDiary({ ...diaryData });
      console.log(response);

      if (response.status === 201) {
        message.success("Your message has been submitted successfully!");
        setDiaryData({
          title: "",
          content: "",
        });
      } else {
        message.error(
          "There was an issue submitting your message. Please try again."
        );
      }
    } catch (e) {
      console.log("NO response");
      console.log(e);
    }
  };

  useEffect(() => {
    fetchDiaries();
  }, []);

  // useEffect(() => {
  //   const params = {
  //     googleId: searchParams.get("googleId"),
  //     email: searchParams.get("email"),
  //   };
  //   if (params.googleId && params.email) {
  //     dispatch(fetchCheckUser(params));
  //   }
  // }, [searchParams]);

  return (
    <>
      <Dashboard
        newCheck={newCheck}
        setNewCheck={setNewCheck}
        diaryList={diaryList}
        getWeather={handleWeather}
        diaryData={diaryData}
        setDiaryData={setDiaryData}
        addDiary={handleAddDiary}
      ></Dashboard>
    </>
  );
}

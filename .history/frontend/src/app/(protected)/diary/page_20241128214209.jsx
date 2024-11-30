"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCheckUser } from "@/lib/features/auth/authSlice";
import { useSearchParams } from "next/navigation";
import Dashboard from "../../../components/Dashboard/Dashboard";
import { diaryApi, weatherApi, location } from "@/api";

export default function dashboard() {
  const [newCheck, setNewCheck] = useState(true);
  const [diaryList, setDiaryList] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const auth = sessionStorage.getItem("authState");
  const userId = JSON.parse(auth).user.id;

  // get Diary data
  const fetchDiaries = async () => {
    const diaries = await diaryApi.getDiaries(userId);
    setDiaryList(diaries.data);
  };
  const handleWeather = async () => {
    location.getLocation();
    const location = JSON.parse(sessionStorage.getItem("user-coordinate"));
    const { lat, lon } = location;

    console.log(typeof loc);
    const weather = await weatherApi.getWeather();
    // setWeatherData(weather.data);
  };

  const handleAddDiary = async (e) => {
    setNewCheck(false);
    fetchDiaries();
    e.preventDefault();

    try {
      const response = await diaryApi.createDiary({ ...diaryData });
      console.log(response);

      if (response.status === 201) {
        alert("Your message has been submitted successfully!");
        setDiaryData({
          title: "",
          content: "",
        });
      } else {
        alert("There was an issue submitting your message. Please try again.");
      }
    } catch (e) {
      console.log("NO response");
      console.log(e);
    }
  };

  useEffect(() => {
    fetchDiaries();
  }, []);

  useEffect(() => {
    const params = {
      googleId: searchParams.get("googleId"),
      email: searchParams.get("email"),
    };
    if (params.googleId && params.email) {
      dispatch(fetchCheckUser(params));
    }
  }, [searchParams]);

  return (
    <>
      <Dashboard
        newCheck={newCheck}
        diaryList={diaryList}
        getWeather={handleWeather}
        addDiary={handleAddDiary}
      ></Dashboard>
    </>
  );
}

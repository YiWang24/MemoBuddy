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
  const [isVisible, setIsVisible] = useState(false);
  const [diaryList, setDiaryList] = useState([]);
  const [selectedDiaryId, setSelectedDiaryId] = useState(null);
  const [password, setPassword] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const auth = sessionStorage.getItem("authState");
  const userId = JSON.parse(auth).user.id || null;

  // get Diary data from database
  const fetchDiaries = async () => {
    try {
      const diaries = await diaryApi.getDiaries(userId);
      const myDiaries = diaries.data.map((diary) => {
        return {
          id: diary._id.toString(),
          title: diary.title,
          content: diary.content,
          locked: diary.locked,
        };
      });
      setDiaryList(myDiaries);
    } catch (error) {
      console.error("Error fetching diaries:", error);
    }
  };

  const handleBackGroundClick = () => {
    setNewCheck(false);
    setSelectedDiaryId(null);
    setDiaryData({ title: "", content: "" });
  };

  // delete diary
  const handleDeleteDiary = async (id) => {
    try {
      await diaryApi.deleteDiary(id);
      setDiaryList(diaryList.filter((diary) => diary.id !== id));
      message.success("Diary deleted successfully!");
    } catch (error) {
      console.error("Error deleting diary:", error);
      message.error("Failed to delete diary.");
    }
  };

  //adding new diary or editing current diary content
  const handleAddDiary = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (selectedDiaryId) {
        response = await diaryApi.editDiary(selectedDiaryId, diaryData);
      } else {
        response = await diaryApi.createDiary({ ...diaryData });
      }
      if (response.status === 201 || response.status === 200) {
        message.success("Your diary has been saved successfully!");
        setDiaryData({ title: "", content: "" });
        setSelectedDiaryId(null);
        setNewCheck(false);
        await fetchDiaries();
      } else {
        message.error("Failed to save your diary. Please try again.");
      }
    } catch (error) {
      console.error("Error adding diary:", error);
      message.error("Failed to add diary.");
    }
  };

  //getting a particular diary by clicking on a diary entry
  const handleGetDiary = async (id) => {
    try {
      const diary = await diaryApi.getDiaryById(id.toString());
      setSelectedDiaryId(id.toString());
      setDiaryData({
        title: diary.data.title,
        content: diary.data.content,
      });
      setNewCheck(true);
    } catch (error) {
      console.error("Error fetching diary:", error);
    }
  };

  // Handling lock on diary using password
  const handleLockSubmit = async (id, password) => {
    try {
      const diary = diaryList.find((diary) => diary.id === id);
      if (!diary) {
        message.error("Diary not found");
        return;
      }

      let response;
      if (diary.locked) {
        // Unlock diary
        response = await diaryApi.unlockDiary(id, password);
        if (response.status === 200) {
          setDiaryList((prevList) =>
            prevList.map((d) => (d.id === id ? { ...d, locked: false } : d))
          );
          message.success("Diary unlocked successfully");
        }
      } else {
        // Lock diary
        response = await diaryApi.lockDiary(id, password);
        if (response.status === 200) {
          setDiaryList((prevList) =>
            prevList.map((d) => (d.id === id ? { ...d, locked: true } : d))
          );
          message.success("Diary locked successfully");
        }
      }

      // Reset states
      setPassword("");
      setIsVisible(false);
    } catch (error) {
      setIsVisible(false);
      console.error("Error locking/unlocking diary:", error);
      message.error("Failed to unlock diary");
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

  useEffect(() => {
    fetchDiaries();
  }, []);

  return (
    <>
      <Dashboard
        onBackgroundClick={handleBackGroundClick}
        newCheck={newCheck}
        setNewCheck={setNewCheck}
        diaryList={diaryList}
        getWeather={handleWeather}
        diaryData={diaryData}
        setDiaryData={setDiaryData}
        addDiary={handleAddDiary}
        deleteDiary={handleDeleteDiary}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        password={password}
        setPassword={setPassword}
        handleLockSubmit={handleLockSubmit}
        getDiaryId={handleGetDiary}
      ></Dashboard>
    </>
  );
}

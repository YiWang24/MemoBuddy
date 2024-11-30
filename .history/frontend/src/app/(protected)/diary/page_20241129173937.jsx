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
  const [selectedDiaryId, setSelectedDiaryId] = useState({ id: null });
  const [password, setPassword] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const auth = sessionStorage.getItem("authState");
  const userId = JSON.parse(auth).user.id;

  // get Diary data
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

  const handleAddDiary = async (e) => {
    e.preventDefault();
    setNewCheck(false);
    console.log(selectedDiaryId);
    try {
      let response;
      if (selectedDiaryId !== null && selectedDiaryId !== undefined) {
        // Update existing diary
        response = await diaryApi.editDiary(selectedDiaryId, diaryData);
        setDiaryList((prevList) =>
          prevList.map((diary) =>
            diary.id === selectedDiaryId
              ? {
                ...diary,
                title: diaryData.title,
                content: diaryData.content,
              }
              : diary
          )
        );
        setNewCheck(false);
        setSelectedDiaryId(null);
      } else {
        response = await diaryApi.createDiary({ ...diaryData });
        setDiaryList((prevList) => [
          ...prevList,
          {
            id: response.data._id,
            title: diaryData.title,
            content: diaryData.content,
            locked: false,
          },
        ]);
      }

      if (response.status === 201 || response.status === 200) {
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

  // page.jsx
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
        }else{
          
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
      console.error("Error handling lock/unlock:", error);
      message.error(
        diary.locked ? "Failed to unlock diary" : "Failed to lock diary"
      );
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
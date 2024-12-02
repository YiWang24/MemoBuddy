"use client";
import React, { useState } from "react";
import CardDiary from "@/components/Dashboard/CardDiary";
import Button from "@/components/navigation/Button";
import DiaryText from "@/components/Dashboard/DiaryText";
import LockPassword from "@/components/Dashboard/LockPassword";
import WeatherData from "./WeatherData";
import Thoughts from "./Thoughts";
// import WeatherData from "@/app/(protected)/diary/dashboard/WeatherData";
const Dashboard = ({
  onBackgroundClick,
  newCheck,
  setNewCheck,
  diaryList,
  getWeather,
  addDiary,
  diaryData,
  setDiaryData,
  deleteDiary,
  password,
  setPassword,
  isVisible,
  setIsVisible,
  handleLockSubmit,
  getDiaryId,
}) => {
  const [selectedLockId, setSelectedLockId] = useState(null);

  const handleLockShow = (e, id) => {
    e.stopPropagation();
    setSelectedLockId(id);
    setIsVisible(!isVisible);
  };

  return (
    <div onClick={onBackgroundClick}>
      <div className="grid grid-cols-[1fr_3fr] h-[90vh] gap-4 p-6 overflow-auto">
        {/* notes */}
        <div className="border-2 border-black rounded-lg p-2 flex flex-col gap-2">
          {diaryList.map((item) => (
            <CardDiary
              getDiaryId={getDiaryId}
              title={item.title}
              id={item.id}
              key={item.id}
              lock={item.locked}
              handleDelete={(e) => {
                e.stopPropagation();
                deleteDiary(item.id.toString());
              }}
              handleLockIcon={(e) => handleLockShow(e, item.id)}
            ></CardDiary>
          ))}
        </div>
        {/* right tools */}
        <div className="border-2 border-black rounded-lg flex flex-col">
          <div className="grid grid-cols-2 p-2 gap-2 ">
            <div className="border-2 border-black p-2 rounded-lg">
              <h2 className="p-2 text-center text-lg font-semibold">
                Today's thought
              </h2>
              <div className="text-center font-md mb-4">

                <Thoughts></Thoughts>
              </div>
            </div>
            <div className="bg-[#96efff] border-2 border-black rounded-lg p-2">
              <WeatherData></WeatherData>

            </div>
          </div>
          <div className="p-2">
            <div className="border-black border-2 h-[500px] grid place-items-center">
              {newCheck ? (
                <DiaryText
                  diaryData={diaryData}
                  setDiaryData={setDiaryData}
                  handleSave={addDiary}
                ></DiaryText>
              ) : (
                <div>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setNewCheck(true);
                    }}
                  >
                    Add
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isVisible && (
        <LockPassword
          diaryId={selectedLockId}
          password={password}
          setPassword={setPassword}
          handleLockSubmit={handleLockSubmit}
          handleLockShow={(e) => handleLockShow(e)}
          isLocked={diaryList.find((item) => item.id === selectedLockId).locked}
        />
      )}
    </div>
  );
};

export default Dashboard;

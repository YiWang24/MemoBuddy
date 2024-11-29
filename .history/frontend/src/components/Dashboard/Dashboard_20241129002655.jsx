"use client";
import React, { useState } from "react";
import CardDiary from "@/components/Dashboard/CardDiary";
import Button from "@/components/navigation/Button";
import DiaryText from "@/components/Dashboard/DiaryText";

const Dashboard = ({
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
}) => {
  const [selectedDiaryId, setSelectedDiaryId] = useState(null);
  const handleLockShow = (id) => {
    setSelectedDiaryId(id);
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="grid grid-cols-[1fr_3fr] h-[90vh] gap-4 p-6 overflow-auto">
        {/* notes */}
        <div className="border-2 border-black rounded-lg p-2 flex flex-col gap-2">
          {diaryList.map((item) => (
            <CardDiary
              title={item.title}
              id={item.id}
              key={item.id}
              lock={item.locked}
              handleDelete={deleteDiary}
              handleLockIcon={()=>handleLockShow(item.id)}
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
              <p className="text-center font-md mb-4">
                Everything you want is on the other side of fear
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center border-2 border-black rounded-lg p-2">
              <div className=" p-2 rounded-lg">
                <img
                  src="https://c.animaapp.com/ldsw5inR/img/image-2@2x.png"
                  alt="location"
                  className="h-[50px]"
                ></img>
              </div>
              <div>
                <Button onClick={getWeather}>GRANT ACCESS</Button>
              </div>
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
                  <Button onClick={() => setNewCheck(true)}>Add</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Conditional rendering of the centered textbox UI */}
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {/* Popup UI */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
            <form>
              <label htmlFor="inputText" className="block text-gray-700 mb-2">
                Enter Password
              </label>
              <input
                type="text"
                id="inputText"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Close Button */}
              <button
                type="submit"
                onClick={handleLockSubmit}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 w-full"
              >
                Lock
              </button>
              <button
                type="button"
                onClick={handleLockShow}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 w-full"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

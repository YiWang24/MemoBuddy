"use client";
import React, { useEffect, useState } from "react";
import CardDiary from "@/components/Dashboard/CardDiary";
import Button from "@/components/navigation/Button";
import DiaryText from "@/components/Dashboard/DiaryText";
import { diaryApi } from "@/api";
import { weatherApi } from "@/api";
import { location } from "../../api/location";

const Dashboard = ({ , setNewNote, newCheck, setNewCheck }) => {
  // const a = location.getLocation();
  const [diaryData, setDiaryData] = useState({
    title: "",
    content: "",
  });

  const [userDiaries, setUserDiaries] = useState([]);

  const handleAdd = () => {
    setNewCheck(true);
  };

  


  /****************************************************** */

  const [isVisible, setIsVisible] = useState(false); // State to toggle textbox visibility
  const [text, setText] = useState(""); // State to store textbox value

  const handleButtonClick = () => {
    setIsVisible(!isVisible); // Toggle visibility
  };

  const handleInputChange = (e) => {
    setText(e.target.value); // Update text state
  };

  /****************************************************** */

  const handleClick = async () => {
    location.getLocation();
    const loc = sessionStorage.getItem("user-coordinate");
    console.log("session" + loc);
    const parsedLoc = JSON.parse(loc);
    const lat = parsedLoc.lat;
    const lon = parsedLoc.lon;
    console.log(await weatherApi.getWeather(lat, lon));
  };

  const handleSave = async (e) => {
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

 
  return (
    <div>
      <div className="grid grid-cols-[1fr_3fr] h-[90vh] gap-4 p-6 overflow-auto">
        {/* notes */}
        <div className="border-2 border-black rounded-lg p-2 flex flex-col gap-2">
          {userDiaries.map((item) => (
            <CardDiary
              title={item.title}
              diaryId={item.diaryId}
              key={item.diaryId}
              handleButtonClick={handleButtonClick}
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
                <Button onClick={handleClick}>GRANT ACCESS</Button>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="border-black border-2 h-[500px] grid place-items-center">
              {newCheck ? (
                <DiaryText
                  diaryData={diaryData}
                  setDiaryData={setDiaryData}
                  handleSave={handleSave}
                ></DiaryText>
              ) : (
                <div>
                  <Button onClick={handleAdd}>Add</Button>
                </div>
              )}
              {/*  */}
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
                value={text}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Close Button */}
              <button
                onClick={handleButtonClick}
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
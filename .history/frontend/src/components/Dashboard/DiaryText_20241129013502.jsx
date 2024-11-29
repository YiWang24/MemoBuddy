import React, { useState } from "react";
import Button from "../navigation/Button";

function DiaryText({ diaryData, setDiaryData, handleSave }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDiaryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="p-4 w-full h-full " onClick>
      <form className="flex flex-col gap-2" onSubmit={handleSave}>
        <input
          type="text"
          id="title"
          name="title"
          value={diaryData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Diary title"
        />
        <textarea
          id="content"
          name="content"
          value={diaryData.content}
          onChange={handleChange}
          className="block w-full h-[350px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          placeholder="Type your message here..."
        ></textarea>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black border-2 border-black"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default DiaryText;

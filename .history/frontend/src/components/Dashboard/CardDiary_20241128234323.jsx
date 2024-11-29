"use client";
import React, { useState } from "react";
import {
  TrashIcon,
  LockClosedIcon,
  LockOpenIcon,
} from "@heroicons/react/outline";

const CardDiary = ({
  id,
  lock,
  title,
  handleDelete,
  handleUnLock,
  handleLock,
  handleButtonClick,
}) => {
  return (
    <div className="grid grid-cols-[8fr_1fr] p-2 border-2 border-black rounded-md">
      <div className="flex items-center justify-center">{title}</div>
      <div className="flex flex-col gap-2">
        <button className="text-red-500 hover:text-red-700 transition-colors">
          <TrashIcon className="h-6 w-6" onClick={() => handleDelete(id)} />
        </button>
        <button className="text-gray-500 hover:text-gray-700 transition-colors">
          {!lock ? (
            <LockOpenIcon
              className="h-6 w-6"
              onClick={() => {
                handleLock(id);
                handleButtonClick;
              }}
            />
          ) : (
            <LockClosedIcon
              onClick={() => handleUnLock(id) handleButtonClick;}
              className="h-6 w-6"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default CardDiary;

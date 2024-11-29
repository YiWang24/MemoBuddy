"use client";
import React, { useState } from "react";
import {
  TrashIcon,
  LockClosedIcon,
  LockOpenIcon,
} from "@heroicons/react/outline";

const CardDiary = ({
  getDiaryId,
  lock,
  title,
  handleDelete,
  handleLockIcon,
}) => {
  return (
    <div
      className="grid grid-cols-[8fr_1fr] p-2 border-2 border-black rounded-md"
      onClick={()=>getDiaryId}
    >
      <div className="flex items-center justify-center">{title}</div>
      <div className="flex flex-col gap-2">
        <button className="text-red-500 hover:text-red-700 transition-colors">
          <TrashIcon className="h-6 w-6" onClick={handleDelete} />
        </button>
        <button className="text-gray-500 hover:text-gray-700 transition-colors">
          {!lock ? (
            <LockOpenIcon className="h-6 w-6" onClick={handleLockIcon} />
          ) : (
            <LockClosedIcon onClick={handleLockIcon} className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CardDiary;

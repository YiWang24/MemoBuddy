import React from "react";
import AuthButton from "./AuthButton";
const AuthForm = ({ formTitle, onClick }) => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="text-center font-bold text-black text-2xl  tracking-[0] leading-[normal] whitespace-nowrap">
        {formTitle}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-lg font-semibold text-gray-700">
          Email
        </label>
        <input
          id="email"
          placeholder="email@example.com"
          type="email"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-lg font-semibold text-gray-700">
          Email
        </label>
        <input
          id="email"
          placeholder="email@example.com"
          type="email"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="w-full">
        <AuthButton
          onClick={onClick}
          text={formTitle}
          backgroundColor={"bg-zinc-300"}
          textColor={"text-white"}
        />
      </div>
    </div>
  );
};

export default AuthForm;

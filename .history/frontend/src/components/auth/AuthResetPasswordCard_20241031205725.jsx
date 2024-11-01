"use client";
import React from "react";
import { AuthFormField, AuthButton } from "@/components/auth";

const AuthResetPasswordCard = ({ title, buttonTitle }) => {
  const handleButtonClick = () => {};
  return (
    <div className="w-[60%] h-[60%] flex flex-col items-center gap-4 border-red-500 border-2">
      <div className="relative flex flex-col items-center justify-center gap-4 text-center text-[40px] text-black ">
        <div className="relative w-12 h-12 rounded-full bg-zinc-400 "></div>
        <div className="relative font-medium">Welcome back</div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 text-center text-[20px] text-base mt-10 ">
        <div className="text-[24px] font-bold">{title}</div>
        <div className="text-[16px] font-sans leading-[24px] text-gray-500">
          No worries, We’ll send you reset instructions
        </div>
        <AuthFormField
          type="email"
          placeholder="Email"
          name="email"
          label="Email Address"
          onValidInput={() => {}}
          required
        />
        <AuthButton
          onClick={handleButtonClick}
          text={buttonTitle}
          backgroundColor={"bg-zinc-300"}
          textColor={"text-white"}
        />
      </div>
      <div className="text-[16px] [text-decoration:underline] font-medium  text-gray text-right mt-10 cursor-pointer  transition duration-300 ease-in-out hover:text-blue-500">
        {footer}
      </div>
    </div>
  );
};

export default AuthResetPasswordCard;

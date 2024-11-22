"use client";
import React, { useState } from "react";
import { AuthFormField, AuthButton } from "@/components/auth";
import PinInput from "react-pin-input";
import { STAGE_CONTENT } from "@/constants";

const AuthResetPasswordCard = ({ stage, email, onInputChange, onSubmit }) => {
  const { cardTitle, buttonTitle, cardBody, cardFooter, link } =
    STAGE_CONTENT[stage];

  const renderFormFields = (stage) => {
    switch (stage) {
      case "email":
        return (
          <AuthFormField
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            label="Email Address"
            onValidInput={onInputChange}
            required
          />
        );
      case "code":
        return (
          <PinInput
            length={6}
            initialValue=""
            type="numeric"
            inputMode="number"
            style={{ padding: "10px" }}
            inputStyle={{ borderColor: "red" }} // Change the border color
            inputFocusStyle={{ borderColor: "blue" }} // Change the border color when focused
            onComplete={(value) => onInputChange("code", value)}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
        );
      case "password":
        return (
          <>
            <AuthFormField
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              label="Password"
              onValidInput={onInputChange}
              required
            />
            <AuthFormField
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              label="Confirm Password"
              onValidInput={onInputChange}
              required
            />
          </>
        );
    }
  };

  return (
    <div className="w-[60%] h-[60%] flex flex-col items-center gap-4 ">
      <header className="relative flex flex-col items-center justify-center gap-4 text-center text-[40px] text-black ">
        <div className="relative w-12 h-12 rounded-full bg-zinc-400 "></div>
        <div className="relative font-medium">Welcome back</div>
      </header>
      <div className="flex flex-col items-center justify-center gap-6 text-center text-[20px] text-base mt-10 ">
        <div className="text-[24px] font-bold">{cardTitle}</div>
        <div className="w-[80%] text-[16px] font-sans leading-[24px] text-gray-500">
          {typeof cardBody === "function" ? cardBody(email) : cardBody}
        </div>
        {renderFormFields(stage)}
        <AuthButton
          onClick={onSubmit}
          type="submit"
          text={buttonTitle}
          backgroundColor={"bg-zinc-300"}
          textColor={"text-white"}
        />
      </div>
      <footer className="text-[16px] [text-decoration:underline] font-medium  text-gray text-right mt-10 cursor-pointer  transition duration-300 ease-in-out hover:text-blue-500">
        <a href={link}><span> {stage === 'code' && resendLinkText && (
              <button onClick={onResendCode} className="resend-code-button">
                {resendLinkText}
              </button>
            )}</span>{cardFooter}</a>

      </footer>
    </div>
  );
};

export default AuthResetPasswordCard;

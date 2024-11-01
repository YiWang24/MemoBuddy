"use client";
import React from "react";
import { AuthFormField, AuthButton } from "@/components/auth";
import PinInput from "react-pin-input";
const STAGE_CONTENT = {
  email: {
    cardTitle: "Reset Password",
    buttonTitle: "Send Verification Code",
    cardBody: "No worries, We’ll send you reset instructions",
    cardFooter: "Already have an account?",
  },
  code: {
    cardTitle: "Check Your Email",
    buttonTitle: "Verify Code",
    cardBody:
      "We sent a reset link to contact@gmail.com enter 4 digit code that mentioned in the email",
    cardFooter: "Haven’t got the email yet? Resend Code",
  },
  password: {
    cardTitle: "Set a New Password",
    buttonTitle: "Confirm",
    cardBody:
      "Create a new password. Ensure it differs from previous ones for security",
      cardFooter:""
  },
  success:{
    cardTitle: "Password Reset Successful",
    buttonTitle: "Return to Login",
    cardBody:
      "Your password has been reset successfully. Please login with your new password",
      
  }
};

const AuthResetPasswordCard = ({
  stage,
  cardBody,
  cardFooter,
  onClick,
  onValidInput,
}) => {
  const renderFormFields = (stage) => {
    switch (stage) {
      case "email":
        return (
          <AuthFormField
            type="email"
            placeholder="Email"
            name="email"
            label="Email Address"
            onValidInput={onValidInput}
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
            onComplete={onValidInput}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
        );
      case "password":
        return (
          <AuthFormField
            type="password"
            placeholder="Password"
            name="password"
            label="Password"
            onValidInput={handleValidInput}
            required
          />
        );
    }
  };

  return (
    <div className="w-[60%] h-[60%] flex flex-col items-center gap-4 border-red-500 border-2">
      <header className="relative flex flex-col items-center justify-center gap-4 text-center text-[40px] text-black ">
        <div className="relative w-12 h-12 rounded-full bg-zinc-400 "></div>
        <div className="relative font-medium">Welcome back</div>
      </header>
      <div className="flex flex-col items-center justify-center gap-6 text-center text-[20px] text-base mt-10 ">
        <div className="text-[24px] font-bold">{cardTitle}</div>
        <div className="text-[16px] font-sans leading-[24px] text-gray-500">
          {cardBody}
        </div>
        <AuthFormField
          type="email"
          placeholder="Email"
          name="email"
          label="Email Address"
          onValidInput={getInput}
          required
        />
        <AuthButton
          onClick={onClick}
          text={buttonTitle}
          backgroundColor={"bg-zinc-300"}
          textColor={"text-white"}
        />
      </div>
      <footer className="text-[16px] [text-decoration:underline] font-medium  text-gray text-right mt-10 cursor-pointer  transition duration-300 ease-in-out hover:text-blue-500">
        {cardFooter}
      </footer>
    </div>
  );
};

export default AuthResetPasswordCard;

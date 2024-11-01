"use client";
import React, { useState } from "react";
import { AuthFormField, AuthButton } from "@/components/auth";
import PinInput from "react-pin-input";
import { message } from "antd";
const STAGE_CONTENT = {
  email: {
    cardTitle: "Reset Password",
    buttonTitle: "Send Verification Code",
    cardBody: "No worries, We’ll send you reset instructions",
    cardFooter: "Already have an account?",
    link: "/login",
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
    cardFooter: "",
  },
  success: {
    cardTitle: "Password Reset Successful",
    buttonTitle: "Return to Login",
    cardBody:
      "Your password has been reset successfully. Please login with your new password",
    cardFooter: "",
    link: "/login",
  },
};

const AuthResetPasswordCard = ({ onSubmit }) => {
  const [stage, setStage] = useState("email");
  const { cardTitle, buttonTitle, cardBody, cardFooter } = STAGE_CONTENT[stage];
  const [formData, setFormData] = useState({
    email: "",
    code: "",
    password: "",
    confirmPassword: "",
  });
  const handleValidInput = (id, value) => {
    setFormData((prev) => {
      if (value === null) {
        return { ...prev, [id]: "" };
      } else {
        return { ...prev, [id]: value };
      }
    });
    console.log(formData);
  };

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
            onValidInput={handleValidInput}
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
            onComplete={(e) => console.log(e)}
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
              onValidInput={handleValidInput}
              required
            />
            <AuthFormField
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              label="Confirm Password"
              onValidInput={handleValidInput}
              required
            />
          </>
        );
    }
  };

  const handleButtonClick = () => {
    if (stage === "email") {
      if (formData.email === "") {
        message.error("Please fill correct email address");
      } else {
        setStage("code");
      }
    } else if (stage === "code") {
      if (formData.code === "") {
        message.error("Please fill correct code");
      } else {
        setStage("password");
      }
    } else if (stage === "password") {
        if(formData.password === "" || formData.confirmPassword === ""){
          message.error("Please fill correct password");}
          else if(formData.password !== formData.confirmPassword){
            message.error("Password does not match");
          } else{
            onSubmit(formData);
          }
      setStage("success");
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
        {renderFormFields(stage)}
        <AuthButton
          onClick={handleButtonClick}
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

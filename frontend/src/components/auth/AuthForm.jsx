"use client";
import React, { useState } from "react";
import { AuthButton, AuthFormField } from "./index";
import { message } from "antd";

const AuthForm = ({ formTitle, onSubmit }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleValidInput = (id, value) => {
    setFormData((prev) => {
      if (value === null) {
        return { ...prev, [id]: "" };
      } else {
        return { ...prev, [id]: value };
      }
    });
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    if (isFormValid) {
      onSubmit(formData);
    } else {
      message.error("Please fill in all required fields correctly.");
    }
  };

  return (
    <form
      className="flex flex-col gap-4 items-center justify-center w-[80%] h-full"
      onSubmit={onSubmit}
    >
      <div className="font-bold text-black text-2xl  tracking-[0] leading-[normal] whitespace-nowrap mb-4">
        {formTitle}
      </div>
      <AuthFormField
        id="email"
        label="Email Address"
        type="email"
        placeholder="email@example.com"
        onValidInput={handleValidInput}
        required
      />
      <AuthFormField
        id="password"
        label="Password"
        type="password"
        placeholder="********"
        onValidInput={handleValidInput}
        required
      />

      <div className="w-full">
        <AuthButton
          onClick={handleButtonClick}
          type="submit"
          text={formTitle}
          backgroundColor={"bg-blue-600"}
          textColor={"text-white"}
        />
      </div>
    </form>
  );
};

export default AuthForm;

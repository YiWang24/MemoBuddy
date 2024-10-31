"use client";
import { message } from "antd";
import React, { useState } from "react";
import { AuthButton,AuthFormField } from "./index";
import { BiHide, BiShow } from "react-icons/bi";
const AuthForm = ({ formTitle, onSubmit }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  const validateForm = () => {
    const newFormErrors = {};
    if (!formData.email) {
      newFormErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newFormErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newFormErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      newFormErrors.password = "password must be at least 6 characters";
    }
    setFormErrors(newFormErrors);
    if (Object.keys(newFormErrors).length > 0) {
      message.error("Please fill in the required fields");
    }
    return Object.keys(newFormErrors).length === 0;
  };
  const handleInputChange = (id,value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
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
        value={formData.email}
        onChange={(value)=>handleInputChange("email",value)}
        required
        />
        <AuthFormField
        id="password"
        label="Password"
        type="password"
        placeholder="********"
        value={formData.password}
        onChange={(value)=>handleInputChange("password", value)}
        required
        />

      <div className="w-full">
        <AuthButton
          onClick={handleButtonClick}
          text={formTitle}
          backgroundColor={"bg-zinc-300"}
          textColor={"text-white"}
        />
      </div>
    </form>
  );
};

export default AuthForm;

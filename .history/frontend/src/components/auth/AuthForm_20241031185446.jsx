"use client";
import React, { useState } from "react";
import { AuthButton, AuthFormField } from "./index";

const AuthForm = ({ formTitle, onSubmit }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
 
  const handleInputChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    onSubmit(formData);
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
        onChange={(value) => handleInputChange("email", value)}
        required
      />
      <AuthFormField
        id="password"
        label="Password"
        type="password"
        placeholder="********"
        value={formData.password}
        onValid
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

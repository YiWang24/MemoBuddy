"use client";
import React, { useState } from "react";
import { AuthResetPasswordCard } from "@/components/auth";
import { authApi } from "@/api";

export default function page() {
  const [stage, setStage] = useState("email");
  const [formData, setFormData] = useState({
    email: "",
    code: "",
    password: "",
    confirmPassword: "",
  });

  const handleValidInput = (id, value) => {
    console.log(id, value);
    setFormData((prev) => {
      if (value === null) {
        return { ...prev, [id]: "" };
      } else {
        return { ...prev, [id]: value };
      }
    });
    console.log(formData);
  };

  const handleSubmit = async () => {
    if (stage === "email") {
      if (!formData.email) {
        message.error("Please fill correct email address");
      } else {
        const request = await authApi.requestPasswordReset(formData.email);
        console.log(request);
        setStage("code");
      }
    } else if (stage === "code") {
      if (!formData.code) {
        message.error("Please fill correct code");
      } else {
        setStage("password");
      }
    } else if (stage === "password") {
      if (!formData.password || !formData.confirmPassword) {
        message.error("Please fill correct password");
      } else if (formData.password !== formData.confirmPassword) {
        message.error("Passwords do not match");
      } else {
        message.success("Password reset successful");
        setStage("success");
      }
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <AuthResetPasswordCard
        stage={stage}
        onInputChange={handleValidInput}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

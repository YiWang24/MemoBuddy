"use client";
import React, { useState, useEffect } from "react";
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
    setFormData((prev) => {
      if (value === null) {
        return { ...prev, [id]: "" };
      } else {
        return { ...prev, [id]: value };
      }
    });
  };
  useEffect(() => {
    console.log("FormData updated:", formData);
  }, [formData]);

  const handleSubmit = async () => {
    switch (stage) {
      case "email":
        if (!formData.email) {
          message.error("Please fill correct email address");
        } else {
          const response = await authApi.requestPasswordReset(formData.email);
          
            setStage("code");
          } else {
            message.error("Failed to request password reset");
          }
        }
        break;
      case "code":
        if (!formData.code) {
          message.error("Please fill correct code");
        } else {
          setStage("password");
        }
        break;
      case "password":
        if (!formData.password || !formData.confirmPassword) {
          message.error("Please fill correct password");
        } else if (formData.password !== formData.confirmPassword) {
          message.error("Passwords do not match");
        } else {
          message.success("Password reset successful");
          setStage("success");
        }
        break;
      default:
        break;
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

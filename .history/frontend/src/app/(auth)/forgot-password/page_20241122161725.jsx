"use client";
import React, { useState } from "react";
import { AuthResetPasswordCard } from "@/components/auth";
import { authApi } from "@/api";
import { message } from "antd";
import { useRouter } from "next/navigation";

export default function page() {
  const [isLoading, setIsLoading] = useState(false);
  const [stage, setStage] = useState("email");
  const [formData, setFormData] = useState({
    email: "",
    code: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();
  const handleValidInput = (id, value) => {
    setFormData((prev) => {
      if (value === null) {
        return { ...prev, [id]: "" };
      } else {
        return { ...prev, [id]: value };
      }
    });
  };

  const validateFormData = () => {
    if (stage === "email" && !formData.email) {
      message.error("Please fill in a valid email address");
      return false;
    }
    if (stage === "code" && !formData.code) {
      message.error("Please fill in the correct code");
      return false;
    }
    if (stage === "password") {
      if (!formData.password || !formData.confirmPassword) {
        message.error("Please fill in the password fields");
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        message.error("Passwords do not match");
        return false;
      }
    }
    return true;
  };

  const handleEmailSubmit = async () => {
    if (stage !== "code") {
      setStage("code");
    }
    setIsLoading(true);
    try {
      await authApi.requestPasswordReset(formData.email);
      message.success("Password reset email sent");
    } catch (error) {
      // console.log("Error sending password reset email");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCodeSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await authApi.verifyPasswordReset({
        resetCode: formData.code,
        email: formData.email,
      });
      if (response.status === 200) {
        message.success("Code verified successfully");
        setStage("password");
      } else {
        message.error("Code verification failed");
      }
    } catch (error) {
      message.error("Code verification error");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordSubmit = async () => {
    try {
      const response = await authApi.resetPassword({
        email: formData.email,
        resetCode: formData.code,
        password: formData.password,
      });
      if (response.status === 200) {
        message.success("Password reset successful");
        setStage("success");
      } else {
        message.error("Password reset failed");
      }
    } catch (error) {
      message.error("Error resetting password");
    }
  };

  const handleSuccess = () => {
    router.push("/login");
    setFormData({
      email: "",
      code: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = async () => {
    if (!validateFormData()) return;

    switch (stage) {
      case "email":
        await handleEmailSubmit();
        break;
      case "code":
        await handleCodeSubmit();
        break;
      case "password":
        await handlePasswordSubmit();
        break;
      case "success":
        handleSuccess();
        break;
      default:
        break;
    }
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <AuthResetPasswordCard
        stage={stage}
        isLoading={isLoading}
        email={formData.email}
        onInputChange={handleValidInput}
        onSubmit={handleSubmit}
        onResendCode={handleEmailSubmit}
      />
    </div>
  );
}

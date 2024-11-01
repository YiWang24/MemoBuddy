"use client";
import React from "react";
import { AuthResetPasswordCard } from "@/components/auth";

export default function page() {
  const [stage, setStage] = React.useState("email");
  const [email, setEmail] = React.useState("");
  const [code, setCode] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleButtonClick = () => {
    if (stage === "email") {
      setStage("code");
    } else if (stage === "code") {
      setStage("password");
    } else if (stage === "password") {
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      {stage === "email" && (
        <AuthResetPasswordCard
          cardTitle="Reset Password"
          cardBody="No worries, We’ll send you reset instructions."
          buttonTitle="Reset Password"
          cardFooter="Already have an account?"
        />
      )}
      {stage === "code" && (
        <AuthResetPasswordCard
          cardTitle="Enter Code"
          cardBody={`We sent a reset link to ${email} enter 4 digit code that mentioned in the email`}
          buttonTitle="Verify Code"
          cardFooter=""
        />
      )}
      {stage === "password" && (
        <AuthResetPasswordCard
          title="New Password"
          buttonTitle="Reset Password"
          footer="Already have an account?"
        />
      )}
    </div>
  );
}

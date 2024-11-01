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
      <AuthResetPasswordCard stage={stage} />
    </div>
  );
}

"use client";
import React from "react";
import { AuthResetPasswordCard } from "@/components/auth";

export default function page() {
  const [stage, setStage] = React.useState("email");
  const [formdata, setFormdata] = React.useState({
    email: "",
    code: "",
    password: "",
    confirmPassword: "",
  });

  const onValidInput = (name, value) => {
    if (name === "email") setEmail(value);
    if (name === "code") setCode(value);
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <AuthResetPasswordCard stage={stage} />
    </div>
  );
}

"use client";
import React from "react";
import { AuthResetPasswordCard } from "@/components/auth";

export default function page() {
  const [stage, setStage] = React.useState("email");
  const [formData, setFormdata] = React.useState({
    email: "",
    code: "",
    password: "",
    confirmPassword: "",
  });

  const onValidInput = (id, value) => {
    setFormdata({ ...formdata, [id]: value });
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <AuthResetPasswordCard stage={stage} />
    </div>
  );
}

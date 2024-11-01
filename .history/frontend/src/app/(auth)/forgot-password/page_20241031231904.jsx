"use client";
import React from "react";
import { AuthResetPasswordCard } from "@/components/auth";

export default function page() {

  const handleValidInput = (id, value) => {
    setFormData((prev) => {
      if (value === null) {
        return { ...prev, [id]: "" };
      } else {
        return { ...prev, [id]: value };
      }
    });
    console.log(formData)
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <AuthResetPasswordCard onValidInput={handleValidInput} />
    </div>
  );
}

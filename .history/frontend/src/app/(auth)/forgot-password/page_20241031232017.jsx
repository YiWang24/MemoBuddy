"use client";
import React from "react";
import { AuthResetPasswordCard } from "@/components/auth";

export default function page() {

  const handleSubmit = () => {
    
    console.log(formData)
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <AuthResetPasswordCard onSubmit={handleSubmit} />
    </div>
  );
}
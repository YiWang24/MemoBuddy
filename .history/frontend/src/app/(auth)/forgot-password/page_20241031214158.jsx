"use client";
import React from "react";
import { AuthResetPasswordCard } from "@/components/auth";

export default function page() {
  const [stage,setStage] = React.useState(0);


  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <AuthResetPasswordCard  title="Reset Password" buttonTitle="Reset Password"  footer="Already have an account?" />
    </div>
  );
}
"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Banner = () => {
  const [authStatus, setAuthStatus] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    setAuthStatus(isAuthenticated);
  }, [isAuthenticated]);
  return (
    <div
      className="relative h-[75vh] md:h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: `url('https://c.animaapp.com/2oLABxhm/img/banner.png')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">
          Protect your thoughts
        </h1>

        <a href={authStatus ? "/diary" : "/register"}>
          <button className="bg-homeBtnBg hover:bg-black hover:text-white hover:border-white font-semibold px-6 py-3 rounded-lg text-lg border-2 border-black text-black transition duration-300 ease-in-out">
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;

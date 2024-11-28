import React from "react";
import Link from "next/link";
// import "./style.css";
import Navbar from "@/components/navigation/Navbar";
import Contact from "@/components/Contact/Contact";
import FAQ from "@/components/Contact/FAQ";

export default function Wrapper() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <div
        className="relative h-[45vh] md:h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://c.animaapp.com/hGRjiP4I/img/1-1d63e1b0.png')`,
        }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
      </div>
      <Contact></Contact>
      <FAQ></FAQ>
    </>
    
  );
}

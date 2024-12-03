import React from "react";
// Import the Contact and FAQ components
import Contact from "@/components/Contact/Contact";
import FAQ from "@/components/Contact/FAQ";

// Define and export the Wrapper component
export default function Wrapper() {
  return (
    <>
      {/* Header section with a background image */}
      <div
        className="relative h-[45vh] md:h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://c.animaapp.com/hGRjiP4I/img/1-1d63e1b0.png')`,
        }}
      >
      </div>

      {/* The Contact section imported above is being used here */}
      <Contact></Contact>

      {/* The FAQ section imported above is being used here */}
      <FAQ></FAQ>
    </>
  );
}

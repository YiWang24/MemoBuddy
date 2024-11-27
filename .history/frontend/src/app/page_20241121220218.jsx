import React from "react";
import Banner from "@/components/homePage/Banner";
import Cost from "@/components/homePage/Cost";
import Encrypt from "@/components/homePage/Encrypt";
import Values from "@/components/homePage/Values";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function wrapper() {
  return (
    <>
      <Banner></Banner>
      <Values></Values>
      <Cost></Cost>
      <Encrypt></Encrypt>
    </>
  );
}

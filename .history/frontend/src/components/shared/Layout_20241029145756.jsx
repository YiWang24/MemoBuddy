"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Layout as AntdLayout } from "antd";
const { Content } = AntdLayout;
const Layout = ({ children }) => {
  
  return (
    <>
      <Navbar />
     {children}
      <Footer />
   
  );
};
export default Layout;

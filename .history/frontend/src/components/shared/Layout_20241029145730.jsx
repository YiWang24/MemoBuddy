"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Layout as AntdLayout } from "antd";
const { Content } = AntdLayout;
const Layout = ({ children }) => {
  
  return (
    <AntdLayout>
      <Navbar />
     {children}</Content>
      <Footer />
    </AntdLayout>
  );
};
export default Layout;
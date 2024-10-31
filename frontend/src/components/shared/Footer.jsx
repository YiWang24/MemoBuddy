"use client";
import React from "react";
import { Layout } from "antd";
const { Footer: AntdFooter } = Layout;

const Footer = () => {
  return (
    <AntdFooter
      style={{ textAlign: "center", backgroundColor: "black", color: "white" }}
    >
      Designed & Developed by tech army© MemoBuddy 2024 | All Rights Reserved
    </AntdFooter>
  );
};

export default Footer;

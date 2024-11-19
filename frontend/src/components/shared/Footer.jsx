"use client";
import React from "react";
import { Layout } from "antd";
const { Footer: AntdFooter } = Layout;

const Footer = () => {
  return (
    // <AntdFooter
    //   style={{ textAlign: "center", backgroundColor: "black", color: "white" }}
    // >
    //   Designed & Developed by tech army<br></br>© MemoBuddy 2024 | All Rights Reserved
    // </AntdFooter>
    <AntdFooter className="text-center bg-black text-lg text-white flex gap-2 justify-center flex-col">
      <p>Designed & Developed by tech army</p>
      <p>&copy; MemoBuddy 2024 | All Rights Reserved</p>
    </AntdFooter>
  );
};

export default Footer;

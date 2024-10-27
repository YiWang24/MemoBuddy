// components/Navbar.js
"use client"
import { Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const items = [
  {
    label: (<Link href='/'>Home</Link>),
    key:""
  },
  {
    label: (<Link href='/about'>About</Link>),
    key: "About",
  },
  {
    label: "Contact",
    key: "Contact",
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("Home");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div>
      <Image
        src="icons/logo.svg"
        alt="MemoBuddy Logo"
        width={150}
        height={150}
      />
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};

export default Navbar;

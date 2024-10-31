// components/Navbar.js
"use client";
import { Layout, Menu, Button, Flex } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const { Header } = Layout;
const items = [
  {
    label: <Link href="/">Home</Link>,
    key: "Home",
  },
  {
    label: <Link href="/about">About</Link>,
    key: "About",
  },
  {
    label: <Link href="/contact">Contact</Link>,
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
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        src="icons/logo.svg"
        alt="MemoBuddy Logo"
        width={150}
        height={150}
      />
      <Menu
        theme="light"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <Flex gap="middle" align="center">
        <Button>Log in</Button>
        <Button>Register</Button>
      </Flex>
    </Header>
  );
};

export default Navbar;

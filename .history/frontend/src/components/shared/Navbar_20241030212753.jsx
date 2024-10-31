import { useEffect } from 'react';
import { message } from 'antd';
import { useEffect } from 'react';
// components/Navbar.js

import { Layout, Menu, Button, Flex } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (isAuthenticated) {
      message.success("Login successful");
    }
  }, [isAuthenticated]);

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image src="/logo.svg" alt="MemoBuddy Logo" width={150} height={150} />
      <Menu
        theme="light"
        onClick={handleOnClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      {isAuthenticated ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <Flex gap="middle" align="center">
          <Link href="/login">
            <Button>Log in</Button>
          </Link>
          <Link href="register">
            <Button>Register</Button>
          </Link>
        </Flex>
      )}
    </Header>
  );
};

export default Navbar;

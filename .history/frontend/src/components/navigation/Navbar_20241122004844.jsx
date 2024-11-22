"use client";
import { message } from "antd";
import { Layout, Menu, Button, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLogout } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";
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
  const [authStatus, setAuthStatus] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleOnClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const handleLogout = async () => {
    await dispatch(fetchLogout());
    message.success("Logout successful");
    router.push("/login");
  };

  useEffect(() => {
    setAuthStatus(isAuthenticated);
  });

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
      {
                    authStatus ?
                        (
                            <ul className="hidden md:flex space-x-6">
                                <li>
                                    <a href="/diary" className="hover:font-semibold">
                                        Diary
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="hover:font-semibold">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        ) :
                        (
                            <ul className="hidden md:flex space-x-6">
                                <li>
                                    <a href="/" className="hover:font-semibold">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/about" className="hover:font-semibold">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="hover:font-semibold">
                                        Services
                                    </a>
                                </li>
                            </ul>
                        )
                }
      <Menu
        theme="light"
        onClick={handleOnClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      {authStatus ? (
        <Space size="large" align="center">
          <Button onClick={handleLogout}>Logout</Button>
        </Space>
      ) : (
        <Space size="large" align="center">
          <Link href="/login">
            <Button>Log in</Button>
          </Link>
          <Link href="register">
            <Button>Register</Button>
          </Link>
        </Space>
      )}
    </Header>
  );
};

export default Navbar;
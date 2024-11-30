"use client";
import Button from "./Button";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLogout } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { message } from "antd";

const Navbar = ({ isAuthenticated }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = async () => {
    await dispatch(fetchLogout());
    message.success("Logged out successful");
    router.push("/login");
  };
  const navLinks = isAuthenticated
    ? [
        { href: "/diary", label: "Diary" },
        { href: "/contact", label: "Contact" },
      ]
    : [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
      ];
  const logo = isAuthenticated ? { href: "/diary" } : { href: "/" };

  return (
    <div className="bg-white text-black px-6 py-4 border-b-2 border-black">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <a href={logo.href}>
            <img
              src={"/logo.svg"}
              alt="memobuddy"
              height={150}
              width={150}
            ></img>
          </a>
        </div>
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:font-semibold">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Buttons */}
        <div className="space-x-4">
          {isAuthenticated ? (
            <Button onClick={handleLogout}>Log Out</Button>
          ) : (
            <div className="space-x-4">
              <a href="/login">
                <Button>Login</Button>
              </a>
              <a href="/register">
                <Button>Sign up</Button>
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

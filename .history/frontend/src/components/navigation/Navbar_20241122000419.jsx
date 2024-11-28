import Button from "./Button";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLogout } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { message } from "antd";

const Navbar = () => {
  const [authStatus, setAuthStatus] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = async () => {
    await dispatch(fetchLogout());
    message.success("Logout successful");
    router.push("/login");
  };

  useEffect(() => {
    setAuthStatus(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <div className="bg-white text-black px-6 py-4 border-b-2 border-black">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <a href="/">
            <img
              src={"/logo.svg"}
              alt="memobuddy"
              height={150}
              width={150}
            ></img>
          </a>
        </div>

        {authStatus ? (
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
        ) : (
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
        )}

        {/* Buttons */}
        <div className="space-x-4">
          {authStatus ? (
            <Button onClick={handleLogout}>Log Out</Button>
          ) : (
            <div className="space-x-4">
              <a href="/login">
                <Button>Login</Button>
              </a>
              <a href="/register">
                <Button>Signup</Button>
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
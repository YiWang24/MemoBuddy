"use client";
import "./index.css";
import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/shared/Footer";
import { Provider } from "react-redux";
import store from "../lib/store";
import { useDispatch } from "react-redux";

export default function RootLayout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const serializedAuth = localStorage.getItem("authState");
    if (serializedAuth) {
      const authState = JSON.parse(serializedAuth);
      if (authState.isAuthenticated) {
        dispatch(loginSuccess({ user: authState.user }));
      }
    }
  }, [dispatch]);
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

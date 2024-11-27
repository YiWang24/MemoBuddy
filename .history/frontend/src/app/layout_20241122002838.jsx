"use client";
import "./index.css";
import React from "react";
import Navbar from 
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "../lib/store";

export default function RootLayout({ children }) {
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

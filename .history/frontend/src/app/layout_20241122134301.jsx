"use client";
import "./index.css";
import React from "react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/shared/Footer";
import { Provider } from "react-redux";
import store from "../lib/store";

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navigation />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

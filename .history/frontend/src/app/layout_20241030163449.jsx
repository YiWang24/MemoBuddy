"use client";
import "./index.css";
import React from "react";
import Layout from "../components/shared/Layout";
import { Provider } from "react-redux";
import store from "../lib/store";
import { metadata } from "./layout.server";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}

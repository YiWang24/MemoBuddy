import "./index.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import React from "react";
import Navbar from "../components/shared/Navbar";
import { Footer } from "antd/es/layout/layout";

import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;

export const metadata = {
  title: "MemoBuddy - Your Personal Memo Organizer",
  description:
    "MemoBuddy helps you organize, secure, and access your personal notes and memos anytime, anywhere. Simple, fast, and secure.",
  keywords:
    "MemoBuddy, memo app, personal organizer, notes app, memo management, secure notes, digital organizer",
  author: "Tech Army",
  openGraph: {
    title: "MemoBuddy - Your Personal Memo Organizer",
    description:
      "Organize, secure, and access your personal notes and memos anytime, anywhere with MemoBuddy.",
    url: "https://yourdomain.com",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MemoBuddy - Your Personal Memo Organizer",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Layout>
            <Navbar />
            <{children}
            <Footer />
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Layout, theme } from "antd";
const { Content } = Layout;
const Layout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};
export default Layout;

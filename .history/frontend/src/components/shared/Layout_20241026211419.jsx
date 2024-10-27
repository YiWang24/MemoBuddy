import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Layout as AntdLayout, theme } from "antd";
const { Content } = Layout;
const Layout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <AntdLayout>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </AntdLayout>
  );
};
export default Layout;

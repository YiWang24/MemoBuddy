import React from "react";
import Navbar from "./Navbar";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Content } = Layout;
const myLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Navbar />
      <Content>{children}</Content>
      <footer
    </Layout>
  );
};
export default App;

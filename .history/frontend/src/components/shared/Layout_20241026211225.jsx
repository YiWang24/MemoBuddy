import React from "react";
import Navbar from "./Navbar";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Content } = Layout;
const myLayout = (children) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Navbar />
      <Content>{children}</Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;

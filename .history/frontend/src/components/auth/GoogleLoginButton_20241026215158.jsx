import React from "react";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

const GoogleLoginButton = ({ onClick }) => {
  return (
    <Button
      type="primary"
      icon={<GoogleOutlined />}
      onClick={onClick}
      style={{
        backgroundColor: "#4285F4",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        border: "none",
      }}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleLoginButton;

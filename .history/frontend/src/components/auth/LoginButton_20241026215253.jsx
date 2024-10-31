import React from "react";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

const LoginButton = ({ icon,onClick ,text}) => {
  return (
    <Button
      type="primary"
      icon={{icon}}
      onClick={onClick}
      style={{
        backgroundColor: "#4285F4",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        border: "none",
      }}
    >
      {text}
    </Button>
  );
};

export default GoogleLoginButton;

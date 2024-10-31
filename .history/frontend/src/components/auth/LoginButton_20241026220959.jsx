import React from "react";
import { Button } from "antd";

const LoginButton = ({ icon,onClick ,text}) => {
  return (
    <Button
      type="primary"
      icon={icon}
      onClick={onClick}
      style={{
        backgroundColor: "white",
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

export default LoginButton;
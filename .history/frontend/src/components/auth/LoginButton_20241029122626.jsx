import React from "react";

const LoginButton = ({ icon,onClick ,text}) => {
  return (
    <Button
      type="primary"
      icon={icon}
      onClick={onClick}

      style={{
        backgroundColor: "white",
        color: "black",
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

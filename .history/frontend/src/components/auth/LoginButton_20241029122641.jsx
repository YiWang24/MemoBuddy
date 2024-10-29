import React from "react";

const LoginButton = ({ icon,onClick ,text}) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{
          width: "100%",
          height: "40px",
          borderRadius: "20px",
          backgroundColor: "#ffffff",
          color: "#000000",
          border: "none",
          cursor: "pointer",
        }}
      >
        {icon}
        <span style={{ marginLeft: "10px" }}>{text}</span>
      </button>
    </div>
  );
};

export default LoginButton;

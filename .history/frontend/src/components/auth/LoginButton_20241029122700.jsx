import React from "react";

const LoginButton = ({ icon,onClick ,text}) => {
  return (
    <div>
        {icon}
        <span style={{ marginLeft: "10px" }}>{text}</span>
      </button>
    </div>
  );
};

export default LoginButton;

import React from "react";

const LoginButton = ({ imgURL,alt,onClick ,text}) => {
  return (
    <div onClick={onClick}>
        <img src="imgURL" alt="buttonImage"/>
        <span>{text}</span>
    </div>
  );
};

export default LoginButton;

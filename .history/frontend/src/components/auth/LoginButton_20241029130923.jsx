import React from "react";

const LoginButton = ({ imgURL,alt,onClick ,text}) => {
  return (
    <div onClick={onClick}>
        <Im src={imgURL} alt={alt}/>
        <span>{text}</span>
    </div>
  );
};

export default LoginButton;

import Image from "next/image";
import React from "react";

const LoginButton = ({ imgURL,alt,onClick ,text}) => {
  return (
    <div className = "" onClick={onClick}>
        <Image src={imgURL} alt={alt} />
        <span>{text}</span>
    </div>
  );
};

export default LoginButton;

import Image from "next/image";
import React from "react";

const LoginButton = ({ imgURL,alt,onClick ,text}) => {
  return (
    <div onClick={onClick}>
        <Image src={img} />
        <span>{text}</span>
    </div>
  );
};

export default LoginButton;

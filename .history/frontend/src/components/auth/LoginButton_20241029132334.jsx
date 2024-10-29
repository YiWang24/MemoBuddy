import Image from "next/image";
import React from "react";

const LoginButton = ({ imgURL, alt, onClick, text }) => {
  return (
    <div className="  ">
      <div className="relative ">
        <Image
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt={alt}
          src={imgURL}
        />
        <b className="relative">Continue with Google</b>
      </div>
    </div>
  );
};

export default LoginButton;

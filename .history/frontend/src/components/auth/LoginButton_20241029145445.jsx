import Image from "next/image";
import React from "react";

const LoginButton = ({
  imgURL,
  alt,
  onClick,
  text,
  backgroundColor,
  textColor,
}) => {
  return (
    <div
      className={`w-full 
      flex items-center
      rounded-[40px] 
      ${backgroundColor ? backgroundColor : "bg-white"}  
      border-[1px]  border-black box-border h-14  overflow-hidden
       shrink-0  text-left text-[22px]
        ${
          textColor ? textColor : "text-black"
        } font-times-new-roman  m-2  cursor-pointer`}
      onClick={onClick}
    >
      <div className="w-full h-full flex flex-row items-center justify-center gap-4 px-6">
        {imgURL && (
          <Image
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt={alt}
            src={imgURL}
          />
        )}
        <b className="relative">{text}</b>
      </div>
    </div>
  );
};

export default LoginButton;
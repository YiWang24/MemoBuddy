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
      ${backgroundColor ? backgroundColor : "bg-white"}  transition transform hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(59,130,246,0.5)] active:scale-95 active:shadow-[0px_0px_15px_3px_rgba(37,99,235,0.7)]
      border-[1px]  border-black box-border h-14  overflow-hidden
       shrink-0  text-left text-[22px]
        ${
          textColor ? textColor : "text-black"
        } font-times-new-roman  cursor-pointer   m-8
        
        `}
      onClick={onClick}
    >
      <div className="w-full h-full flex flex-row items-center justify-center gap-4 p-10 ">
        {imgURL && (
          <Image
            className="w-6 relative h-6 overflow-hidden "
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

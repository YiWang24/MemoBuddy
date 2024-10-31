import React from "react";
import AuthButton from "./AuthButton";
const AuthForm = ({ formTitle, onClick }) => {
  return (
    <form className="flex flex-col gap-4 items-center justify-center w-[80%] h-full border-2 border-green-600">
      <div className="font-bold text-black text-2xl  tracking-[0] leading-[normal] whitespace-nowrap mb-4">
        {formTitle}
      </div>
      <div className="flex flex-col justify-center items-start gap-2 w-full">
        <label htmlFor="email" className="border-[none] [background:none] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[normal] p-0 pl-0">
          Email Address
        </label>
        <input
          id="email"
          placeholder="email@example.com"
          type="email"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      
      <div className="w-full">
        <AuthButton
          onClick={onClick}
          text={formTitle}
          backgroundColor={"bg-zinc-300"}
          textColor={"text-white"}
        />
      </div>
    </form>
  );
};

export default AuthForm;
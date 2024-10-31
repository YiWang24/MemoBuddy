import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-[60%] h-[60%] flex flex-col items-center  border-red-500 border-2">
        <div className="relative flex flex-col items-center justify-center gap-4 text-center text-[40px] text-black ">
          <div className="relative w-12 h-12 rounded-full bg-zinc-400 "></div>
          <div className="relative font-medium">Welcome back</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 text-center text-[20px] text-base mt-10 ">
          <div className="text-[24px] font-bold">Reset password</div>
          <div className="text-[22px] font-sans leading-[24px] text-gray-500">
            No worries, We’ll send you reset instructions
          </div>

          <label
            htmlFor="email"
            className="w-full   font-normal text-[#666666] text-base tracking-[0] leading-[normal] p-0 pl-0"
          >
            Email Address
          </label>
          <input
            id="email"
            placeholder="email@example.com"
            type="email"
            value={formData.email || ""}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default page;

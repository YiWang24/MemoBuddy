import React from "react";

const Divider = () => {
  return (
    <>
      <div className="w-[0.5%] flex flex-col items-center justify-center gap-4   ">
        <div className=" h-[40%] bg-slate-400 border-2"></div>
        <div className=" h-[10%] flex items-center justify-center text-lg text-bold text-black gap-4">
          <div>OR</div>
        </div>
        <div className="h-[50%] bg-slate-400 border-2"></div>
      </div>
    </>
  );
};

export default Divider;

import React from "react";

const Divider = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="h-1 w-[40%] bg-slate-400 rounded-lg"></div> {/* 左边的分隔线 */}
      <div className="flex items-center justify-center text-lg font-bold text-black p-2">
        OR
      </div>
      <div className="h-1 w-[40%] bg-slate-400 rounded-lg"></div> {/* 右边的分隔线 */}
    </div>
  );
};

export default Divider;

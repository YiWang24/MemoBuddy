import React from "react";

const Input = ({label,}) => {
  return (
    <>
      <label
        htmlFor="email"
        className="w-full   font-normal text-[#666666] text-base tracking-[0] leading-[normal] p-0 pl-0"
      >
        {label}
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
      {formErrors.email && (
        <div className="text-red-500 text-sm mt-1">{formErrors.email}</div>
      )}
    </>
  );
};

export default Input;
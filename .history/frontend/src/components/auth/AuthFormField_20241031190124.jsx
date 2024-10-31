import { useEffect, useState } from "react";
import React from "react";
import { BiHide, BiShow } from "react-icons/bi";

const Input = ({
  id,
  label,
  placeholder,
  type = "text",
  onValidInput,
  required = false,
}) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const validateField = (value) => {
    let error = "";
    if (required && !value) {
      error = `${label} is required`;
    } else if (type === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Email is invalid";
    } else if (type === "password" && value.length < 6) {
      error = "Password must be at least 6 characters";
    }
    setError(error);
  };


  const handleBlur = () => {
    setIsTouched(true);
    validateField(value);
  };
  useEffect(() => {
    const errorMsg = validateField(inputValue);
    setError(errorMsg);
    if (!errorMsg) {
      onValidInput(id,inputValue);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-start gap-2 w-full">
      <label
        htmlFor={id}
        className="w-full justify-between items-center inline-flex   font-normal text-[#666666] text-base tracking-[0] leading-[normal] p-0 pl-0"
      >
        <span>{label}</span>
        {type === "password" && (
          <span
            className="flex items-center justify-end gap-2 cursor-pointer hover:text-blue-500"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? <BiShow /> : <BiHide />}{" "}
            {isPasswordVisible ? "Show" : "Hide"}
          </span>
        )}
      </label>

      <input
        id={id}
        placeholder={placeholder}
        type={type === "password" && isPasswordVisible ? "text" : type}
        value={value || ""}
        onBlur={handleBlur}
        onChange={(e)=>setInputValue(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required={required}
      />
      {isTouched && error && (
        <div className="text-red-500 text-sm mt-1">{error}</div>
      )}
    </div>
  );
};

export default Input;

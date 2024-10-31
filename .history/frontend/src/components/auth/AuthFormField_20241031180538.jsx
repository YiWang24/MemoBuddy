import { useEffect } from "react";
import React from "react";

const Input = ({
  id,
  label,
  placeholder,
  type = "text",
  value,
  required = false,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const validateField = (value) => {
    let error = "";
    if (required && !value) {
      error = `${label} is required`;
    } else if (type === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Email is invalid";
    } else if (type === "password" && value.length < 6) {
      error = "Password must be at least 6 characters";
    }
    setErrorMessage(error);
  };

  useEffect(() => {
    validateField(value);
  }, [value]);

  return (
    <div className="flex flex-col justify-center items-start gap-2 w-full">
      <label
        htmlFor={id}
        className="w-full   font-normal text-[#666666] text-base tracking-[0] leading-[normal] p-0 pl-0"
      >
        {label}
      </label>
      {type === "password" && (
        <span
          className="flex items-center justify-end gap-2 cursor-pointer hover:text-blue-500"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? <BiShow /> : <BiHide />}{" "}
          {isPasswordVisible ? "Show" : "Hide"}
        </span>
      )}
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        value={value || ""}
        onChange={(e)=>{onChange(e.target.value)}}
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      {formErrors.email && (
        <div className="text-red-500 text-sm mt-1">{formErrors.email}</div>
      )}
    </div>
  );
};

export default Input;

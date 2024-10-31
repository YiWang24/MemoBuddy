import React from "react";

const Input = ({
  id,
  label,
  placeholder,
  type = "text",
  formData,
  onChange,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validateFleld = (value) => {
    let error = "";
    if (required && !value) {
      error = `${label} is required`;
    }else if (  type === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Email is invalid";
    } else if (type === "password" && value.length < 6) {
      error = "Password must be at least 6 characters";

    }
    setErrorMessage(error);

    
    if (Object.keys(newFormErrors).length > 0) {
      message.error("Please fill in the required fields");
    }
    return Object.keys(newFormErrors).length === 0;
  };

  return (
    <>
      <label
        htmlFor={id}
        className="w-full   font-normal text-[#666666] text-base tracking-[0] leading-[normal] p-0 pl-0"
      >
        {label}
      </label>
      {type === "password" && (
        <span
          className="flex items-center justify-end gap-2 cursor-pointer hover:text-blue-500"
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? <BiShow /> : <BiHide />}{" "}
          {isPasswordVisible ? "Show" : "Hide"}
        </span>
      )}
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        value={formData.email || ""}
        onChange={onChange}
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

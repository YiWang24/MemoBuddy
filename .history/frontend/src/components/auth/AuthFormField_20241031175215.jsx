import React from "react";

const Input = ({
  id,
  label,
  placeholder,
  type = "text",
  formData,
  onChange,
  formErrors,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
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
          className="flex items-center gap-2 cursor-pointer hover:text-blue-500"
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

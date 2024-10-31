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
    let error="";
    if(required && !value)
    {
      
    }
    if (!formData.email) {
      newFormErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newFormErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newFormErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      newFormErrors.password = "password must be at least 6 characters";
    }
    setFormErrors(newFormErrors);
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

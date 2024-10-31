import React from "react";
import AuthButton from "./AuthButton";
import { BiHide, BiShow } from "react-icons/bi";
const AuthForm = ({ formTitle, onClick, onSubmit }) => {
  const [formData, setFormData] = React.useState({});
  const [formErrors, setFormErrors] = React.useState({});
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validateForm = () => {
    const newFormErrors = {};
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
    return Object.keys(newFormErrors).length === 0;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      onFinish(onSubmit);
    }else{
      console.log("Form errors:", formErrors);
    }
  };

  return (
    <form
      className="flex flex-col gap-4 items-center justify-center w-[80%] h-full"
      onSubmit={handleSubmit}
    >
      <div className="font-bold text-black text-2xl  tracking-[0] leading-[normal] whitespace-nowrap mb-4">
        {formTitle}
      </div>
      <div className="flex flex-col justify-center items-start gap-2 w-full">
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

        <label
          htmlFor="password"
          className="w-full justify-between items-center inline-flex  font-normal text-[#666666] text-base tracking-[0] leading-[normal] p-0 pl-0"
        >
          <span>Password</span>
          <span
            className="flex items-center gap-2 cursor-pointer hover:text-blue-500"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <BiShow /> : <BiHide />}{" "}
            {isPasswordVisible ? "Show" : "Hide"}
          </span>
        </label>
        <input
          id="password"
          placeholder="********"
          type={isPasswordVisible ? "text" : "password"}
          value={formData.password || ""}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
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

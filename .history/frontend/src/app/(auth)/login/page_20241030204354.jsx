"use client";
import { Divider, AuthButton, AuthForm } from "../../../components/auth/";
import { SOCIAL_MEDIA } from "../../../constants";
import { useRouter } from "next/navigation";
import { weatherApi } from "@/api";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { fetchLogin } from "@/lib/features/auth/authSlice";
export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleGoogleLoginClick = async () => {
    const data = await weatherApi.getWeather(37.7749, -122.4194);
    console.log(data);
  };

  const handleSubmit = async (values) => {
      const result = await dispatch(fetchLogin(values));
      if (result) {
        router.push("/diary");
        message.success("Login successful");
        const user = useSelector((state) => state.auth.user);
        console.log(user);
      }else{
        message.error("Login failed");
      }
   

  };
  const handleSignUpClick = () => {
    router.push("/register");
  };
  return (
    <div className=" w-full  h-screen flex flex-col items-center justify-center">
      {/* title */}
      <div className="h-[20%] flex flex-col items-center justify-end gap-4 relative mt-4">
        <div className="relative w-12 h-12 rounded-full bg-zinc-400 "></div>
        <div className="relative w-fit font-bold text-[40px] text-center tracking-[0] leading-normal whitespace-nowrap ">
          Log in
        </div>
      </div>

      {/* Login main table */}
      <div className="h-[60%] w-[60%] flex  flex-row  gap-8 mt-4">
        {/* login form */}
        <div className="w-[50%]  flex justify-center items-center  ">
          <AuthForm formTitle="Log in" onSubmit={handleSubmit} />
        </div>
        {/* OR */}
        <Divider />
        {/* login button */}
        <div className="w-[50%]  flex items-center justify-center ">
          <div className="w-[80%] flex flex-col items-center justify-center gap-4">
            <AuthButton
              imgURL={SOCIAL_MEDIA[0].src}
              alt={SOCIAL_MEDIA[0].alt}
              onClick={handleGoogleLoginClick}
              text="Continue with Google"
            />
            <AuthButton
              imgURL={SOCIAL_MEDIA[1].src}
              alt={SOCIAL_MEDIA[1].alt}
              onClick={handleSignUpClick}
              text="Sign Up with email"
            />
          </div>
        </div>
      </div>
      <div className="h-[20%]  text-center justify-start gap-6  w-fit  font-medium text-[#111111] text-base tracking-[0]  whitespace-nowrap underline">
        <a href="/forgot-password">Forgot password?</a>
      </div>
    </div>
  );
}

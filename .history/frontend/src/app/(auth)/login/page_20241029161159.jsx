"use client";
import { Divider, AuthButton, AuthForm } from "../../../components/auth/";
import { socialMedia } from "../../../constants";
export default function Login() {
  const handleGoogleLogin = () => {};
  const handleMailLogin = () => {};
  console.log(socialMedia[0].src);
  return (
    <div className=" w-full  h-screen flex flex-col items-center justify-center">
      {/* title */}
      <div className="h-[20%] flex flex-col items-center justify-end gap-4 relative">
        <div className="relative w-12 h-12 rounded-full bg-zinc-400 "></div>
        <div className="relative w-fit font-bold text-[40px] text-center tracking-[0] leading-normal whitespace-nowrap ">
          Log in
        </div>
      </div>

      {/* Login main table */}
      <div className="h-[60%] w-[60%] flex  flex-row  gap-8 mt-4">
        {/* login form */}
        <div className="w-[50%]  border-cyan-400 border-2 ">
          <AuthForm formTitle="Log in" />
        </div>
        {/* OR */}
        <Divider />
        {/* login button */}
        <div className="w-[50%] flex flex-col items-center justify-center gap-4 ">
          <AuthButton
            imgURL={socialMedia[0].src}
            alt={socialMedia[0].alt}
            onClick={handleMailLogin}
            text="Continue with Google"
          />
          <AuthButton
            imgURL={socialMedia[0].src}
            alt={socialMedia[0].alt}
            onClick={handleMailLogin}
            text="Sign Up with email"
          />
        </div>
      </div>
      <div className="h-[20%]  text-center justify-start gap-6  w-fit  font-medium text-[#111111] text-base tracking-[0]  whitespace-nowrap underline">
        <a href="/forgot-password">Forgot password?</a>
      </div>
    </div>
  );
}

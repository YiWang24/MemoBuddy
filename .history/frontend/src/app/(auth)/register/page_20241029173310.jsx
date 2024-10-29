"use client";
import { Divider, AuthButton, AuthForm } from "../../../components/auth/";
import { socialMedia } from "../../../constants";

export default function Register() {
  const handleGoogleLogin = () => {};
  const ToggleEmailSignUp = () => {};
  console.log(socialMedia[0].src);
  return (
    <div className=" w-full  h-screen flex flex-col items-center justify-center">
      {/* title */}
      <div className="h-[20%] flex flex-col items-center justify-end gap-4 relative mt-4">
        <div className="relative w-12 h-12 rounded-full bg-zinc-400 "></div>
        <div className="relative w-fit font-bold text-[40px] text-center tracking-[0] leading-normal whitespace-nowrap ">
          Sign up
        </div>
      </div>

      {/* Login main table */}
      <div className="h-[60%] w-[60%] flex  flex-row  gap-8 mt-4">
        {/* login form */}
        <div className="w-[50%]  flex justify-center items-center  ">
          <AuthForm formTitle="Sign up" />
        </div>
        {/* OR */}
        <Divider />
        {/* login button */}
        <div className="w-[50%]  flex items-center justify-center ">
          <div className="w-[80%] flex flex-col items-center justify-center gap-4">
            <AuthButton
              imgURL={socialMedia[0].src}
              alt={socialMedia[0].alt}
              onClick={handleGoogleLogin}
              text="Continue with Google"
            />
           
              <AuthButton
                imgURL={socialMedia[1].src}
                alt={socialMedia[1].alt}
                text="Log in with email"
                onClick={}
              />
          
          </div>
        </div>
      </div>
      <div className="h-[20%]  text-center justify-start gap-6  w-fit  font-medium text-[#111111] text-base tracking-[0]  whitespace-nowrap underline">
        <a href="/login">Already have an account?</a>
      </div>
    </div>
  );
}

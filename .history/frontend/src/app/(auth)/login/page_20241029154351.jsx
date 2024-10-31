"use client";
import AuthButton from "../../../components/auth/AuthButton";
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
        <div className="relative w-fit font-bold text-[40px] text-center tracking-[0] leading-normal ">
          Log in
        </div>
      </div>

      {/* Login main table */}
      <div className="h-[60%] w-[60%] flex  flex-row  ">
        {/* login form */}
        <div className="w-[50%]  border-cyan-400 border-2 ">
          <div>Log in</div>
          <div className="flex flex-col gap-4">
            <label htmlFor="email">Email</label>
            <input placeholder="email@example.com" type="email"></input>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <label htmlFor="password">Password</label>
              <div>Hide</div>
            </div>
            <input placeholder="password" type="password"></input>
          </div>
          <AuthButton
            onClick={handleMailLogin}
            text="Log in"
            backgroundColor={"bg-zinc-300"}
            textColor={"text-white"}
          />
        </div>
        {/* OR */}
        <div className="flex flex-col items-center justify-center gap-4  w-[0.5%] ">
          <div className=" h-[50%] bg-slate-400 border-2"></div>
          <div className=" h-[10%] flex items-center justify-center text-bold text-bla gap-4">
            <div>OR</div>
          </div>
          <div className="h-[50%] bg-slate-400 border-2"></div>
        </div>
        {/* login button */}
        <div className="w-[50%] flex flex-col items-center justify-center gap-4 border-cyan-400 border-2">
          <AuthButton
            imgURL={socialMedia[0].src}
            alt={socialMedia[0].alt}
            onClick={handleMailLogin}
            text="Login with Google"
          />
          <AuthButton
            imgURL={socialMedia[0].src}
            alt={socialMedia[0].alt}
            onClick={handleMailLogin}
            text="Login with mail"
          />
        </div>
      </div>
      <div className="h-[20%] flex flex-col items-center justify-start gap-6  w-fit mt-[-1.00px]  font-medium text-[#111111] text-base text-right tracking-[0]  underline">
        <a>Forgot password?</a>
      </div>
    </div>
  );
}
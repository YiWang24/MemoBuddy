"use client";
import LoginButton from "../../../components/auth/LoginButton";
import { socialMedia } from "../../../constants";
import { google } from "../../../assets/icons/index";
export default function Login() {
  const handleGoogleLogin = () => {};
  const handleMailLogin = () => {};
  console.log(socialMedia[0].src);
  return (
    <div className="bg-white w-full flex flex-col items-center justify-center h-screen">
      {/* title */}
      <div className="inline-flex flex-col items-center justify-end gap-4 relative">
        <div className="relative w-12 h-12 rounded-full bg-zinc-400 "></div>
        <div className="relative w-fit font-bold text-[40px] text-center tracking-[0] leading-normal ">
          Log in
        </div>
      </div>

      {/* Login main table */}
      <div className="inline-flex items-start relative ">
        {/* login form */}
        <div className="relative  border-cyan-400 border-2 ">
          <div>Log in</div>
          <div className="flex flex-col gap-4">
            <label htmlFor="email">Email</label>
            <input placeholder="email@example.com" type="email"></input>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="password">Password</label>
              <
            </div>
            <input placeholder="password" type="password"></input>
          </div>
        </div>
        {/* login button */}
        <div>
          <LoginButton
            imgURL={socialMedia[0].src}
            alt={socialMedia[0].alt}
            onClick={handleMailLogin}
            text="Login with Google"
          />
          <LoginButton
            imgURL={socialMedia[0].src}
            alt={socialMedia[0].alt}
            onClick={handleMailLogin}
            text="Login with mail"
          />
        </div>
      </div>
    </div>
  );
}

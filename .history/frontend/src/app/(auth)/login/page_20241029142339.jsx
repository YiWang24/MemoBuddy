"use client";
import LoginButton from "../../../components/auth/LoginButton";
import { socialMedia } from "../../../constants";
import { google } from "../../../assets/icons/index";
export default function Login() {
  const handleGoogleLogin = () => {};
  const handleMailLogin = () => {};
  console.log(socialMedia[0].src);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <div className="relative w-12 h-12 rounded-full bg-zinc-400 "></div>
        <div className="relative w-fit font-bold text-[40px] text-center tracking-[0] leading-normal ">Log in</div>
      </div>

     
      <div></div>
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
  );
}

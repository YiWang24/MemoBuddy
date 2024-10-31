"use client";
import LoginButton from "../../../components/auth/LoginButton";
import {socialMedia} from "../../../constants";

export default () => {
  const handleGoogleLogin = () => {};
  const handleMailLogin = () => {};

  return (
    <div>
      <img src="/"/>
      <LoginButton
        imgURL={socialMedia[0].src}
        alt="mail Logo"
        onClick={handleMailLogin}
        text="Login with Mail"
      />
    </div>
  );
};

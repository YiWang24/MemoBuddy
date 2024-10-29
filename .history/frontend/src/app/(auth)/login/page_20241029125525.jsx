"use client";
import LoginButton from "../../../components/auth/LoginButton";
import {socialMedia} from "../../../constants";
import google from 
export default () => {
  const handleGoogleLogin = () => {};
  const handleMailLogin = () => {};

  return (
    <div>
      
      <LoginButton
        imgURL={google}
        alt="mail Logo"
        onClick={handleMailLogin}
        text="Login with Google"
      />
    </div>
  );
};

"use client";
import LoginButton from "../../../components/auth/LoginButton";
import socialMedia from "../../../constants";

export default () => {
  const handleGoogleLogin = () => {};
  const handleMailLogin = () => {};

  return (
    <div>
      <LoginButton
        imgURL={socialMedia}
        alt="mail Logo"
        onClick={handleMailLogin}
        text="Login with Mail"
      />
    </div>
  );
};
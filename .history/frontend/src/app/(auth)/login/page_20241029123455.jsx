"use client";
import LoginButton from "../../../components/auth/LoginButton";
import socialMedia from "../../../constants";

export default () => {
  const { token } = theme.useToken();
  const handleGoogleLogin = () => {};
  const handleMailLogin = () => {};

  return (
    <div>
      {socialMedia.map(({ src, alt }) => (
        <LoginButton
          imgURL={src}
          alt={alt}
          onClick={handleGoogleLogin}
          text="Login with Google"
        />
      ))}
      <LoginButton
        imgURL={mail}
        alt="mail Logo"
        onClick={handleMailLogin}
        text="Login with Mail"
      />
    </div>
  );
};

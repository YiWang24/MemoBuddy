import React from "react";
import { Button } from "../../components/Button";
import { SocialMediaSignup } from "../../components/SocialMediaSignup";
import { Property1Hide } from "../../icons/Property1Hide";
import { SocialMediaLogo4 } from "../../icons/SocialMediaLogo4";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div-2">
        <footer className="footer">
          <p className="designed-developed">
            Designed &amp; Developed by tech army
          </p>

          <p className="text-wrapper">© MemoBuddy 2024 | All Rights Reserved</p>
        </footer>

        <div className="log-in">
          <div className="frame-2">
            <div className="frame-3">
              <div className="logo" />

              <div className="text-wrapper-2">Log in</div>
            </div>

            <div className="frame-4">
              <div className="div-3">
                <div className="frame-5">
                  <div className="text-wrapper-3">Log in</div>

                  <div className="div-4">
                    <input
                      className="label"
                      placeholder="Email address"
                      type="email"
                    />

                    <div className="text-field" />
                  </div>

                  <div className="div-4">
                    <div className="frame-6">
                      <div className="label-2">Password</div>

                      <div className="password-hide-see">
                        <Property1Hide
                          className="icon"
                          color="#666666"
                          opacity="0.8"
                        />
                        <div className="text-wrapper-4">Hide</div>
                      </div>
                    </div>

                    <div className="text-field" />
                  </div>

                  <button className="frame-wrapper">
                    <div className="sign-up-wrapper">
                      <div className="sign-up-2">Log in</div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="divider">
                <div className="divider-2" />

                <div className="text-wrapper-5">OR</div>

                <div className="divider-2" />
              </div>

              <div className="div-3">
                <div className="frame-7">
                  <SocialMediaSignup
                    className="social-media-signup-login"
                    divClassName="social-media-signup-login-instance"
                    frameClassName="social-media-signup-instance"
                    icon={<SocialMediaLogo4 className="social-media-logo-4" />}
                    property1="google"
                  />
                  <Button
                    className="button-instance"
                    divClassName="button-2"
                    frameClassName="design-component-instance-node"
                    text="Sign up with email"
                  />
                </div>
              </div>
            </div>

            <div className="frame-8">
              <div className="text-wrapper-6">Forgot password?</div>

              <div className="link-text">
                <p className="by-creating-an">
                  <span className="span">
                    Secure Login with reCAPTCHA subject to <br />
                    Google{" "}
                  </span>

                  <span className="text-wrapper-7">Terms</span>

                  <span className="span"> &amp; </span>

                  <span className="text-wrapper-7">Privacy</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar">
          <div className="frame-9">
            <button className="div-wrapper">
              <div className="text-wrapper-8">Login</div>
            </button>

            <div className="nav-links">
              <div className="text-wrapper-9">Home</div>

              <div className="text-wrapper-10">About</div>

              <div className="text-wrapper-11">Contact</div>
            </div>

            <button className="button-3">
              <div className="text-wrapper-8">Register</div>
            </button>

            <div className="text-wrapper-12">MemoBuddy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

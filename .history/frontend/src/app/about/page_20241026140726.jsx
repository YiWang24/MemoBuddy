import React from "react";
import Link from "next/link";
import "./style.css";
export default function Wrapper() {
  return (
    <div className="wrapper">
      <div className="div">
        <div className="frame">
          <Link href="/about">
            <div className="text-wrapper">About Us</div>
          </Link>
        </div>

        <div className="navbar">
          <Link href="/login">
            <button className="button">
              <div className="text-wrapper-2">Login</div>
            </button>
          </Link>

          <div className="nav-links">
            <Link href="/home">
              <div className="text-wrapper-3">Home</div>
            </Link>

            <Link href="/about">
              <div className="text-wrapper-4">About</div>
            </Link>

            <Link href="/contact">
              <div className="text-wrapper-5">Contact</div>
            </Link>
          </div>
          <Link href="/register">
            <button className="button">
              <div className="text-wrapper-2">Register</div>
            </button>
          </Link>
        </div>

        <div className="overlap">
          <div className="frame-2">
            <p className="p">Welcome to Our Secure Diary</p>
          </div>

          <div className="frame-3">
            <div className="text-wrapper-7">Meet Our Team</div>
          </div>

          <div className="our-password-wrapper">
            <p className="our-password">
              <span className="span">
                {" "}
                <br />
              </span>

              <span className="text-wrapper-8">
                Our password-protected diary is designed to offer a safe and"</Link>
          <button className="div-wrapper">
            <div className="text-wrapper-2">Register</div>
          </button>

          <div className="text-wrapper-6">MemoBuddy</div>
        </div>

        <div className="overlap">
          <div className="frame-2">
            <p className="p">Welcome to Our Secure Diary</p>
          </div>

          <div className="frame-3">
            <div className="text-wrapper-7">Meet Our Team</div>
          </div>

          <div className="our-password-wrapper">
            <p className="our-password">
              <span className="span">
                {" "}
                <br />
              </span>

              <span className="text-wrapper-8">
                Our password-protected diary is designed to offer a safe and
            <div className="text-wrapper-3">Home</div>

            <div className="text-wrapper-4">About</div>

            <div className="text-wrapper-5">Contact</div>
          </div>

          <button className="div-wrapper">
            <div className="text-wrapper-2">Register</div>
          </button>

          <div className="text-wrapper-6">MemoBuddy</div>
        </div>

        <div className="overlap">
          <div className="frame-2">
            <p className="p">Welcome to Our Secure Diary</p>
          </div>

          <div className="frame-3">
            <div className="text-wrapper-7">Meet Our Team</div>
          </div>

          <div className="our-password-wrapper">
            <p className="our-password">
              <span className="span">
                {" "}
                <br />
              </span>

              <span className="text-wrapper-8">
                Our password-protected diary is designed to offer a safe and
                private space for your thoughts, memories, and daily
                reflections. With user-friendly features and advanced
                encryption, we ensure that your entries remain secure and
                accessible only to you. Whether you’re documenting your goals or
                sharing your daily experiences, our diary is your trusted
                companion. <br /> <br />
                Your privacy, our priority
              </span>

              <span className="span">
                . <br />
              </span>
            </p>
          </div>

          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="rectangle" />

              <p className="fares-islam-content">
                <span className="text-wrapper-9">Fares Islam</span>

                <span className="text-wrapper-10">
                  Content strategist
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </p>
            </div>
          </div>

          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="text-wrapper-11">Komalpreet Singh</div>

              <p className="UI-designer-lorem">
                UI Designer
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="frame-4">
            <div className="yi-wang-developer-wrapper">
              <p className="yi-wang-developer">
                <span className="text-wrapper-12">
                  Yi Wang Developer{"   "}
                </span>

                <span className="text-wrapper-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.veloper
                </span>
              </p>
            </div>
          </div>

          <div className="frame-5">
            <p className="text-wrapper-7">Can you help us improve?</p>
          </div>
        </div>

        <div className="frame-6">
          <div className="text-wrapper-13">Name</div>

          <img
            className="img"
            alt="Rectangle"
            src="https://c.animaapp.com/0bu2SKsP/img/rectangle-52.svg"
          />

          <div className="text-wrapper-14">Email</div>

          <div className="rectangle-2" />

          <div className="text-wrapper-15">Feedback</div>

          <div className="rectangle-3" />

          <div className="frame-7">
            <div className="text-wrapper-16">Submit</div>
          </div>
        </div>

        <footer className="footer">
          <p className="designed-developed">
            Designed &amp; Developed by tech army
          </p>

          <p className="text-wrapper-17">
            © MemoBuddy 2024 | All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  );
}

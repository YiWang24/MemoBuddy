import React from "react";
import Link from "next/link";
import "./style.css";

export default function Wrapper() {
  return (
    <div className="wrapper">
      <div className="div">
        <div className="banner">
          <img
            className="element"
            alt="Element"
            src="https://c.animaapp.com/hGRjiP4I/img/1-1d63e1b0.png"
          />
        </div>

        <div className="navbar">
          <Link href="/login" passHref>
            <button className="button">
              <div className="text-wrapper">Login</div>
            </button>
          </Link>
         

          <div className="nav-links">
            <div className="text-wrapper-2">Home</div>

            <div className="text-wrapper-3">About</div>

            <div className="text-wrapper-4">Contact</div>
          </div>

          <button className="div-wrapper">
            <div className="text-wrapper">Register</div>
          </button>

          <div className="text-wrapper-5">MemoBuddy</div>
        </div>

        <div className="overlap">
          <div className="frame">
            <div className="text-wrapper-6">Contact Us</div>
          </div>

          <div className="frame-wrapper">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-7">Name</div>

                <div className="rectangle" />

                <div className="text-wrapper-8">Email</div>

                <div className="rectangle-2" />

                <div className="text-wrapper-9">Subject</div>

                <div className="rectangle-3" />

                <div className="your-query">Your&nbsp;&nbsp;query</div>

                <div className="rectangle-4" />

                <div className="overlap-2">
                  <div className="text-wrapper-10">Submit</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-2">
          <div className="text-wrapper-11">Frequently Asked Questions?</div>
        </div>

        <div className="overlap-wrapper">
          <div className="overlap-3">
            <p className="what-should-i-do-if">
              What&nbsp;&nbsp;should I do if I forget my password?
            </p>

            <p className="click-on-the-forgot">
              Click on the &#34;Forgot Password?&#34; link to reset it via your
              email.
            </p>
          </div>
        </div>

        <div className="frame-3">
          <div className="overlap-4">
            <div className="rectangle-5" />

            <p className="can-i-share-my-diary">
              <span className="span">
                Can I share my diary entries with others
              </span>

              <span className="text-wrapper-12">
                ?
                <br />
                Yes you can export entries as text but not as PDF in order
                to&nbsp;&nbsp;share them manually.
              </span>
            </p>
          </div>
        </div>

        <div className="frame-4">
          <div className="overlap-3">
            <p className="what-is-a-password">
              <span className="span">
                What is a password-protected diary?
                <br />
                <br />
              </span>

              <span className="text-wrapper-12">
                It’s a secure digital journal that requires a password to access
                your entries.
              </span>
            </p>
          </div>
        </div>

        <div className="frame-5">
          <div className="overlap-5">
            <div className="rectangle-6" />

            <p className="can-i-access-my">
              <span className="span">
                {"  "}Can I access my diary from multiple devices?
              </span>

              <span className="text-wrapper-12">
                {" "}
                <br />
                Yes, you can access your diary from any device using the same
                account credentials.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
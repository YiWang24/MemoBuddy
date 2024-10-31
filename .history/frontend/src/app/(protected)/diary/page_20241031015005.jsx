"use client";
import React from "react";
import "./style.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCheckUser } from "@/lib/features/auth/authSlice";
import { useSearchParams } from "next/navigation";

export default function Wrapper() {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  console.log(searchParams);
  useEffect(() => {
    const params = {
      googleId: searchParams.get("googleId"),
      email: searchParams.get("email"),
    };
    console.log("Current URL:------------------------------", params);
    dispatch(fetchCheckUser(searchParams));
  }, [searchParams]);

  return (
    <div className="wrapper">
      <div className="div">
        <div className="section">
          <div className="create-new">
            <div className="frame" />
          </div>

          <div className="location">
            <img
              className="image"
              alt="Image"
              src="https://c.animaapp.com/ldsw5inR/img/image-2@2x.png"
            />

            <button className="button">
              <div className="text-wrapper">GRANT ACCESS</div>
            </button>
          </div>

          <div className="thought">
            <div className="text-wrapper-2">Today’s thought</div>

            <p className="p">
              Everything you want is on the other side of fear
            </p>
          </div>

          <div className="sidebar">
            <div className="frame-2">
              <div className="frame-3">
                <img
                  className="img"
                  alt="Image"
                  src="https://c.animaapp.com/ldsw5inR/img/image-4-2@2x.png"
                />

                <img
                  className="image-2"
                  alt="Image"
                  src="https://c.animaapp.com/ldsw5inR/img/image-5-1@2x.png"
                />
              </div>

              <p className="text-wrapper-3">A day during study week</p>
            </div>

            <div className="frame-4">
              <div className="text-wrapper-3">First ever social event</div>

              <div className="frame-3">
                <img
                  className="img"
                  alt="Image"
                  src="https://c.animaapp.com/ldsw5inR/img/image-4-2@2x.png"
                />

                <img
                  className="image-2"
                  alt="Image"
                  src="https://c.animaapp.com/ldsw5inR/img/image-6@2x.png"
                />
              </div>
            </div>

            <div className="frame-5">
              <div className="frame-3">
                <img
                  className="img"
                  alt="Image"
                  src="https://c.animaapp.com/ldsw5inR/img/image-4-2@2x.png"
                />

                <img
                  className="image-2"
                  alt="Image"
                  src="https://c.animaapp.com/ldsw5inR/img/image-5-1@2x.png"
                />
              </div>

              <div className="text-wrapper-3">Time spent on....</div>
            </div>

            <div className="frame-6" />

            <div className="frame-7" />

            <div className="frame-8" />
          </div>
        </div>

        <div className="navbar">
          <Link href="/logout">
            <button className="div-wrapper">
              <div className="text-wrapper-4">Log Out</div>
            </button>
          </Link>
          <div className="nav-links">
            <div className="text-wrapper-5">My Diary</div>
            <Link href="/contact" passHref>
              <div className="text-wrapper-6">About Us</div>
            </Link>
          </div>
          <Link href="/">
            <div className="text-wrapper-7">MemoBuddy</div>
          </Link>
          <img
            className="image-3"
            alt="Image"
            src="https://c.animaapp.com/ldsw5inR/img/image-1@2x.png"
          />
        </div>

        <footer className="footer">
          <p className="designed-developed">
            Designed &amp; Developed by tech army
          </p>

          <p className="text-wrapper-8">
            © MemoBuddy 2024 | All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import "./style.css";
import MeetOurTeam from "@/components/about/MeetOurTeam";
import AboutBanner from "@/components/about/AboutBanner";
import FeedbackForm from "@/components/about/FeedbackForm";

export default function page() {
  return (
    <main className="about-page">

      {/* <section className="hero-section">
        <h2 className="hero-title">About Us</h2>
      </section> */}

      <section className="welcome-section">
        <h2 className="welcome-title">Welcome to Our Secure Diary</h2>
        <p className="welcome-description">
          Our password-protected diary is designed to offer a safe and private
          space for your thoughts, memories, and daily reflections. With
          user-friendly features and advanced encryption, we ensure that your
          entries remain secure and accessible only to you. Whether you’re
          documenting your goals or sharing your daily experiences, our diary
          is your trusted companion.
          <br />
          <br />
          <strong>Your privacy, our priority.</strong>
        </p>
      </section>

      <AboutBanner></AboutBanner>

      {/* <section className="team-section">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-container">
          <article className="team-member1">
            <h3><b>Fares Islam</b></h3>
            <br></br>
            <p>
              Frontend-Developer
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </article>
          <article className="team-member2">
            <h3> <b>Komalpreet Singh</b></h3>
            <br></br>
            <p>
              UI Designer/Backend-Developer
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </article>
          <article className="team-member3">
            <h3><b>Yi Wang</b></h3>
            <br></br>
            <p>
              Did nothing
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </article>
        </div>
      </section> */}

      <MeetOurTeam></MeetOurTeam>
      <h2 className='text-center p-6 text-3xl mt-6 font-semibold'>
        Can you help us improve?
      </h2>
      <FeedbackForm></FeedbackForm>
    </main>
  );
}
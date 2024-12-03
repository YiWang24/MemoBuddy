import React from "react";
import "./style.css";

// Import components for the "About" page
import MeetOurTeam from "@/components/about/MeetOurTeam";
import AboutBanner from "@/components/about/AboutBanner";
import FeedbackForm from "@/components/about/FeedbackForm";

// Define and export the "About" page component
export default function page() {
  return (
    <main className="about-page">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h2 className="welcome-title">Welcome to Our Secure Diary</h2>
        {/* Description of the diary's purpose and features */}
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

      {/* The react components imported above are being used in the section below*/}
      <AboutBanner></AboutBanner>
      <MeetOurTeam></MeetOurTeam>
      <h2 className="text-center p-6 text-3xl mt-6 font-semibold">
        Can you help us improve?
      </h2>
      <FeedbackForm></FeedbackForm>
    </main>
  );
}

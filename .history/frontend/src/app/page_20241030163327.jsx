import React from "react";
import Link from "next/link";
import "./style.css";
export const metadata = {
  title: "MemoBuddy - Your Personal Memo Organizer",
  description:
    "MemoBuddy helps you organize, secure, and access your personal notes and memos anytime, anywhere. Simple, fast, and secure.",
  keywords:
    "MemoBuddy, memo app, personal organizer, notes app, memo management, secure notes, digital organizer",
  author: "Tech Army",
  openGraph: {
    title: "MemoBuddy - Your Personal Memo Organizer",
    description:
      "Organize, secure, and access your personal notes and memos anytime, anywhere with MemoBuddy.",
    url: "https://yourdomain.com",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MemoBuddy - Your Personal Memo Organizer",
      },
    ],
  },
};
export default function wrapper() {
  return (
    <div className="wrapper">
      <div className="div">
        <div className="overlap">
          <div className="homesection">
            <img
              className="image"
              alt="Image"
              src="https://c.animaapp.com/2oLABxhm/img/image-4.png"
            />

            <p className="p">
              Memobuddy ensures complete privacy with end-to-end encryption.
              This advanced security feature guarantees that only you have
              access to your entries. From the moment you type your thoughts,
              they are encrypted and stored securely, making it impossible for
              anyone, even us, to read them. . Enjoy peace of mind knowing that
              your private moments and thoughts are always secure and accessible
              only to you with your unique password.
            </p>
          </div>

          <div className="sub-section">
            <div className="text-wrapper-2">End to End Encryption</div>
          </div>
        </div>

        <div className="home-section">
          <div className="overlap-group">
            <div className="text-wrapper-3">What does memobuddy cost?</div>

            <p className="text-wrapper-4">
              Congratulations!!, You are among first 100 users, we will be
              giving free services to our first 100 customers for 6-months. If
              you would like to proceed with us, a 50% promotional discount
              coupon will be applied to you
            </p>
          </div>
        </div>

        <div className="home-section-2">
          <div className="card">
            <div className="overlap-group-2">
              <div className="text-wrapper-5">Simplicity</div>

              <p className="text-wrapper-6">
                User friendly application, easy to get started, featured for a
                good interaction
              </p>

              <img
                className="img"
                alt="Image"
                src="https://c.animaapp.com/2oLABxhm/img/image-3@2x.png"
              />
            </div>
          </div>

          <div className="overlap-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-5">Security</div>

              <p className="text-wrapper-6">
                Keep your data confidential by protecting it with out password
                lock feature
              </p>

              <img
                className="img"
                alt="Image"
                src="https://c.animaapp.com/2oLABxhm/img/image-2@2x.png"
              />
            </div>
          </div>

          <div className="card-2">
            <img
              className="image-2"
              alt="Image"
              src="https://c.animaapp.com/2oLABxhm/img/image-1@2x.png"
            />

            <div className="overlap-2">
              <div className="text-wrapper-7">Accessibility</div>

              <p className="text-wrapper-8">
                Access your diary digitally with us, ensuring seamless
                availability
              </p>
            </div>
          </div>
        </div>

        <div className="div-wrapper">
          <div className="text-wrapper-9">OUR VALUES</div>
        </div>

        <div className="banner">
          <div className="overlap-3">
            <div className="rectangle" />

            <div className="text-wrapper-10">Protect your thoughts</div>
            <Link href="/diary">
              <button className="button">
                <div className="text-wrapper-11">Get Started</div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

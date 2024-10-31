import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./index.css";
import He

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}

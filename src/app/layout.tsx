import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextStep - Discover Your Path with Confidence",
  description:
    "NextStep helps people and young professionals navigate their academic and career journey with personalized mentoring, career tools, and real insights.",
  keywords: [
    "career guidance",
    "mentoring",
    "college major advice",
    "career discovery",
    "student support",
    "career path",
    "education platform",
    "NextStep"
  ],
  authors: [{ name: "NextStep Team", url: "https://nextstep-org.vercel.app/" }],
  creator: "NextStep",
  publisher: "NextStep",
  openGraph: {
    title: "NextStep - Discover Your Path with Confidence",
    description:
      "Get personalized mentoring, explore careers, and plan your future with clarity. Join NextStep today.",
    url: "https://nextstep-org.vercel.app/",
    siteName: "NextStep",
    images: [
      {
        url: "https://nextstep-org.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "NextStep Career Discovery"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "NextStep - Discover Your Path with Confidence",
    description:
      "Guiding people and young professionals to make better education and career choices.",
    images: ["https://nextstep.id/og-image.png"],
    creator: "@nextstep_id"
  },
  metadataBase: new URL("https://nextstep-org.vercel.app/"),
  robots: {
    index: true,
    follow: true,
    nocache: false
  },
  icons: {
    icon: "/favicon-16x16.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

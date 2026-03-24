import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Roman | Full Stack Developer",
    template: "%s | Muhammad Roman",
  },
  description: "Full Stack Developer specializing in Next.js, React, and the MERN stack. Building modern, responsive web applications.",
  openGraph: {
    title: "Muhammad Roman | Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, React, and the MERN stack.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Roman | Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, React, and the MERN stack.",
  },
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}

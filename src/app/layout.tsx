import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#020817" }],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mromankhan.vercel.app"),
  title: {
    default: "Muhammad Roman | Full Stack & AI Developer",
    template: "%s | Muhammad Roman",
  },
  description:
    "Muhammad Roman — Full Stack Developer & Agentic AI Engineer from Karachi. Building intelligent AI systems, scalable web apps with Next.js, React & Node.js, and cloud-native solutions.",
  keywords: [
    "Muhammad Roman",
    "Full Stack Developer",
    "Agentic AI Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "AI Engineer",
    "Cloud Native Engineer",
    "MERN Stack",
    "Web Developer Pakistan",
    "Karachi Developer",
  ],
  authors: [{ name: "Muhammad Roman", url: "https://mromankhan.vercel.app" }],
  creator: "Muhammad Roman",
  openGraph: {
    title: "Muhammad Roman | Full Stack & AI Developer",
    description:
      "Muhammad Roman — Full Stack Developer & Agentic AI Engineer from Karachi. Building intelligent AI systems, scalable web apps with Next.js, React & Node.js.",
    type: "website",
    locale: "en_US",
    url: "https://mromankhan.vercel.app",
    siteName: "Muhammad Roman Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Roman — Full Stack & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Roman | Full Stack & AI Developer",
    description:
      "Full Stack Developer & Agentic AI Engineer — Next.js, React, Node.js, cloud-native systems.",
    images: ["/og-image.png"],
    creator: "@RomanKhan00555",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020817] text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ChatWidget from "@/components/ChatWidget";

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
  metadataBase: new URL("https://www.mromankhan.com"),
  title: {
    default: "Muhammad Roman | Full Stack & Agentic AI Engineer",
    template: "%s | Muhammad Roman",
  },
  description:
    "Muhammad Roman, Forward Deployed Engineer at MP Pvt Ltd, Full Stack & Agentic AI Engineer in Karachi. I build well-engineered software that automates manual business workflows: multi-tenant SaaS, agentic AI and voice agents, offline-first desktop software and React Native apps, shipped end-to-end.",
  authors: [{ name: "Muhammad Roman", url: "https://www.mromankhan.com" }],
  creator: "Muhammad Roman",
  openGraph: {
    title: "Muhammad Roman | Full Stack & Agentic AI Engineer",
    description:
      "I build well-engineered software that automates the work teams are still doing by hand: multi-tenant SaaS, agentic AI and voice agents, offline-first desktop apps. Shipped end-to-end, mostly solo.",
    type: "website",
    locale: "en_US",
    url: "https://www.mromankhan.com",
    siteName: "Muhammad Roman Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Roman, Full Stack & Agentic AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Roman | Full Stack & Agentic AI Engineer",
    description:
      "Software that removes manual work: production SaaS, agentic AI workflows, voice agents and offline-first desktop apps. Built end-to-end.",
    images: ["/og-image.png"],
    creator: "@RomanKhan00555",
  },
  alternates: {
    canonical: "https://www.mromankhan.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tGFnzdXLmCYu8yUOSHJQEBR1xTvLgFmByDBeQrG-29A",
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
        <ChatWidget />
      </body>
    </html>
  );
}

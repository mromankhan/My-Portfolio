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
    default: "Muhammad Roman | Full Stack · Agentic AI · Cloud Native",
    template: "%s | Muhammad Roman",
  },
  description: "Full Stack Developer, Agentic AI Engineer & Cloud Native DevOps specialist. Building intelligent, scalable systems with Next.js, LangChain, Docker, and Kubernetes.",
  openGraph: {
    title: "Muhammad Roman | Full Stack · Agentic AI · Cloud Native",
    description: "Full Stack Developer, Agentic AI Engineer & Cloud Native DevOps specialist from Karachi, Pakistan.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Roman | Full Stack · Agentic AI · Cloud Native",
    description: "Full Stack Developer, Agentic AI Engineer & Cloud Native DevOps specialist.",
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

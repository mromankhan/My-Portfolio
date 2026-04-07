import type { Metadata } from "next";
import AboutContent from "@/components/pagesContent/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Muhammad Roman — a Full Stack Developer & Agentic AI Engineer from Karachi, Pakistan. Skilled in Next.js, React, Node.js, Firebase, and cloud-native systems.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Muhammad Roman",
    description:
      "Full Stack Developer & Agentic AI Engineer from Karachi. Skilled in Next.js, React, Node.js, Firebase, and cloud-native systems.",
    url: "/about",
  },
};

export default function About() {
  return <AboutContent />;
}

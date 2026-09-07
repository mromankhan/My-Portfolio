import type { Metadata } from "next";
import AboutContent from "@/components/pagesContent/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Muhammad Roman: Forward Deployed Engineer at MP Pvt Ltd and a Full Stack & Agentic AI Engineer from Karachi, Pakistan. I build software that automates the work teams are still doing by hand.",
  alternates: { canonical: "https://www.mromankhan.com/about" },
  openGraph: {
    title: "About | Muhammad Roman",
    description:
      "Forward Deployed Engineer and Full Stack & Agentic AI Engineer from Karachi, building software that automates manual business workflows.",
    url: "https://www.mromankhan.com/about",
  },
};

export default function About() {
  return <AboutContent />;
}

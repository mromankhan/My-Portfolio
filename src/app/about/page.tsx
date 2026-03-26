import type { Metadata } from "next";
import AboutContent from "@/components/pagesContent/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Muhammad Roman — a Full Stack Developer from Karachi, Pakistan specializing in modern web technologies.",
};

export default function About() {
  return <AboutContent />;
}

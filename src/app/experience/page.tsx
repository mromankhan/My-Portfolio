import type { Metadata } from "next";
import ExperienceContent from "@/components/pagesContent/ExperienceContent";

export const metadata: Metadata = {
  title: "Experience",
  description: "Muhammad Roman's professional journey — freelance development, PIAIC AI engineering, and SMIT full-stack training.",
};

export default function Experience() {
  return <ExperienceContent />;
}

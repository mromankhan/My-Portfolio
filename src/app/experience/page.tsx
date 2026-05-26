import type { Metadata } from "next";
import ExperienceContent from "@/components/pagesContent/ExperienceContent";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Muhammad Roman's professional journey — AI Developer at XponentialAI & AIByTec, freelance full-stack development, PIAIC AI engineering, and SMIT training.",
  alternates: { canonical: "https://www.mromankhan.com/experience" },
  openGraph: {
    title: "Experience | Muhammad Roman",
    description:
      "AI Developer at XponentialAI & AIByTec — freelance development, PIAIC AI engineering, cloud-native systems.",
    url: "https://www.mromankhan.com/experience",
  },
};

export default function Experience() {
  return <ExperienceContent />;
}

import type { Metadata } from "next";
import ExperienceContent from "@/components/pagesContent/ExperienceContent";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Muhammad Roman's professional journey — AI Developer at XponentialAI & AIByTech, freelance full-stack development, PIAIC AI engineering, and SMIT training.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience | Muhammad Roman",
    description:
      "AI Developer at XponentialAI & AIByTech — freelance development, PIAIC AI engineering, cloud-native systems.",
    url: "/experience",
  },
};

export default function Experience() {
  return <ExperienceContent />;
}

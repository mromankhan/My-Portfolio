import type { Metadata } from "next";
import ExperienceContent from "@/components/pagesContent/ExperienceContent";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Muhammad Roman's professional journey: Forward Deployed Engineer at MP Pvt Ltd, Agentic AI & Automation Developer at AIByTec, Full Stack & AI Developer at XponentialAI, plus PIAIC AI engineering and SMIT training.",
  alternates: { canonical: "https://www.mromankhan.com/experience" },
  openGraph: {
    title: "Experience | Muhammad Roman",
    description:
      "Forward Deployed Engineer at MP Pvt Ltd, Agentic AI Developer at AIByTec, Full Stack & AI Developer at XponentialAI.",
    url: "https://www.mromankhan.com/experience",
  },
};

export default function Experience() {
  return <ExperienceContent />;
}

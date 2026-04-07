import type { Metadata } from "next";
import ProjectsContent from "@/components/pagesContent/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Muhammad Roman's projects — AI-powered web apps, agentic systems, and full-stack solutions built with Next.js, React, and Node.js.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Muhammad Roman",
    description:
      "AI-powered web apps, agentic systems, and full-stack solutions built with Next.js, React, Firebase, and Node.js.",
    url: "/projects",
  },
};

export default function Projects() {
  return <ProjectsContent />;
}

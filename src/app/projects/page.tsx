import type { Metadata } from "next";
import ProjectsContent from "@/components/pagesContent/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Muhammad Roman's recent projects — web apps built with Next.js, React, Firebase, and more.",
};

export default function Projects() {
  return <ProjectsContent />;
}

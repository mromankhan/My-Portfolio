import type { Metadata } from "next";
import ProjectsContent from "@/components/pagesContent/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description: "Full Stack apps, Agentic AI systems, and Cloud Native DevOps pipelines built by Muhammad Roman.",
};

export default function Projects() {
  return <ProjectsContent />;
}

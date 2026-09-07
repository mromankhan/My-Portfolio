import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projectSlugs } from "@/data/projects";
import ProjectDetailContent from "@/components/pagesContent/ProjectDetailContent";

const BASE = "https://www.mromankhan.com";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Project Not Found" };

  const url = `${BASE}/projects/${project.slug}`;
  const description = `${project.tagline}. ${project.summary}`.slice(0, 300);

  return {
    title: `${project.title} Case Study`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} | Muhammad Roman`,
      description,
      url,
      images: [project.gallery[0].src],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return <ProjectDetailContent project={project} />;
}

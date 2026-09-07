import type { Metadata } from "next";
import ServicesContent from "@/components/pagesContent/ServicesContent";

export const metadata: Metadata = {
  title: "Services: SaaS, Agentic AI, Voice AI & Desktop Development",
  description:
    "Hire Muhammad Roman to build multi-tenant SaaS platforms, agentic AI and MCP workflows, voice AI agents, offline-first Rust/Tauri desktop software, React Native apps, and full stack MVPs. Scoped deliverables and realistic timelines.",
  alternates: { canonical: "https://www.mromankhan.com/services" },
  openGraph: {
    title: "Services | Muhammad Roman",
    description:
      "Scoped engagements that end in shipped software: SaaS platforms, agentic AI workflows, voice AI agents, offline-first desktop apps, mobile apps, and full stack MVPs.",
    url: "https://www.mromankhan.com/services",
  },
};

export default function Services() {
  return <ServicesContent />;
}

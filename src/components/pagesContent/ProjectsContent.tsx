"use client";
import { useState } from "react";
import Card from "@/components/Card";

type Category = "All" | "Full Stack" | "Mobile" | "Agentic AI" | "Cloud / DevOps";

interface Project {
  id: number;
  title: string;
  desc: string;
  img: string;
  alt: string;
  iconsList: string[];
  githublink: string;
  liveLink?: string;
  category: Category;
  badge?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Personal Blog Web",
    desc: "A personal blogging platform with full auth, rich text editing, and real-time Firestore sync — built to share tech, thoughts, and stories.",
    img: "/myp2.jpg",
    alt: "Personal Blog Web",
    iconsList: ["/images/next.svg", "/images/re.svg", "/images/tail.svg", "/images/ts.svg", "/images/firebaseicon.svg", "/cn.jpg"],
    githublink: "https://github.com/mromankhan/Personal-Blog-Web",
    liveLink: "https://roman-blog.vercel.app",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Expense Tracker",
    desc: "Smart expense management app with category tagging, monthly analytics, and real-time Firebase updates to track every rupee.",
    img: "/myp3.jpg",
    alt: "Expense Tracker Web",
    iconsList: ["/images/next.svg", "/images/re.svg", "/images/tail.svg", "/images/ts.svg", "/images/firebaseicon.svg", "/cn.jpg"],
    githublink: "https://github.com/mromankhan/Expense-Tracker-Web",
    liveLink: "https://expenses-tracker-beta-three.vercel.app",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Modern Music Academy",
    desc: "A feature-rich music education platform with course listings, instructor profiles, and animated landing pages built with Framer Motion.",
    img: "/myp1.jpg",
    alt: "Music Academy Web",
    iconsList: ["/images/next.svg", "/images/ts.svg", "/images/tail.svg", "/acter.jpg", "/images/fm.svg"],
    githublink: "https://github.com/mromankhan/Music-Academy-Web",
    liveLink: "https://music-academy-web-olive.vercel.app",
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Chat Web",
    desc: "Real-time MERN stack chat application with WebSocket integration, message threading, and end-to-end encrypted channels.",
    img: "/images/next.svg",
    alt: "Chat Web",
    iconsList: ["/images/next.svg", "/images/re.svg", "/images/mongoicon.svg", "/images/expicon.svg", "/images/nodejsicon.svg", "/images/tail.svg", "/images/ts.svg"],
    githublink: "https://github.com/mromankhan/Chat-Web",
    category: "Full Stack",
    badge: "In Development",
  },
  {
    id: 5,
    title: "Weather Application",
    desc: "Cross-platform React Native weather app with dynamic UI that adapts to real-time conditions, location-based forecasts, and animated backgrounds.",
    img: "/myp5.png",
    alt: "Weather App",
    iconsList: ["/expo.png", "/images/re.svg", "/images/tail.svg", "/images/ts.svg"],
    githublink: "https://github.com/mromankhan/Weather-Application",
    category: "Mobile",
  },
  {
    id: 6,
    title: "Food Review App",
    desc: "React Native food discovery UI with swipeable restaurant cards, rating system, and a modern dark-themed design system.",
    img: "/myp6.png",
    alt: "Food Review App",
    iconsList: ["/expo.png", "/images/re.svg", "/images/tail.svg", "/images/ts.svg"],
    githublink: "https://github.com/mromankhan/Food-Review-Application",
    category: "Mobile",
  },
  {
    id: 7,
    title: "AI Research Assistant",
    desc: "Multi-agent research system powered by LangChain + OpenAI. Autonomously searches, summarizes, and synthesizes information from multiple sources into structured reports.",
    img: "/images/working.svg",
    alt: "AI Research Assistant",
    iconsList: ["/images/python.svg", "/images/next.svg", "/images/tail.svg", "/images/ts.svg"],
    githublink: "https://github.com/mromankhan",
    category: "Agentic AI",
    badge: "In Development",
  },
  {
    id: 8,
    title: "Cloud CI/CD Pipeline",
    desc: "Production-ready DevOps pipeline with Docker containerization, Kubernetes orchestration, GitHub Actions workflows, and automated deployment to AWS ECS.",
    img: "/images/programmingboy.svg",
    alt: "CI/CD Pipeline Project",
    iconsList: ["/images/python.svg", "/images/nodejs.svg", "/images/git.svg", "/images/github.svg"],
    githublink: "https://github.com/mromankhan",
    category: "Cloud / DevOps",
    badge: "In Development",
  },
];

const categories: Category[] = ["All", "Full Stack", "Mobile", "Agentic AI", "Cloud / DevOps"];

const categoryColors: Record<Category, string> = {
  "All": "bg-blue-600 text-white border-blue-600",
  "Full Stack": "bg-blue-500/15 text-blue-400 border-blue-500/40",
  "Mobile": "bg-emerald-500/15 text-emerald-400 border-emerald-500/40",
  "Agentic AI": "bg-violet-500/15 text-violet-400 border-violet-500/40",
  "Cloud / DevOps": "bg-cyan-500/15 text-cyan-400 border-cyan-500/40",
};

const activeColors: Record<Category, string> = {
  "All": "bg-blue-600 text-white border-blue-600",
  "Full Stack": "bg-blue-500 text-white border-blue-500",
  "Mobile": "bg-emerald-500 text-white border-emerald-500",
  "Agentic AI": "bg-violet-500 text-white border-violet-500",
  "Cloud / DevOps": "bg-cyan-500 text-white border-cyan-500",
};

export default function ProjectsContent() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#020817] text-white py-24">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-4 mb-4">
          <h1 className="font-bold text-4xl md:text-5xl text-center">
            My <span className="text-blue-500">Projects</span>
          </h1>
          <p className="text-center text-slate-400 text-sm md:text-base max-w-xl">
            Full Stack apps, Agentic AI systems, and Cloud Native DevOps pipelines
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeFilter === cat
                  ? activeColors[cat]
                  : categoryColors[cat] + " hover:opacity-80"
              }`}
            >
              {cat}
              <span className="ml-2 text-xs opacity-70">
                ({cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-wrap items-start justify-center p-4 gap-8 mt-2 2xl:gap-14 2xl:p-16">
        {filtered.map(({ id, title, desc, img, alt, iconsList, githublink, liveLink, category, badge }) => (
          <div key={id} className="relative">
            {/* Category tag */}
            <div className="absolute -top-3 left-4 z-10 flex gap-2">
              <span className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-full border ${categoryColors[category]}`}>
                {category}
              </span>
              {badge && (
                <span className="px-2.5 py-0.5 text-[10px] font-semibold rounded-full border bg-orange-500/15 text-orange-400 border-orange-500/40">
                  {badge}
                </span>
              )}
            </div>
            <Card
              img={img}
              alt={alt}
              title={title}
              desc={desc}
              iconsList={iconsList}
              link={githublink}
              liveLink={liveLink}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

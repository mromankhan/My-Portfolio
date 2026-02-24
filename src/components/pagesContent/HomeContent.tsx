"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { ArrowRight, Terminal, Cpu, Cloud } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import TypewriterEffect from "@/components/TypewritingEffect";

const stats = [
  { label: "Projects Shipped", value: "10+" },
  { label: "AI Agents Built", value: "5+" },
  { label: "Cloud Deployments", value: "15+" },
  { label: "Open Source Commits", value: "200+" },
];

const expertiseAreas = [
  {
    icon: <Terminal size={22} />,
    title: "Full Stack Engineering",
    desc: "End-to-end web applications with Next.js, React, Node.js, and scalable databases. REST APIs, real-time systems, and seamless UX.",
    color: "blue",
  },
  {
    icon: <Cpu size={22} />,
    title: "Agentic AI Systems",
    desc: "LLM-powered autonomous agents, RAG pipelines, and AI-driven automation workflows using LangChain, OpenAI, and FastAPI.",
    color: "violet",
  },
  {
    icon: <Cloud size={22} />,
    title: "Cloud Native & DevOps",
    desc: "Dockerized microservices, Kubernetes orchestration, and CI/CD pipelines deployed on AWS and GCP for production-grade reliability.",
    color: "cyan",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  violet: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
};

const techBadges = ["Next.js", "React", "Node.js", "Python", "Docker", "AWS", "LangChain", "OpenAI API"];

export default function HomeContent() {
  return (
    <main className="min-h-screen bg-[#020817] text-white pb-10">

      {/* ── Hero Section ── */}
      <div className="container mx-auto px-4 pt-28 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="space-y-7">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium w-fit">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Available for opportunities
            </div>

            <div className="space-y-3">
              <h2 className="text-4xl lg:text-5xl font-bold">Hi There! 👋</h2>
              <h1 className="text-4xl lg:text-5xl font-bold">
                I&apos;m{" "}
                <span className="gradient-text">Muhammad Roman</span>
              </h1>
              <TypewriterEffect />
            </div>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 font-semibold">
                  Let&apos;s Connect <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 font-semibold">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>

          {/* Right — illustration */}
          <div className="relative aspect-square w-3/4 max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-3xl"></div>
            <div className="relative rounded-full overflow-hidden aspect-square animate-float">
              <Image
                src="/images/working.svg"
                alt="Developer working illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-slate-800/60">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl font-bold text-blue-500 group-hover:scale-110 transition-transform duration-200">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Expertise Cards ── */}
      <section className="container mx-auto px-4 mt-24">
        <h2 className="text-3xl font-bold text-center mb-3">
          What I <span className="text-blue-500">Build</span>
        </h2>
        <p className="text-center text-slate-400 mb-10 text-sm">
          Three pillars of my engineering identity
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertiseAreas.map((area) => (
            <div
              key={area.title}
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 card-glow group"
            >
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 border ${colorMap[area.color]}`}>
                {area.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {area.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="flex items-center justify-center mt-24 p-4 md:p-8">
        <div className="max-w-3xl w-full space-y-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            LET ME <span className="text-blue-500">INTRODUCE</span> MYSELF
          </h2>

          <div className="space-y-4 text-left">
            <p className="text-lg leading-relaxed">
              I&apos;m a{" "}
              <span className="text-blue-400 font-semibold">Full Stack Developer & Agentic AI Engineer</span>{" "}
              from Karachi, Pakistan — passionate about building systems that are not just functional,
              but <span className="text-blue-400">intelligent and infinitely scalable</span>.
            </p>

            <p className="text-lg leading-relaxed">
              I architect{" "}
              <span className="text-blue-400">LLM-powered agents and RAG pipelines</span> that automate complex
              workflows, and deploy on{" "}
              <span className="text-blue-400">cloud-native infrastructure</span> using Docker, Kubernetes,
              and modern CI/CD practices on AWS & GCP.
            </p>

            <p className="text-lg leading-relaxed">
              On the frontend I craft{" "}
              <span className="text-blue-400">blazing-fast, accessible UIs</span> with Next.js and React.
              On the backend I design{" "}
              <span className="text-blue-400">robust APIs and microservices</span> with Node.js, Express,
              FastAPI, and Firebase.
            </p>

            <p className="text-lg leading-relaxed">
              <span className="text-blue-400 font-bold text-xl">Why me?</span>
              <br />
              I don&apos;t just write code — I{" "}
              <span className="text-blue-400">architect production-grade solutions</span>. Every system I build
              is designed with scalability, security, and real user value at its core.
            </p>
          </div>

          {/* Social Links */}
          <div className="pt-6">
            <h3 className="text-2xl font-bold mb-3">
              <span className="text-blue-500">FIND ME</span> ON
            </h3>
            <p className="mb-5 text-slate-400 text-sm">
              Feel free to{" "}
              <span className="text-blue-400">connect with me</span>
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {[
                { href: "https://github.com/mromankhan", icon: <FiGithub size={20} />, label: "GitHub" },
                { href: "https://x.com/RomanKhan00555", icon: <FaXTwitter size={18} />, label: "X" },
                { href: "https://www.linkedin.com/in/mromankhan", icon: <FiLinkedin size={20} />, label: "LinkedIn" },
                { href: "mailto:mromankhan005@gmail.com", icon: <FiMail size={20} />, label: "Email" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 text-sm font-medium"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

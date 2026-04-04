"use client";
import Image from "next/image";
import { GraduationCap, Plane, Globe, Code2, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import GitHubStats from "@/components/GitHubStats";

const skills = [
  { id: 1, name: "React", img: "/images/react.svg" },
  { id: 2, name: "Next.js", img: "/images/nextdotjs.svg" },
  { id: 3, name: "MongoDB", img: "/images/mongodb.svg" },
  { id: 4, name: "Express.js", img: "/images/express.svg" },
  { id: 5, name: "Node.js", img: "/images/nodejs.svg" },
  { id: 6, name: "Firebase", img: "/images/firebase.svg" },
  { id: 7, name: "Redux", img: "/images/redux.svg" },
  { id: 8, name: "Bootstrap", img: "/images/bootstrap.svg" },
  { id: 9, name: "Tailwind CSS", img: "/images/tailwindcss.svg" },
  { id: 10, name: "shadcn/ui", img: "/images/shadcnui.svg" },
  { id: 11, name: "Vercel", img: "/images/vercel.svg" },
  { id: 12, name: "JavaScript", img: "/images/javascript.svg" },
  { id: 13, name: "TypeScript", img: "/images/typescript.svg" },
  { id: 14, name: "Python", img: "/images/python.svg" },
  { id: 15, name: "FastAPI", img: "/images/fastapi.svg" },
  { id: 16, name: "Livekit", img: "/images/livekit.svg" },
  { id: 18, name: "PostgreSQL", img: "/images/postgresql.svg" },
  { id: 19, name: "Docker", img: "/images/docker.svg" },
  { id: 20, name: "Kubernetes", img: "/images/kubernetes.svg" },
  { id: 23, name: "OpenAI", img: "/images/openai.svg" },
  { id: 24, name: "MCP Servers", img: "/images/mcp.svg" },
  { id: 25, name: "Git", img: "/images/git.svg" },
  { id: 26, name: "GitHub", img: "/images/github.svg" },
];

const interests = [
  { icon: <Globe size={18} />, label: "Exploring Tech World" },
  { icon: <GraduationCap size={18} />, label: "Teaching" },
  { icon: <Plane size={18} />, label: "Travelling" },
  { icon: <Code2 size={18} />, label: "Open Source" },
];

const stats = [
  { value: "2+", label: "Years of Learning Experience" },
  { value: "1+", label: "Years of Professional Experience" },
  { value: "25+", label: "Technologies" },
  { value: "∞", label: "Coffee Cups" },
];

export default function AboutContent() {
  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden">
      {/* ── Profile Section ── */}
      <section className="relative pt-28 pb-20 px-4 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-40" fill="#3b82f6" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(59,130,246,0.10),transparent)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left — Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-8"
            >
              <div>
                <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
                  About Me
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Know{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Who I&apos;m
                  </span>
                </h1>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p className="text-lg">
                  Hi! I am{" "}
                  <span className="text-blue-400 font-semibold">Muhammad Roman</span>{" "}
                  from Karachi, Pakistan.
                </p>
                <p className="text-lg">
                  An{" "}
                  <span className="text-blue-400 font-semibold">Agentic AI & Full Stack Developer</span>{" "}
                  specializing in{" "}
                  <span className="text-blue-400 font-semibold">Voice AI Agents</span>,
                  and a proud student of{" "}
                  <span className="text-blue-400 font-semibold">SMIT & PIAIC</span>.
                </p>
                <p className="text-slate-400">
                  I build production-grade web applications, intelligent AI-powered
                  agentic systems, and{" "}
                  <span className="text-blue-400 font-semibold">Digital FTEs</span>{" "}
                  — autonomous AI agents that operate as full-time digital workers.
                  I also build and integrate{" "}
                  <span className="text-blue-400 font-semibold">MCP Servers</span>{" "}
                  to supercharge AI workflows with custom tools and context.
                  Currently leveling up in cloud-native architecture —
                  Kubernetes, Dapr, and distributed systems engineering.
                </p>
                <p className="text-slate-400">
                  I integrate{" "}
                  <span className="text-blue-400 font-semibold">advanced AI development tools</span>{" "}
                  like Cursor, Claude Code & GitHub Copilot into my workflow — enabling
                  faster iterations, cleaner architecture, and{" "}
                  <span className="text-blue-400 font-semibold">10x development speed</span>.
                </p>
              </div>

              {/* Interests */}
              <div>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                  Beyond Coding
                </p>
                <div className="flex flex-wrap gap-3">
                  {interests.map(({ icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/8 bg-white/[0.03] text-slate-300 text-sm hover:border-blue-500/30 hover:text-blue-400 transition-all duration-200"
                    >
                      <span className="text-blue-400">{icon}</span>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — Image + Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 flex flex-col items-center gap-8"
            >
              {/* Avatar */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-3xl scale-110" />
                <div className="relative w-64 h-64 rounded-full border-2 border-blue-500/30 overflow-hidden bg-[#0f1729]">
                  <Image
                    src="/images/programmingboy.svg"
                    alt="Muhammad Roman — Programmer illustration"
                    fill
                    className="object-cover p-4"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center border-4 border-[#020817]">
                  <Sparkles size={20} className="text-white" />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="text-center p-4 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-blue-500/20 transition-all"
                  >
                    <div className="text-2xl font-bold text-blue-400">{value}</div>
                    <div className="text-xs text-slate-400 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GitHub Stats Section ── */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(59,130,246,0.04),transparent)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              GitHub Activity
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Open Source{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Contributions
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-col items-center gap-6 w-full">
            {/* Row 1 — Top Languages (native React) + Streak */}
            <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-start">
              <GitHubStats />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <img
                  src="https://streak-stats.demolab.com?user=mromankhan&theme=tokyonight&background=0d1117&border=1e3a5f&ring=60a5fa&fire=60a5fa&currStreakLabel=60a5fa&sideLabels=94a3b8&dates=94a3b8&currStreakNum=ffffff&sideNums=ffffff&hide_border=false"
                  alt="Muhammad Roman GitHub Streak"
                  className="rounded-2xl border border-white/8 h-auto w-full max-w-[480px]"
                />
              </motion.div>
            </div>

            {/* Row 2 — Contribution Graph (the green boxes) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full"
            >
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=mromankhan&theme=tokyo-night&bg_color=0d1117&color=60a5fa&line=3b82f6&point=60a5fa&area=true&area_color=3b82f6&hide_border=false&border_color=1e3a5f&radius=6"
                alt="Muhammad Roman GitHub Contribution Graph"
                className="rounded-2xl border border-white/8 h-auto w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Skills Section ── */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(59,130,246,0.05),transparent)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Tech Stack
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Skillset
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="group flex flex-col items-center gap-2 p-4 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 cursor-default"
              >
                <div className="relative w-12 h-12">
                  <Image
                    src={skill.img}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs text-slate-400 group-hover:text-blue-300 text-center font-medium transition-colors leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

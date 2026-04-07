"use client";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import {
  Briefcase,
  GraduationCap,
  ExternalLink,
  Calendar,
  MapPin,
  Code2,
  Zap,
} from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";

/* ─── Data ────────────────────────────────────────────────── */
const experiences = [
  {
    id: 1,
    type: "contract",
    role: "Agentic AI & Automation Developer",
    company: "AIByTech",
    location: "Remote",
    period: "Jan 2026 — Present",
    current: true,
    icon: <Zap size={18} />,
    color: "cyan",
    desc: "Building cutting-edge Agentic AI systems and intelligent automation pipelines for clients. Architecting multi-agent orchestration workflows and integrating LLMs into production-grade products.",
    highlights: [
      "Designed and deployed multi-agent AI systems using LangChain & LangGraph",
      "Built end-to-end automation pipelines reducing manual workflows by 80%",
      "Integrated OpenAI, Anthropic & open-source LLMs into real products",
      "Delivered AI-driven automation for enterprise-level clients",
    ],
    tags: ["Agentic AI", "LangGraph", "LLMs", "Python", "Automation", "FastAPI", "N8N"],
  },
  {
    id: 2,
    type: "job",
    role: "Full Stack Developer & Agentic AI Developer",
    company: "XponentialAI",
    location: "Remote",
    period: "Oct 2025 — Present",
    current: true,
    icon: <Briefcase size={18} />,
    color: "purple",
    desc: "Full-time role building modern web applications and Voice AI Agents & Agentic AI features. Contributing to both frontend and backend systems while exploring the forefront of AI product development.",
    highlights: [
      "Developed production Next.js applications with TypeScript & Tailwind CSS",
      "Built and integrated Agentic AI features using Python & Livekit",
      "Collaborated in an agile team shipping AI-powered products",
      "Maintained and optimized FastAPI & REST API integrations",
    ],
    tags: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "Livekit", "Twilio", "PostgreSQL", "Docker", "RAG", "OpenAI Agents SDK"],
  },
  {
    id: 3,
    type: "internship",
    role: "Full Stack Developer & Agentic AI Developer",
    company: "XponentialAI",
    location: "Remote",
    period: "Jul 2025 — Sep 2025",
    current: false,
    icon: <Code2 size={18} />,
    color: "blue",
    desc: "Started as an intern and rapidly contributed across the full stack. Gained hands-on experience in both modern web development and the emerging Agentic AI space.",
    highlights: [
      "Built UI components and full-page features in Next.js & React",
      "Worked on early-stage Agentic AI feature prototypes",
      "Integrated third-party APIs and FastAPI services",
      "Promoted to full-time developer within the internship period",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Python", "FastAPI"],
  },
  {
    id: 4,
    type: "education",
    role: "Certified Cloud Applied Generative AI & Agentic AI Engineer",
    company: "PIAIC — Presidential Initiative for AI & Computing",
    location: "Karachi, Pakistan",
    period: "2024 — Present",
    current: true,
    icon: <GraduationCap size={18} />,
    color: "green",
    desc: "Government-backed intensive program covering Generative AI, Agentic AI systems, and Cloud Native development with modern Python stacks.",
    highlights: [
      "Generative AI & Large Language Models (LLMs)",
      "Agentic AI systems & multi-agent orchestration",
      "Cloud Native development with Docker & Kubernetes",
      "Python, FastAPI, and modern AI frameworks",
    ],
    tags: ["Python", "Generative AI", "Cloud Native", "LLMs", "FastAPI"],
  },
  {
    id: 5,
    type: "education",
    role: "Full Stack Web & Mobile App Developer",
    company: "SMIT — Saylani Mass IT Training",
    location: "Karachi, Pakistan",
    period: "2023 — 2025",
    current: false,
    icon: <GraduationCap size={18} />,
    color: "orange",
    desc: "Comprehensive full-stack bootcamp covering the MERN stack, modern JavaScript, and industry-standard development practices.",
    highlights: [
      "MERN Stack: MongoDB, Express, React, Node.js",
      "Modern JavaScript & TypeScript fundamentals",
      "RESTful API design & integration",
      "Version control with Git & GitHub",
    ],
    tags: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "JavaScript", "Firebase", "MongoDB", "Express.js", "Node.js", "React Native", "Expo"],
  },
];

const colorMap: Record<string, {
  border: string; bg: string; text: string; dot: string;
  glow: string; badge: string;
}> = {
  cyan:   { border: "border-cyan-500/25",    bg: "bg-cyan-500/8",    text: "text-cyan-400",    dot: "bg-cyan-400",    glow: "shadow-cyan-500/30",    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25" },
  purple: { border: "border-purple-500/25",  bg: "bg-purple-500/8",  text: "text-purple-400",  dot: "bg-purple-400",  glow: "shadow-purple-500/30",  badge: "bg-purple-500/15 text-purple-300 border-purple-500/25" },
  blue:   { border: "border-blue-500/25",    bg: "bg-blue-500/8",    text: "text-blue-400",    dot: "bg-blue-400",    glow: "shadow-blue-500/30",    badge: "bg-blue-500/15 text-blue-300 border-blue-500/25" },
  green:  { border: "border-emerald-500/25", bg: "bg-emerald-500/8", text: "text-emerald-400", dot: "bg-emerald-400", glow: "shadow-emerald-500/30", badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25" },
  orange: { border: "border-orange-500/25",  bg: "bg-orange-500/8",  text: "text-orange-400",  dot: "bg-orange-400",  glow: "shadow-orange-500/30",  badge: "bg-orange-500/15 text-orange-300 border-orange-500/25" },
};

const typeLabel: Record<string, string> = {
  internship: "Internship",
  job:        "Full-Time",
  contract:   "Contract",
  education:  "Education",
};

/* ─── Single card ────────────────────────────────────────── */
function ExperienceCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const c = colorMap[exp.color];

  return (
    <div className="flex items-start gap-4">

      {/* Left column — fixed 40px, dot sits in flow centered here */}
      <div className="w-10 shrink-0 flex justify-center pt-5">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: index * 0.06, type: "spring", stiffness: 280, damping: 22 }}
          className={`w-4 h-4 rounded-full border-[3px] border-[#020817] ${c.dot} shadow-lg ${c.glow} z-10`}
        />
      </div>

      {/* Right column — card slides in */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, delay: index * 0.06 + 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`flex-1 group p-5 rounded-2xl border ${c.border} bg-[#060d1a] hover:bg-[#080f1f] transition-colors duration-300`}
      >
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center ${c.text} shrink-0 mt-0.5`}>
              {exp.icon}
            </div>
            <div>
              <div className="flex items-center flex-wrap gap-2 mb-0.5">
                <h3 className="text-base font-bold text-white leading-snug">{exp.role}</h3>
                {exp.current && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-500/15 text-green-400 border border-green-500/25">
                    <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                    Now
                  </span>
                )}
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${c.badge}`}>
                  {typeLabel[exp.type]}
                </span>
              </div>
              <p className={`text-sm font-semibold ${c.text}`}>{exp.company}</p>
            </div>
          </div>

          {/* Meta */}
          <div className="flex flex-col gap-1 sm:items-end shrink-0">
            <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <Calendar size={11} /> {exp.period}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <MapPin size={11} /> {exp.location}
            </span>
          </div>
        </div>

        {/* Desc */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.desc}</p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-4">
          {exp.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-slate-300">
              <span className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-[6px] shrink-0`} />
              {h}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {exp.tags.map((tag) => (
            <span key={tag} className={`px-2.5 py-1 rounded-lg text-[11px] font-medium ${c.bg} ${c.text} border ${c.border}`}>
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Timeline with scroll-driven line ──────────────────── */
function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.25"],
  });
  const rawHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const height = useSpring(rawHeight, { stiffness: 80, damping: 25 });

  return (
    <div ref={containerRef} className="relative">
      {/* Track (static gray) — centered in the 40px left column = left-5 (20px) */}
      <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-white/5 rounded-full" />
      {/* Animated fill */}
      <motion.div
        style={{ height }}
        className="absolute left-5 top-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 via-blue-500 to-emerald-400 origin-top rounded-full"
      />

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.id} exp={exp} index={i} />
        ))}
      </div>

      {/* Bottom cap */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-4 mt-6"
      >
        <div className="w-10 shrink-0 flex justify-center">
          <div className="w-4 h-4 rounded-full border-[3px] border-[#020817] bg-slate-700" />
        </div>
        <div className="flex-1 p-4 rounded-2xl border border-white/5 bg-white/[0.01] text-center">
          <p className="text-slate-600 text-sm">The journey begins here — 2023</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────── */
export default function ExperienceContent() {
  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-14 px-4 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60" fill="#3b82f6" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
              My Journey
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Experience &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Education
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-lg mx-auto">
              From bootcamp to AI company — the story so far.
            </p>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            {[
              { label: "Companies", value: "2" },
              { label: "Roles", value: "3" },
              { label: "Technologies", value: "18+" },
              { label: "Currently Active", value: "2" },
            ].map((s) => (
              <div key={s.label} className="px-5 py-3 rounded-2xl border border-white/8 bg-white/[0.03] text-center">
                <div className="text-xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="px-4 pb-24">
        <div className="max-w-3xl mx-auto">
          <Timeline />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 pb-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-8 md:p-10 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-transparent text-center overflow-hidden"
          >
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/15 text-green-400 border border-green-500/25">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to New Opportunities
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Let&apos;s Build Something{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Amazing
                </span>
              </h3>
              <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
                Available for freelance work and collaborations. If you have a project or opportunity that aligns with my skills, let&apos;s talk.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-600/20 text-sm">
                    Get In Touch <ExternalLink size={15} />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

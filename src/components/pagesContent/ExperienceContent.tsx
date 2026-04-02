"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Briefcase, GraduationCap, Code2, Star, ExternalLink, Calendar, MapPin } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import BlurText from "@/components/BlurText";
import ShinyText from "@/components/ShinyText";
import CountUp from "@/components/CountUp";
import SpotlightCard from "@/components/SpotlightCard";

const experiences = [
  {
    id: 1,
    type: "work",
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    location: "Remote / Karachi, PK",
    period: "2023 — Present",
    current: true,
    icon: <Briefcase size={18} />,
    color: "blue",
    desc: "Building production-grade web & mobile applications for clients. Delivering end-to-end solutions — from UI design to backend APIs and deployment.",
    highlights: [
      "Developed 6+ client projects using Next.js, React & Firebase",
      "Built real-time web apps with WebSocket & Firestore",
      "Deployed scalable apps on Vercel with CI/CD pipelines",
      "React Native mobile apps for Android & iOS",
    ],
    tags: ["Next.js", "React", "Firebase", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    type: "education",
    role: "Certified Cloud Applied Generative AI Engineer",
    company: "PIAIC — Presidential Initiative for AI & Computing",
    location: "Karachi, Pakistan",
    period: "2024 — Present",
    current: true,
    icon: <GraduationCap size={18} />,
    color: "purple",
    desc: "Intensive AI & Cloud engineering program backed by the Government of Pakistan. Focused on Generative AI, Agentic AI systems, Cloud Native development, and modern Python stacks.",
    highlights: [
      "Generative AI & Large Language Models (LLMs)",
      "Agentic AI systems & Multi-agent orchestration",
      "Cloud Native development with Docker & Kubernetes",
      "Python, FastAPI, and modern AI frameworks",
    ],
    tags: ["Python", "Generative AI", "Cloud Native", "LLMs", "FastAPI"],
  },
  {
    id: 3,
    type: "education",
    role: "Full Stack Web Developer",
    company: "SMIT — Saylani Mass IT Training",
    location: "Karachi, Pakistan",
    period: "2022 — 2024",
    current: false,
    icon: <GraduationCap size={18} />,
    color: "green",
    desc: "Comprehensive full-stack development bootcamp. Mastered the MERN stack, modern JavaScript frameworks, and industry-standard development practices.",
    highlights: [
      "MERN Stack: MongoDB, Express, React, Node.js",
      "Modern JavaScript & TypeScript fundamentals",
      "RESTful API design & integration",
      "Version control with Git & GitHub",
    ],
    tags: ["MongoDB", "Express", "React", "Node.js", "JavaScript"],
  },
  {
    id: 4,
    type: "work",
    role: "Open Source Contributor & Builder",
    company: "Personal Projects",
    location: "GitHub",
    period: "2022 — Present",
    current: true,
    icon: <Code2 size={18} />,
    color: "cyan",
    desc: "Continuously building and shipping side projects to sharpen skills, explore new technologies, and contribute to the developer community.",
    highlights: [
      "6+ public repositories on GitHub",
      "Music Academy, Blog, Expense Tracker — all live on Vercel",
      "React Native weather & food review apps",
      "Exploring Aceternity UI, Shadcn & React Bits ecosystems",
    ],
    tags: ["Open Source", "React Native", "Next.js", "Vercel"],
  },
];

const achievements = [
  { icon: <Star size={20} />, value: 6, suffix: "+", label: "Projects Shipped", color: "blue", spotlight: "rgba(59,130,246,0.15)" as const },
  { icon: <Briefcase size={20} />, value: 2, suffix: "+", label: "Years Experience", color: "purple", spotlight: "rgba(139,92,246,0.15)" as const },
  { icon: <GraduationCap size={20} />, value: 2, suffix: "", label: "Certifications", color: "green", spotlight: "rgba(16,185,129,0.15)" as const },
  { icon: <Code2 size={20} />, value: 18, suffix: "+", label: "Technologies", color: "cyan", spotlight: "rgba(6,182,212,0.15)" as const },
];

const colorMap: Record<string, { border: string; bg: string; text: string; dot: string; spotlight: `rgba(${number}, ${number}, ${number}, ${number})` }> = {
  blue:   { border: "border-blue-500/20",   bg: "bg-blue-500/10",   text: "text-blue-400",   dot: "bg-blue-500",   spotlight: "rgba(59, 130, 246, 0.12)" },
  purple: { border: "border-purple-500/20", bg: "bg-purple-500/10", text: "text-purple-400", dot: "bg-purple-500", spotlight: "rgba(139, 92, 246, 0.12)" },
  green:  { border: "border-emerald-500/20", bg: "bg-emerald-500/10", text: "text-emerald-400", dot: "bg-emerald-500", spotlight: "rgba(16, 185, 129, 0.12)" },
  cyan:   { border: "border-cyan-500/20",   bg: "bg-cyan-500/10",   text: "text-cyan-400",   dot: "bg-cyan-500",   spotlight: "rgba(6, 182, 212, 0.12)" },
};

function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div ref={ref} className="absolute left-8 top-0 bottom-0 w-px bg-white/5">
      <motion.div style={{ height }} className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 origin-top" />
    </div>
  );
}

function ExperienceCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const c = colorMap[exp.color];
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-20"
    >
      <div className={`absolute left-[26px] top-6 w-5 h-5 rounded-full border-4 border-[#020817] ${c.dot} shadow-lg`} />
      <SpotlightCard spotlightColor={c.spotlight} className={`border ${c.border} bg-[#060e1e] p-6`}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div className="flex items-start gap-3">
            <div className={`w-9 h-9 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center ${c.text} shrink-0 mt-0.5`}>
              {exp.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-500/15 text-green-400 border border-green-500/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Active
                  </span>
                )}
              </div>
              <p className={`text-sm font-medium ${c.text} mt-0.5`}>{exp.company}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 sm:items-end shrink-0">
            <div className="flex items-center gap-1.5 text-xs text-slate-500"><Calendar size={12} />{exp.period}</div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500"><MapPin size={12} />{exp.location}</div>
          </div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{exp.desc}</p>
        <ul className="space-y-2 mb-5">
          {exp.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-slate-300">
              <span className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1.5 shrink-0`} />
              {h}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span key={tag} className={`px-3 py-1 rounded-lg text-xs font-medium ${c.bg} ${c.text} border ${c.border}`}>{tag}</span>
          ))}
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default function ExperienceContent() {
  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 px-4 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60" fill="#8b5cf6" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(139,92,246,0.10),transparent)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">My Journey</p>
            <BlurText
              text="Experience & Education"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
              animateBy="words"
              direction="top"
              delay={90}
            />
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              My path as a developer — from first lines of code to shipping production apps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Animated Stats ── */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((a, i) => {
            const textColor = {
              blue: "text-blue-400", purple: "text-purple-400",
              green: "text-emerald-400", cyan: "text-cyan-400",
            }[a.color] || "text-blue-400";
            return (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <SpotlightCard spotlightColor={a.spotlight} className={`border border-white/8 bg-white/[0.02] p-5 text-center`}>
                  <div className={`flex justify-center mb-2 ${textColor}`}>{a.icon}</div>
                  <div className={`text-2xl font-bold ${textColor} flex items-center justify-center gap-0.5`}>
                    <CountUp to={a.value} duration={2} delay={i * 0.2} />
                    <span>{a.suffix}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">{a.label}</div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <ShinyText text="Timeline" color="#94a3b8" shineColor="#ffffff" speed={3} className="text-2xl font-bold" />
          </motion.div>

          <div className="relative">
            <TimelineLine />
            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <ExperienceCard key={exp.id} exp={exp} index={i} />
              ))}
            </div>
            <div className="relative pl-20 mt-8">
              <div className="absolute left-[26px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 border-[#020817] bg-slate-600" />
              <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.01] text-center">
                <p className="text-slate-500 text-sm">🚀 The journey begins here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.20)" className="border border-blue-500/20 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent p-10 text-center overflow-hidden">
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Open for Work</p>
                <h3 className="text-3xl font-bold text-white">
                  Let&apos;s Build Something{" "}
                  <ShinyText text="Amazing" color="#60a5fa" shineColor="#ffffff" speed={2} className="text-3xl font-bold" />
                </h3>
                <p className="text-slate-400 max-w-md mx-auto">
                  I&apos;m available for freelance projects and full-time roles. Let&apos;s connect and create something extraordinary.
                </p>
                <div className="flex flex-wrap gap-4 justify-center pt-2">
                  <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-600/25">
                    Get In Touch <ExternalLink size={16} />
                  </a>
                  <a href="/Roman_Resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all hover:scale-105">
                    Download CV
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

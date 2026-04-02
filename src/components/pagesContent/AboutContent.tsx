"use client";
import Image from "next/image";
import { GraduationCap, Plane, Globe, Code2, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import BlurText from "@/components/BlurText";
import ShinyText from "@/components/ShinyText";
import CountUp from "@/components/CountUp";
import GlareHover from "@/components/GlareHover";

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
  { id: 15, name: "HTML5", img: "/images/html5.svg" },
  { id: 16, name: "CSS3", img: "/images/css3.svg" },
  { id: 17, name: "Git", img: "/images/git.svg" },
  { id: 18, name: "GitHub", img: "/images/github.svg" },
];

const interests = [
  { icon: <Globe size={18} />, label: "Exploring Tech World" },
  { icon: <GraduationCap size={18} />, label: "Teaching" },
  { icon: <Plane size={18} />, label: "Travelling" },
  { icon: <Code2 size={18} />, label: "Open Source" },
];

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 18, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Dedication" },
];

export default function AboutContent() {
  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden">

      {/* ── Profile ── */}
      <section className="relative pt-28 pb-20 px-4 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-40" fill="#3b82f6" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(59,130,246,0.10),transparent)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-8"
            >
              <div>
                <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
                <BlurText
                  text="Know Who I'm"
                  className="text-4xl lg:text-5xl font-bold"
                  animateBy="words"
                  direction="top"
                  delay={100}
                />
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p className="text-lg">
                  Hi! I am <span className="text-blue-400 font-semibold">Muhammad Roman</span> from Karachi, Pakistan.
                </p>
                <p className="text-lg">
                  A <span className="text-blue-400 font-semibold">Software Engineer</span> and proud student of{" "}
                  <span className="text-blue-400 font-semibold">SMIT & PIAIC</span>.
                </p>
                <p className="text-slate-400">
                  I specialize in building scalable web applications with modern technologies, and I&apos;m deeply passionate about the intersection of AI and software engineering.
                </p>
              </div>

              {/* Interests */}
              <div>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Beyond Coding</p>
                <div className="flex flex-wrap gap-3">
                  {interests.map(({ icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/8 bg-white/[0.03] text-slate-300 text-sm hover:border-blue-500/30 hover:text-blue-400 transition-all"
                    >
                      <span className="text-blue-400">{icon}</span>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right */}
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
                  <Image src="/images/programmingboy.svg" alt="Muhammad Roman" fill className="object-cover p-4" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center border-4 border-[#020817]">
                  <Sparkles size={20} className="text-white" />
                </div>
              </div>

              {/* Animated stats */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                {stats.map(({ value, suffix, label }) => (
                  <div key={label} className="text-center p-4 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-blue-500/20 transition-all">
                    <div className="text-2xl font-bold text-blue-400 flex items-center justify-center gap-0.5">
                      <CountUp to={value} duration={2} className="tabular-nums" />
                      <span>{suffix}</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(59,130,246,0.05),transparent)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Tech Stack</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Professional{" "}
              <ShinyText text="Skillset" color="#60a5fa" shineColor="#ffffff" speed={2} className="font-bold text-4xl md:text-5xl" />
            </h2>
          </motion.div>

          {/* GlareHover skill grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <GlareHover
                  width="100%"
                  height="100px"
                  background="#0a1628"
                  borderRadius="16px"
                  borderColor="rgba(59,130,246,0.15)"
                  glareColor="#3b82f6"
                  glareOpacity={0.15}
                  glareAngle={-45}
                  glareSize={200}
                  transitionDuration={600}
                  className="flex flex-col items-center justify-center gap-2 cursor-default"
                >
                  <div className="relative w-10 h-10">
                    <Image src={skill.img} alt={skill.name} fill className="object-contain p-1" />
                  </div>
                  <span className="text-xs text-slate-400 text-center font-medium leading-tight px-1">
                    {skill.name}
                  </span>
                </GlareHover>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import { GraduationCap, Plane, Globe, Terminal, Cpu, Cloud } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import {
  SiJavascript, SiTypescript, SiPython, SiHtml5, SiCss3, SiGit, SiGithub,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiFirebase,
  SiRedux, SiTailwindcss, SiBootstrap, SiVercel,
  SiDocker, SiKubernetes, SiGooglecloud, SiTerraform, SiGithubactions,
  SiOpenai, SiFastapi,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About",
  description: "Muhammad Roman — Full Stack Developer, Agentic AI Engineer & Cloud Native DevOps specialist from Karachi, Pakistan.",
};

const skillCategories = [
  {
    id: "languages",
    label: "Languages & Tools",
    accent: "yellow",
    borderClass: "border-yellow-500/30 hover:border-yellow-500/60",
    headingClass: "text-yellow-400",
    iconBgClass: "bg-yellow-500/15",
    skills: [
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: SiCss3, color: "#1572B6" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
    ],
  },
  {
    id: "fullstack",
    label: "Full Stack",
    accent: "blue",
    borderClass: "border-blue-500/30 hover:border-blue-500/60",
    headingClass: "text-blue-400",
    iconBgClass: "bg-blue-500/15",
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express", Icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Redux", Icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
      { name: "Vercel", Icon: SiVercel, color: "#ffffff" },
    ],
  },
  {
    id: "ai",
    label: "Agentic AI",
    accent: "violet",
    borderClass: "border-violet-500/30 hover:border-violet-500/60",
    headingClass: "text-violet-400",
    iconBgClass: "bg-violet-500/15",
    skills: [
      { name: "OpenAI API", Icon: SiOpenai, color: "#ffffff" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
    ],
    textBadges: ["LangChain", "RAG Systems", "AI Agents", "Crew AI", "Prompt Eng.", "LLM Fine-tuning"],
  },
  {
    id: "devops",
    label: "Cloud & DevOps",
    accent: "cyan",
    borderClass: "border-cyan-500/30 hover:border-cyan-500/60",
    headingClass: "text-cyan-400",
    iconBgClass: "bg-cyan-500/15",
    skills: [
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
      { name: "AWS", Icon: FaAws, color: "#FF9900" },
      { name: "GCP", Icon: SiGooglecloud, color: "#4285F4" },
      { name: "Terraform", Icon: SiTerraform, color: "#7B42BC" },
      { name: "GH Actions", Icon: SiGithubactions, color: "#2088FF" },
    ],
    textBadges: ["CI/CD", "Microservices", "Serverless"],
  },
];

const expertiseCards = [
  {
    icon: <Terminal size={20} />,
    title: "Full Stack Engineering",
    desc: "Next.js, React, Node.js, REST APIs, real-time apps.",
    colorClass: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  },
  {
    icon: <Cpu size={20} />,
    title: "Agentic AI",
    desc: "LLM agents, RAG pipelines, AI automation with LangChain & OpenAI.",
    colorClass: "bg-violet-500/15 text-violet-400 border-violet-500/30",
  },
  {
    icon: <Cloud size={20} />,
    title: "Cloud Native & DevOps",
    desc: "Docker, Kubernetes, AWS/GCP, CI/CD pipelines.",
    colorClass: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-[#020817] text-white p-6 pt-16 md:pt-8">
      <div className="max-w-6xl mx-auto space-y-24 mt-14 sm:mt-24">

        {/* ── Hero ── */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold">
              Know <span className="text-blue-500">Who I&apos;m</span>
            </h1>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Hi! I&apos;m{" "}
                <strong className="text-blue-400">Muhammad Roman</strong> — a Full Stack Developer,
                Agentic AI Engineer & Cloud Native DevOps practitioner from{" "}
                <strong className="text-blue-400">Karachi, Pakistan</strong>.
              </p>

              <p className="text-lg leading-relaxed">
                Currently a student at <strong className="text-blue-400">SMIT & PIAIC</strong>, I specialize
                in building production-grade systems — from intelligent LLM-powered agents to
                cloud-native microservices deployed on AWS and GCP.
              </p>

              <p className="text-lg leading-relaxed">
                I believe great software is a blend of{" "}
                <strong className="text-blue-400">clean architecture, intelligent automation</strong>, and
                an obsession with developer experience.
              </p>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <p className="text-slate-400 mb-3 text-sm">Beyond coding, I enjoy:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-300">
                    <Globe className="text-blue-400 shrink-0" size={18} />
                    Exploring the AI & DevOps tech landscape
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <GraduationCap className="text-blue-400 shrink-0" size={18} />
                    Teaching and mentoring junior developers
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <Plane className="text-blue-400 shrink-0" size={18} />
                    Travelling and exploring new cultures
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <Image
              src="/images/programmingboy.svg"
              alt="Illustration of a programmer at work"
              width={400}
              height={400}
              className="animate-float"
            />
          </div>
        </div>

        {/* ── Expertise Cards ── */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center">
            What I <span className="text-blue-500">Specialize In</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertiseCards.map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 card-glow"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border mb-4 ${card.colorClass}`}>
                  {card.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Skills ── */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center">
            Professional <span className="text-blue-500">Skillset</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.id}
                className={`p-6 rounded-xl bg-slate-900/50 border transition-all duration-300 ${cat.borderClass}`}
              >
                <h3 className={`font-semibold text-base mb-5 ${cat.headingClass}`}>
                  {cat.label}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="skill-pill flex items-center gap-2 px-3 py-2 bg-slate-800/60 rounded-lg border border-slate-700 cursor-default"
                    >
                      <skill.Icon size={16} style={{ color: skill.color }} />
                      <span className="text-xs text-slate-300">{skill.name}</span>
                    </div>
                  ))}

                  {cat.textBadges?.map((badge) => (
                    <div
                      key={badge}
                      className="skill-pill flex items-center px-3 py-2 bg-slate-800/60 rounded-lg border border-slate-700 cursor-default"
                    >
                      <span className="text-xs text-slate-300">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default About;

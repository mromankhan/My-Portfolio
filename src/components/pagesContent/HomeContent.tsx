"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "motion/react";
import TypewriterEffect from "@/components/TypewritingEffect";
import { Spotlight } from "@/components/ui/spotlight";

const socialLinks = [
  {
    href: "https://github.com/mromankhan",
    icon: <FiGithub size={20} />,
    label: "GitHub",
  },
  {
    href: "https://x.com/RomanKhan00555",
    icon: <FaXTwitter size={18} />,
    label: "X (Twitter)",
  },
  {
    href: "https://www.linkedin.com/in/mromankhan",
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
  },
  {
    href: "mailto:mromankhan005@gmail.com",
    icon: <FiMail size={20} />,
    label: "Email",
  },
];

const introPoints = [
  "Building intelligent Agentic AI systems and Voice AI Agents for real-world automation.",
  "Full stack engineer crafting scalable web apps with Next.js, React & Node.js.",
  "Exploring cloud-native architecture — Kubernetes, Dapr, and distributed systems.",
  "Turning cutting-edge AI research into production-ready, user-focused solutions.",
];

export default function HomeContent() {
  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden">
      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Spotlight */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#3b82f6"
        />

        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.12),rgba(2,8,23,0))]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8"
            >

              <div className="space-y-3">
                <h2 className="text-5xl lg:text-6xl font-bold text-slate-300">
                  Hi There! 👋
                </h2>
                <h1 className="text-5xl lg:text-6xl font-bold">
                  I&apos;m{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                    Muhammad Roman
                  </span>
                </h1>
                <div className="text-2xl lg:text-3xl font-semibold text-slate-300 min-h-[2.5rem]">
                  <TypewriterEffect />
                </div>
              </div>

              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                I build intelligent AI agents, scalable web applications, and
                cloud-native systems that create real-world impact.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-105">
                    Let&apos;s Connect
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {socialLinks.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200 hover:scale-110"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right — Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative flex justify-center items-center"
            >
              {/* Glow rings */}
              <div className="absolute w-80 h-80 rounded-full bg-blue-600/10 blur-3xl" />
              <div className="absolute w-64 h-64 rounded-full border border-blue-500/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-80 h-80 rounded-full border border-blue-500/5 animate-[spin_30s_linear_infinite_reverse]" />

              {/* Image container */}
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-transparent blur-2xl" />
                <div className="relative rounded-full overflow-hidden w-full h-full border border-blue-500/20 bg-[#0f1729]">
                  <Image
                    src="/images/working.svg"
                    alt="Developer working illustration"
                    fill
                    className="object-cover p-6"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Introduce Section ── */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(59,130,246,0.06),transparent)]" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Let Me{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Introduce
              </span>{" "}
              Myself
            </h2>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {introPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/20 transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                <p className="text-slate-300 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>

          {/* Why me block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-transparent text-center space-y-4"
          >
            <h3 className="text-2xl font-bold text-blue-400">Why Me?</h3>
            <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
              I don&apos;t just code — I{" "}
              <span className="text-blue-400 font-semibold">engineer intelligent systems</span>. From
              agentic AI pipelines to cloud-native infrastructure, every project
              is an opportunity to push the boundaries of what&apos;s possible.
            </p>
            <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
              I leverage{" "}
              <span className="text-blue-400 font-semibold">advanced AI-powered development tools</span>{" "}
              — Cursor, Claude Code, and GitHub Copilot — to ship production-ready
              features at{" "}
              <span className="text-blue-400 font-semibold">10x speed</span>{" "}
              without compromising on quality, security, or scalability.
            </p>
            <p className="text-blue-400 font-semibold text-lg">
              Let&apos;s build the future together!
            </p>
          </motion.div>

          {/* Social footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-400 mb-6 text-sm font-medium tracking-wide uppercase">
              Find Me On
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

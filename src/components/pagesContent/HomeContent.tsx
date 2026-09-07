"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "motion/react";
import TypewriterEffect from "@/components/TypewritingEffect";
import { Spotlight } from "@/components/ui/spotlight";
import { projects } from "@/data/projects";
import { problems, services, faqs, industriesLine } from "@/data/services";

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
    href: "mailto:contact@mromankhan.com",
    icon: <FiMail size={20} />,
    label: "Email",
  },
];

/** Short, outcome-first result lines shown on each featured case study card. */
const caseResults: Record<string, string[]> = {
  barberbook: [
    "24/7 booking engine where double-bookings are mathematically impossible",
    "Live walk-in queue over WebSockets — customers track their position in real time",
    "Automated WhatsApp → SMS → email reminders that cut no-shows by up to 40%",
  ],
  "fbr-invoice-app": [
    "Shipped in Electron, then rebuilt in Rust/Tauri on client feedback: ~300 MB down to ~12 MB, same UI",
    "Fully offline operation on an AES-256-GCM encrypted local database",
    "Validate-then-post FBR gateway handshake with per-invoice tax snapshots",
  ],
  "asianinspection-chat": [
    "Append-only messages enforced by Postgres Row-Level Security — full auditability",
    "True offline-first: outbox, SQLite history and FTS5 search on a weak connection",
    "Admin console for onboarding, group management and read-only monitoring",
  ],
};

const sectionLabel =
  "text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3";

export default function HomeContent() {
  return (
    <main className="relative min-h-screen bg-[#020817] text-white overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#3b82f6"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.12),rgba(2,8,23,0))]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        <div className="max-w-6xl mx-auto w-full relative z-10 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 text-blue-300 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
                </span>
                Available for freelance & full-time work
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                    Muhammad Roman
                  </span>
                </h1>
                <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 min-h-[2.5rem]">
                  <TypewriterEffect />
                </div>
              </div>

              <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                I build well-engineered software that automates the work people
                are still doing by hand.{" "}
                <span className="text-slate-300">
                  I map the manual workflow, then design, build and ship the
                  production system that runs it. End to end, mostly as the sole
                  engineer.
                </span>
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link href="/projects">
                  <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-105">
                    View Case Studies
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/12 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 text-white font-semibold transition-all duration-200">
                    Work With Me
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
              <div className="absolute w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-blue-600/10 blur-3xl" />
              <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-blue-500/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-56 h-56 sm:w-80 sm:h-80 rounded-full border border-blue-500/5 animate-[spin_30s_linear_infinite_reverse]" />

              <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-transparent blur-2xl" />
                <div className="relative rounded-full overflow-hidden w-full h-full border border-blue-500/20 bg-[#0f1729]">
                  <Image
                    src="/images/working.svg"
                    alt="Muhammad Roman — full stack and agentic AI engineer"
                    fill
                    className="object-cover p-6"
                    priority
                    unoptimized
                    sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 384px"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Problems I Solve ── */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(59,130,246,0.05),transparent)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-12"
          >
            <p className={sectionLabel}>Problems I Solve</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Businesses don&apos;t buy software.{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                They buy the work it removes.
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Every system on this site started as manual work someone was
              living with: a person answering calls, a clerk retyping figures, a
              team coordinating in a chat app nobody owned. Here are four I have
              already replaced with software.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-blue-500/30 pl-4">
              {industriesLine}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problems.map(({ title, body, proof, href }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={href}
                  className="group flex flex-col h-full p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/25 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                    {title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                    {body}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400">
                    {proof}
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Case Studies ── */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-12"
          >
            <p className={sectionLabel}>Featured Work</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Three systems,{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                three platforms
              </span>
              , all in production
            </h2>
            <p className="text-slate-400 leading-relaxed">
              A multi-tenant web SaaS, a native desktop application, and a
              cross-platform mobile app each built end-to-end from
              architecture to deployment.
            </p>
          </motion.div>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group grid grid-cols-1 lg:grid-cols-5 gap-6 p-5 sm:p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-blue-500/25 transition-all duration-300"
              >
                {/* Image */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="lg:col-span-2 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/8 bg-[#0f1729]"
                >
                  <Image
                    src={project.cardImage}
                    alt={project.cardAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </Link>

                {/* Content */}
                <div className="lg:col-span-3 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium">
                      {project.role}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-400 border border-white/8">
                      {project.type}
                    </span>
                  </div>

                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-xl sm:text-2xl font-bold text-white hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-slate-400 text-sm mt-1 mb-4">
                    {project.tagline}
                  </p>

                  {/* The manual workflow this system replaced */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                        Before
                      </p>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {project.workflow.before}
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-blue-500/[0.06] border border-blue-500/20">
                      <p className="text-[11px] font-semibold text-blue-400 uppercase tracking-wide mb-1.5">
                        After
                      </p>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {project.workflow.after}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {(caseResults[project.slug] ?? project.highlights).map(
                      (line) => (
                        <li key={line} className="flex gap-2.5 items-start">
                          <Check className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                          <span className="text-slate-300 text-sm leading-relaxed">
                            {line}
                          </span>
                        </li>
                      )
                    )}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center gap-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Read the case study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                      >
                        Live demo
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/12 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 text-white font-semibold transition-all duration-200"
            >
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── What I Build (services teaser) ── */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(59,130,246,0.05),transparent)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-12"
          >
            <p className={sectionLabel}>What I Build</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Six ways I can{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                work with you
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Each one is a scoped engagement with defined deliverables and a
              realistic timeline not an open-ended hourly arrangement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/25 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {service.summary}
                </p>
                <p className="mt-4 pt-4 border-t border-white/5 text-xs text-blue-300 font-medium">
                  {service.timeline}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25"
            >
              See detailed services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Try the AI assistant ── */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-transparent text-center space-y-3"
          >
            <p className={sectionLabel}>Live Proof</p>
            <h2 className="text-2xl md:text-3xl font-bold">
              The assistant in the corner is a working RAG system
            </h2>
            <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
              It retrieves from a structured knowledge base of my work and
              answers only from that context the same retrieval pattern I
              build into client products. Ask it about the FBR migration, the
              queue engine, or my stack.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className={sectionLabel}>FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Questions clients ask{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                before we start
              </span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <motion.details
                key={q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/20 transition-all duration-300"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-white font-medium">
                  {q}
                  <span className="text-blue-400 shrink-0 transition-transform duration-200 group-open:rotate-45 text-xl leading-none">
                    +
                  </span>
                </summary>
                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                  {a}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(59,130,246,0.08),transparent)]" />

        <div className="max-w-3xl mx-auto relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Have a system that needs building?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Send a short brief — the business problem, who uses it, and which
              systems it has to talk to. You&apos;ll get the technical approach,
              scope and timeline back before any commitment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25 hover:scale-105">
                  Start a project
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a href="/Roman_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/12 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 text-white font-semibold transition-all duration-200">
                  Download resume
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

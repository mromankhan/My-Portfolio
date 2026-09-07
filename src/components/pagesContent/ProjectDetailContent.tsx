"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github, Check } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import ProjectCarousel from "@/components/ProjectCarousel";
import type { ProjectDetail } from "@/data/projects";

export default function ProjectDetailContent({ project }: { project: ProjectDetail }) {
  const { title, tagline, summary, role, year, type, tech, workflow, highlights, liveLink, githubLink, gallery } = project;

  return (
    <main className="relative min-h-screen bg-[#020817] text-white overflow-hidden">
      <section className="relative pt-24 pb-20 sm:pt-28 px-4">
        <Spotlight className="-top-40 left-20" fill="#3b82f6" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm font-medium mb-10 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-medium">
                {type}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                {role}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                {year}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            <p className="text-blue-400 text-lg font-medium mb-6">{tagline}</p>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl">
              {summary}
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap items-center gap-2.5 mt-7">
              {tech.map((t) => (
                <div
                  key={t.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a1628] border border-white/10"
                >
                  <Image src={t.icon} alt={t.name} width={16} height={16} className="object-contain" />
                  <span className="text-slate-300 text-xs font-medium">{t.name}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            {(liveLink || githubLink) && (
              <div className="flex flex-wrap gap-3 mt-8">
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all shadow-lg shadow-blue-600/20"
                  >
                    <ExternalLink size={16} />
                    Visit Live Site
                  </a>
                )}
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-white text-sm font-medium transition-all"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                )}
              </div>
            )}
          </motion.div>

          {/* What this replaced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-14"
          >
            <h2 className="text-xl font-semibold mb-5">What this replaced</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#0a1628] border border-white/10">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  The manual workflow
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {workflow.before}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-blue-500/[0.07] border border-blue-500/20">
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-2">
                  What the system does now
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {workflow.after}
                </p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mt-4 pl-4 border-l-2 border-blue-500/40">
              {workflow.impact}
            </p>
          </motion.div>

          {/* Case study carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-14"
          >
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-xl font-semibold">Case Study</h2>
              <span className="text-xs text-slate-500">
                Swipe through the full walkthrough — click any slide to enlarge
              </span>
            </div>
            <ProjectCarousel slides={gallery} />
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-xl font-semibold mb-6">Engineering Highlights</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#0a1628] border border-white/10"
                >
                  <span className="grid place-items-center shrink-0 w-6 h-6 rounded-full bg-blue-500/15 text-blue-400 mt-0.5">
                    <Check size={14} />
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed">{h}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-5 p-7 rounded-2xl bg-gradient-to-r from-blue-600/10 to-blue-500/5 border border-blue-500/20"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">Like what you see?</h3>
              <p className="text-slate-400 text-sm mt-1">
I build production-grade software that takes manual work off your team. Let&apos;s talk.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all shadow-lg shadow-blue-600/20"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

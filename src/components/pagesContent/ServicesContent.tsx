"use client";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import { services, process, faqs, deliveryLine } from "@/data/services";

const sectionLabel =
  "text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3";

export default function ServicesContent() {
  return (
    <main className="relative min-h-screen bg-[#020817] text-white overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-40" fill="#3b82f6" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(59,130,246,0.10),transparent)]" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <p className={sectionLabel}>Services</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Manual work in,{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                shipped software out
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              I take the workflow your team is running by hand and turn it into
              a well-engineered system your customers and staff use every day.
              Architecture, backend, interface and deployment included. One
              engineer, full ownership, defined deliverables.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto">
              {deliveryLine}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link href="/contact">
                <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25 hover:scale-105">
                  Start a project
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/projects">
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/12 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 text-white font-semibold transition-all duration-200">
                  See the proof
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Service cards ── */}
      <section className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <motion.article
              key={service.slug}
              id={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
              className="flex flex-col p-6 sm:p-7 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-blue-500/25 transition-all duration-300 scroll-mt-24"
            >
              <h2 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.summary}
              </p>

              <div className="mb-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Best for
                </p>
                <p className="text-slate-300 text-sm">{service.bestFor}</p>
              </div>

              <div className="mb-6 flex-1">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                  What you get
                </p>
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-2.5 items-start">
                      <Check className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                      <span className="text-slate-300 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-white/5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-medium">
                    {service.timeline}
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  <span className="text-slate-500">Outcome: </span>
                  {service.outcome}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
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
            <p className={sectionLabel}>How I Work</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Decisions first,{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                then code
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Most projects fail on scope and architecture, not on syntax. The
              workflow gets mapped before anything gets built. Here is the order
              I work in.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {process.map(({ step, title, body }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <div className="text-3xl font-bold text-blue-500/30 mb-3">
                  {step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative py-16 px-4">
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
              Before you send a brief
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

      {/* ── CTA ── */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(59,130,246,0.08),transparent)]" />

        <div className="max-w-3xl mx-auto relative z-10 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Tell me what breaks today
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Describe the workflow, who uses it, and the systems involved.
            I&apos;ll reply with the technical approach, scope and a realistic
            timeline.
          </p>
          <Link href="/contact">
            <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25 hover:scale-105">
              Work with me
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

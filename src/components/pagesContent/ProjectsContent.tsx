"use client";
import Card from "@/components/Card";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";

const projects = [
  {
    id: 101,
    title: "BarberBook: Barbershop SaaS",
    desc: "Multi-tenant SaaS for barbershops: 24/7 online booking, a real-time walk-in queue, staff scheduling, automated WhatsApp/SMS reminders & revenue analytics.",
    img: "/portfolio1.png",
    alt: "BarberBook barbershop booking SaaS dashboard",
    iconsList: ["/images/next.svg", "/images/re.svg", "/images/ts.svg", "/images/tail.svg", "/images/psql.svg", "/images/shadcnui.svg"],
    caseStudyLink: "/projects/barberbook",
    liveLink: "https://barber-book-beryl.vercel.app/",
  },
  {
    id: 102,
    title: "AsianInspection Chat",
    desc: "WhatsApp-class internal company messenger built with React Native and Supabase. Real-time chat, voice/media, offline-first sync, read receipts & admin monitoring.",
    img: "/portfolio2.jpeg",
    alt: "AsianInspection Chat internal messaging app",
    iconsList: ["/expo.png", "/images/re.svg", "/images/ts.svg", "/images/psql.svg", "/images/tail.svg"],
    caseStudyLink: "/projects/asianinspection-chat",
  },
  {
    id: 103,
    title: "FBR Digital Invoice App",
    desc: "Government-compliant tax invoicing desktop app (Tauri + Rust). Offline-first, AES-256 encrypted SQLite, FBR gateway integration & a tiny ~12 MB install.",
    img: "/portfolio3.png",
    alt: "FBR Digital Invoice desktop application dashboard",
    iconsList: ["/images/re.svg", "/images/ts.svg", "/images/tail.svg"],
    caseStudyLink: "/projects/fbr-invoice-app",
  },
  {
    id: 1,
    title: "Personal Blog Web",
    desc: "A modern blog platform with AI-enhanced content experience, built on Next.js & Firebase.",
    img: "/myp2.png",
    alt: "Personal Blog Web",
    iconsList: ["/images/next.svg", "/images/re.svg", "/images/tail.svg", "/images/ts.svg", "/images/firebaseicon.svg", "/cn.jpg"],
    githublink: "https://github.com/mromankhan/Personal-Blog-Web",
    liveLink: "https://roman-blog.vercel.app",
  },
  {
    id: 2,
    title: "Expense Tracker",
    desc: "Smart expense tracker with real-time Firebase sync, AI-ready for spending insights.",
    img: "/myp3.png",
    alt: "Expense Tracker Web",
    iconsList: ["/images/next.svg", "/images/re.svg", "/images/tail.svg", "/images/ts.svg", "/images/firebaseicon.svg", "/cn.jpg"],
    githublink: "https://github.com/mromankhan/Expense-Tracker-Web",
    liveLink: "https://expenses-tracker-beta-three.vercel.app",
  },
  {
    id: 3,
    title: "Modern Music Academy",
    desc: "Explore your musical potential with a modern online music academy platform.",
    img: "/myp1.jpg",
    alt: "Music Academy Web",
    iconsList: ["/images/next.svg", "/images/ts.svg", "/images/tail.svg", "/acter.jpg", "/images/fm.svg"],
    githublink: "https://github.com/mromankhan/Music-Academy-Web",
    liveLink: "https://music-academy-web-olive.vercel.app",
  },
  {
    id: 4,
    title: "Todo",
    desc: "AI-integrated task manager with a Next.js frontend & FastAPI + PostgreSQL backend.",
    img: "/myp4.png",
    alt: "Todo",
    iconsList: ["/images/next.svg", "/images/re.svg", "/images/psql.svg", "/images/fapi.svg", "/images/tail.svg", "/images/ts.svg"],
    githublink: "https://github.com/mromankhan/Todo",
    liveLink: "https://todo-one-iota-71.vercel.app",
  },
  {
    id: 5,
    title: "Weather Application",
    desc: "React Native app that provides real-time weather updates with a beautiful dynamic UI.",
    img: "/myp5.png",
    alt: "Weather App",
    iconsList: ["/expo.png", "/images/re.svg", "/images/tail.svg", "/images/ts.svg"],
    githublink: "https://github.com/mromankhan/Weather-Application",
  },
  {
    id: 6,
    title: "Food Review App",
    desc: "A sleek React Native UI concept for a modern and engaging food review experience.",
    img: "/myp6.png",
    alt: "Food Review App",
    iconsList: ["/expo.png", "/images/re.svg", "/images/tail.svg", "/images/ts.svg"],
    githublink: "https://github.com/mromankhan/Food-Review-Application",
  },
];

export default function ProjectsContent() {
  return (
    <main className="relative min-h-screen bg-[#020817] text-white overflow-hidden">
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-24 px-4">
        <Spotlight className="-top-40 left-20" fill="#3b82f6" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Recent
              </span>{" "}
              Works
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              A collection of projects I&apos;ve built, from web apps to mobile experiences.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(({ id, title, desc, img, alt, iconsList, githublink, liveLink, caseStudyLink }, i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card
                  img={img}
                  alt={alt}
                  title={title}
                  desc={desc}
                  iconsList={iconsList}
                  link={githublink}
                  liveLink={liveLink}
                  caseStudyLink={caseStudyLink}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

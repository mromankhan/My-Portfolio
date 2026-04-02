"use client";
import Card from "@/components/Card";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import BlurText from "@/components/BlurText";
import ShinyText from "@/components/ShinyText";

const projects = [
  {
    id: 1,
    title: "Personal Blog Web",
    desc: "Dive into my personal journey — exploring tech, thoughts, and tales that inspire.",
    img: "/myp2.jpg",
    alt: "Personal Blog Web",
    iconsList: ["/images/next.svg", "/images/re.svg", "/images/tail.svg", "/images/ts.svg", "/images/firebaseicon.svg", "/cn.jpg"],
    githublink: "https://github.com/mromankhan/Personal-Blog-Web",
    liveLink: "https://roman-blog.vercel.app",
  },
  {
    id: 2,
    title: "Expense Tracker",
    desc: "An expense tracker app to manage and monitor daily spending with real-time Firebase updates.",
    img: "/myp3.jpg",
    alt: "Expense Tracker Web",
    iconsList: ["/images/next.svg", "/images/re.svg", "/images/tail.svg", "/images/ts.svg", "/images/firebaseicon.svg", "/cn.jpg"],
    githublink: "https://github.com/mromankhan/Expense-Tracker-Web",
    liveLink: "https://expenses-tracker-beta-three.vercel.app",
  },
  {
    id: 3,
    title: "Modern Music Academy",
    desc: "Explore your musical potential with our comprehensive online music academy platform.",
    img: "/myp1.jpg",
    alt: "Music Academy Web",
    iconsList: ["/images/next.svg", "/images/ts.svg", "/images/tail.svg", "/acter.jpg", "/images/fm.svg"],
    githublink: "https://github.com/mromankhan/Music-Academy-Web",
    liveLink: "https://music-academy-web-olive.vercel.app",
  },
  {
    id: 4,
    title: "Chat Web",
    desc: "Stay connected in real-time — a modern chat app built for fast, fluid conversations. (Under Development)",
    img: "/images/next.svg",
    alt: "Chat Web",
    iconsList: ["/images/next.svg", "/images/re.svg", "/images/mongoicon.svg", "/images/expicon.svg", "/images/nodejsicon.svg", "/images/tail.svg", "/images/ts.svg"],
    githublink: "https://github.com/mromankhan/Chat-Web",
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
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden">
      <section className="relative pt-28 pb-24 px-4">
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
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Portfolio</p>
            <BlurText
              text="My Recent Works"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              animateBy="words"
              direction="top"
              delay={80}
            />
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              A collection of projects I&apos;ve built —{" "}
              <ShinyText text="from web apps to mobile experiences." color="#94a3b8" shineColor="#ffffff" speed={3} className="inline" />
            </p>
          </motion.div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-4">
            {projects.map(({ id, title, desc, img, alt, iconsList, githublink, liveLink }, i) => (
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
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

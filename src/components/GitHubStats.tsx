"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface Repo {
  language: string | null;
}

const GITHUB_USERNAME = "mromankhan";

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Dockerfile: "#384d54",
  MDX: "#083fa1",
  Other: "#64748b",
};

export default function GitHubStats() {
  const [langData, setLangData] = useState<{ name: string; percent: number; color: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
        );
        const repos: Repo[] = await res.json();

        const langCount: Record<string, number> = {};
        repos.forEach((r) => {
          if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
        });

        const total = Object.values(langCount).reduce((a, b) => a + b, 0);
        const sorted = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6)
          .map(([name, count]) => ({
            name,
            percent: Math.round((count / total) * 100),
            color: LANG_COLORS[name] ?? LANG_COLORS.Other,
          }));

        setLangData(sorted);
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse h-48 rounded-2xl bg-white/[0.04] border border-white/8 w-full max-w-[480px]" />
    );
  }

  if (!langData.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[480px] rounded-2xl border border-white/8 bg-white/[0.03] p-6"
    >
      <p className="text-xs text-blue-400 font-semibold tracking-widest uppercase mb-5">
        Top Languages
      </p>

      {/* Color bar */}
      <div className="flex h-3 rounded-full overflow-hidden mb-5 gap-[2px]">
        {langData.map(({ name, percent, color }) => (
          <motion.div
            key={name}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ width: `${percent}%`, backgroundColor: color, transformOrigin: "left" }}
            className="rounded-full"
          />
        ))}
      </div>

      <div className="space-y-3">
        {langData.map(({ name, percent, color }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: color }} />
              <span className="text-sm text-slate-300">{name}</span>
            </div>
            <span className="text-sm font-semibold text-blue-400">{percent}%</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

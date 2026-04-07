"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Flame, GitCommitHorizontal, Trophy } from "lucide-react";

interface Contribution {
  date: string;
  count: number;
}

function calcStreaks(contributions: Contribution[]) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let total = 0;
  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;

  contributions.forEach((c) => {
    total += c.count;
    if (c.count > 0) {
      tempStreak++;
      if (tempStreak > longestStreak) longestStreak = tempStreak;
    } else {
      tempStreak = 0;
    }
  });

  // Current streak: count backwards from today
  const sorted = [...contributions].reverse();
  for (const c of sorted) {
    if (c.count > 0) {
      currentStreak++;
    } else {
      break;
    }
  }

  return { total, currentStreak, longestStreak };
}

export default function StreakCard({ username }: { username: string }) {
  const [stats, setStats] = useState<{ total: number; currentStreak: number; longestStreak: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );
        const data = await res.json();
        const today = new Date();
        today.setHours(23, 59, 59, 999);
        const contributions: Contribution[] = (data.contributions as Contribution[]).filter(
          (c) => new Date(c.date) <= today
        );
        setStats(calcStreaks(contributions));
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [username]);

  if (loading) {
    return (
      <div className="animate-pulse w-full md:max-w-[480px] h-full rounded-2xl bg-white/[0.04] border border-white/8" />
    );
  }

  if (!stats) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="w-full md:max-w-[480px] rounded-2xl border border-white/8 bg-white/[0.03] p-6 flex flex-col"
    >
      {/* Current Streak — top center */}
      <div className="flex-1 flex flex-col items-center justify-center gap-3 py-6">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-150" />
          <Flame size={40} className="relative text-blue-400" />
        </div>
        <motion.span
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          className="text-6xl font-bold text-white leading-none"
        >
          {stats.currentStreak}
        </motion.span>
        <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">
          Current Streak
        </span>
        <span className="text-xs text-slate-500">days in a row</span>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/8 mx-2 mb-5" />

      {/* Bottom — Total + Longest */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/6 bg-white/[0.02]">
          <GitCommitHorizontal size={18} className="text-blue-400" />
          <span className="text-2xl font-bold text-white">{stats.total.toLocaleString()}</span>
          <span className="text-xs text-slate-400 text-center">Total Contributions</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/6 bg-white/[0.02]">
          <Trophy size={18} className="text-blue-400" />
          <span className="text-2xl font-bold text-white">{stats.longestStreak}</span>
          <span className="text-xs text-slate-400 text-center">Longest Streak</span>
        </div>
      </div>
    </motion.div>
  );
}

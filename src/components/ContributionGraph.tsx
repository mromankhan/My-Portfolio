"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const LEVEL_COLORS = [
  "bg-white/[0.06]",
  "bg-blue-900",
  "bg-blue-700",
  "bg-blue-500",
  "bg-blue-400",
];

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAY_LABEL_W = 28;
const GAP = 3;
const MIN_BOX = 10;

export default function ContributionGraph({ username }: { username: string }) {
  const [weeks, setWeeks] = useState<Contribution[][]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [boxSize, setBoxSize] = useState(13);
  const containerRef = useRef<HTMLDivElement>(null);

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

        setTotal(contributions.reduce((a, c) => a + c.count, 0));

        const grouped: Contribution[][] = [];
        for (let i = 0; i < contributions.length; i += 7) {
          grouped.push(contributions.slice(i, i + 7));
        }
        setWeeks(grouped);
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [username]);

  // Scale boxes to fill container on desktop; fixed size + scroll on mobile
  useEffect(() => {
    if (!weeks.length || !containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      const available = width - DAY_LABEL_W - GAP;
      const computed = Math.floor((available - GAP * (weeks.length - 1)) / weeks.length);
      setBoxSize(Math.max(computed, MIN_BOX));
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [weeks]);

  if (loading) {
    return (
      <div className="animate-pulse h-32 rounded-2xl bg-white/[0.04] border border-white/8 w-full" />
    );
  }

  if (!weeks.length) return null;

  // Month labels with minimum gap
  const monthLabels: { label: string; colIndex: number }[] = [];
  let lastMonth = -1;
  let lastLabelCol = -4;
  weeks.forEach((week, i) => {
    const month = new Date(week[0].date).getMonth();
    if (month !== lastMonth && i - lastLabelCol >= 3) {
      monthLabels.push({ label: MONTHS[month], colIndex: i });
      lastMonth = month;
      lastLabelCol = i;
    }
  });

  const col = boxSize + GAP;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full rounded-2xl border border-white/8 bg-[#0d1117] p-6"
    >
      <div className="flex items-center justify-between mb-5">
        <p className="text-xs text-blue-400 font-semibold tracking-widest uppercase">
          Contribution Calendar
        </p>
        <span className="text-xs text-slate-400">
          <span className="text-white font-semibold">{total}</span> contributions in the last year
        </span>
      </div>

      {/* Scrollable area */}
      <div
        ref={containerRef}
        className="w-full overflow-x-auto pb-2"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#1e3a5f transparent" }}
      >
        <div style={{ minWidth: `${DAY_LABEL_W + weeks.length * col}px` }}>
          {/* Month labels */}
          <div className="relative mb-1" style={{ marginLeft: `${DAY_LABEL_W}px`, height: "14px" }}>
            {monthLabels.map(({ label, colIndex }) => (
              <span
                key={label + colIndex}
                className="absolute text-[10px] text-slate-400 whitespace-nowrap"
                style={{ left: `${colIndex * col}px` }}
              >
                {label}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="flex" style={{ gap: `${GAP}px` }}>
            {/* Day labels */}
            <div
              className="flex flex-col shrink-0"
              style={{ gap: `${GAP}px`, width: `${DAY_LABEL_W - GAP}px` }}
            >
              {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
                <div
                  key={i}
                  style={{ height: `${boxSize}px`, lineHeight: `${boxSize}px` }}
                  className="text-[9px] text-slate-500 text-right pr-1"
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Squares */}
            {weeks.map((week, wi) => (
              <div
                key={wi}
                className="flex flex-col shrink-0"
                style={{ gap: `${GAP}px`, width: `${boxSize}px` }}
              >
                {week.map((day, di) => (
                  <div
                    key={di}
                    title={`${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`}
                    style={{ width: `${boxSize}px`, height: `${boxSize}px`, borderRadius: "2px" }}
                    className={`${LEVEL_COLORS[day.level]} hover:opacity-70 transition-opacity cursor-default`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center mt-3 justify-end" style={{ gap: `${GAP}px` }}>
            <span className="text-[10px] text-slate-500 mr-1">Less</span>
            {LEVEL_COLORS.map((c, i) => (
              <div
                key={i}
                style={{ width: `${boxSize}px`, height: `${boxSize}px`, borderRadius: "2px" }}
                className={c}
              />
            ))}
            <span className="text-[10px] text-slate-500 ml-1">More</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

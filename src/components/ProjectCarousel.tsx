"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { ProjectSlide } from "@/data/projects";

export default function ProjectCarousel({ slides }: { slides: ProjectSlide[] }) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const count = slides.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  const prev = useCallback(() => go(-1), [go]);
  const next = useCallback(() => go(1), [go]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Lock scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const active = slides[index];

  return (
    <div className="w-full">
      {/* Stage */}
      <div className="group relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-[#0a1628] shadow-2xl shadow-blue-950/40">
        <Image
          key={active.src}
          src={active.src}
          alt={active.label}
          fill
          priority={index === 0}
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-contain"
        />

        {/* Prev / Next */}
        <button
          aria-label="Previous slide"
          onClick={prev}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-blue-600 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-blue-600 transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        {/* Expand */}
        <button
          aria-label="View fullscreen"
          onClick={() => setLightbox(true)}
          className="absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 text-white/90 hover:bg-blue-600 transition-colors opacity-0 group-hover:opacity-100"
        >
          <Maximize2 size={16} />
        </button>

        {/* Counter + caption */}
        <div className="absolute bottom-0 inset-x-0 flex items-center justify-between gap-3 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
          <span className="text-sm font-medium text-white">{active.label}</span>
          <span className="text-xs font-mono text-slate-300 tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {slides.map((s, i) => (
          <button
            key={s.src}
            aria-label={`Go to ${s.label}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-blue-500" : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Thumbnails */}
      <div className="mt-5 flex gap-2.5 overflow-x-auto pb-2 snap-x">
        {slides.map((s, i) => (
          <button
            key={s.src}
            onClick={() => setIndex(i)}
            aria-label={s.label}
            className={`relative shrink-0 w-28 aspect-[16/10] rounded-lg overflow-hidden border-2 snap-start transition-all ${
              i === index
                ? "border-blue-500 opacity-100"
                : "border-white/10 opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={s.src}
              alt={s.label}
              fill
              sizes="112px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            aria-label="Close"
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 grid place-items-center w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            <X size={22} />
          </button>

          <button
            aria-label="Previous slide"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-blue-600 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            aria-label="Next slide"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-blue-600 transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          <div
            className="relative w-full max-w-6xl aspect-[16/10]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.label}
              fill
              sizes="100vw"
              className="object-contain"
            />
            <div className="absolute -bottom-9 inset-x-0 text-center text-sm text-slate-300">
              {active.label} · {index + 1} / {count}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

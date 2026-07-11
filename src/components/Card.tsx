"use client";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface CardProps {
  img: string;
  alt: string;
  title: string;
  desc: string | undefined;
  iconsList: string[];
  link?: string;
  liveLink?: string;
  caseStudyLink?: string;
}

const primaryBtn =
  "flex items-center justify-center gap-2 flex-1 min-w-[120px] px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-blue-600/20";
const secondaryBtn =
  "flex items-center justify-center gap-2 flex-1 min-w-[110px] px-4 py-2.5 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-white text-sm font-medium transition-all duration-200";

const Card = ({ img, alt, title, desc, iconsList, link, liveLink, caseStudyLink }: CardProps) => {
  return (
    <BackgroundGradient className="rounded-[22px] bg-[#0a1628]">
      <div className="w-full rounded-[22px] overflow-hidden transition-transform duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative w-full h-[200px] overflow-hidden">
          <Image
            src={img}
            alt={alt}
            fill
            sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) 50vw, 380px"
            className="object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
        </div>

        <div className="p-6 space-y-4">
          {/* Title */}
          <h2 className="text-xl font-bold text-white leading-tight">{title}</h2>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>

          {/* Tech icons */}
          <div className="flex items-center gap-1">
            {iconsList.map((icon, index) => (
              <div
                key={index}
                className="relative w-8 h-8 rounded-full border border-white/10 bg-[#0f1729] flex items-center justify-center -ml-1 first:ml-0 hover:z-10 hover:scale-110 transition-transform"
                style={{ zIndex: iconsList.length - index }}
              >
                <Image
                  src={icon}
                  alt={`${title} tech`}
                  fill
                  sizes="32px"
                  className="p-1.5 object-contain rounded-full"
                />
              </div>
            ))}
          </div>

          {/* Buttons */}
          {(caseStudyLink || link || liveLink) && (
            <div className="flex flex-wrap gap-3">
              {caseStudyLink && (
                <Link href={caseStudyLink} className={primaryBtn}>
                  Case Study
                  <ArrowRight size={16} />
                </Link>
              )}
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={caseStudyLink ? secondaryBtn : primaryBtn}
                >
                  <ExternalLink size={16} />
                  Live Site
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={secondaryBtn}
                >
                  <Github size={16} />
                  Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default Card;

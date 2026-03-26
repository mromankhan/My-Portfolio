"use client";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface CardProps {
  img: string;
  alt: string;
  title: string;
  desc: string | undefined;
  iconsList: string[];
  link: string;
  liveLink?: string;
}

const Card = ({ img, alt, title, desc, iconsList, link, liveLink }: CardProps) => {
  return (
    <CardContainer containerClassName="py-4">
      <BackgroundGradient className="rounded-[22px] p-[1px] bg-[#0f1729]">
        <CardBody className="w-[350px] h-auto rounded-[22px] bg-[#0a1628] border-0 overflow-hidden">
          {/* Image */}
          <CardItem translateZ="80" className="w-full">
            <div className="relative w-full h-[200px] overflow-hidden rounded-t-[20px]">
              <Image
                src={img}
                alt={alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
            </div>
          </CardItem>

          <div className="p-6 space-y-5">
            {/* Title */}
            <CardItem translateZ="60">
              <h2 className="text-xl font-bold text-white leading-tight">
                {title}
              </h2>
            </CardItem>

            {/* Description */}
            <CardItem translateZ="40">
              <p className="text-slate-400 text-sm leading-relaxed">
                {desc}
              </p>
            </CardItem>

            {/* Tech icons */}
            <CardItem translateZ="50">
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
                      className="p-1.5 object-contain rounded-full"
                    />
                  </div>
                ))}
              </div>
            </CardItem>

            {/* Buttons */}
            <CardItem translateZ="60" className="w-full">
              <div className={`flex gap-3 ${liveLink ? "justify-between" : ""}`}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-white text-sm font-medium transition-all duration-200 ${!liveLink ? "w-full justify-center" : ""}`}
                >
                  <Github size={16} />
                  Code
                </a>
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-blue-600/20"
                  >
                    <ExternalLink size={16} />
                    Live Site
                  </a>
                )}
              </div>
            </CardItem>
          </div>
        </CardBody>
      </BackgroundGradient>
    </CardContainer>
  );
};

export default Card;

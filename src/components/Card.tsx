import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";

type propsTypes = {
    img: string,
    alt: string,
    title: string,
    desc: string | undefined,
    iconsList: string[],
    link: string
}

const Card = ({ img, alt, title, desc, iconsList, link }: propsTypes) => {
    return (
        <>
            <div className="max-w-[400px] bg-slate-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-105 ease-in">
                {/* Image Container */}
                <div className="relative w-full h-[200px] overflow-hidden">
                    <Image
                        src={img}
                        alt={alt}
                        // fill
                        height={600}
                        width={500}
                        className="object-cover transition-transform duration-700"
                        priority
                    />
                </div>

                {/* Content Container */}
                <div className="p-6 space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                            {title}
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {desc}
                        </p>
                    </div>

<div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconsList.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image src={icon} alt="icon5" className="p-2" fill priority/>
                      </div>
                    ))}
                  </div> 
                  </div>

                    {/* Button */}
                    <div className="pt-2">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 group">
                            Check Code
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            <Github />
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card




import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "./ui/textGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

const Hero = () => {
  return (
    <div className='scrollbar-custom pb-20 pt-36'>
         <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" 
        fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
        <div
           className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        /></div>
      <div className="flex justify-center relative mt-10 mb-20 z-10 ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* <h2 className="uppercase tracking-widesttesx-xs text-center text-blue-100 max-w-80">Dynamic web Magic With next.js</h2> */}
          <TextGenerateEffect 
          className="text-center text-[40px] md:text-5xl lg:6xl"
          words="Turning Your Vision Into Stunning Digital Realities "
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">Hi I'm <span className="text-purple">Roman</span>, a <span className="text-purple">MERN</span> Stack Developer</p>
          <Link href={"/projects"}> 
          <MagicButton 
          title="See My Work"
          icons={<FaLocationArrow />}
          position="right"/>
          </Link>
          </div>
      </div>
        </div>
  )
}

export default Hero

// Transforming Concepts Into Seamless Experiences 
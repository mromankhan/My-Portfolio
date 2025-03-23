"use client";
import Image from "next/image";
import Button from "@/components/Button";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import TypewriterEffect from "@/components/TypewritingEffect";

export default function HomeContent() {
  
      const handleDownload = () => {
        const resumePath = "/Roman_Resume.pdf"; // Path to the resume file in the public folder
        const link = document.createElement("a");
        link.href = resumePath;
        link.download = "Roman_Resume.pdf"; // Name of the downloaded file
        link.click();
      };
      // #020817
      // 
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <div className="container mx-auto px-4 pt-32 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">Hi There!</h2>
              <h1 className="text-4xl lg:text-6xl font-bold">
                It&apos;s <span className="text-blue-500">Roman Khan</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold">
               <TypewriterEffect />
                
              </h2>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600" onClick={handleDownload}>
              <MdOutlineFileDownload className="mr-2 h-6 w-6" /> Download Resume
            </Button>
          </div>

          <div className="relative aspect-square w-3/4 max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="relative rounded-full overflow-hidden aspect-square">
              <Image
                src="/images/working.svg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* intro section */}
      <section className="flex items-center justify-center mt-16 p-4 md:p-8">
        <div className="max-w-2xl w-full space-y-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            LET ME <span className="text-blue-500">INTRODUCE</span> MYSELF
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">

              <p className="text-lg">
                I&apos;m <span className="text-blue-500">A Passionate Developer</span> with a love for turning ideas into <span className="text-blue-500">impactful digital experiences.</span>
              </p>

              <p className="text-lg">
                Craft modern web and mobile applications using <span className="text-blue-500">JavaScript, ReactJs and React Native.</span>
              </p>

              <p className="text-lg">
                Explore future-forward fields like <span className="text-blue-500">Agentic AI and Natural Language Processing.</span>
              </p>

              <p className="text-lg">
                Build innovative, user-focused solutions with <span className="text-blue-500">cutting-edge tools and frameworks.</span>
              </p>

              <p className="text-lg">
                For me, coding isn&apos;t just work it&apos;s an art. I thrive on <span className="text-blue-500">solving problems, creating value, and pushing boundaries.</span>
              </p>
              <br />

              <p className="text-lg">
                <span className="text-blue-500 font-bold text-[28px]">Why me?</span> <br />
                I don&apos;t just code <span className="text-blue-500">I create experiences.</span> For me, every line of code is an opportunity to <span className="text-blue-500">bring value, solve problems, and push the boundaries of what&apos;s possible.</span>
              </p>
              <br />

              <p className="text-lg">
                <span className="text-blue-500 text-[20px] font-bold">Let&apos;s build the future together!</span> <br />
                From crafting elegant user interfaces to designing seamless user experiences, <span className="text-blue-500">I&apos;m here to create, collaborate, and innovate with you.</span>
              </p>

            </div>
          </div>

          <div className="pt-8">
            <h2 className="text-2xl font-bold mb-4"><span className="text-blue-500">FIND ME</span> ON</h2>
            <p className="mb-4">Feel free to <span className="text-blue-500">connect with me</span></p>

            <div className="flex justify-center gap-4 mb-6 flex-wrap">
      <a href={"https://github.com/mromankhan"} className="w-12 h-12 transition-all rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 hover:shadow-lg hover:shadow-blue-600">{<FiGithub size={30} className="pt-1" />}</a>
      <a href={"https://x.com/home"} className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center transition-all text-blue-500 hover:shadow-lg hover:shadow-blue-600">{<FaXTwitter size={25} />}</a>
      <a href={"https://www.linkedin.com/in/mromankhan"} className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 hover:shadow-lg hover:shadow-blue-600">{<FiLinkedin size={25} />}</a>
      <a href={"https://github.com/mromankhan"} className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 hover:shadow-lg hover:shadow-blue-600">{<FiMail size={25} />}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

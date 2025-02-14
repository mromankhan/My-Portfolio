import { GraduationCap, Plane, Globe } from "lucide-react";
import Image from "next/image";


const skills = [
  {
    id: 1,
    name: "react",
    img: "/images/react.svg"
  },
  {
    id: 2,
    name: "next.js",
    img: "/images/nextdotjs.svg"
  },
  {
    id: 3,
    name: "mongoDB",
    img: "/images/mongodb.svg"
  },
  {
    id: 4,
    name: "express.js",
    img: "/images/express.svg"
  },
  {
    id: 5,
    name: "node.js",
    img: "/images/nodejs.svg"
  },
  {
    id: 6,
    name: "redux",
    img: "/images/redux.svg"
  },
  {
    id: 7,
    name: "bootstrap",
    img: "/images/bootstrap.svg"
  },
  {
    id: 8,
    name: "tailwind",
    img: "/images/tailwindcss.svg"
  },
  {
    id: 9,
    name: "shadcn",
    img: "/images/shadcnui.svg"
  },
  {
    id: 10,
    name: "vercel",
    img: "/images/vercel.svg"
  },
  {
    id: 11,
    name: "javascript",
    img: "/images/javascript.svg"
  },
  {
    id: 12,
    name: "typescript",
    img: "/images/typescript.svg"
  },
  {
    id: 13,
    name: "python",
    img: "/images/python.svg"
  },
  {
    id: 14,
    name: "html",
    img: "/images/html5.svg"
  },
  {
    id: 15,
    name: "css",
    img: "/images/css3.svg"
  },
  {
    id: 16,
    name: "git",
    img: "/images/git.svg"
  },
  {
    id: 17,
    name: "github",
    img: "/images/github.svg"
  },
]

const About = () => {
  return (
    <>
      <main className="min-h-screen bg-black text-white p-8">
        <div className="max-w-6xl mx-auto space-y-20 mt-14 sm:mt-28">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl font-bold">
                Know <span className="text-blue-500">Who I&apos;m</span>
              </h1>

              <div className="space-y-4">
                <p className="text-lg">
                  Hi Everyone, I am{" "}
                  <strong className="text-blue-500">Muhammad Roman</strong> from Karachi, Pakistan.
                </p>

                <p className="text-lg">
                  I&apos;m a{" "}
                  <strong className="text-blue-500">Software Engineer</strong> and Student of SMIT.
                </p>

                <div className="mt-8">
                  <p className="text-lg mb-4">
                    Apart from <span className="text-blue-500">programming</span>, I indulge in a few other activities that bring me joy!
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Globe className="text-blue-500" size={20} />
                      <span>Exploring Tech World</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <GraduationCap className="text-blue-500" size={20} />
                      <span>Teaching</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="text-blue-500" size={20} />
                      <span>Travelling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center items-center">
              <Image
                src="/images/programmingboy.svg"
                alt="Profile"
                width={400}
                height={400}
                priority
              />
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center">
              Professional <span className="text-blue-500">Skillset</span>
            </h2>
            <div className="flex justify-center items-center flex-row flex-wrap gap-10 p-20 md:p-10 sm:p-5 sm:mt-8 ">
              {skills.map((skill) => (
                <div key={skill.id} className="flex justify-center ring-4 ring-blue-600 rounded-[20px]">
                  <div className="flex flex-col rounded-[22px] bg-zinc-900 overflow-hidden h-full max-w-sm hover:shadow-2xl hover:shadow-blue-600 transition-all">
                    <Image className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow" src={skill.img} alt={skill.name} height={150} width={150} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>

  );
}

export default About;
"use client";
// import { BackgroundGradient } from '../ui/background-gradient';
import { skills } from '@/Data';
import Navbar from '../Navbar';
import Image from 'next/image';

const AboutCon = () => {
  return (
    <>
        <div>
          <Navbar />
          <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black-100/[0.2]
    absolute top-0 left-0 flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
      bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" /></div>

          <div className="flex justify-center relative mt-32 my-20 z-10 ">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <h1 className="heading text-center mb-5">
                Know <span className='text-purple'>Who I&apos;M</span>
              </h1>
              <p className="text-center md:leading-10 lg:leading-10 mb-4 text-[25px] md:text-3xl lg:text-3xl">Hi Everyone, I am Muhammad Roman from Karachi, Pakistan.
                I&apos;m a Software Engineer at @Tech Company, Student of SMIT</p>

            </div>
          </div>
          <div className='flex justify-center relative mt-32 z-10'>
            <h1 className="heading">Professional <span className="text-purple">Skillset</span></h1>
          </div>
          <div className='flex justify-center items-center flex-row flex-wrap gap-10 p-20 md:p-10 sm:p-5'>
            {skills.map((skill) => (
              <div key={skill.id} className="flex justify-center z-50">
                   <div className="flex flex-col 
           rounded-[22px] bg-white dark:bg-zinc-900 
           overflow-hidden h-full max-w-sm ">
                  <Image className="p-4 sm:p-6 flex flex-col 
               items-center text-center flex-grow" src={skill.img} alt={skill.name} height={150} width={150} />
                </div>
                {/* <BackgroundGradient className="flex flex-col 
           rounded-[22px] bg-white dark:bg-zinc-900 
           overflow-hidden h-full max-w-sm ">
                  <Image className="p-4 sm:p-6 flex flex-col 
               items-center text-center flex-grow" src={skill.img} alt={skill.name} height={150} width={150} />
                </BackgroundGradient> */}
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default AboutCon


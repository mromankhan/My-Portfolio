import Navbar from '@/components/Navbar';
import RecentProjects from '@/components/RecentProjects'
import { BackgroundLines } from '@/components/ui/background-lines';

const ProjectsContent = () => {
  return (
    <>
      <Navbar />
      <div className="pb-20 pt-36 bg-black-100 overflow-clip">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <div className="flex justify-center relative my-20 z-10 ">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <h1 className="heading text-center mb-3">My Recent <span className="text-purple">Works</span></h1>
              <p className="text-center text-sm md:text-lg lg:text-xl">Here are a few projects I&apos;ve worked on recently</p>
            </div>
          </div>
        </BackgroundLines>
        <div className="p-10 md:-mt-20 lg:-mt-50">
          <RecentProjects />
        </div>
      </div>
    </>
  )
}

export default ProjectsContent
import Card from "@/components/Card";

const project = [
  {
    id: 1,
    title: "Modern Music Academy Web",
    desc: "Explore your musical potential with our comprehensive online music academy.",
    img: "/myp1.jpg",
    alt: "Music Academy Web Image",
    iconsList: ["/images/next.svg", "/images/ts.svg", "/images/tail.svg", "/acter.jpg", "/images/fm.svg"],
    link: "https://github.com/mromankhan/Music-Academy-Web",
  },
  {
    id: 2,
    title: "Personal Blog Web",
    desc: "Dive into my personal journey—exploring tech, thoughts, and tales that inspire.",
    img: "/myp2.jpg",
    alt: "Personal Blog Web Image",
    iconsList: ["/images/next.svg", "/images/re.svg", "/images/tail.svg", "/images/ts.svg", "/cn.jpg"],
    link: "https://github.com/mromankhan/Personal-Blog-Web",
  },
  {
    id: 3,
    title: "Expense Tracker Web",
    desc: "Explore your musical potential with our comprehensive online music academy.",
    img: "/myp3.jpg",
    alt: "Expense Tracker Web Image",
    iconsList: ["/images/next.svg", "/images/re.svg", "/images/tail.svg", "/images/ts.svg", "/cn.jpg"],
    link: "https://github.com/mromankhan/Expense-Tracker-Web",
  },
  {
    id: 4,
    title: "Chat Web",
    desc: "Explore your musical potential with our comprehensive online music academy.",
    img: "/images/next.svg",
    alt: "Weather App Image",
    iconsList: ["/images/next.svg", "/images/re.svg", "/images/tail.svg", "/images/ts.svg", "/cn.jpg"],
    link: "https://github.com/mromankhan/Chat-Web",
  },
];

const Projects = () => {
  return (
    <>
      <main className="min-h-screen bg-black text-white pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center relative z-10 mb-20">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <h1 className="font-bold text-4xl md:text-5xl text-center mb-3">My <span className="text-blue-500">Recent </span>Works</h1>
              <p className="text-center text-sm md:text-lg lg:text-xl">Here are a <span className="text-blue-500">few projects I&apos;ve worked </span>on recently</p>
            </div>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-4xl md:text-5xl text-center">
              A Small Selection of <span className="text-blue-500">Recent Projects</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-2 2xl:gap-28 2xl:p-20">
          {project.map(({ id, title, desc, img, alt, iconsList, link }) => (
            <div key={id}>
              <Card img={img} alt={alt} title={title} desc={desc} iconsList={iconsList} link={link} />
            </div>
          ))}
        </div> 
      </main>
    </>
  );
}

export default Projects;
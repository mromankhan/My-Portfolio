import Card from "@/components/Card";


const project = [
  {
    id: 1,
    title: "Personal Blog Web",
    desc: "Dive into my personal journey—exploring tech, thoughts, and tales that inspire.",
    img: "/myp2.jpg",
    alt: "Personal Blog Web Image",
    iconsList: ["/images/next.svg", "/images/re.svg", "/images/tail.svg", "/images/ts.svg", "/images/firebaseicon.svg", "/cn.jpg"],
    githublink: "https://github.com/mromankhan/Personal-Blog-Web",
    liveLink: "https://roman-blog.vercel.app"
  },
  {
    id: 2,
    title: "Expense Tracker Web",
    desc: "An expense tracker web app to manage and monitor daily spending with real-time updates.",
    img: "/myp3.jpg",
    alt: "Expense Tracker Web Image",
    iconsList: ["/images/next.svg", "/images/re.svg", "/images/tail.svg", "/images/ts.svg", "/images/firebaseicon.svg", "/cn.jpg"],
    githublink: "https://github.com/mromankhan/Expense-Tracker-Web",
    liveLink: "https://expenses-tracker-beta-three.vercel.app"
  },
  {
    id: 3,
    title: "Modern Music Academy Web",
    desc: "Explore your musical potential with our comprehensive online music academy.",
    img: "/myp1.jpg",
    alt: "Music Academy Web Image",
    iconsList: ["/images/next.svg", "/images/ts.svg", "/images/tail.svg", "/acter.jpg", "/images/fm.svg"],
    githublink: "https://github.com/mromankhan/Music-Academy-Web",
  },
  {
    id: 4,
    title: "Chat Web (Under Development)",
    desc: "Stay connected in real-time — a modern chat app built for fast, fluid conversations.",
    img: "/images/next.svg",
    alt: "Chat web Image",
    iconsList: ["/images/next.svg", "/images/re.svg", "/images/mongoicon.svg", "/images/expicon.svg", "/images/nodejsicon.svg", "/images/tail.svg", "/images/ts.svg", "/cn.jpg"],
    githublink: "https://github.com/mromankhan/Chat-Web",
  },
  {
    id: 5,
    title: "Weather Application",
    desc: "Weather Application is a React Native app that provides real-time weather updates with a dynamic UI.",
    img: "/myp5.png",
    alt: "Weather App Image",
    iconsList: ["/expo.png", "/images/re.svg", "/images/tail.svg", "/images/ts.svg"],
    githublink: "https://github.com/mromankhan/Weather-Application",
  },
  {
    id: 6,
    title: "Food Review Application",
    desc: "Food Review is a sleek React Native UI concept for a modern and engaging food review app.",
    img: "/myp6.png",
    alt: "Food Review App Image",
    iconsList: ["/expo.png", "/images/re.svg", "/images/tail.svg", "/images/ts.svg"],
    githublink: "https://github.com/mromankhan/Food-Review-Application",
  },
];

const Projects = () => {
  return (
    <>
      <main className="min-h-screen bg-[#020817] text-white py-24">
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
          {project.map(({ id, title, desc, img, alt, iconsList, githublink, liveLink }) => (
            <div key={id}>
              <Card img={img} alt={alt} title={title} desc={desc} iconsList={iconsList} link={githublink} liveLink={liveLink} />
            </div>
          ))}
        </div> 
      </main>
    </>
  );
}

export default Projects;
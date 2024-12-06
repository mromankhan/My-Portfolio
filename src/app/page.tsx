import Approach from "@/components/Approach";
// import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const HomeContent = () => {

  return (
    <>
    <Navbar />
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-clip mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Hero />
          <Grid />
          {/* <Clients /> */}
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default HomeContent
// import loaderAnimation from "@/Data/loader.json";
// import Lottie from "react-lottie";

// const Loader = () => {
//   return (
//     <>
//     {/* <p>Loading...</p> */}
//     </>
//   )
// }

// export default Loader


const Loader = () => {
  return (
    <div className="relative w-14 h-14 animate-spin988">
      <div className="absolute w-5 h-5 bg-[#333] rounded-full top-0 left-0"></div>
      <div className="absolute w-5 h-5 bg-[#333] rounded-full top-0 right-0"></div>
      <div className="absolute w-5 h-5 bg-[#333] rounded-full bottom-0 left-0"></div>
      <div className="absolute w-5 h-5 bg-[#333] rounded-full bottom-0 right-0"></div>
    </div>
  );
};

export default Loader;

{/* <div className="relative w-16 h-16 animate-spin988">
  <div className="absolute w-4 h-4 bg-[#333] rounded-full top-0 left-0"></div>
  <div className="absolute w-4 h-4 bg-[#333] rounded-full top-0 right-0"></div>
  <div className="absolute w-4 h-4 bg-[#333] rounded-full bottom-0 left-0"></div>
  <div className="absolute w-4 h-4 bg-[#333] rounded-full bottom-0 right-0"></div>
</div> */}

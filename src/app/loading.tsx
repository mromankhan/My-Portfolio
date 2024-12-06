import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="relative w-14 h-14 animate-spin988">
        <div className="absolute w-5 h-5 bg-[#333] rounded-full top-0 left-0"></div>
        <div className="absolute w-5 h-5 bg-[#333] rounded-full top-0 right-0"></div>
        <div className="absolute w-5 h-5 bg-[#333] rounded-full bottom-0 left-0"></div>
        <div className="absolute w-5 h-5 bg-[#333] rounded-full bottom-0 right-0"></div>
      </div>
      </div>
  )
}

export default Loading

// const Loader = () => {
//     return (
     
//     );
//   };
  
//   export default Loader;
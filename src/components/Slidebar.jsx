
// import Section from "./Section";
// import Heading from "./Heading";
// import { service1, service2, service3, check } from "../assets";
// import { brainwaveServices, brainwaveServicesIcons } from "../constants";
// import {
//   PhotoChatMessage,
//   Gradient,
//   VideoBar,
//   VideoChatMessage,
// } from "./design/Services";

// import Generating from "./Generating";

// function Slidebar() {
//   return (
//     <Section id="how-to-use">
//       <div className="container">
//       <Heading  
//         title="Special Offers"  
//         text="The Rich Royals empowers you with the tools and knowledge to navigate the trading world and achieve lasting success."  
//       />  

//         <div className="relative">
//           <div className="relative z-1 grid gap-5 lg:grid-cols-2">
//             <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
//               <div className="absolute inset-0">
//                 <img
//                   src={service2}
//                   className="h-full w-full object-cover"
//                   width={630}
//                   height={750}
//                   alt="robot"
//                 />
//               </div>

//               <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
//                 <h4 className="h4 mb-4">Smart Trading Education</h4>
//                 <p className="body-2 mb-[3rem] text-n-3">
//                 Master the art of trading with expert insights, proven strategies, and &apos; real-world applications. Start your journey to financial success today!
//                 </p>
//               </div>

//               <PhotoChatMessage />
//             </div>





//             <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
//               <div className="py-12 px-4 xl:px-8">
//                 <h4 className="h4 mb-4">Smart Trading Strategies</h4>
//                 <p className="body-2 mb-[2rem] text-n-3">
//                 Unlock the secrets of successful trading with expert strategies and insights. What will your trading journey look like?
//                 </p>

//                 <ul className="flex items-center justify-between">
//                   {brainwaveServicesIcons.map((item, index) => (
//                     <li
//                       key={index}
//                       className={`rounded-2xl flex items-center justify-center ${
//                         index === 2
//                           ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
//                           : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
//                       }`}
//                     >
//                       <div
//                         className={
//                           index === 2
//                             ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
//                             : ""
//                         }
//                       >
//                         <img src={item} width={24} height={24} alt={item} />
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
//                 <img
//                   src={service3}
//                   className="w-full h-full object-cover"
//                   width={520}
//                   height={400}
//                   alt="Scary robot"
//                 />

//                 <VideoChatMessage />
//                 <VideoBar />
//               </div>
//             </div>
//           </div>

//           <Gradient />
//         </div>



//       </div>
//     </Section>
//   )
// }

// export default Slidebar


import React, { useState, useEffect } from 'react';
import { service2, service3 } from "../assets"; // Import images

function Slidebar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderItems = [
    {
      image: service2,
      title: "Smart Trading Education",
      description: "Master the art of trading with expert insights, proven strategies, and real-world applications. Start your journey to financial success today!"
    },
    {
      image: service3,
      title: "Smart Trading Strategies",
      description: "Unlock the secrets of successful trading with expert strategies and insights. What will your trading journey look like?"
    },
    {
        image: service2,
        title: "Rand",
        description: "Master the art of trading with expert insights, proven strategies, and real-world applications. Start your journey to financial success today!"
      },
      {
        image: service3,
        title: "Smart Trading Strategies",
        description: "Unlock the secrets of successful trading with expert strategies and insights. What will your trading journey look like?"
      }
  ];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length);
  };

  // Auto slide functionality using setInterval
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="relative z-1 grid gap-5 lg:grid-cols-2">
        <div className="relative min-h-[39rem] border rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={sliderItems[currentIndex].image}
              className="h-full w-full object-cover"
              width={630}
              height={750}
              alt="slider-image"
            />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-black to-transparent">
            <h4 className="h4 mb-4">{sliderItems[currentIndex].title}</h4>
            <p className="body-2 mb-[3rem] text-white">
              {sliderItems[currentIndex].description}
            </p>
          </div>
        </div>

        {/* Previous and Next Buttons */}
        <button onClick={goToPrevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">Prev</button>
        <button onClick={goToNextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">Next</button>
      </div>
    </div>
  );
}

export default Slidebar;

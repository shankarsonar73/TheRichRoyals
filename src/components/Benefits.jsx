// import { benefits } from "../constants";
// import Heading from "./Heading";
// import Section from "./Section";
// import Arrow from "../assets/svg/Arrow";
// import { GradientLight } from "./design/Benefits";
// import ClipPath from "../assets/svg/ClipPath";
// import { therichroyal } from "../assets";

// const Benefits = () => {
//   return (
//     <Section id="features">
//       <div className="container relative z-2">
//         <Heading
//           className="md:max-w-md lg:max-w-2xl"
//           title="Trade Smarter, Not Harder with Rich Royals."
//         />

//         <div className="flex flex-wrap gap-10 mb-10">
//           {benefits.map((item) => (
//             <div
//               className="relative p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg md:max-w-[24rem]"
//               key={item.id}
//             >
//               {/* Inner Card */}
//               <div className="bg-black-3 rounded-lg flex flex-col min-h-[22rem] p-[2.4rem] relative z-10">
//                 <h5 className="h5 mb-5">{item.title}</h5>
//                 <p className="body-2 mb-6 text-n-3">{item.text}</p>
//                 <div className="flex items-center mt-auto">
//                   <img
//                     src={item.iconUrl}
//                     width={48}
//                     height={48}
//                     alt={item.title}
//                   />
//                   <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
//                     Explore more
//                   </p>
//                   <Arrow />
//                 </div>
//               </div>

//               {/* Gradient Light (if applicable) */}
//               {item.light && <GradientLight />}

//               {/* Image Overlay */}
//               <div
//                 className="absolute inset-0.5 bg-n-8 rounded-lg"
//                 style={{ clipPath: "url(#benefits)" }}
//               >
//                 <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
//                   {item.imageUrl && (
//                     <img
//                       src={therichroyal}
//                       width={380}
//                       height={362}
//                       alt={item.title}
//                       className="w-full h-full object-cover rounded-lg"
//                     />
//                   )}
//                 </div>
//               </div>

//               <ClipPath />
//             </div>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default Benefits;




import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { therichroyal } from "../assets";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Trade Smarter, Not Harder with Rich Royals."
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (

            <div
              className="relative p-[1px] bg-gradient-to-b from-blue-800 via-violet-800 to-blue-500 rounded-lg md:max-w-[24rem]"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex items-center pointer-events-auto"
                  >
                    <p className="font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Explore more
                    </p>
                    <Arrow />
                    </a>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={therichroyal}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;

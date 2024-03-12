import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

// const Details = ({ type, time, place, info }) => {
//   const ref = useRef(null);
//   return (
//     <li
//       ref={ref}
//       className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
//     >
//       <AboutIcon reference={ref} />
//       <motion.div
//         initial={{ y: 50 }}
//         whileInView={{ y: 0 }}
//         transition={{ duration: 0.5, type: "spring" }}
//       >
//         <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
//         <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
//           {time} | {place}
//         </span>
//         <p className="font-medium w-full md:text-sm">{info}</p>
//       </motion.div>
//     </li>
//   );
// };


const Details = ({ type, time, place, cgpa, info }) => {
  const ref = useRef(null);

  // Split info string into an array based on "; "
  const infoItems = info.split("; ").filter(item => item.trim() !== '');

  // Function to render info items as bullet points
  const renderInfoList = (infoItems) => {
    return infoItems.map((item, index) => (
      <li key={index} className="list-disc list-inside dark:text-white text-black text-justify">
        {item}
      </li>
    ));
  };

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
      <AboutIcon reference={ref} />
      <motion.div initial={{y: 50}} whileInView={{y: 0}} transition={{duration: 0.5, type: "spring"}}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        <br></br>
        <span className=" text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          CGPA - {cgpa}
        </span>
        <ul className="font-medium w-full md:text-sm">
          {renderInfoList(infoItems)}
        </ul>
      </motion.div>
    </li>
  );
};


const Education = () => {
  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">

          <Details
            type="Master of Science in Computer Science"
            time="Aug 2022 - May 2024"
            place="California State University, Chico"
            cgpa="3.91 / 4.0"
            info="Working on a Master's research project which extracts content from research papers related to Live coding technique in education
            field and performs sentiment analysis using NLP.; Relevant courses included Algorithms and Data Structures,
            Applied Machine Learning, Applied Computer Vision, Advanced Database Management Systems, Algorithms and Computability,
            Applied Graph Theory."
          />

          <Details
            type="Bachelor of Engineering in Computer Engineering"
            time="Jul 2015 - Jun 2019"
            place="Savtribai Phule Pune University, Pune, India"
            cgpa="3.85 / 4.0"
            info="Completed a Bachelor's project on deep learning, developing an intelligent cyber security system which uses
            network logs and detects potential cyber attacks and also provides possible solution to avoid attacks in future.;
            Relevant courses included Advanced Data Structures, Object Oriented Programming, Machine Learning, Database Management
            Systems, High Performance Computing, Web Technology, Cyber Security."
          />

        </ul>
      </div>
    </div>
  );
};

export default Education;

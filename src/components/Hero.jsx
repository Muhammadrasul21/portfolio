import React from "react";
import profilePic from "../assets/profilelogo.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
const childVriants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Muhammadrasul Gulomjonov"
              className=" border border-stone-900 rounded-3xl w-[650px] h-auto"
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVriants}
              className="pb-2 text-4xl text-center tracking-tighter lg:text-8xl"
            >
              Muhammadrasul Gulomjonov
            </motion.h2>
            <motion.span
              variants={childVriants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent "
            >
              Front End Developer
            </motion.span>
            <motion.p
              variants={childVriants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
             Front-End Developer  7 months of ongoing study at Najot Ta'lim. Proficient in HTML, CSS (SASS, Bootstrap, Tailwind), and JavaScript. Skilled in React, Context API, Redux (RTK, RTK Query), and Zustand. Experienced with Git/GitHub for version control. Strong problem-solving skills with a focus on debugging and optimization. Continuously learning modern technologies to stay up to date with industry trends.
            </motion.p>
            <motion.a
              variants={childVriants}
              to="https://www.canva.com/design/DAGT757dl-w/k_F_VQYUjRet6DNtdQROdw/view?utm_content=DAGT757dl-w&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbd1ed617b3"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 cursor-pointer"
            >
              Donwload Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <div className="pb-4">
      <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100 }} transition={{duration:0.5}} className="my-16 text-center text-4xl">Experience</motion.h2>
      <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className="max-w-[700px] m-auto">
        Currently learning front-end development for the past 7 months at Najot
        Ta'lim. I have been working on various projects to strengthen my skills
        in HTML, CSS, JavaScript, ReactJs and NextJs.
      </motion.p>
    </div>
  );
};

export default Experience;

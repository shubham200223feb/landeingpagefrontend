import React from "react";
import Marquee from "react-fast-marquee";
import {motion} from "framer-motion" 
const skills = [
  "/rsalted.jpeg",
  "/cream.jpeg",
  "/peri-peri.jpeg",
  "/pudina.jpeg",
  "/chocalate.jpeg",
  

];

const Types = () => {
  return (
    <div id="Type" className="w-screen b py-10 bg-gradient-to-r from-yellow-400 to-yellow-700">
      <h1 className="text-white text-[10vw] font-bold text-center mb-6">
        Comeing Soon .... 
      </h1>

      <Marquee speed={60} pauseOnHover={true} gradient={false}>
        <div className="flex gap-6">
          {skills.map((skill, index) => (
            <motion.img key={index} whileTap={{ 
        rotate:360, 
        transition: { duration: 1 } 
        
      }}

      whileHover={{ 
        rotate:360, 
        transition: { duration: 1 } 
      }}
              className="px-6 py-3 rounded-full w-[30vw] h-[36vh]" src={skill}
              
            >
              
            </motion.img>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Types;
import React from 'react'
import { motion } from 'motion/react';

const Content = () => {
  return (
    <div className="h-screen bg-gray-500 flex justify-center items-center">
      <div className="flex justify-center items-center bg-gray-700 min-h-[80%] w-full [perspective::1000px] [tranform-style:preserve-3d]">
        <motion.button
        whileHover={{rotateX:20,rotateY:10}}
        style={{translateZ:100}}
        transition={{ease:"easeInOut",duration:2}}
         className="w-40 h-20 bg-gray-900 text-gray-300 relative group">
          <p className="group-hover:text-cyan-500 p-3 text-3xl mx-auto">Subscribe</p>
          {/* Gradient underline */}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-700 to-transparent"></span>
               <span className="absolute opacity-0 group-hover:opacity-100 bottom-[10px] left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-700 to-transparent mx-auto blur-sm"></span>
        </motion.button>
      </div>
    </div>
  );
};

export default Content;


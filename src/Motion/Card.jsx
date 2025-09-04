  import {AnimatePresence, motion, PresenceContext} from "motion/react"
import { useState } from "react";
const Card = () => {
  const [open,setOpen] = useState(true)
  return (<>
  <AnimatePresence>
     {
     
      open &&<motion.div exit={{opacity:0, filter:"blur(30px)" }}
      transition={{duration:3}}
       className="h-screen bg-gray-600">
      <div className="flex justify-center items-center mx-auto  h-full  ">
        <div className=" h-[65%] min-h-[65%]: w-[28%] bg-gray-400 rounded-2xl flex flex-col p-3 ">
          <div className="shadow-2xl bg-gray-300 rounded-t-2xl ">
            <h2 className="text-bold px-3 text-[20px] pt-2">
              {" "}
              accertinity ui component
            </h2>
            <p className="text-bold text-gray-600 text-xs tracking-tight px-3 mt-2">
              {" "}
              Lorem ipsum dolor sit amet alias eos perspiciatis neque itaque
              nihil dolores.
            </p>
            <div className="flex justify-center items-center mx-auto w-full m-3 ">
              {" "}
              <button
              onClick={()=>setOpen(false)}
                className="px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-600 
                     text-white font-semibold rounded-xl shadow-lg
                     hover:from-amber-500 hover:to-amber-700 
                     hover:scale-105 transform transition-all duration-300"
              >
                Accertinity
              </button>
            </div>
            
          </div>
          <motion.div

          initial={{opacity:0,
            filter:"blur(20px)"
          }}
          whileHover={{opacity:1,}}
          transition={{ease:"easeInOut",duration:3}}
          
          className="flex-1 bg-gray-300 rounded-b-2xl border border-dashed border-neutral-200 relative ">
            <div className="absolute bg-white h-full w-full rounded-lg inset-0 flex flex-col divide-y divide-red-500">
                <div className="w-full flex flex-col items-center px-4"> 
                <div className="h-15 w-10 rounded-xl bg-blue-400 gap-3 flex flex-col "></div>

                <div className="h-15 w-10 rounded-xl bg-blue-400 gap-3 flex flex-col "></div>
                <div className="h-15 w-10 rounded-xl bg-blue-400 gap-3 flex flex-col "></div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  
     }</AnimatePresence>
    </>
  );
};

export default Card;

import { motion } from 'framer-motion';
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
        <div className='text border-t-2 border-b-2 leading-none whitespace-nowrap overflow-hidden border-zinc-300 flex'>
            
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", duration:5, repeat:Infinity}} className='marquee text-[21vw] leading-none font-semibold uppercase tracking-tighter  mb-[2vw] mr-20'>
                we are ochi
            </motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", duration:5, repeat:Infinity}} className=' marquee text-[21vw] leading-none font-semibold uppercase tracking-tighter  mb-[2vw] mr-20'>we are ochi
            </motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", duration:5, repeat:Infinity}} className=' marquee text-[21vw] leading-none font-semibold uppercase tracking-tighter  mb-[2vw] mr-20'>we are ochi
            </motion.h1>
        </div>
    </div>
  )
}

export default Marquee
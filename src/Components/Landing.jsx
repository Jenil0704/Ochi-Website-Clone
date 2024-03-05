import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { FaArrowUp } from "react-icons/fa6";
function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className='w-full h-screen pt-1 bg-zinc-900'>
      <div className='textstructure mt-[146px] px-[54px]'>
          {["We Create", "Eye Opening", "presentations"].map((item,index)=>{
            return(
            <div className='masker'>
              <div className='w-fit flex items-center'>
                {index === 1 && (<motion.div initial={{width:"0vw"}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className='w-[9vw] h-[6vw] mr-[.7vw] rounded-md relative top-[.3vw] overflow-hidden'>
                  <img className='h-full w-full object-cover' src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg'/>
                </motion.div>)}
                <h1 className="maskertext uppercase text-[7vw] leading-none tracking-tight font-medium">{item}</h1>
              </div>
            </div>
            )
          })}
      </div>
      <div className='border-t-[1px] border-zinc-700 mt-24 flex justify-between items-center py-5 px-[54px]'>
        {["For public and private companies", "From the first pitch to IPO"].map((item,index)=>{
          return(
          <p className='text-[17px] font-light tracking-tight leading-none'>{item}</p>
          )
        })}
        <div className='start flex items-center gap-[5px] '>
          <div className="start-text px-5 py-2 border-[1px] rounded-full border-zinc-500 font-light text-sm uppercase">start the project</div>
          <div className='w-10 h-10 border-[1px] border-zinc-500 rounded-full flex items-center justify-center'>
            <span className='rotate-[45deg]'>
            <FaArrowUp/>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
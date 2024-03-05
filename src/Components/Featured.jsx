import { motion,useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from 'gsap/all';

function Featured() {
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

    const handleHover = (index)=>{
        cards[index].start({y:"0"})
    }

    const handleHoverEnd = (index)=>{
        cards[index].start({y:"100%"})
    }
return (
<div className='w-full py-16'>
    <div className='w-full px-12 border-b-[1px] border-zinc-700 pb-16'>
        <h1 className='featured text-6xl tracking-tight'>Featured projects</h1>
    </div>
    <div className='px-14'>
        <div className='cards w-full flex gap-8 mt-10'>
            <div className='h-[95vh] w-1/2'>
                <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className='card w-full h-[80vh] relative'>
                    <h2 className=' heading absolute flex left-full overflow-hidden top-1/2 -translate-x-[40%] -translate-y-1/2 text-[7vw] z-[9] font-medium text-[#CDEA68]'>
                    {"FYDE".split('').map((item,index)=>{
                            return(
                            <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease:[0.22, 1, 0.36, 1], delay:index*.03}} className='inline-block translate-y-full'>{item}</motion.span>
                            )
                        })}
                    </h2>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='h-full' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' alt='image loading'/>
                    </div>
                </motion.div>
                {["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"].map((item,index)=>{
            return(
                <button className='button-text py-1 px-4 bg-transparent text-zinc-100 rounded-full mr-2 border-2 border-zinc-100 mt-4'>{item}</button>
            )
            })}
            </div>
            <div className='h-[95vh] w-1/2'>
                <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className='card w-full h-[80vh] rounded-xl relative'>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <h2 className=' heading absolute flex overflow-hidden right-full top-1/2 translate-x-[40%] -translate-y-1/2 text-[7vw] z-[9] font-medium text-[#CDEA68]'>
                        {"VISE".split('').map((item,index)=>{
                            return(
                            <motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease:[0.22, 1, 0.36, 1], delay:index*.03}} className='inline-block translate-y-full'>{item}</motion.span>
                            )
                        })}
                    </h2>
                        <img className='h-full' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg' alt='image loading'/>    
                    </div>    
                </motion.div>
                {["AGENCY", "COMPANY PRESENTATION"].map((item,index)=>{
                return(
                    <button className=' button-text py-1 px-4 bg-transparent text-zinc-100 rounded-full mr-2 border-2 border-zinc-100 mt-4'>{item}</button>
                )
                })}
            </div>            
        </div>


        <div className='cards w-full flex gap-8 mt-10'>
            <div className='h-[95vh] w-1/2'>
                <motion.div onHoverStart={()=>handleHover(2)} onHoverEnd={()=>handleHoverEnd(2)} className='card w-full h-[80vh] relative'>
                    <h2 className=' heading absolute flex overflow-hidden left-full top-1/2 -translate-x-[40%] -translate-y-1/2 text-[7vw] z-[9] font-medium text-[#CDEA68]'>
                    {"TRAWA".split('').map((item,index)=>{
                            return(
                            <motion.span initial={{y: "100%"}} animate={cards[2]} transition={{ease:[0.22, 1, 0.36, 1], delay:index*.03}} className='inline-block translate-y-full'>{item}</motion.span>
                            )
                        })}
                    </h2>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='h-full' src='https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg' alt='image loading'/>
                    </div>
                </motion.div>
                {["BRAND IDENTITY", "DESIGN RESEARCH", "INVESTOR DECK"].map((item,index)=>{
            return(
                <button className=' button-text py-1 px-4 bg-transparent text-zinc-100 rounded-full mr-2 border-2 border-zinc-100 mt-4'>{item}</button>
            )
            })}
            </div>
            <div className='h-[95vh] w-1/2'>
                <motion.div onHoverStart={()=>handleHover(3)} onHoverEnd={()=>handleHoverEnd(3)} className='card w-full h-[80vh] rounded-xl relative'>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <h2 className=' heading absolute flex overflow-hidden right-full top-1/2 translate-x-[40%] -translate-y-1/2 text-[7vw] z-[9] font-medium text-[#CDEA68]'>
                        {"PREMIUM BLEND".split('').map((item,index)=>{
                            return(
                            <motion.span initial={{y: "100%"}} animate={cards[3]} transition={{ease:[0.22, 1, 0.36, 1], delay:index*.03}} className='inline-block translate-y-full'>{item}</motion.span>
                            )
                        })}
                    </h2>
                        <img className='h-full' src='https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png' alt='image loading'/>    
                    </div>    
                </motion.div>
                {["BRANDED TEMPLATE"].map((item,index)=>{
                return(
                    <button className='button-text py-1 px-4 bg-transparent text-zinc-100 rounded-full mr-2 border-2 border-zinc-100 mt-4'>{item}</button>
                )
                })}
            </div>            
        </div>
    </div>
        <div className='flex justify-center mt-5' >
            <button className='button-text py-4 px-6 bg-zinc-100 rounded-full flex gap-8 items-center text-black'>VIEW ALL CASE STUDIES
                    <div className='w-3 h-3 bg-zinc-900 rounded-full'></div>
            </button>
        </div>
</div>
)
}

export default Featured
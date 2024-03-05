import React from 'react'

function Ready() {
  return (
    <div className='w-full h-screen bg-[#CDEA68]'>
        <div className='h-[70vh] text-center text-zinc-900 py-16'>
            {["READY", "TO START", "THE PROJECT?"].map((item,index)=>{
                return(
                    <h1 className='ready text-[11vw] -mb-2 leading-none tracking-tighter font-semibold'>{item}</h1>
                )
            })}
        </div>
        <div className='grid items-center justify-center text-center mt-16 gap-2'>
        <button className='button-text py-4 px-6 bg-zinc-900 rounded-full flex items-center gap-7'>
            START THE PROJECT
            <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
        </button>
        <p className='text-zinc-900 font-[Neue Montreal]'>OR</p>
        <button className='button-text py-4 px-6 bg-transparent border-2 border-zinc-900 text-zinc-900 rounded-full flex items-center gap-7'>
            HELLO@OCHI.DESIGN
            <div className='w-2 h-2 rounded-full bg-zinc-900'></div>
        </button>
        </div>
    </div>
  )
}

export default Ready
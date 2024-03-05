import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-14'>
        <div className='cards-container h-[50vh] w-1/2'>
            <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
              <img src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' className='h-16'></img>
              <div className='absolute left-8 bottom-8 py-1 px-3 border-[1px] rounded-full border-[#CDEA68] text-[#CDEA68]'>©2019-2022</div>
            </div>
        </div>
        <div className='cards-container h-[50vh] w-1/2 flex gap-5'>
        <div className='card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute left-8 bottom-8 py-1 px-3 rounded-full border-[1px] border-zinc-100 tracking-tight'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
          <img className='h-24' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute left-8 bottom-8 py-1 px-3 rounded-full border-[1px] border-zinc-100 tracking-tight'>BUSINESS BOOTCAMP ALUMNI</button>
        </div>
        </div>
        
    </div>
  )
}

export default Cards
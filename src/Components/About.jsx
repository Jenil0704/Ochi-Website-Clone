import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.1" className='w-full py-20 px-14 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='about text-[4vw] leading-[4vw] tracking-tight  '>
      Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className='w-full border-t-[1px] border-[#a1b562] mt-20 pt-4 flex gap-5'>
        <div className='w-1/2'>
          <h1 className='text-5xl'>Our approach</h1>
          <button className='px-8 py-4 mt-6 rounded-full bg-[#212121] text-white flex gap-7 items-center'>Read More
          <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-1/2 h-[70vh] bg-[#8da046] rounded-xl overflow-hidden'>
          <img src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg' alt='Image Loading' className='h-full'/>
        </div>
      </div>
    </div>
  )
}

export default About
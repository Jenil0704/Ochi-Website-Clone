import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import Ready from './Components/Ready'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  const locomotivescroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Ready/>
      <Footer/>
    </div>
  )
}

export default App
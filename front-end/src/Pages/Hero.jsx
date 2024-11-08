import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import MiddleSection from '../components/MiddleSection'
import hand from "../assets/robot.jpg"


const Hero = () => {
  return (
    <>
      <Navbar/>
      <div className='bg-fixed bg-center bg-no-repeat bg-cover ' style={{backgroundImage:`url(${hand})`}}>
        <div className="h-screen bg-opacity-75 pt-[60px]">
          <HeroSection/>
        </div>
      </div>
        <MiddleSection/>
      <footer/>
    </>
  )
}

export default Hero

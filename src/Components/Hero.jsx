import React from 'react'
import '../Styles/Hero.css'
import HeroImg from '../assets/hero-img.svg'
import Ribbon from '../assets/ribbon.svg'


const Hero = () => {
  return (
    <div className="hero-container">
      <div className='hero'>
        <div className="hero-left">
          <img src={Ribbon} alt="" className='ribbon' />
          <h1 className='hero-title'>Build your NFT and <span className='battle'>Battle!</span></h1>
          <p className='hero-desc'>This project is a physics based NFT project that tends to evolve as the user continues playing and winning.  Use our provided tools and quickly join the fun. Customize your look, boost it with equipment and get ready to play with your friends in the V-Arena</p>
          <button>Play Now</button>
        </div>
        <div className="hero-right">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
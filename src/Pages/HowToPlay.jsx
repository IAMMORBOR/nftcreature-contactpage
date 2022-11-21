import React from 'react'
import HowToPlayImg from '../assets/howtoplay-img.svg'
import Bullet from '../assets/bullet1.svg';

import '../Styles/HowToPlay.css'

const HowToPlay = () => {
  return (
    <div className='htp-container'>
      <div className='how-to-play'>
        <div className='intro'>
          <h1>How to play</h1>
          <p>There are basically two ways to play in the v-arena which will be fun with or without an NFT - you can play as an NFT owner in the arena where you fight with your NFT, and you can play by staking.</p>

          <div className='instructions-container'>
            <div className='instruction'>
              <img src={Bullet} alt='bullet-point' />
              <p>Click on the <b>Play Now</b> button</p>
            </div>

            <div className='instruction'>
              <img src={Bullet} alt='bullet-point' />
              <p>Copy the wallet address</p>
            </div>

            <div className='instruction'>
              <img src={Bullet} alt='bullet-point' />
              <p>Send you NFT to the <b>wallet address</b></p>
            </div>

            <div className='instruction'>
              <img src={Bullet} alt='bullet-point' />
              <p>Wait patiently in the lobby for the fight of the day to start</p>
            </div>

            <p className='instruction-end'>You either become a winner or a loserat the end of the fight. <b>Goodluck!</b></p>
          </div>
        </div>

        <div className='how-to-play-img'>
          <img src={HowToPlayImg} alt='images' />
        </div>

      </div>
     </div>
  )
}

export default HowToPlay
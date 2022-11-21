import React, { useState } from 'react'
import '../Styles/Header.css'
import vArenaLogo from '../assets/vArenaLogo.png'
import { BsList } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import NavModalHeader from './NavModalHeader'

const Header = () => {
  const [navModal, setNavModal] = useState(false)

  return (
    <header className="header">
      <nav className="nav-wrapper">
        <img src={vArenaLogo} className="v-arena-logo" alt="v-arena-logo" />
        <ul className="nav-links-container">
          <li className="nav-links"><Link to="/how-to-play">How to play</Link></li>
          <li className="nav-links"><Link to="/tournament">Tournament</Link></li>
          <li className="nav-links"><Link to="/leader-board">Leader Board</Link></li>
          <li className="nav-links"><Link to="/about">About</Link></li>
        </ul>
        <button className="nav-toggle-btn" onClick={() =>{setNavModal(true)}}>
          <BsList />
        </button>
        {navModal && <NavModalHeader closeNavModal={setNavModal} />}

      </nav>
    </header>
  )
}

export default Header;

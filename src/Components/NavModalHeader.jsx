import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavModalHeader = () => {
  return (
    <div className="navModalBackground">
        <div className="navModalContainer">
          <button className='closeNavModal' > X </button>
          <ul className="nav-links-mobile">
              <li className="nav-links"><Link to="/about">About</Link></li>
              <li className="nav-links"><Link to="/how-to-play">How to play</Link></li>
              <li className="nav-links"><Link to="/tournament">Tournament</Link></li>
              <li className="nav-links"><Link to="/leader-board">Leader Board</Link></li>
              <li className="nav-links play-now"><Link to="/">Play Now</Link></li>
          </ul>
        </div>
    </div>
  )
}

NavModalHeader.PropTypes = {
  onClick: PropTypes.func
};

export default NavModalHeader

// onClick={() => {closeNavModal(false)}}
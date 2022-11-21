import "../Styles/Arena.css";
import React from "react";

import { useNavigate } from "react-router-dom";
import Matter from "../Matter"


// IMAGES
import Logo from "../assets/logo.svg";
import ArenaBell from "../assets/arena-bell.svg";
import Close from "../assets/close-btn.svg";

export default function Arena() {
  const navigate = useNavigate();

  return (
    <>
      <div className="arena">
        <div className="arena-container">
          <nav>
            <ul>
              <li className="logo-container">
                <img src={Logo} alt="v arena logo" />
              </li>

              <li>
                <div className="strength-container">
                  <div className="strength-meter">
                    Strength: <span> 90</span>
                  </div>
                  <div className="bell-container">
                    <img src={ArenaBell} alt="arena bell" />
                  </div>
                </div>
              </li>

              <li>
                <div className="close-container" onClick={() => navigate('/')} >
                  <span>Exit fight</span>
                  <img src={Close} alt="close button" />
                </div>
              </li>
            </ul>
          </nav>

          {/* FIGHT ARENA */}
          <div className="fight-arena">{/* PUT ALL FIGHT LOGIC HERE */}

            <Matter />
          </div>
        </div>
      </div>
    </>
  );
}

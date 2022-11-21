import React from "react";
import "../Styles/Waiting.css";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Images/Svgs/waitinglogo.svg";
import Nft1 from "../assets/Images/Svgs/nft1.svg";
import Nft2 from "../assets/Images/Svgs/nft2.svg";
import Nft3 from "../assets/Images/Svgs/nft3.svg";
import Nft4 from "../assets/Images/Svgs/nft4.svg";
import Nft5 from "../assets/Images/Svgs/nft5.svg";
import Nft6 from "../assets/Images/Svgs/nft6.svg";
import Nft7 from "../assets/Images/Svgs/nft7.svg";
import Nft8 from "../assets/Images/Svgs/nft8.svg";
import Nft9 from "../assets/Images/Svgs/nft9.svg";
import Nft10 from "../assets/Images/Svgs/nft10.svg";
import Nft11 from "../assets/Images/Svgs/nft11.svg";
import Nft12 from "../assets/Images/Svgs/nft12.svg";
import Nft13 from "../assets/Images/Svgs/nft13.svg";
import Nft14 from "../assets/Images/Svgs/nft14.svg";
import Nft15 from "../assets/Images/Svgs/nft15.svg";

const Waiting = () => {
  const navigate = useNavigate();

  const handleArenaEntry = (e) => {
    e.preventDefault();
    navigate('/arena');
    console.log('Something');
  }
  const Fighters = [
    {
      name: "NFT 009",
      image: Nft1,
    },
    {
      name: "NFT 200",
      image: Nft2,
    },
    {
      name: "NFT 407",
      image: Nft3,
    },
    {
      name: "NFT 512",
      image: Nft4,
    },
    {
      name: "NFT 212",
      image: Nft5,
    },
    {
      name: "NFT 167",
      image: Nft6,
    },
    {
      name: "NFT 198",
      image: Nft7,
    },
    {
      name: "NFT 342",
      image: Nft8,
    },
    {
      name: "NFT 112",
      image: Nft9,
    },
    {
      name: "NFT 083",
      image: Nft10,
    },
    {
      name: "NFT 389",
      image: Nft11,
    },
    {
      name: "NFT 444",
      image: Nft12,
    },
    {
      name: "NFT 111",
      image: Nft13,
    },
    {
      name: "NFT 239",
      image: Nft14,
    },
    {
      name: "NFT 627",
      image: Nft15,
    },
  ];


  return (
    <div className="waiting">
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <img src={Logo} alt="logo" />
          </div>
          <div>
            <button className="btn btn--orange">Cancel Fight</button>
          </div>
        </div>
      </header>

      <main className="main">
        <h4 className="heading-text">Nft Arena Entry</h4>
        <div>
          <button className="btn btn--green" onClick={handleArenaEntry}>Enter Demo Fight</button>
        </div>
        <div className="waiting-nfts">
          {Fighters.map((fighter, key) => {
            return (
              <div className="fighter-card" key={key}>
                <div className="fighter-card__image">
                  <img src={fighter.image} alt={fighter.name} />
                </div>
                <h2 className="fighter-card__name">{fighter.name}</h2>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Waiting;

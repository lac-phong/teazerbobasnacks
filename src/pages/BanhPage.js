import React from 'react';
import { Element } from 'react-scroll';
import { BanhMiLogo, BanhMiQR } from '../assets';
import About from "./subpages/BanhAbout";
import "../styles/BanhPage.css";

function BanhPage() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  }

  return (
    <div className='BanhPage'>
      <img src={BanhMiLogo} alt="Banh Mi Logo" className="fixed-size" onClick={() => handleClick('https://www.banhmibowlsc.com/')} />
      <img src={BanhMiQR} alt="Banh Mi QR" className="fixed-size" />
      <Element name="about">
        <About />
      </Element>
    </div>
  )
}

export default BanhPage;

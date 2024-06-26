import React from 'react'
import About from "./subpages/DumpAbout";
import { Element } from 'react-scroll';
import "../styles/DumpPage.css";
import {
    DumplingCartLogo,
    DumplingCartQR
  } from '../assets';

function DumplingPage() {
    const handleClick = (url) => {
        window.open(url, '_blank');
      }
  return (
    <div>
        <img src={DumplingCartLogo} alt="Dumpling Cart Logo" className="fixed-size" onClick={() => handleClick('https://sjdowntownfoodhall.com/s/dumpling-cart/96-e-santa-clara-st-san-jose/d8e1b502-8fac-42f3-b79c-048414706367/Lychee%20Green%20Tea/dae8de00-4d04-4e77-bd66-a8e3c2dbe078')}/>
        <img src={DumplingCartQR} alt="Dumpling Cart QR" className="fixed-size" />
        <Element name="about">
            <About />
        </Element>
    </div>
  )
}

export default DumplingPage
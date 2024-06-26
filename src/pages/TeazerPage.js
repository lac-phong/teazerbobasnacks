import React from 'react'
import About from "./subpages/TeazerAbout";
import "../styles/TeazerPage.css";
import { Element } from 'react-scroll';
import {
    TeazerLogo,
    TeazerQR
  } from '../assets';

function TeazerPage() {
    const handleClick = (url) => {
        window.open(url, '_blank');
      }
  return (
    <div>
        <img src={TeazerLogo} alt="Teazer Logo" className="fixed-size" onClick={() => handleClick('https://sjdowntownfoodhall.com/s/teazer/96-e-santa-clara-st-san-jose/3e9580fb-4fca-4161-98c1-a241752b54b8')}/>
        <img src={TeazerQR} alt="Teazer QR" className="fixed-size" />
        <Element name="about">
            <About />
        </Element>
    </div>
  )
}

export default TeazerPage
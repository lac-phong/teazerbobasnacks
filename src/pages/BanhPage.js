import React from 'react';
import { Element } from 'react-scroll';
import About from "./subpages/BanhAbout";
import "../styles/BanhPage.css";
import Slideshow from "../components/slideshow";

function BanhPage() {
  return (
    <div className='BanhPage'>
      <Element name="home">
        <Slideshow page="home" />
      </Element>
      <Element name="about">
        <br></br>
        <br></br>
        <br></br>
        <About />
      </Element>
    </div>
  )
}

export default BanhPage;

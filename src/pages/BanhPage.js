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
      <br></br>
      <br></br>
      <Element name="about">
        <About />
      </Element>
    </div>
  )
}

export default BanhPage;

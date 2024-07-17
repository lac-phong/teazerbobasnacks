import React from 'react';
import { Element } from 'react-scroll';
import About from "./subpages/BanhAbout";
import "../styles/BanhPage.css";
import Slideshow from "../components/slideshow";
import Whyus from '../components/Whyus';

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
        <Whyus page="banhmi" />
      </Element>
      <Element name="order">
        <iframe 
          src="https://www.banhmibowlsc.com/s/order#most-popular" 
          title="Banh Mi Bowl Order Page"
        ></iframe>
      </Element>
    </div>
  )
}

export default BanhPage;

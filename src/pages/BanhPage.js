import React from 'react';
import { Element } from 'react-scroll';
import About from "./subpages/BanhAbout";
import "../styles/BanhPage.css";
import Slideshow from "../components/slideshow";
import Whyus from '../components/Whyus';
import Contact from './Contact';

function BanhPage() {
  return (
    <div className='BanhPage'>
      <Element name="home">
        <Slideshow page="home" />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="whyus">
        <Whyus page="banhmi" />
      </Element>
      <Element name="order">
        <iframe 
          src="https://www.banhmibowlsc.com/s/order#most-popular" 
          title="Banh Mi Bowl Order Page"
        ></iframe>
      </Element>
      <Element name='contact'>
        <Contact />
      </Element>
    </div>
  )
}

export default BanhPage;

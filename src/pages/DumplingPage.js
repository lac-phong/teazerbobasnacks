import React from 'react'
import About from "./subpages/DumpAbout";
import { Element } from 'react-scroll';
import "../styles/DumpPage.css";
import Slideshow from "../components/slideshow";
import Whyus from '../components/Whyus';
import Contact from './Contact';


function DumplingPage() {
  return (
    <div className='DumpPage'>
      <Element name="home">
      <Slideshow page="page2" />
      </Element>
      <Element name="about">
          <About />
      </Element>
      <Element name="whyus">
        <Whyus page="dumpling" />
      </Element>
      <Element name='contact'>
        <Contact />
      </Element>
    </div>
  )
}

export default DumplingPage
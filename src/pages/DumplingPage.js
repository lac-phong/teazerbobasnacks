import React from 'react'
import About from "./subpages/DumpAbout";
import { Element } from 'react-scroll';
import "../styles/DumpPage.css";
import Slideshow from "../components/slideshow";
import Whyus from '../components/Whyus';

function DumplingPage() {
  return (
    <div className='DumpPage'>
      <Element name="home">
      <Slideshow page="page2" />
      </Element>
      <Element name="about">
      <br></br>
      <br></br>
      <br></br>
          <About />
          <Whyus page="dumpling" />
      </Element>
    </div>
  )
}

export default DumplingPage
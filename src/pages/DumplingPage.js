import React from 'react'
import About from "./subpages/DumpAbout";
import { Element } from 'react-scroll';
import "../styles/DumpPage.css";
import Slideshow from "../components/slideshow";

function DumplingPage() {
  return (
    <div className='DumpPage'>
      <Element name="home">
      <Slideshow page="page2" />
      </Element>
      <br></br>
      <br></br>
      <Element name="about">
          <About />
      </Element>
    </div>
  )
}

export default DumplingPage
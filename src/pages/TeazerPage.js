import React from 'react'
import About from "./subpages/TeazerAbout";
import "../styles/TeazerPage.css";
import { Element } from 'react-scroll';
import Slideshow from "../components/slideshow";

function TeazerPage() {
    const handleClick = (url) => {
        window.open(url, '_blank');
      }
  return (
    <div className='TeazerPage'>
      <Element name="home">
        <Slideshow page="page1" />
      </Element>
      <br></br>
      <br></br>
      <Element name="about">
          <About />
      </Element>
    </div>
  )
}

export default TeazerPage
import React from 'react'
import About from "./subpages/TeazerAbout";
import "../styles/TeazerPage.css";
import { Element } from 'react-scroll';
import Slideshow from "../components/slideshow";
import Whyus from '../components/Whyus';

function TeazerPage() {
  return (
    <div className='TeazerPage'>
      <Element name="home">
        <Slideshow page="page1" />
      </Element>
      <Element name="about">
      <br></br>
      <br></br>
      <br></br>
          <About />
          <Whyus page="teazer" />
      </Element>
    </div>
  )
}

export default TeazerPage
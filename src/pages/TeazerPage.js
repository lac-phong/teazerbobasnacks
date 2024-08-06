import React from 'react';
import About from "./subpages/TeazerAbout";
import "../styles/TeazerPage.css";
import { Element } from 'react-scroll';
import Slideshow from "../components/slideshow";
import Whyus from '../components/Whyus';
import Contact from './Contact';

function TeazerPage() {
  return (
    <div className='TeazerPage'>
      <Element name="home" className="element">
        <Slideshow page="page1" />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="whyus" className="element">
        <Whyus page="teazer" />
      </Element>
      <Element name='contact' className="element">
        <Contact />
      </Element>
    </div>
  );
}

export default TeazerPage;

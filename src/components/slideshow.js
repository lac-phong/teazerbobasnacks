import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { scroller } from 'react-scroll';
import "../styles/Slide.css";

// Import images
import banhMiImage from '../assets/slideshow/banh-mi.jpeg';
import bowlNoodleImage from '../assets/slideshow/bowlnoodle.jpeg';
import coffeeImage from '../assets/slideshow/coffee.jpeg';
import milkTeaImage from '../assets/slideshow/milkt.jpeg';
import bobaCoverImage from '../assets/slideshow/bobacover.webp';
import fruitTeasImage from '../assets/slideshow/fruitteas.jpeg';
import xlbImage from '../assets/slideshow/xlb.webp';
import siuMaiImage from '../assets/slideshow/siumai.jpeg';
import beefDumplingsImage from '../assets/slideshow/beefdumplings.jpeg';

const heroData = {
  home: [
    {
      id: 1,
      image: banhMiImage,
      title: 'Best Bánh Mì in the Bay',
      description: 'Experience the perfect harmony of flavors with our Banh Mi, a classic Vietnamese sandwich that combines a crispy baguette with savory meats, fresh vegetables, and a touch of zesty pickles. Each bite offers a delightful contrast of textures and tastes, transporting you to the vibrant streets of Vietnam.',
      link: 'https://www.banhmibowlsc.com/s/order#most-popular'
    },
    {
      id: 2,
      image: bowlNoodleImage,
      title: 'Enjoy some Vietnamese Cold Noodles',
      description: 'Refresh your palate with our Vietnamese Cold Noodles, a light and flavorful dish featuring tender rice noodles, crisp vegetables, and succulent protein options. Tossed in a tangy, aromatic dressing, this dish is a refreshing and satisfying choice for any meal.',
      link: 'https://www.banhmibowlsc.com/s/order#most-popular'
    },
    {
      id: 3,
      image: coffeeImage,
      title: 'Check out our Vietnamese coffee',
      description: 'Indulge in the rich, bold flavors of our Vietnamese Coffee, a perfect blend of robust coffee beans and creamy condensed milk. Served hot or iced, this traditional beverage is both invigorating and satisfying, making it an ideal start to your day or a delightful afternoon pick-me-up.',
      link: 'https://www.banhmibowlsc.com/s/order#most-popular'
    }
  ],
  page1: [
    {
      id: 1,
      image: milkTeaImage,
      title: 'Milk Teas',
      description: 'Indulge in our classic Milk Tea, a delightful blend of rich, robust tea combined with creamy milk. Perfectly balanced and refreshing, this beverage is a favorite for any time of day. Enjoy it with a variety of flavors and toppings to suit your taste.',
      link: 'https://sjdowntownfoodhall.com/s/teazer/96-e-santa-clara-st-san-jose/3e9580fb-4fca-4161-98c1-a241752b54b8'
    },
    {
      id: 2,
      image: bobaCoverImage,
      title: 'Coconut Fusion Drinks',
      description: 'Savor the tropical delight of our Fruit Coconut Drinks. This exotic beverage combines the creamy goodness of coconut milk with the fresh, fruity flavors of your choice. It is a refreshing and indulgent treat that is perfect for a sunny day.',
      link: 'https://sjdowntownfoodhall.com/s/teazer/96-e-santa-clara-st-san-jose/3e9580fb-4fca-4161-98c1-a241752b54b8'
    },
    {
      id: 3,
      image: fruitTeasImage,
      title: 'Fruit Teas',
      description: 'Experience the refreshing burst of natural flavors with our Fruit Tea. Infused with real fruit pieces and premium tea leaves, this drink offers a vibrant and invigorating taste. Perfectly sweet and tangy, it is a healthy and delicious way to quench your thirst.',
      link: 'https://sjdowntownfoodhall.com/s/teazer/96-e-santa-clara-st-san-jose/3e9580fb-4fca-4161-98c1-a241752b54b8'
    }
  ],
  page2: [
    {
      id: 1,
      image: xlbImage,
      title: 'Our Amazing Xiaolongbao',
      description: 'Indulge in our signature Xiao Long Bao, each dumpling bursting with hot, savory broth and tender minced pork, wrapped in delicate, translucent skins. A true delight for dumpling enthusiasts.',
      link: 'https://sjdowntownfoodhall.com/s/dumpling-cart/96-e-santa-clara-st-san-jose/d8e1b502-8fac-42f3-b79c-048414706367/Lychee%20Green%20Tea/dae8de00-4d04-4e77-bd66-a8e3c2dbe078'
    },
    {
      id: 2,
      image: siuMaiImage,
      title: 'Delectable Shrimp and Pork Siu Mai',
      description: 'Experience the exquisite taste of our Shrimp and Pork Siu Mai, crafted with fresh shrimp and a medley of finely chopped vegetables, encased in a thin, lustrous wrapper. Perfectly steamed to preserve its natural flavors and textures.',
      link: 'https://sjdowntownfoodhall.com/s/dumpling-cart/96-e-santa-clara-st-san-jose/d8e1b502-8fac-42f3-b79c-048414706367/Lychee%20Green%20Tea/dae8de00-4d04-4e77-bd66-a8e3c2dbe078'
    },
    {
      id: 3,
      image: beefDumplingsImage,
      title: 'Savory and Delicious Beef Dumplings',
      description: 'Savor the rich flavors of our Beef Dumplings, delicately wrapped in thin, tender skins and filled with a savory blend of seasoned beef, onions, and aromatic spices.',
      link: 'https://sjdowntownfoodhall.com/s/dumpling-cart/96-e-santa-clara-st-san-jose/d8e1b502-8fac-42f3-b79c-048414706367/Lychee%20Green%20Tea/dae8de00-4d04-4e77-bd66-a8e3c2dbe078'
    }
  ]
};

function Slide({ page }) {
  const slides = heroData[page] || heroData['home'];

  const handleButtonClick = (link) => {
    if (page === 'home') {
      scroller.scrollTo('order', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id={page} className="hero-block">
      <Carousel className="custom-carousel">
        {
          slides.map(hero => (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block w-100 carousel-image"
                src={hero.image}
                alt={"slide " + hero.id}
              />
              <Carousel.Caption className="custom-caption">
                <div className='carousel-content'>
                  <h2>{hero.title}</h2>
                  <p>{hero.description}</p>
                  <button className="btn btn-primary custom-btn" onClick={() => handleButtonClick(hero.link)}>
                    Order Here <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>
    </section>
  );
}

export default Slide;

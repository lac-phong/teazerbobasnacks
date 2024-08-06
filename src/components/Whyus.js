import React from 'react';
import "../styles/Whyus.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../styles/Whyus.css"; // Import your custom CSS for styling

// Import your images for the cards
import image1 from "../assets/slideshow/banh-mi.jpeg";
import image2 from "../assets/slideshow/coffee.jpeg";
import image3 from "../assets/slideshow/bowlnoodle.jpeg";

import image4 from "../assets/slideshow/beefdumplings.jpeg";
import image5 from "../assets/slideshow/siumai.jpeg";
import image6 from "../assets/slideshow/xlb.webp";

import image7 from "../assets/slideshow/fruitteas.jpeg";
import image8 from "../assets/slideshow/milkt.jpeg";
import image9 from "../assets/slideshow/bobacover.webp";

function Whyus({ page }) {
  // Define different content for each card based on the page
  let card1Content, card2Content, card3Content;

  if (page === 'banhmi') {
    card1Content = {
      image: image1,
      title: 'Premium Ingredients',
      description: 'At Banh Mi & Bowl, we believe that the key to great taste lies in the quality of our ingredients. That is why we source the freshest vegetables, the finest cuts of meat, and authentic Vietnamese spices to craft our Banh Mi. Our commitment to using premium ingredients ensures every bite is bursting with flavor and goodness.'
    };
    card2Content = {
      image: image2,
      title: 'Tasty Food',
      description: 'The secret behind the irresistible taste of our Banh Mi is our dedication to traditional recipes and culinary expertise. Each sandwich is a harmonious blend of savory meats, crisp vegetables, and tangy sauces, all nestled in a perfectly baked baguette. Experience the perfect balance of flavors that make our Banh Mi a beloved favorite.'
    };
    card3Content = {
      image: image3,
      title: 'Quick Service',
      description: 'At Banh Mi & Bowl, we understand that time is of the essence. Our efficient kitchen team works diligently to prepare your order quickly without compromising on quality. Whether you are grabbing lunch on the go or dining in, our quick service ensures you can enjoy your delicious Banh Mi without the wait.'
    };
  } else if (page === 'dumpling') {
    card1Content = {
      image: image4,
      title: 'Authentic Food',
      description: 'At Dumpling Cart, we pride ourselves on bringing you the authentic taste of traditional dumplings. Each dumpling is carefully crafted using time-honored techniques and recipes passed down through generations. Our commitment to authenticity ensures that every bite is a true representation of the rich culinary heritage of dumplings.'
    };
    card2Content = {
      image: image5,
      title: 'Healthy Options',
      description: 'Enjoy delicious dumplings without the guilt. At Dumpling Cart, we offer a variety of healthy options made with fresh, high-quality ingredients. From lean meats to vibrant vegetables, our dumplings are both nutritious and flavorful, providing a balanced meal that satisfies your taste buds and your dietary needs.'
    };
    card3Content = {
      image: image6,
      title: 'Quick Service',
      description: 'We understand that you are on the go, and our quick service ensures you can enjoy your favorite dumplings without the wait. Our efficient kitchen staff prepares your order promptly, allowing you to savor the delightful taste of our dumplings in no time. Whether you are dining in or taking out, our quick service guarantees a seamless experience.'
    };
  } else if (page === 'teazer') {
    card1Content = {
      image: image7,
      title: 'Tasty Drinks',
      description: 'At Teazer, we take pride in crafting drinks that tantalize your taste buds. Our beverages are made using carefully selected ingredients and unique recipes, resulting in flavors that are both refreshing and delightful. Whether you prefer milk tea, fruit tea, or something more exotic, each sip promises a burst of deliciousness.'
    };
    card2Content = {
      image: image8,
      title: 'High Quality Ingredients',
      description: 'Quality is at the heart of everything we do at Teazer. We use only the finest ingredients to create our drinks, ensuring that each one is as nutritious as it is tasty. From fresh fruits to premium tea leaves and high-grade tapioca pearls, our commitment to quality guarantees a superior drinking experience.'
    };
    card3Content = {
      image: image9,
      title: 'Diverse Flavors',
      description: 'Explore a world of flavors at Teazer. Our diverse menu features a wide range of drinks to suit every palate. Whether you ae in the mood for something classic or adventurous, our selection of milk teas, fruit teas, and coconut drinks offers something for everyone. Discover your new favorite drink with us.'
    };
  }

  return (
    <div className='Whyus'>
      <div className='contain'>
      <h1>Why Us</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={card1Content.image} className="card-image" />
          <Card.Body>
            <div className='card-title'>
              <Card.Title>{card1Content.title}</Card.Title>
            </div>
            <div className='card-content'>
              <Card.Text>{card1Content.description}</Card.Text>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={card2Content.image} className="card-image" />
          <Card.Body>
          <div className='card-title'>
              <Card.Title>{card2Content.title}</Card.Title>
            </div>
            <div className='card-content'>
              <Card.Text>{card2Content.description}</Card.Text>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={card3Content.image} className="card-image" />
          <Card.Body>
          <div className='card-title'>
              <Card.Title>{card3Content.title}</Card.Title>
            </div>
            <div className='card-content'>
              <Card.Text>{card3Content.description}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </CardGroup>
      </div>
    </div>
  );
}

export default Whyus;

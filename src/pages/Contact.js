import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../styles/Contact.css";
import banhmiIMG from "../assets/slideshow/banh-mi.jpeg";
import teazerIMG from "../assets/slideshow/fruitteas.jpeg";
import dumpIMG from "../assets/slideshow/siumai.jpeg";

function Contact() {
  return (
    <div className='Contact'>
      <div className='contain'>
        <h1>Contact Information</h1>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={banhmiIMG} className="card-image" />
            <Card.Body>
              <div className='card-title'>
                <Card.Title>Banh Mi &amp; Bowl</Card.Title>
              </div>
              <div className='card-content'>
                <Card.Text>Phone: (408) 326-2299</Card.Text>
                <Card.Text>Email: banhmibowl.sc@gmail.com</Card.Text>
              </div>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">4300 Great America Pkwy #172 Santa Clara, CA 95054</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={dumpIMG} className="card-image" />
            <Card.Body>
              <div className='card-title'>
                <Card.Title>Dumpling Cart</Card.Title>
              </div>
              <div className='card-content'>
                <Card.Text>Phone: (669) 777-8690</Card.Text>
              </div>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">82 E Santa Clara St, San Jose, CA 95113, USA</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={teazerIMG} className="card-image" />
            <Card.Body>
              <div className='card-title'>
                <Card.Title>Teazer</Card.Title>
              </div>
              <div className='card-content'>
                <Card.Text>Phone: (669) 777-8690</Card.Text>
              </div>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">82 E Santa Clara St, San Jose, CA 95113, USA</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Contact;

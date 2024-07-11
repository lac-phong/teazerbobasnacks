import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Contact from "../pages/Contact";
import Teazer from "../pages/TeazerPage";
import Dumpling from "../pages/DumplingPage";
import Home from "../pages/BanhPage";
import '../styles/Bar.css'; // Import the CSS file for styling

// Import your logo images
import banhLogo from '../assets/logos/banh_mi_logo.png';
import dumplingLogo from '../assets/logos/dc_logo.jpg';
import teazerLogo from '../assets/logos/teazer_logo.jpg';

function Bar() {
  const [stores] = useState([
    { name: 'Banh Mi Bowl', path: '/', logo: banhLogo },
    { name: 'Dumpling Cart', path: '/dumpling', logo: dumplingLogo },
    { name: 'Teazer', path: '/teazer', logo: teazerLogo },
  ]);

  const [currentStore, setCurrentStore] = useState(stores[0]);
  const location = useLocation();

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  const handleStoreChange = (store) => {
    setCurrentStore(store);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        {location.pathname !== '/contact' && (
          <Navbar.Brand as={Link} to={currentStore.path}>
            <img
              src={currentStore.logo}
              width="50"
              height="40"
              className="d-inline-block align-top"
              alt={`${currentStore.name} Logo`}
            />
          </Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={currentStore.path} onClick={() => scrollToSection('home')}>Home</Nav.Link>
            <Nav.Link as={Link} to={currentStore.path} onClick={() => scrollToSection('about')}>About</Nav.Link>
            <NavDropdown title="Related Stores" id="basic-nav-dropdown">
              {stores.filter(store => store.name !== currentStore.name).map(store => (
                <NavDropdown.Item 
                  key={store.name} 
                  as={Link} 
                  to={store.path}
                  onClick={() => handleStoreChange(store)}
                >
                  {store.name}
                </NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function App() {
  return (
    <Router>
      <Bar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dumpling" element={<Dumpling />} />
          <Route path="/teazer" element={<Teazer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

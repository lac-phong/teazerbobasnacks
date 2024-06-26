import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { scroller } from "react-scroll";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Contact from "../pages/Contact";
import Teazer from "../pages/TeazerPage";
import Dumpling from "../pages/DumplingPage";
import Home from "../pages/BanhPage";

function Bar() {
  const [stores] = useState([
    { name: 'Banh Mi Bowl', path: '/' },
    { name: 'Dumpling Cart', path: '/dumpling' },
    { name: 'Teazer', path: '/teazer' },
  ]);
  const [currentStore, setCurrentStore] = useState(stores[0]);

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
    <Router>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to={currentStore.path}>{currentStore.name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={currentStore.path}>Home</Nav.Link>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dumpling" element={<Dumpling />} />
        <Route path="/teazer" element={<Teazer />} />
      </Routes>
    </Router>
  );
}

export default Bar;
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

function CustomNavbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div>
      <Navbar expand="lg" className={`bg-body-tertiary fixed-top ${isDarkMode ? 'dark-mode' : ''}`}>
        <Container>
          <Navbar.Brand href="#home"><strong>EpheFrans Mokobane Trucking</strong></Navbar.Brand>
        </Container>

        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#Footer">Footer</Nav.Link>
              <Nav.Link href="#Faq">Faq</Nav.Link>
            </Nav>
            <div className="dark-mode-switch">
              <input
                type="checkbox"
                id="darkModeSwitch"
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
              <label htmlFor="darkModeSwitch"></label>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;

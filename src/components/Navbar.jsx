import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
    // Scroll to top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Navbar
      bg="white"
      variant="light"
      expand="lg"
      fixed="top"
      className="shadow-sm"
      expanded={isOpen}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold" onClick={handleLinkClick}>
          <img src="/realogo.png" alt="" width="78" height="40" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              className={location.pathname === '/services' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/resources  "
              className={location.pathname === '/resources' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Resources
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
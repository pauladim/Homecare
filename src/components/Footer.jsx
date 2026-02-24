import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  LinkedIn, 
  Email, 
  Phone, 
  LocationOn 
} from '@mui/icons-material';

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Navigate instantly using React Router (no reload!)
    navigate(path);
  };

  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <Container>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <h5 className="text-green mb-3">RejulzHomeCare</h5>
            <p className="text-light-black">
              Providing compassionate and professional home care services to enhance the quality of life for you and your loved ones.
            </p>
            <div className="d-flex gap-3">
              {/* Social icons remain commented out as in your original */}
            </div>
          </Col>
          
          <Col md={4} className="mb-4">
            <h6 className="text-green mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link 
                  to="/" 
                  className="text-decoration-none text-orange"
                  onClick={(e) => handleLinkClick(e, '/')}
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/about" 
                  className="text-decoration-none text-orange"
                  onClick={(e) => handleLinkClick(e, '/about')}
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/services" 
                  className="text-decoration-none text-orange"
                  onClick={(e) => handleLinkClick(e, '/services')}
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/resources" 
                  className="text-decoration-none text-orange"
                  onClick={(e) => handleLinkClick(e, '/resources')} // ✅ Now has leading slash
                >
                  Resources
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/contact" 
                  className="text-decoration-none text-orange"
                  onClick={(e) => handleLinkClick(e, '/contact')}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          
          <Col md={4} className="mb-4">
            <h6 className="text-green mb-3">Contact Us</h6>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-start">
                <LocationOn className="me-2 text-orange" fontSize="small" />
                <span className="text-light-black">Atlanta, Georgia</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <Phone className="me-2 text-orange" fontSize="small" />
                <span className="text-light-black">(470) 654-1311</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <Email className="me-2 text-orange" fontSize="small" />
                <span className="text-light-black">Rejulzhomecare@gmail.com</span>
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4 bg-light-black" />
        
        <Row>
          <Col className="text-center text-light-black">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} HomeCare. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
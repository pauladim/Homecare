import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import { 
  Email, 
  Phone, 
  LocationOn, 
  AccessTime,
  Send
} from '@mui/icons-material';
import FAQ from '../components/FAQ';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    bookingDate: ''
  });
  
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  
console.log(import.meta.env);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Email.js configuration
const templateParams = {
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  subject: formData.subject,
  message: formData.message,
  bookingDate: formData.bookingDate
};


      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setAlert({
          show: true,
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          bookingDate: ''
        });
        
        // Hide alert after 5 seconds
        setTimeout(() => {
          setAlert({ show: false, type: '', message: '' });
        }, 5000);
      }
    } catch (error) {
      setAlert({
        show: true,
        type: 'danger',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
      
      // Hide alert after 5 seconds
      setTimeout(() => {
        setAlert({ show: false, type: '', message: '' });
      }, 5000);
      
      console.error('Email.js error:', error);
    }
  };

  const contactInfo = [
    {
      icon: <LocationOn sx={{ fontSize: 40 }} className="text-green" />,
      title: "Our Location",
      info: "Atlanta, Georgia",
      description: "Located in the heart of Health City for easy access"
    },
    {
      icon: <Phone sx={{ fontSize: 40 }} className="text-orange" />,
      title: "Call Us",
      info: "(470) 654-1311",
      description: "Available 24/7 for emergency care needs"
    },
    {
      icon: <Email sx={{ fontSize: 40 }} className="text-primary" />,
      title: "Email Us",
      info: "Rejulzhomecare@gmail.com",
      description: "General inquiries and appointment requests"
    },
    {
      icon: <AccessTime sx={{ fontSize: 40 }} className="text-success" />,
      title: "Office Hours",
      info: "Monday - Friday: 8:00 AM - 8:00 PM",
      description: "Saturday: 9:00 AM - 5:00 PM, Sunday: Emergency Only"
    }
  ];

  return (
    <section className="section-padding">
      <Container>
        {/* Hero Section */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-4 fw-bold text-green mb-4">
              Contact Us
            </h1>
            <p className="lead text-black">
              Have questions about our services? Need to schedule a consultation? 
              We're here to help and would love to hear from you.
            </p>
          </Col>
        </Row>

        {/* Contact Info Cards */}
        <Row className="g-4 mb-5">
          {contactInfo.map((item, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="card-custom h-100 text-center border-0">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    {item.icon}
                  </div>
                  <Card.Title className="h5 text-green mb-3">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-black fw-bold mb-2">
                    {item.info}
                  </Card.Text>
                  <Card.Text className="text-black">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          {/* Contact Form */}
          <Col lg={7} className="mb-5 mb-lg-0">
            <Card className="card-custom border-0">
              <Card.Body className="p-5">
                <h2 className="h3 text-green mb-4">Send Us a Message</h2>
                
                {/* Alert for success/error messages */}
                {alert.show && (
                  <Alert variant={alert.type} onClose={() => setAlert({ show: false, type: '', message: '' })} dismissible>
                    {alert.message}
                  </Alert>
                )}
                
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formName">
                        <Form.Label className="text-black">Full Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formEmail">
                        <Form.Label className="text-black">Email Address *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formSubject">
                        <Form.Label className="text-black">Subject *</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Enter subject"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formPhone">
                        <Form.Label className="text-black">Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formBookingDate">
                        <Form.Label className="text-black">Preferred Booking Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="bookingDate"
                          value={formData.bookingDate}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label className="text-black">Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      required
                    />
                  </Form.Group>
                  
                  <Button 
                    variant="primary-orange" 
                    type="submit" 
                    size="lg" 
                    className="px-5 py-3"
                  >
                    <Send className="me-2" />
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Map Placeholder */}
          <Col lg={5}>
            <Card className="card-custom h-100 border-0">
              <Card.Body className="p-5">
                <h2 className="h3 text-green mb-4">Find Us</h2>
                <div className="bg-light rounded" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="text-center">
                    <LocationOn sx={{ fontSize: 60 }} className="text-green mb-3" />
                    {/* <p className="text-black mb-0">Interactive Map</p> */}
                    <p className="text-black small">Atlanta, Georgia</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h5 className="text-green mb-3">Quick Links</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="#" className="text-decoration-none text-black">
                        <span className="text-orange">•</span> Schedule a Consultation
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-decoration-none text-black">
                        <span className="text-orange">•</span> Request a Service
                      </a>
                    </li>
                    {/* <li className="mb-2">
                      <a href="#" className="text-decoration-none text-black">
                        <span className="text-orange">•</span> Download Brochure
                      </a>
                    </li> */}
                    <li className="mb-2">
                      <Link to="/faq" className="text-decoration-none text-black">
                        <span className="text-orange">•</span> FAQ Section
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <FAQ /> */}
      </Container>
    </section>
  );
};

export default Contact;
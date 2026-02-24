import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  ElderlyWoman, 
  MedicalServices, 
  Accessibility, 
  LocalHospital,
  Restaurant,
  Bathtub,
  DirectionsWalk,
  Psychology
} from '@mui/icons-material';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: <ElderlyWoman sx={{ fontSize: 50 }} className="text-green" />,
      title: "Elderly Care",
      description: "Comprehensive care for seniors including companionship, medication reminders, and daily living assistance."
    },
    {
      icon: <MedicalServices sx={{ fontSize: 50 }} className="text-orange" />,
      title: "Medical Assistance",
      description: "Professional medical support including wound care, injections, and post-surgery recovery assistance."
    },
    {
      icon: <Accessibility sx={{ fontSize: 50 }} className="text-primary" />,
      title: "Mobility Support",
      description: "Help with walking, transfers, and mobility exercises to maintain independence and safety."
    },
    {
      icon: <LocalHospital sx={{ fontSize: 50 }} className="text-danger" />,
      title: "24/7 Nursing Care",
      description: "Round-the-clock nursing services for clients requiring continuous medical monitoring and care."
    },
    {
      icon: <Restaurant sx={{ fontSize: 50 }} className="text-success" />,
      title: "Meal Preparation",
      description: "Nutritious meal planning and preparation tailored to dietary needs and preferences."
    },
    {
      icon: <Bathtub sx={{ fontSize: 50 }} className="text-info" />,
      title: "Personal Hygiene",
      description: "Assistance with bathing, grooming, and personal care to maintain dignity and comfort."
    },
    {
      icon: <DirectionsWalk sx={{ fontSize: 50 }} className="text-warning" />,
      title: "Exercise Programs",
      description: "Customized exercise routines to improve strength, balance, and overall physical well-being."
    },
    {
      icon: <Psychology sx={{ fontSize: 50 }} className="text-purple" />,
      title: "Emotional Support",
      description: "Compassionate companionship and emotional support to combat loneliness and isolation."
    }
  ];

  return (
    <section className="section-padding">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-4 fw-bold text-green mb-4">
              Our Home Care Services
            </h1>
            <p className="lead text-black">
              We offer a comprehensive range of professional home care services 
              designed to meet your unique needs and enhance your quality of life.
            </p>
          </Col>
        </Row>
        
        <Row className="g-4 mb-5">
          {services.map((service, index) => (
            <Col md={6} lg={3} key={index}>
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </Col>
          ))}
        </Row>

        {/* Why Choose Rejulz Home Care */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h3 className="h4 text-green mb-4">Why Choose Rejulz Home Care?</h3>
            <div className="text-start">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="text-green me-2">✔</span>
                  Care plans tailored to each person
                </li>
                <li className="mb-2">
                  <span className="text-green me-2">✔</span>
                  Highly trained, vetted, compassionate caregivers
                </li>
                <li className="mb-2">
                  <span className="text-green me-2">✔</span>
                  Flexible care from a few hours to around-the-clock support
                </li>
                <li className="mb-2">
                  <span className="text-green me-2">✔</span>
                  Focus on dignity, independence, and joyful living
                </li>
                <li className="mb-2">
                  <span className="text-green me-2">✔</span>
                  Support and guidance for families throughout the care journey
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        
        <Row className="text-center">
          <Col>
            <Link to="/contact">
              <Button variant="primary-green" size="lg" className="px-5 py-3">
                Schedule Consultation
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
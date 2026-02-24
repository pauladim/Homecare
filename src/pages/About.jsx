import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  Favorite,
  Groups,
  VerifiedUser,
  Star,
  Diversity3,
  Handshake
} from '@mui/icons-material';

const About = () => {
  const values = [
    {
      icon: <Favorite sx={{ fontSize: 40 }} className="text-green" />,
      title: "Compassion",
      description: "We approach every client with empathy, kindness, and genuine care for their well-being."
    },
    {
      icon: <VerifiedUser sx={{ fontSize: 40 }} className="text-orange" />,
      title: "Trust",
      description: "Building lasting relationships based on reliability, honesty, and professional integrity."
    },
    {
      icon: <Star sx={{ fontSize: 40 }} className="text-primary" />,
      title: "Excellence",
      description: "Commitment to delivering the highest quality care through continuous training and improvement."
    },
    {
      icon: <Groups sx={{ fontSize: 40 }} className="text-info" />,
      title: "Community",
      description: "Fostering connections and supporting families to create stronger, healthier communities."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      experience: "15+ years in healthcare"
    },
    {
      name: "Michael Chen",
      role: "Director of Care Services",
      experience: "12+ years in nursing"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      experience: "10+ years in healthcare management"
    }
  ];

  return (
    <section className="section-padding">
      <Container>
        {/* Hero Section */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-4 fw-bold text-green mb-4">
              About RejulzHomeCare
            </h1>
            <p className="lead text-black">
              At Rejulz Home Care, we deliver thoughtful, professional in-home care designed to empower individuals and support families. From daily living assistance to companionship and recovery support, our trained caregivers provide reliable help that enhances quality of life — physically, socially, and emotionally.
            </p>
          </Col>
        </Row>

        {/* Mission Section */}
        <Row className="mb-5 align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="h3 text-green mb-4">Our Mission</h2>
            <p className="text-black">
              To provide respectful, person-centered care that enhances independence and dignity while supporting clients in the comfort of home.
            </p>
            <p className="text-black">
              We believe that everyone deserves to age with grace and receive the care they
              need while maintaining their connection to family, community, and the things
              they love most.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <div className="bg-light-green p-5 rounded-circle d-inline-block">
              <Handshake sx={{ fontSize: 120 }} className="text-green" />
            </div>
          </Col>
        </Row>

        {/* Values Section */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center mb-5">
            <h2 className="h3 text-green mb-4">Our Approach</h2>
            <p className="text-black">
              We believe in a holistic care experience, one that supports not just daily activities but overall well-being. Every care plan is tailored to the unique needs of each client.
            </p>
          </Col>
        </Row>
        <Row className="g-4 mb-5 justify-content-center">
          {values.map((value, index) => (
            <Col xs={12} md={6} lg={3} key={index}>
              <Card className="card-custom h-100 border-0 text-center">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    {value.icon}
                  </div>
                  <Card.Title className="h5 text-green mb-3">
                    {value.title}
                  </Card.Title>
                  <Card.Text className="text-black">
                    {value.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Team Section */}
        {/* <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center mb-5">
            <h2 className="h3 text-green mb-4">Meet Our Leadership</h2>
            <p className="text-black">
              Our experienced team brings decades of healthcare expertise and genuine 
              passion for serving our community.
            </p>
          </Col>
          <Row className="g-4">
            {team.map((member, index) => (
              <Col md={4} key={index}>
                <Card className="card-custom h-100 border-0 text-center">
                  <Card.Body className="p-4">
                    <div className="bg-light-orange rounded-circle p-4 mb-3 mx-auto" style={{width: '100px', height: '100px'}}>
                      <Diversity3 sx={{ fontSize: 60 }} className="text-orange" />
                    </div>
                    <Card.Title className="h5 text-green mb-2">
                      {member.name}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {member.role}
                    </Card.Subtitle>
                    <Card.Text className="text-black">
                      {member.experience}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Row> */}

        {/* Stats Section */}
        <Row className="bg-light-green py-5 rounded">
          <Col md={3} className="text-center mb-4 mb-md-0">
            <h3 className="display-4 fw-bold text-green mb-2">40+</h3>
            <p className="text-black mb-0">Happy Clients</p>
          </Col>
          <Col md={3} className="text-center mb-4 mb-md-0">
            <h3 className="display-4 fw-bold text-green mb-2">50+</h3>
            <p className="text-black mb-0">Professional Caregivers</p>
          </Col>
          <Col md={3} className="text-center mb-4 mb-md-0">
            <h3 className="display-4 fw-bold text-green mb-2">2+</h3>
            <p className="text-black mb-0">Years of Service</p>
          </Col>
          <Col md={3} className="text-center">
            <h3 className="display-4 fw-bold text-green mb-2">24/7</h3>
            <p className="text-black mb-0">Support Available</p>
          </Col>
        </Row>

        {/* CTA Section */}
        {/* <Row className="text-center mt-5">
          <Col lg={8} className="mx-auto">
            <div className="bg-light-green p-5 rounded">
              <h3 className="text-green mb-3">Join Our Mission</h3>
              <p className="text-black mb-4">
                Be part of a team that makes a real difference in people's lives every day.
              </p>
              <Link to="/contact">
                <Button variant="primary-orange" size="lg" className="px-5 py-3">
                  Explore Career Opportunities
                </Button>
              </Link>
            </div>
          </Col>
        </Row> */}



      </Container>
    </section>
  );
};

export default About;
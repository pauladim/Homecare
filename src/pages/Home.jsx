import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HealthAndSafety, ElderlyWoman, Home as HomeIcon, Favorite } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import FeatureCard from '../components/FeatureCard';
import Testimonials from '../components/Testimonials';
import '../styles/home.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  const features = [
    {
      icon: <HealthAndSafety sx={{ fontSize: 60 }} className="text-orange" />,
      title: "Compassionate Care",
      description: "Our caregivers are trained to provide compassionate, personalized care with genuine empathy and understanding."
    },
    {
      icon: <HomeIcon sx={{ fontSize: 60 }} className="text-green" />,
      title: "Home Comfort",
      description: "Receive professional care in the comfort and familiarity of your own home environment."
    },
    {
      icon: <ElderlyWoman sx={{ fontSize: 60 }} className="text-primary" />,
      title: "Elderly Support",
      description: "Specialized care and support tailored specifically for elderly clients and their unique needs."
    },
    {
      icon: <Favorite sx={{ fontSize: 60 }} className="text-danger" />,
      title: "Family Peace of Mind",
      description: "Rest easy knowing your loved ones are receiving the highest quality of care from our trusted professionals."
    }
  ];

  return (
    <>
      {/* Hero Carousel Section */}
      <section className="hero-section">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper w-100 h-100"
        >
          <SwiperSlide>
            <div className="position-relative w-100 h-100">
              <img 
                src="/familyhome.jpeg" 
                alt="Family enjoying home care" 
                className="img-fluid w-100 h-100 object-fit-cover"
              />
              {/* Semi-transparent dark overlay */}
              <div 
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)', zIndex: 1 }}
              ></div>
              {/* Content Overlay */}
              <div 
                className="position-absolute top-50 start-50 translate-middle text-center w-100"
                style={{ zIndex: 2 }}
              >
                <h2 className="display-4 fw-bold text-white mb-4">
                  Where Care Meets Connection
                </h2>
                <p className="lead fs-3 text-white mb-5">
                  Compassionate, personalized home care that nurtures independence, joy, and dignity<br />
                  because every moment matters.
                </p>
                <Link to="/contact">
                  <Button 
                    variant="primary-orange" 
                    size="lg" 
                    className="px-5 py-3"
                  >
                    📅 Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="position-relative w-100 h-100">
              <img 
                src="/smile.jpeg" 
                alt="Caregiver and senior smiling together" 
                className="img-fluid w-100 h-100 object-fit-cover"
              />
              <div 
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)', zIndex: 1 }}
              ></div>
              <div 
                className="position-absolute top-50 start-50 translate-middle text-center w-100"
                style={{ zIndex: 2 }}
              >
                <h2 className="display-4 fw-bold text-white mb-4">
                  Care That Feels Like Family
                </h2>
                <p className="lead fs-3 text-white mb-5">
                  Building meaningful connections while providing compassionate,<br />
                  reliable care for your loved ones.
                </p>
                <Link to="/contact">
                  <Button 
                    variant="primary-orange" 
                    size="lg" 
                    className="px-5 py-3"
                  >
                    Start Your Care Journey
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="position-relative w-100 h-100">
              <img 
                src="/womaan.jpg" 
                alt="Caregiver supporting elderly woman" 
                className="img-fluid w-100 h-100 object-fit-cover"
              />
              <div 
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)', zIndex: 1 }}
              ></div>
              <div 
                className="position-absolute top-50 start-50 translate-middle text-center w-100"
                style={{ zIndex: 2 }}
              >
                <h2 className="display-4 fw-bold text-white mb-4">
                  Quality Elderly Care
                </h2>
                <p className="lead fs-3 text-white mb-5">
                  Trusted caregivers delivering comfort, dignity and personalized support
                </p>
                <Link to="/contact">
                  <Button 
                    variant="primary-orange" 
                    size="lg" 
                    className="px-5 py-3"
                  >
                    Book Your Visit
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="display-5 fw-bold text-green mb-4">
                Why Choose RejulzHomeCare?
              </h2>
              <p className="lead text-black">
                We're committed to providing exceptional care that enhances the quality of life 
                for you and your family members.
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col md={6} lg={3} key={index}>
                <FeatureCard 
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="section-padding bg-image">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="display-5 fw-bold text-white mb-4">
                Ready to Experience Exceptional Care?
              </h2>
              <Link 
                to="/contact" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Button 
                  variant="primary-orange" 
                  size="lg" 
                  className="px-5 py-3"
                >
                  Request Your Free Consultation
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
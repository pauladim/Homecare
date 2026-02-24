import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, StarHalf, Person } from '@mui/icons-material';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Family Member",
      rating: 5,
      message: "The care provided for my mother has been exceptional. The staff is compassionate, professional, and truly treats our family like their own. We couldn't be happier with the service.",
      // image: "/client1.jpg"
    },
    {
      id: 2,
      name: "Michael Thompson",
      role: "Son of Client",
      rating: 4,
      message: "After my father's surgery, we needed reliable home care support. Rejulz Home Care exceeded our expectations with their skilled nurses and 24/7 availability. Highly recommended!",
      // image: "/client2.jpg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Daughter of Client",
      rating: 4.5,
      message: "The personalized care plan they created for my grandmother has made such a difference in her quality of life. The caregivers are patient, kind, and genuinely care about their clients.",
      // image: "/client3.jpg"
    },
    {
      id: 4,
      name: "Robert Chen",
      role: "Husband of Client",
      rating: 4.5,
      message: "We've been using Rejulz Home Care for over a year now, and the consistency and quality of service has been outstanding. They've become an essential part of our family's support system.",
      // image: "/client4.jpg"
    },
    {
      id: 5,
      name: "Jennifer Williams",
      role: "Family Member",
      rating: 5,
      message: "The team at Rejulz Home Care helped my elderly mother maintain her independence at home. Their professional approach and genuine compassion make them stand out in the industry.",
      // image: "/client5.jpg"
    },
    {
      id: 6,
      name: "David Parker",
      role: "Son of Client",
      rating: 4,
      message: "Finding quality home care was challenging until we discovered Rejulz. Their thorough assessment process and customized care plans gave us peace of mind during a difficult time.",
      // image: "/client6.jpg"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} sx={{ color: '#28a745', fontSize: 20 }} />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" sx={{ color: '#28a745', fontSize: 20 }} />);
    }

    return stars;
  };

  return (
    <section className="section-padding bg-white">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-4 fw-bold text-green mb-4">
              What Our Clients Say
            </h2>
            <p className="lead text-black">
              Hear from families who have trusted us with their loved ones' care
            </p>
          </Col>
        </Row>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Card className="card-custom h-100 border-0">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      {testimonial.image ? (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="rounded-circle"
                          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                        />
                      ) : (
                        <div className="bg-light-green rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                          <Person sx={{ color: '#28a745', fontSize: 30 }} />
                        </div>
                      )}
                    </div>
                    <div>
                      <Card.Title className="h5 text-green mb-1">
                        {testimonial.name}
                      </Card.Title>
                      <Card.Subtitle className="text-muted mb-2">
                        {testimonial.role}
                      </Card.Subtitle>
                      <div className="d-flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <Card.Text className="text-black">
                    "{testimonial.message}"
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonials;
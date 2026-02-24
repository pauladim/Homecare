import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography 
} from '@mui/material';
import { 
  ExpandMore as ExpandMoreIcon,
  QuestionAnswer as QuestionIcon
} from '@mui/icons-material';

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      id: 'panel1',
      question: "What home care services do you offer?",
      answer: "We offer comprehensive non-medical home care services including personal care assistance, medication reminders, meal preparation, light housekeeping, mobility support, and companionship care. Our services are tailored to meet individual needs and promote independence."
    },
    {
      id: 'panel2',
      question: "Are your caregivers licensed and insured?",
      answer: "Yes, all our caregivers are fully licensed, certified, and insured. We conduct thorough background checks, verify credentials, and provide ongoing training to ensure the highest standards of care and safety for our clients."
    },
    {
      id: 'panel3',
      question: "How do you match caregivers with clients?",
      answer: "We carefully assess each client's needs, preferences, and personality to match them with the most suitable caregiver. Our matching process considers factors like care requirements, scheduling needs, and personal compatibility to ensure the best possible relationship."
    },
    {
      id: 'panel4',
      question: "What are your service hours?",
      answer: "We provide flexible scheduling options including 24/7 care, daytime services, evening care, and weekend support. Our services can be customized to fit your specific schedule and care requirements."
    },
    {
      id: 'panel5',
      question: "How much do your services cost?",
      answer: "Pricing varies based on the type of care, frequency of visits, and specific services needed. We offer transparent pricing and free consultations to assess your needs and provide a detailed cost estimate tailored to your situation."
    },
    {
      id: 'panel6',
      question: "Do you take insurance or private pay?",
      answer: "We work with various insurance providers and can help navigate coverage options. While Medicare typically doesn't cover custodial care, we assist with private insurance claims and provide documentation for reimbursement when applicable."
    }
  ];

  return (
    <section className="section-padding bg-gray">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="text-center mb-5">
              <div className="d-flex justify-content-center mb-3">
                <div className="bg-light-green rounded-circle p-3">
                  <QuestionIcon sx={{ fontSize: 40 }} className="text-green" />
                </div>
              </div>
              <h2 className="display-5 fw-bold text-green mb-4">
                Frequently Asked Questions
              </h2>
              <p className="lead text-black">
                Find answers to common questions about our home care services
              </p>
            </div>

            <div className="faq-container">
              {faqs.map((faq) => (
                <Accordion 
                  key={faq.id}
                  expanded={expanded === faq.id}
                  onChange={handleChange(faq.id)}
                  className="card-custom mb-3 border-0"
                  sx={{
                    '&:before': {
                      display: 'none',
                    },
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon 
                        sx={{ 
                          color: expanded === faq.id ? '#28a745' : '#fd7e14',
                          fontSize: 32 
                        }} 
                      />
                    }
                    sx={{
                      backgroundColor: expanded === faq.id ? '#d4edda' : 'white',
                      minHeight: '72px',
                      '&.Mui-expanded': {
                        minHeight: '72px',
                      },
                      '& .MuiAccordionSummary-content': {
                        margin: '16px 0',
                        '&.Mui-expanded': {
                          margin: '16px 0',
                        },
                      },
                      transition: 'background-color 0.3s ease',
                      '&:hover': {
                        backgroundColor: expanded === faq.id ? '#c3e6cb' : '#f8f9fa',
                      }
                    }}
                  >
                    <Typography 
                      sx={{ 
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        color: expanded === faq.id ? '#28a745' : '#343a40',
                        flexShrink: 0
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails 
                    sx={{ 
                      backgroundColor: 'white',
                      padding: '24px',
                      borderTop: '1px solid #e9ecef'
                    }}
                  >
                    <Typography 
                      sx={{ 
                        color: '#343a40',
                        lineHeight: 1.6,
                        fontSize: '1rem'
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
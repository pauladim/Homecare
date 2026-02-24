import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Book, Article, TipsAndUpdates, HealthAndSafety } from '@mui/icons-material';

const Resources = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleShow = (resource) => {
    setModalContent(resource);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const resources = [
    {
      icon: <Book sx={{ fontSize: 40 }} className="text-green" />,
      title: "Understanding Home Care Options",
      excerpt: "Learn about the different types of home care services available and how to choose the right one for your needs.",
      category: "Guide",
      readTime: "4 min read",
      content: "Choosing the right home care option can feel overwhelming, especially when trying to balance health needs, comfort, and cost. Home care services are designed to support individuals who want to remain independent while receiving the help they need at home.\n\nThere are several types of home care services available. Personal care focuses on daily activities such as bathing, dressing, meal preparation, and mobility assistance. Medical or skilled care includes services provided by licensed professionals, such as medication management, wound care, physical therapy, and post-hospital recovery support. Companion care offers emotional support, light housekeeping, and help with errands, helping to reduce loneliness and improve overall well-being.\n\nWhen choosing a home care service, it’s important to assess the level of care required. Consider factors such as medical conditions, mobility limitations, and how often assistance is needed. Some individuals may require short-term care after surgery, while others benefit from long-term or ongoing support.\n\nIt’s also essential to involve family members and healthcare professionals in the decision-making process. Ask questions, review care plans carefully, and ensure the provider is properly licensed and experienced. The right home care option should offer not only professional support but also peace of mind, comfort, and dignity for you or your loved one.\n\nBy understanding your options and planning ahead, you can make informed decisions that promote safety, independence, and a better quality of life at home."

    },
    {
      icon: <HealthAndSafety sx={{ fontSize: 40 }} className="text-orange" />,
      title: "Safety Tips for Aging in Place",
      excerpt: "Essential safety measures and home modifications to help seniors live independently and safely at home.",
      category: "Safety",
      readTime: "5 min read",
      content: "Aging in place allows seniors to remain in the comfort of their own homes while maintaining independence, but safety should always come first. With a few thoughtful adjustments and preventive measures, the home can become a safer and more supportive environment for aging adults.\n\nOne of the most important areas to address is fall prevention. Removing loose rugs, securing electrical cords, improving lighting, and installing handrails on stairs can significantly reduce the risk of falls. Wearing non-slip footwear and keeping frequently used items within easy reach also helps minimize accidents.\n\nThe bathroom and kitchen require special attention. Installing grab bars near toilets and in showers, using non-slip mats, and adding a shower chair can improve bathroom safety. In the kitchen, ensuring clear walkways, using easy-grip utensils, and turning pot handles inward can help prevent burns and spills.\n\nHome modifications such as wider doorways, ramps, and adjustable furniture can further enhance mobility and comfort. Smart home devices, including motion-sensor lights and voice-activated assistants, can provide additional support and convenience for daily tasks.\n\nEmergency preparedness is equally important. Seniors should have easy access to emergency contacts, medical information, and a plan in case of power outages or health emergencies. Personal emergency response systems and regular check-ins with family or caregivers can provide added peace of mind.\n\nBy taking proactive steps and making simple home modifications, seniors can continue to live independently while staying safe, confident, and comfortable in their own homes."

    },
    {
      icon: <TipsAndUpdates sx={{ fontSize: 40 }} className="text-primary" />,
      title: "Nutrition Guidelines for Seniors",
      excerpt: "Expert advice on maintaining proper nutrition and hydration for older adults to support their health and well-being.",
      category: "Nutrition",
      readTime: "4 min read",
     content: "Proper nutrition plays a vital role in helping seniors maintain strength, energy, and overall well-being. As people age, changes in metabolism, appetite, and health conditions can affect dietary needs, making balanced nutrition more important than ever.\n\nOlder adults should focus on meals that provide essential nutrients such as protein, fiber, calcium, vitamin D, and healthy fats. Protein supports muscle strength and recovery, while calcium and vitamin D help maintain strong bones. Fiber-rich foods like fruits, vegetables, and whole grains aid digestion and support heart health.\n\nHydration is equally important, as seniors may not always feel thirsty even when their bodies need fluids. Drinking water regularly, consuming soups, herbal teas, and water-rich foods such as fruits can help prevent dehydration and related complications.\n\nMeal planning can make healthy eating easier and more consistent. Preparing simple, nutrient-dense meals, limiting processed foods, and choosing low-sodium and low-sugar options can support long-term health. For seniors with dietary restrictions or medical conditions such as diabetes or high blood pressure, following healthcare-recommended meal plans is essential.\n\nHealthy eating habits also include mindful portion sizes and regular meal times. When needed, caregivers and family members can offer support with grocery shopping, meal preparation, and monitoring nutrition needs.\n\nBy maintaining proper nutrition and hydration, seniors can improve their immune function, manage chronic conditions, and enjoy a better quality of life at every stage of aging."

    },
    {
      icon: <Article sx={{ fontSize: 40 }} className="text-info" />,
      title: "Managing Chronic Conditions at Home",
      excerpt: "Practical strategies for managing diabetes, heart disease, and other chronic conditions in a home care setting.",
      category: "Health",
      readTime: "5 min read",
     content: "Managing chronic conditions at home requires consistency, awareness, and the right support system. Conditions such as diabetes, heart disease, arthritis, and respiratory illnesses can be effectively managed at home when proper care plans and daily routines are in place.\n\nMedication management is one of the most important aspects of chronic care. Taking medications as prescribed, using pill organizers, and setting reminders can help prevent missed doses or medication errors. Regular communication with healthcare providers ensures that medications remain effective and up to date.\n\nSymptom monitoring plays a key role in preventing complications. Tracking blood sugar levels, blood pressure, heart rate, or breathing patterns allows individuals and caregivers to identify early warning signs. Keeping a simple health journal can make it easier to share accurate information during medical appointments.\n\nLifestyle modifications also support long-term health. Maintaining a balanced diet, staying physically active within safe limits, managing stress, and getting enough rest can significantly improve quality of life. Small, sustainable changes often have a greater impact than drastic adjustments.\n\nHome care support can make daily management easier and safer. Trained caregivers can assist with medication reminders, mobility support, meal preparation, and routine health checks. Their presence provides reassurance and helps reduce the physical and emotional burden on family members.\n\nKnowing when to seek medical help is equally important. Sudden changes in symptoms, severe pain, difficulty breathing, dizziness, or unusual swelling should never be ignored. Having an emergency plan and accessible medical contacts ensures timely intervention when needed.\n\nWith the right strategies, education, and support, individuals living with chronic conditions can maintain independence, stability, and a better quality of life while receiving care in the comfort of their own homes."

    },
    {
      icon: <Book sx={{ fontSize: 40 }} className="text-success" />,
      title: "Caregiver Support Resources",
      excerpt: "Support and resources for family caregivers, including stress management and self-care tips.",
      category: "Support",
      readTime: "4 min read",
    content: "Caring for a loved one can be deeply meaningful, but it can also be physically and emotionally demanding. Family caregivers often balance daily responsibilities, medical needs, and personal commitments, which can lead to stress and burnout if support is not prioritized.\n\nStress management is an essential part of caregiving. Simple practices such as deep breathing, short breaks, and regular physical activity can help reduce tension and improve emotional well-being. Connecting with support groups, either in person or online, allows caregivers to share experiences and feel less alone.\n\nSelf-care is not a luxury—it is a necessity. Maintaining healthy eating habits, getting adequate rest, and making time for activities you enjoy can restore energy and resilience. Caregivers who care for themselves are better equipped to provide consistent and compassionate care.\n\nRespite care offers caregivers temporary relief by providing professional support for their loved ones. Whether for a few hours or several days, respite services allow caregivers time to recharge, attend to personal needs, or simply rest without worry.\n\nAccessing the right resources can make caregiving more manageable. Educational materials, counseling services, and community programs can provide guidance and emotional support. Reaching out for help is a sign of strength, not weakness.\n\nBy using available support resources and prioritizing self-care, caregivers can maintain their own well-being while continuing to provide quality care with confidence and compassion."

    },
    {
      icon: <HealthAndSafety sx={{ fontSize: 40 }} className="text-danger" />,
      title: "Fall Prevention Strategies",
      excerpt: "Comprehensive guide to preventing falls at home, including exercises and environmental modifications.",
      category: "Safety",
      readTime: "5 min read",
      content: "Falls are one of the most common causes of injury among older adults, but many falls can be prevented with the right strategies and home adjustments. Taking a proactive approach to fall prevention helps individuals remain independent and confident in their daily activities.\n\nExercise plays a key role in reducing fall risk. Balance and strength-building activities, such as gentle stretching, chair exercises, and walking routines, can improve stability and coordination. Even light, consistent movement helps strengthen muscles and supports safer mobility over time.\n\nA home safety assessment is another essential step. Removing loose rugs, securing electrical cords, and keeping walkways clear can significantly reduce hazards. Installing handrails on stairs and grab bars in bathrooms provides additional support where slips are most likely to occur.\n\nProper lighting is often overlooked but is critical for preventing falls. Ensuring that hallways, staircases, and entryways are well lit makes it easier to navigate the home safely. Night lights in bedrooms and bathrooms can reduce accidents during nighttime movement.\n\nMobility aids such as canes, walkers, or non-slip footwear can offer added stability when needed. These tools should be properly fitted and used consistently to provide maximum benefit. Consulting a healthcare professional can help determine the most suitable mobility support.\n\nBy combining regular exercise, thoughtful home modifications, and the right support tools, individuals can greatly reduce their risk of falling. Fall prevention not only protects physical health but also promotes confidence, independence, and peace of mind at home."

    },
    {
      icon: <TipsAndUpdates sx={{ fontSize: 40 }} className="text-warning" />,
      title: "Medication Management Tips",
      excerpt: "Best practices for organizing and managing medications safely to ensure proper adherence and avoid interactions.",
      category: "Health",
      readTime: "5 min read",
     content: "Proper medication management is essential for maintaining health, especially for individuals managing multiple prescriptions. When medications are taken incorrectly, the risk of missed doses, side effects, or harmful interactions increases. Establishing safe and organized routines can greatly improve adherence and overall well-being.\n\nUsing pill organizers is one of the most effective ways to stay on track. Weekly or monthly organizers help separate medications by day and time, reducing confusion and minimizing the risk of double dosing. Setting reminders through alarms, mobile apps, or written schedules can further support consistency.\n\nCreating a clear medication schedule is equally important. Medications should be taken at the same time each day as prescribed, with attention to special instructions such as taking pills with food or avoiding certain activities. Keeping an updated medication list, including dosages and timing, can be helpful during medical visits or emergencies.\n\nAwareness of drug interactions is critical for medication safety. Some prescriptions may interact with over-the-counter medications, supplements, or specific foods. Consulting a pharmacist or healthcare provider before adding new medications helps prevent unwanted side effects or reduced effectiveness.\n\nOpen communication with healthcare providers plays a key role in successful medication management. Patients and caregivers should feel comfortable asking questions, reporting side effects, and discussing any challenges with adherence. Regular medication reviews ensure treatments remain appropriate and effective.\n\nBy staying organized, informed, and proactive, individuals can manage their medications safely, reduce health risks, and maintain greater confidence in their daily care routines."

    },
    {
      icon: <Article sx={{ fontSize: 40 }} className="text-purple" />,
      title: "Mental Health and Wellness",
      excerpt: "Understanding the importance of mental health in aging and strategies to maintain emotional well-being.",
      category: "Wellness",
      readTime: "7 min read",
      content: "Aging brings unique challenges that can impact mental health, but with the right strategies, emotional well-being can thrive at any stage of life. This comprehensive guide explores the importance of mental health in older adults and provides actionable tips to support a healthy mind. Key areas include fostering social connections to combat loneliness, engaging in cognitive activities to stimulate the brain, managing stress through mindfulness and relaxation techniques, and recognizing early signs of depression or anxiety. By incorporating these practices into daily life, older adults can maintain a balanced emotional state, enhance overall quality of life, and build resilience for the years ahead."
    }
  ];

  return (
    <section className="section-padding">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-4 fw-bold text-green mb-4">
             RejulzHome Care Resources
            </h1>
            <p className="lead text-black">
              Discover helpful articles, guides, and tips to support you and your loved ones 
              on your home care journey.
            </p>
          </Col>
        </Row>
        
        <Row className="g-4 mb-5">
          {resources.map((resource, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="card-custom h-100">
                <Card.Body className="p-4">
                  <div className="text-center mb-3">
                    {resource.icon}
                  </div>
                  <div className="mb-2">
                    <span className="badge bg-light-green text-green">{resource.category}</span>
                    <span className="badge bg-light text-black ms-2">{resource.readTime}</span>
                  </div>
                  <Card.Title className="h5 text-green mb-3">
                    {resource.title}
                  </Card.Title>
                  <Card.Text className="text-black">
                    {resource.excerpt}
                  </Card.Text>
                  <Button 
                    variant="outline-green" 
                    className="w-100 custom-resource-button"
                    onClick={() => handleShow(resource)}
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="text-center">
          {/* <Col>
            <Button variant="primary-orange" size="lg" className="px-5 py-3">
              View All Resources
            </Button>
          </Col> */}
        </Row>

        {/* Modal for Resource Content */}
        <Modal show={showModal} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title className="text-green">{modalContent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <span className="badge bg-light-green text-green me-2">{modalContent.category}</span>
              <span className="badge bg-light text-black">{modalContent.readTime}</span>
            </div>
            <p>{modalContent.content}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};

export default Resources;
import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <Card className="card-custom h-100">
      <Card.Body className="p-4">
        <div className="text-center mb-3">
          {icon}
        </div>
        <Card.Title className="text-center h5 text-green mb-3">
          {title}
        </Card.Title>
        <Card.Text className="text-center text-black">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
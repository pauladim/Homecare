import React from 'react';
import { Card } from 'react-bootstrap';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card className="card-custom h-100 border-0">
      <Card.Body className="p-4 text-center">
        <div className="mb-3">
          {icon}
        </div>
        {title && (
          <Card.Title className="h5 text-green mb-3">
            {title}
          </Card.Title>
        )}
        <Card.Text className="text-black">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FeatureCard;
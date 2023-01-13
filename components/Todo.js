import React from 'react';
import { Card } from 'react-bootstrap';

export default function Todo() {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Todo Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Completed</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Priority</Card.Subtitle>
          <Card.Text>
            Description Text lorem ipsumDescription Text lorem ipsumDescription Text lorem ipsum
          </Card.Text>
          <Card.Link href="#">Delete</Card.Link>
          <Card.Link href="#">Some Function</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

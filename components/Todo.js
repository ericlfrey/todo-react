import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function Todo({ todo, onUpdate }) {
  const handleDelete = (e) => {
    e.preventDefault();
    console.warn(todo.firebaseKey);
    onUpdate();
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{todo.title}</Card.Title>
          {todo.complete
            ? <Card.Subtitle className="mb-2 text-muted">Completed</Card.Subtitle>
            : ''}
          {todo.priority
            ? <Card.Subtitle className="mb-2 text-muted">Priority</Card.Subtitle>
            : ''}
          <Card.Text>
            {todo.description}
          </Card.Text>
          <Card.Link href="#">Edit</Card.Link>
          <Card.Link href="#" onClick={handleDelete}>Delete</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    complete: PropTypes.bool,
    priority: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }),
  onUpdate: PropTypes.func.isRequired,
};

Todo.defaultProps = {
  todo: {},
};

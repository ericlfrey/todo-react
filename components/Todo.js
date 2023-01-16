import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { deleteTodo } from '../api/data';

export default function Todo({ todo, onUpdate }) {
  const handleDelete = (e) => {
    e.preventDefault();
    deleteTodo(todo.firebaseKey).then(() => onUpdate());
  };

  return (
    <div>
      <Card className="mb-3 ms-3" style={{ width: '18rem', height: '200px' }}>
        <Card.Body className="card-body">
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
          <div>
            <Card.Link href={`/todos/edit/${todo.firebaseKey}`}>Edit</Card.Link>
            <Card.Link href="#" onClick={handleDelete}>Delete</Card.Link>
          </div>
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

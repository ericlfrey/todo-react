import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function Todo({ todo }) {
  return (
    <div>
      <Card className="mb-3 ms-3" style={{ width: '18rem', height: '125px' }}>
        <Link passHref href={`/todos/${todo.firebaseKey}`}>
          <Card.Body className="card-body todo-card">
            <Card.Text>{todo.title}</Card.Text>
            {todo.complete
              ? <Card.Subtitle className="mb-2 text-muted">Completed</Card.Subtitle>
              : ''}
            {todo.priority
              ? <Card.Subtitle className="mb-2 text-muted">Priority</Card.Subtitle>
              : ''}
            {/* <Card.Text>
            {todo.description}
          </Card.Text> */}
            {/* <div>
            <Card.Link href={`/todos/edit/${todo.firebaseKey}`}>Edit</Card.Link>
            <Card.Link href="#" onClick={handleDelete}>Delete</Card.Link>
          </div> */}
          </Card.Body>
        </Link>
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
};

Todo.defaultProps = {
  todo: {},
};

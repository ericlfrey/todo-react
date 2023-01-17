import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { deleteTodo, getSingleTodo } from '../../api/data';

export default function ViewTodo() {
  const [todo, setTodo] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleTodo(firebaseKey).then(setTodo);
  }, [firebaseKey]);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteTodo(todo.firebaseKey).then(() => router.push('/todos'));
  };
  return (
    <Card className="mb-3 ms-3" style={{ width: '18rem', height: '125px' }}>
      <Card.Body className="card-body todo-card">
        <Card.Text>{todo.title}</Card.Text>
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
          <Card.Link onClick={handleDelete}>Delete</Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}

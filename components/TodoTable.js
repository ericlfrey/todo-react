import React, { useEffect, useState } from 'react';
import { FormCheck, Table } from 'react-bootstrap';
import { getTodos } from '../api/data';

export default function TodoTable() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Date Added</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.firebaseKey}>
            <td><FormCheck /></td>
            <td>{todo.title}</td>
            <td>{todo.complete ? 'Complete' : 'In Progress'}</td>
            <td>{todo.priority ? 'Yes' : 'No'}</td>
            <td>{new Date(todo.dateAdded).toLocaleDateString()}</td>
            <td>Friday</td>
          </tr>
        ))}
        {/* <tr>
          <td><FormCheck /></td>
          <td>Todo</td>
          <td>Complete</td>
          <td>Yes</td>
          <td>Monday</td>
          <td>Friday</td>
        </tr> */}
      </tbody>
    </Table>
  );
}

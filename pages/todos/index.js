import React, { useEffect, useState } from 'react';
import { getTodos } from '../../api/data';
import Todo from '../../components/Todo';

export default function TodosPage() {
  const [todos, setTodos] = useState([]);

  const getAllTodos = () => {
    getTodos().then(setTodos);
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <div>
      <h1>TODOS PAGE</h1>
      {todos.map((todo) => (
        <Todo key={todo.firebaseKey} todo={todo} onUpdate={getAllTodos} />
      ))}
    </div>
  );
}

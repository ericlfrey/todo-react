import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleTodo } from '../../../api/data';
import TodoForm from '../../../components/TodoForm';

export default function EditTodo() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleTodo(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (
    <TodoForm obj={editItem} />
  );
}

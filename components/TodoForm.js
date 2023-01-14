import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import { postTodo, updateTodo } from '../api/data';

const initialShape = {
  title: '',
  description: '',
  firebaseKey: '',
  priority: false,
  complete: false,
};

export default function TodoForm({ obj }) {
  const [formInput, setFormInput] = useState(initialShape);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [user, obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formInput, uid: user.uid };
    postTodo(payload).then(({ name }) => {
      const patchPayload = { firebaseKey: name };
      updateTodo(patchPayload).then(() => {
        router.push('/todos');
      });
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Edit' : 'Add'} Todo</h2>
      {/* TITLE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Title" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Title"
          name="title"
          value={formInput.title}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      {/* DESCRIPTION INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Description" className="mb-3">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter Decription"
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      {/* COMPLETE  */}
      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="complete"
        name="complete"
        label="Complete?"
        checked={formInput.complete}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            complete: e.target.checked,
          }));
        }}
      />
      {/* PRIORITY  */}
      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="priority"
        name="priority"
        label="Priority?"
        checked={formInput.priority}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            priority: e.target.checked,
          }));
        }}
      />
      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Edit' : 'Add'} Todo</Button>
    </Form>
  );
}

TodoForm.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
    priority: PropTypes.bool,
    complete: PropTypes.bool,
  }),
};

TodoForm.defaultProps = {
  obj: initialShape,
};

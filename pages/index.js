import { useEffect } from 'react';
import getTodos from '../api/data';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  useEffect(() => {
    getTodos().then((arr) => {
      console.warn(arr);
    });
  });
  return (
    <div>
      <h1>Hello {user.displayName}! </h1>
    </div>
  );
}

export default Home;

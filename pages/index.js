import CardTest from '../components/CardTest';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Hello {user.displayName}! </h1>
      <CardTest />
    </div>
  );
}

export default Home;

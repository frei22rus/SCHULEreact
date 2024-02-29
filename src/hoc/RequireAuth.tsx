import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}

export default RequireAuth;

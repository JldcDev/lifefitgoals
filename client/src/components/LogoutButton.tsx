import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

export default function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Button onClick={handleLogout} className="bg-red-600 hover:bg-red-700">
      Cerrar sesión
    </Button>
  );
}
// Compare this snippet from client/src/components/Header.tsx:
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import LogoutButton from './LogoutButton';

export default function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="w-full px-6 py-4 bg-white shadow">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">LifeFitGoals</Link>

        {/* Enlaces de navegación */}
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-sm text-gray-700 hover:underline">Dashboard</Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm text-gray-700 hover:underline">Login</Link>
              <Link to="/register" className="text-sm text-gray-700 hover:underline">Registro</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

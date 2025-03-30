import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export default function PrivateRoute() {
  const { isAuthenticated, loading } = useAuth();

  // Mostrar un indicador de carga mientras se verifica la autenticación
  if (loading) return <div>Cargando...</div>; // Puedes reemplazarlo con un spinner o componente de carga

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

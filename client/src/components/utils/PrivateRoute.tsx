// src/components/utils/PrivateRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const isAuthenticated = false; // Cambiar después por lógica JWT

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

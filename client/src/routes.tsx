// src/routes.ts
import Home from './pages/Home';
import Plans from './pages/Plans';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Videos from './pages/Videos';
import ExerciseSearch from './pages/ExerciseSearch';
import Contact from './pages/Contact';
import ExerciseDetail from './pages/ExerciseDetail';
import Profile from './pages/Profile';

const routes = [
  { path: '/', element: <Home />, isPrivate: false },
  { path: '/plans', element: <Plans />, isPrivate: false },
  { path: '/blog', element: <Blog />, isPrivate: false },
  { path: '/blog/:id', element: <BlogDetail />, isPrivate: false },
  { path: '/login', element: <Login />, isPrivate: false },
  { path: '/register', element: <Register />, isPrivate: false },
  { path: '/dashboard', element: <Dashboard />, isPrivate: false }, // Cambia a true si es privado
  { path: '/videos', element: <Videos />, isPrivate: false }, // Cambia a true si es privado
  { path: '/exercises', element: <ExerciseSearch />, isPrivate: false },
  { path: '/exercise/:id', element: <ExerciseDetail />, isPrivate: false }, // Detalle de ejercicios

  { path: '/contact', element: <Contact />, isPrivate: false },
  { path: '/profile', element: <Profile />, isPrivate: false }, // Cambia a true si es privado

];

export default routes;

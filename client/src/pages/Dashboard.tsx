import { useEffect, useState } from 'react';
import { getUserProfile } from '@/services/authService';
import LogoutButton from '@/components/LogoutButton';
import DashboardCard from '@/components/DashboardCard';




export default function Dashboard() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserProfile();
        setEmail(data.email);
      } catch (err) {
        console.error('Error al obtener perfil:', err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="space-y-10">
        {/* Encabezado */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hola 👋 {email && `(${email})`}</h1>
            <p className="text-gray-600 mt-1">Aquí puedes gestionar tu entrenamiento funcional.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <LogoutButton />
          </div>
        </header>

        {/* Acciones principales */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Ver Videos"
            description="Explora tus rutinas por categoría"
            link="/videos"
          />
          <DashboardCard
            title="Buscar Ejercicios"
            description="Encuentra ejercicios con API Ninja"
            link="/exercises"
          />
          <DashboardCard
            title="Planes"
            description="Gestiona tu suscripción y planes"
            link="/plans"
          />
        </section>

        {/* Sección de progreso o mensaje */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Tu progreso</h2>
          <p className="text-gray-600">Próximamente podrás visualizar estadísticas de tus entrenamientos 💪</p>
        </section>
      </div>
    </div>
  );
}

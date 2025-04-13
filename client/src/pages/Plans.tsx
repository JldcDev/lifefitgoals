import PlanCard from '@/components/PlanCard';

const plans = [
  {
    id: 'strength',
    title: 'Entrenamiento de Fuerza',
    description: 'Mejora tu resistencia y masa muscular con rutinas progresivas.',
    image: '/images/strength.png',
  },
  {
    id: 'cardio',
    title: 'Cardio Intensivo',
    description: 'Aumenta tu capacidad cardiovascular con sesiones HIIT y aeróbicos.',
    image: '/images/cardio.png',
  },
  {
    id: 'mobility',
    title: 'Movilidad y Flexibilidad',
    description: 'Gana movilidad articular y flexibilidad corporal con prácticas guiadas.',
    image: '/images/mobility.png',
  },
];

export default function Plans() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-100 flex justify-center items-center">
      <div className="w-full max-w-7xl px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          Planes de entrenamiento
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              title={plan.title}
              description={plan.description}
              image={plan.image}
              onClick={() => console.log(`Ver más sobre: ${plan.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

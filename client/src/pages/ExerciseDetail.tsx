import { useParams } from 'react-router-dom';

const exercises = {
  pushup: {
    name: 'Push-Up',
    bodyPart: 'Pecho',
    type: 'Calistenia',
    image: '/images/pushup.png',
    description: 'El push-up es un ejercicio de peso corporal que fortalece el pecho, tríceps y core.',
  },
  squat: {
    name: 'Sentadilla',
    bodyPart: 'Piernas',
    type: 'Peso corporal',
    image: '/images/squat.png',
    description: 'La sentadilla es fundamental para fortalecer glúteos, cuádriceps y estabilidad.',
  },
  plank: {
    name: 'Plancha',
    bodyPart: 'Core',
    type: 'Isométrico',
    image: '/images/plank.png',
    description: 'La plancha mejora la fuerza del core, postura y estabilidad corporal.',
  },
};

export default function ExerciseDetail() {
  const { id } = useParams();
  const exercise = exercises[id as keyof typeof exercises];

  if (!exercise) {
    return <div className="p-10 text-center text-gray-500">Ejercicio no encontrado.</div>;
  }

  return (
    <div className="min-h-screen bg-white px-6 py-10 flex justify-center">
      <div className="w-full max-w-3xl bg-gray-50 p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{exercise.name}</h1>
        <img src={exercise.image} alt={exercise.name} className="w-full h-80 object-cover rounded-md mb-6" />
        <p className="text-gray-600 mb-4"><strong>Grupo muscular:</strong> {exercise.bodyPart}</p>
        <p className="text-gray-600 mb-4"><strong>Tipo:</strong> {exercise.type}</p>
        <p className="text-gray-700 leading-relaxed">{exercise.description}</p>
      </div>
    </div>
  );
}

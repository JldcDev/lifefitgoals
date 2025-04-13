import { useState } from 'react';
import ExerciseCard from '@/components/ExerciseCard';

const exercises = [
  {
    id: 'pushup',
    name: 'Push-Up',
    bodyPart: 'Pecho',
    type: 'Calistenia',
    image: '/images/pushup.png',
  },
  {
    id: 'squat',
    name: 'Sentadilla',
    bodyPart: 'Piernas',
    type: 'Peso corporal',
    image: '/images/squat.png',
  },
  {
    id: 'plank',
    name: 'Plancha',
    bodyPart: 'Core',
    type: 'Isométrico',
    image: '/images/plank.png',
  },
];

// Valores únicos para filtros
const bodyParts = [...new Set(exercises.map((e) => e.bodyPart))];
const types = [...new Set(exercises.map((e) => e.type))];

export default function ExerciseSearch() {
  const [query, setQuery] = useState('');
  const [selectedBodyPart, setSelectedBodyPart] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const filteredExercises = exercises.filter((exercise) => {
    const matchesQuery = exercise.name.toLowerCase().includes(query.toLowerCase());
    const matchesBody = selectedBodyPart ? exercise.bodyPart === selectedBodyPart : true;
    const matchesType = selectedType ? exercise.type === selectedType : true;
    return matchesQuery && matchesBody && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-100 flex justify-center items-center">
      <div className="w-full max-w-7xl px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Explora Ejercicios</h1>

        {/* 🔍 Búsqueda y filtros */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10">
          <input
            type="text"
            placeholder="Buscar ejercicio..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 border rounded-md shadow-sm text-gray-700 w-full md:w-1/3"
          />

          <select
            value={selectedBodyPart}
            onChange={(e) => setSelectedBodyPart(e.target.value)}
            className="px-4 py-2 border rounded-md shadow-sm text-gray-700 w-full md:w-1/4"
          >
            <option value="">Grupo muscular</option>
            {bodyParts.map((part) => (
              <option key={part} value={part}>{part}</option>
            ))}
          </select>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 border rounded-md shadow-sm text-gray-700 w-full md:w-1/4"
          >
            <option value="">Tipo</option>
            {types.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* 💪 Resultados */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">

          {filteredExercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              id={exercise.id}
              name={exercise.name}
              bodyPart={exercise.bodyPart}
              type={exercise.type}
              image={exercise.image}
            />
          ))}
        </div>

        {filteredExercises.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No se encontraron ejercicios.</p>
        )}
      </div>
    </div>
  );
}

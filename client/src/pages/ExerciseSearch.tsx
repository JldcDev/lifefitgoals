import { useState } from 'react';

const exercises = [
  {
    id: 'pushup',
    name: 'Push-Up',
    bodyPart: 'Pecho',
    type: 'Calistenia',
    image: '../public/images/pushup.png',
  },
  {
    id: 'squat',
    name: 'Sentadilla',
    bodyPart: 'Piernas',
    type: 'Peso corporal',
    image: '../public/images/squat.png',
  },
  {
    id: 'plank',
    name: 'Plancha',
    bodyPart: 'Core',
    type: 'Isométrico',
    image: '../public/images/plank.png',
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
    <div className="min-h-screen bg-white px-6 py-10 flex items-center justify-center">
      <div className="w-full max-w-7xl">
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          {filteredExercises.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition w-[420px]"
            >
              <div className="overflow-hidden">
                <img
                  src={exercise.image}
                  alt={exercise.name}
                  className="h-64 w-full object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{exercise.name}</h2>
                <p className="text-sm text-gray-600 mt-1">Grupo: {exercise.bodyPart}</p>
                <p className="text-sm text-gray-600">Tipo: {exercise.type}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredExercises.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No se encontraron ejercicios.</p>
        )}
      </div>
    </div>
  );
}

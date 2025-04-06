import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: '1',
    title: '5 beneficios del entrenamiento funcional',
    summary: 'Descubre cómo el entrenamiento funcional mejora fuerza, movilidad y salud general.',
    date: '2025-03-25',
  },
  {
    id: '2',
    title: 'Alimentación saludable para deportistas',
    summary: 'Aprende a equilibrar macronutrientes para potenciar tu rendimiento.',
    date: '2025-03-20',
  },
  {
    id: '3',
    title: 'Errores comunes al hacer cardio',
    summary: 'Evita estos errores para aprovechar mejor tus sesiones de cardio.',
    date: '2025-03-18',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-100">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Blog y consejos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition block"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{post.summary}</p>
            <span className="text-xs text-gray-400">{post.date}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

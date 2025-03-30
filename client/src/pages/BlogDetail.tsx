import { useParams } from 'react-router-dom';

const blogPosts = {
  '1': {
    title: '5 beneficios del entrenamiento funcional',
    content: 'El entrenamiento funcional mejora el equilibrio, la postura y la resistencia muscular...',
  },
  '2': {
    title: 'Alimentación saludable para deportistas',
    content: 'Una dieta equilibrada debe incluir proteínas, carbohidratos complejos y grasas buenas...',
  },
  '3': {
    title: 'Errores comunes al hacer cardio',
    content: 'Uno de los errores más comunes es no calentar antes de una sesión intensa...',
  },
};

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) return <div className="p-10 text-gray-500">Artículo no encontrado</div>;

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed">{post.content}</p>
    </div>
  );
}

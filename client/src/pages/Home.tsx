export default function Home() {
  return (
    <div className="min-h-screen bg-white px-6 py-10">
      {/* Contenedor principal */}
      <div className="w-full">
        <h1 className="text-4xl font-bold text-gray-900">Bienvenido a LifeFitGoals</h1>
        <p className="text-lg text-gray-600 mt-2">
          Transforma tu salud con entrenamiento funcional, rutinas guiadas y seguimiento personalizado.
        </p>

        {/* Grid corregido */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 w-full">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition h-full">
            <h2 className="text-xl font-semibold">Planes de entrenamiento</h2>
            <p className="text-sm text-gray-600 mt-2">Elige entre fuerza, cardio, HIIT y más.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition h-full">
            <h2 className="text-xl font-semibold">Blog y consejos</h2>
            <p className="text-sm text-gray-600 mt-2">Explora artículos sobre salud, nutrición y hábitos.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition h-full">
            <h2 className="text-xl font-semibold">Videos guiados</h2>
            <p className="text-sm text-gray-600 mt-2">Accede a entrenamientos visuales en cualquier momento.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

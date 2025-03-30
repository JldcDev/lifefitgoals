const plans = [
  {
    id: "strength",
    title: "Entrenamiento de Fuerza",
    description:
      "Mejora tu resistencia y masa muscular con rutinas progresivas.",
    image: "../public/images/strength.png",
  },
  {
    id: "cardio",
    title: "Cardio Intensivo",
    description:
      "Aumenta tu capacidad cardiovascular con sesiones HIIT y aeróbicos.",
    image: "../public/images/cardio.png",
  },
  {
    id: "mobility",
    title: "Movilidad y Flexibilidad",
    description:
      "Gana movilidad articular y flexibilidad corporal con prácticas guiadas.",
    image: "../public/images/mobility.png",
  },
];

export default function Plans() {
  return (
    <div className="min-h-screen bg-white px-6 py-10 flex items-center justify-center">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          Planes de entrenamiento
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition w-[420px]"
            >
              <div className="overflow-hidden">
                {/* Imagen del plan con efecto de zoom al pasar el cursor */}
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="h-64 w-full object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {plan.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
                <button className="mt-4 px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800">
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

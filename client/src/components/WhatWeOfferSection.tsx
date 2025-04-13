// components/WhatWeOfferSection.tsx
import { Dumbbell, Users, Leaf } from "lucide-react";
import { useEffect } from "react";

export default function WhatWeOfferSection() {
  const services = [
    {
      icon: <Dumbbell className="w-8 h-8 text-cyan-600 group-hover:animate-bounce" />,
      title: "Entrenamiento Personal",
      description: "Sesiones uno a uno con entrenadores certificados.",
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-600 group-hover:animate-bounce" />,
      title: "Clases Grupales",
      description: "Motivación y energía con nuestras clases dinámicas.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-cyan-600 group-hover:animate-bounce" />,
      title: "Planes Nutricionales",
      description: "Alimentación adaptada a tus objetivos.",
    },
  ];

  // Scroll suave globalmente
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <>
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-4 md:px-6">
          {services.map(({ title, description, icon }, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 100}ms` }} // Aplicar retraso en la animación
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-[inset_4px_4px_10px_#e0e0e0,inset_-4px_-4px_10px_#ffffff] dark:shadow-[inset_4px_4px_10px_#1f1f1f,inset_-4px_-4px_10px_#2e2e2e] transition-all hover:scale-105 hover:shadow-xl animate-fade-in-up duration-500 ease-out"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-200 via-cyan-300 to-cyan-400 text-white shadow-md transition-all duration-500">
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-white">
                {title}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
 
    </>
  );
}

// src/pages/HomePage.tsx

import { Link } from "react-router-dom";

import WhatWeOfferSection from "@/components/WhatWeOfferSection";
import CallToActionSection from "@/components/CallToActionSection";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-white to-cyan-50 text-gray-800">
      {/* Hero Section */}
      {/* 🔽 HERO SECTION - parte superior del HomePage 🔽 */}
      <section
        className="relative h-[100vh] bg-cover"
        style={{
          backgroundImage: "url('/images/hero10.png')",
          
          backgroundSize: "cover", // Centra la imagen horizontal y verticalmente
        }}
      >
        {/* Overlay con gradiente para desvanecer los bordes izquierdo y derecho */}
        <div className="absolute -inset-y-px bg-gradient-to-r from-cyan-100 via-transparent to-cyan-5000"></div>

        {/* Contenido fijo en el centro */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center text-white z-10 px-6">
          <h1 className="text-4xl font-bold mb-4">
            Achieve Your Fitness Goals
          </h1>
          <p className="text-lg mb-6">
            Join us and start your journey to a healthier life.
          </p>
          <button className="bg-white text-cyan-600 px-6 py-3 font-semibold rounded hover:bg-gray-100 transition">
            Join Now
          </button>
        </div>
      </section>

      {/* Services Section */}
      <WhatWeOfferSection />

      <CallToActionSection />

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-gray-300 text-center">
        <p>&copy; 2025 LifeFitGoals. All rights reserved.</p>
      </footer>
    </div>
  );
}

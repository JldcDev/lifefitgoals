// src/pages/HomePage.tsx

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-white to-cyan-50 text-gray-800">
      {/* Hero Section */}
      {/* 🔽 HERO SECTION - parte superior del HomePage 🔽 */}
      <section
        className="relative h-[92vh] bg-cover"
        style={{
          backgroundImage: "url('/images/hero9.png')",
          backgroundPosition: "top 10% center", // Ajusta la posición para mostrar más la parte superior
        }}
      >
        {/* Overlay para oscurecer la imagen */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Contenido fijo en la parte inferior */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center text-white z-10 px-6">
          <h1 className="text-4xl font-bold mb-4">Achieve Your Fitness Goals</h1>
          <p className="text-lg mb-6">Join us and start your journey to a healthier life.</p>
          <button className="bg-white text-cyan-600 px-6 py-3 font-semibold rounded hover:bg-gray-100 transition">
            Join Now
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { title: "Personal Training", icon: "🏋️" },
              { title: "Group Classes", icon: "🤸" },
              { title: "Nutrition Plans", icon: "🥗" },
            ].map(({ title, icon }, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-cyan-100 to-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">
                  Empower your fitness goals with our expert-designed programs
                  and support.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-24 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-200 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Start your fitness journey with us today and unlock your full
            potential.
          </p>
          <Link to="/contact">
            <button className="bg-white text-cyan-500 px-6 py-3 font-semibold rounded shadow hover:bg-gray-100 transition">
              Get Membership
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-gray-300 text-center">
        <p>&copy; 2025 LifeFitGoals. All rights reserved.</p>
      </footer>
    </div>
  );
}

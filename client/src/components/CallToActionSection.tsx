// components/CallToActionSection.tsx
import { Link } from "react-router-dom";

export default function CallToActionSection() {
  return (
    <>
     

      {/* Call To Action - Nueva Sección */}
      <section className="py-24 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-200 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Start your fitness journey with us today and unlock your full potential.
          </p>
          <Link to="/contact">
            <button className="bg-white text-cyan-500 px-6 py-3 font-semibold rounded shadow hover:bg-gray-100 transition">
              Get Membership
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

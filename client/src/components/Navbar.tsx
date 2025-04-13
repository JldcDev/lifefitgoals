import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavDropdown from "./NavDropdown";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Ocultar el navbar después de 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
  }, []);

  return (
    <div
      className={`relative transition-opacity duration-500 ${
        isVisible ? "opacity-20" : "opacity-70"
      } hover:opacity-300`} // Controlar la visibilidad con hover
    >
      {/* Gradiente para desvanecer los lados izquierdo y derecho */}
      <div className="absolute inset-0 bg-gradient-to-r rounded-3xl from-transparent via-white to-transparent pointer-events-none z-5"></div>

      <nav
        className="relative bg-gradient-to-r from-cyan-900 via-cyan-400 to-cyan-500 text-white font-medium tracking-wide py-4 px-6 md:px-30 shadow-[0_4px_8px_rgba(0,0,0,0.2),0_-2px_6px_rgba(255,255,255,0.5)] rounded-b-24xl z-20"
        // Eliminada la clase `border-b border-cyan-300` para quitar la línea clara
      >
        <div className="w-full flex justify-between items-center">
          {/* Grupo: Logo + Enlaces */}
          <div className="flex items-center gap-x-10">
            {/* Logo */}
            <Link to="/" className="text-white font-bold text-xl tracking-wide drop-shadow-lg">
              LifeFitGoals
            </Link>

            {/* Enlaces de navegación */}
            <div className="hidden xl:flex gap-x-7 gap-y-7 text-lg tracking-wide items-center">
              <NavDropdown
                title="Planes"
                items={[
                  { label: "Fuerza", to: "/plans#strength" },
                  { label: "Cardio", to: "/plans#cardio" },
                  { label: "Movilidad", to: "/plans#mobility" },
                ]}
              />
              <NavDropdown
                title="Ejercicios"
                items={[
                  { label: "Explorar", to: "/exercises" },
                  { label: "Buscar", to: "/exercises#search" },
                ]}
              />
              <NavDropdown
                title="Blog"
                items={[
                  { label: "Ver artículos", to: "/blog" },
                  { label: "Favoritos", to: "/blog#fav" },
                ]}
              />
              <NavDropdown
                title="Videos"
                items={[
                  { label: "HIIT", to: "/videos#hiit" },
                  { label: "Yoga", to: "/videos#yoga" },
                  { label: "Movilidad", to: "/videos#mobility" },
                ]}
              />
              <NavDropdown
                title="Contacto"
                items={[
                  { label: "Formulario", to: "/contact" },
                  { label: "Soporte", to: "/support" },
                ]}
              />
            </div>
          </div>

          {/* Botón Perfil */}
          <div className="flex items-center gap-4">
            <Link to="/join">
              <Button className="bg-white text-cyan-500 font-semibold hover:bg-gray-100 transition px-4 py-2 shadow-[0_4px_6px_rgba(0,0,0,0.2)] rounded-lg">
                Join
              </Button>
            </Link>

            <Link to="/profile">
              <Button
                variant="ghost"
                className="text-white hover:text-gray-100 px-4 py-2 shadow-[0_4px_6px_rgba(0,0,0,0.2)] rounded-lg"
              >
                Perfil
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

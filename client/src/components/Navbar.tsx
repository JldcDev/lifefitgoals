import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavDropdown from "./NavDropdown";

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-3 px-6 md:px-12 shadow-sm">
      <div className="w-full flex justify-between items-center">
        {/* Grupo: Logo + Enlaces */}
        <div className="flex items-center gap-x-10">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-xl tracking-wide">
            LifeFitGoals
          </Link>

          {/* Enlaces de navegación */}
          <div className="hidden md:flex gap-x-6 text-sm tracking-wide uppercase items-center">
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
              { label: 'Explorar', to: '/exercises' },
              { label: 'Buscar', to: '/exercises#search' },
            ]}
          />
            <NavDropdown
            title="Blog"
            items={[
              { label: 'Ver artículos', to: '/blog' },
              { label: 'Favoritos', to: '/blog#fav' },
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
              { label: 'Formulario', to: '/contact' },
              { label: 'Soporte', to: '/support' },
            ]}
          />
          </div>
        </div>

        {/* Botón Perfil */}
        <div>
          <Link to="/profile">
            <Button
              variant="secondary"
              className="text-black bg-white hover:bg-gray-200 transition"
            >
              Perfil
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

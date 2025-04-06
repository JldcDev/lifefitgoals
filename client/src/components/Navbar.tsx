import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavDropdown from "./NavDropdown";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-200 text-white  font-medium tracking-wide hover:text-gray-900 py-3 px-6 md:px-12 shadow-sm ">
     
      <div className="w-full flex justify-between items-center">
        {/* Grupo: Logo + Enlaces */}
        <div className="flex items-center gap-x-10">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-xl tracking-wide">
            LifeFitGoals
          </Link>

          {/* Enlaces de navegación */}

          <div className="  hidden xl:flex gap-x-7 gap-y-7 text-lg tracking-wide  items-center">
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
        <Link to="/profile">
          <Button
            variant="ghost"
            className="text-gray-500 hover:text-cyan-500 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-300 text-md"
          >
            Perfil
          </Button>
        </Link>
      </div>
    </nav>
  );
}

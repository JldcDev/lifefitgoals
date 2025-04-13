import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavDropdownProps {
  title: string;
  items: { label: string; to: string }[];
}

export default function NavDropdown({ title, items }: NavDropdownProps) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar el sidebar al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Cerrar el sidebar al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Manejar apertura/cierre del sidebar
  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <div
        onClick={toggleSidebar}
        className="text-xl tracking-wide text-white px-3 py-3 bg-transparent border-none outline-none focus:outline-none hover:text-cyan-100 transition cursor-pointer"
      >
        {title}
      </div>

      {open && (
        <div className="fixed top-16 left-0 h-screen w-60 bg-gradient-to-b from-transparent to-transparent text-white flex flex-col gap-6 rounded-md shadow-lg  py-8 px-15 z-20 animate-slide-in backdrop-blur-sm">
          {/* Ajuste de posición con `top-16` para que las letras aparezcan más abajo del Navbar */}
          <span className="text-xl font-bold mb-4">{title}</span>
          {items.map((item) => {
            const isActive = location.pathname === item.to.split("#")[0];
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)} // Cerrar el sidebar al hacer clic en un enlace
                className={`hover:text-white transition ${
                  isActive ? "font-bold underline" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

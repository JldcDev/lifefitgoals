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

  // Si alguna ruta del dropdown coincide con la actual, abrir el dropdown
  useEffect(() => {
    const currentPath = location.pathname;
    const shouldOpen = items.some((item) =>
      currentPath.startsWith(item.to.split("#")[0])
    );
    if (shouldOpen) {
      setOpen(true);
    }
  }, [location.pathname, items]);

  // Cerrar el sidebar al hacer clic fuera de él o en un enlace
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
        <div className="fixed top-0 left-0 h-screen w-60 bg-gradient-to-b from-cyan-500 via-cyan-400 to-cyan-200 text-white shadow-lg flex flex-col gap-4 py-6 px-6 z-50 animate-slide-in">
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

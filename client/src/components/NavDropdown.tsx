import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface NavDropdownProps {
  title: string;
  items: { label: string; to: string }[];
}

export default function NavDropdown({ title, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cierra el menú si haces clic fuera de él
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="uppercase text-sm tracking-wide hover:text-gray-300 flex items-center gap-1 px-2 py-1"
      >
        {title}
        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <div className="fixed top-0 left-0 h-screen w-60 bg-black text-white shadow-lg flex flex-col gap-4 py-6 px-6 z-50 animate-slide-in">
          <span className="text-xl font-bold mb-4">{title}</span>
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="hover:text-gray-300 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

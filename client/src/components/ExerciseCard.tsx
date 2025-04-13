import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ExerciseCardProps {
  id: string;
  name: string;
  bodyPart: string;
  type: string;
  image: string;
}

export default function ExerciseCard({
  id,
  name,
  bodyPart,
  type,
  image,
}: ExerciseCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/exercise/${id}`);
  };

  return (
    <div
      className={cn(
        "w-[420px] bg-gradient-to-b from-cyan-500 to-cyan-900 rounded-3xl p-8 shadow-md transition hover:shadow-lg hover:-translate-y-1 duration-500 ease-in-out",
        "animate-fade-in-up mx-auto mb-20"
      )}
    >
      <div className="rounded-xl overflow-hidden mb-4">
        <img
          src={image}
          alt={name}
          className="h-60 w-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="space-y-2 px-1">
        <h2 className="text-xl font-semibold text-gray-200">{name}</h2> {/* Cambiado a gris blanquecino */}
        <p className="text-sm text-gray-300">Grupo: {bodyPart}</p> {/* Cambiado a gris blanquecino */}
        <p className="text-sm text-gray-300">Tipo: {type}</p> {/* Cambiado a gris blanquecino */}
        <Button
          onClick={handleClick}
          variant="outline"
          className="mt-4 w-full bg-white  text-gray-200 font-medium hover:bg-gray-100"
        >
          Ver más
        </Button>
      </div>
    </div>
  );
}

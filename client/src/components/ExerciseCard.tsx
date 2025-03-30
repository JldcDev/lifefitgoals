import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ExerciseCardProps {
  id: string;
  name: string;
  bodyPart: string;
  type: string;
  image: string;
}

export default function ExerciseCard({ id, name, bodyPart, type, image }: ExerciseCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/exercise/${id}`);
  };

  return (
    <div className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition w-[420px]">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 mt-1">Grupo: {bodyPart}</p>
        <p className="text-sm text-gray-600">Tipo: {type}</p>
        <Button className="mt-4 w-full" onClick={handleClick}>
          Ver más
        </Button>
      </div>
    </div>
  );
}

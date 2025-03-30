import { Button } from '@/components/ui/button';

interface PlanCardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

export default function PlanCard({ title, description, image, onClick }: PlanCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition w-[420px]">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <Button onClick={onClick} className="mt-4 w-full">
          Ver más
        </Button>
      </div>
    </div>
  );
}

import { Button } from '@/components/ui/button';

interface ProfileCardProps {
  name: string;
  email: string;
  createdAt?: string;
  onEdit?: () => void;
}

export default function ProfileCard({ name, email, createdAt, onEdit }: ProfileCardProps) {
  return (
    <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg text-center space-y-4">
      <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600">
        {name.charAt(0)}
      </div>
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{email}</p>
      {createdAt && <p className="text-xs text-gray-400">Miembro desde: {createdAt}</p>}
      {onEdit && (
        <Button onClick={onEdit} className="mt-2 w-full">
          Editar perfil
        </Button>
      )}
    </div>
  );
}

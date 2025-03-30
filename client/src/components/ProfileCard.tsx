import { Button } from '@/components/ui/button';

interface ProfileCardProps {
  name: string;
  email: string;
  role?: string;
  createdAt?: string;
  onEdit?: () => void;
}

export default function ProfileCard({ name, email, role, createdAt, onEdit }: ProfileCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center space-y-4">
      <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-500">
        {name.charAt(0).toUpperCase()}
      </div>
      <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
      <p className="text-gray-600 text-sm">{email}</p>

      <div className="text-sm text-gray-500">
        {role && <p><strong>Rol:</strong> {role}</p>}
        {createdAt && <p><strong>Registrado desde:</strong> {createdAt}</p>}
      </div>

      {onEdit && (
        <Button onClick={onEdit} className="mt-4 w-full">
          Editar perfil
        </Button>
      )}
    </div>
  );
}

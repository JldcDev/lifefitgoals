// components/EditProfilePage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import EditPasswordFields from "@/components/EditPasswordFields";

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  website: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  biography: string;
}

export default function EditProfilePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserData>({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "123456789",
    city: "Barcelona",
    country: "Spain",
    website: "https://johndoe.dev",
    facebook: "johndoe",
    instagram: "@johndoe",
    tiktok: "@johndoetok",
    biography: "Passionate about fitness and technology."
  });

  const [showPasswordSection, setShowPasswordSection] = useState(false);

  const handlePasswordChange = (data: {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => {
    console.log("Contraseña actualizada:", data);
    // Aquí luego va la integración con backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Perfil actualizado:", formData);
    // Aquí luego irá el backend
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-100">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Editar perfil</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries({
            firstName: 'Nombre',
            lastName: 'Apellido',
            email: 'Email',
            phone: 'Teléfono',
            city: 'Ciudad',
            country: 'País',
            website: 'Sitio web',
            facebook: 'Facebook',
            instagram: 'Instagram',
            tiktok: 'TikTok'
          }).map(([key, label]) => (
            <div key={key}>
              <Label>{label}</Label>
              <Input
                name={key}
                value={(formData as any)[key] || ''}
                onChange={handleChange}
                className="bg-gray-100"
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <Label>Biografía</Label>
            <Textarea
              name="biography"
              value={formData.biography}
              onChange={handleChange}
              className="bg-gray-100 min-h-[120px]"
            />
          </div>
        </div>

        <div className="mt-10">
          <Button
            variant="outline"
            onClick={() => setShowPasswordSection((prev) => !prev)}
          >
            {showPasswordSection ? "Cancelar cambio de contraseña" : "Cambiar contraseña"}
          </Button>
        </div>

        {showPasswordSection && (
          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Actualizar contraseña</h3>
            <EditPasswordFields onSubmit={handlePasswordChange} />
          </div>
        )}

        <div className="flex justify-end mt-10">
        <Button
  onClick={handleSubmit}
  variant="outline"
>
  Guardar cambios
</Button>

        </div>
      </div>
    </div>
  );
}

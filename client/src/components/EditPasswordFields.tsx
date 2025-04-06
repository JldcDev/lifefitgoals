// components/EditPasswordFields.tsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface EditPasswordFieldsProps {
  onSubmit: (data: {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => void;
}

export default function EditPasswordFields({ onSubmit }: EditPasswordFieldsProps) {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Validación básica
    if (form.newPassword !== form.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    onSubmit(form);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label>Contraseña actual</Label>
        <Input
          type="password"
          name="oldPassword"
          value={form.oldPassword}
          onChange={handleChange}
          className="bg-gray-100"
        />
      </div>
      <div>
        <Label>Nueva contraseña</Label>
        <Input
          type="password"
          name="newPassword"
          value={form.newPassword}
          onChange={handleChange}
          className="bg-gray-100"
        />
      </div>
      <div>
        <Label>Confirmar nueva contraseña</Label>
        <Input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          className="bg-gray-100"
        />
      </div>
      <Button onClick={handleSubmit} variant="outline">
        Actualizar contraseña
      </Button>
    </div>
  );
}

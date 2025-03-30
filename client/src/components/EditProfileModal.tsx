import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import { Label } from "@/components/ui/label";
  import { useState } from "react";
  
  interface EditProfileModalProps {
    name: string;
    email: string;
    onSave: (data: { name: string; email: string }) => void;
  }
  
  export default function EditProfileModal({ name, email, onSave }: EditProfileModalProps) {
    const [form, setForm] = useState({ name, email });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSave = () => {
      onSave(form);
    };
  
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full">Editar perfil</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar perfil</DialogTitle>
          </DialogHeader>
  
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" name="name" value={form.name} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
            </div>
          </div>
  
          <DialogFooter className="mt-4">
            <Button onClick={handleSave}>Guardar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
  
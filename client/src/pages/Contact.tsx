import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación: Verificar que se haya seleccionado un motivo de contacto
    if (!form.reason) {
      toast.error('Por favor selecciona un motivo de contacto.');
      return;
    }

    // Aquí iría la lógica para enviar los datos
    console.log('Formulario enviado:', form);

    // Notificación de éxito y reinicio del formulario
    toast.success('Mensaje enviado. ¡Gracias por contactarnos!');
    setForm({ name: '', email: '', reason: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-100">
      <div className="w-full max-w-2xl bg-gray-50 p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contáctanos</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              name="name"
              placeholder="Tu nombre"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="tucorreo@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Motivo de contacto */}
          <div>
            <Label htmlFor="reason">Motivo de contacto</Label>
            <Select
              onValueChange={(value) => setForm({ ...form, reason: value })}
              value={form.reason}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un motivo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="soporte">Soporte técnico</SelectItem>
                <SelectItem value="sugerencia">Sugerencias</SelectItem>
                <SelectItem value="colaboracion">Colaboraciones</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Escribe tu mensaje aquí..."
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Enviar mensaje
          </Button>
        </form>
      </div>
    </div>
  );
}

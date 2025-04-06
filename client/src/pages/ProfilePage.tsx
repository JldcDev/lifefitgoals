import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const [user] = useState({
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
    biography: "Passionate about fitness and technology.",
  });

  return (
    <div className="min-h-screenbg-gradient-to-b from-cyan-50 via-white to-cyan-100 placeholder-sky-300 p-30">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Perfil</h2>
          <Button  variant="outline" >
  <Link
    to="/profile/edit"
   
  >
    Editar perfil
  </Link>
</Button>


        </div>

        <div className="space-y-4">
          <p><strong>Nombre:</strong> {user.firstName} {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Teléfono:</strong> {user.phone}</p>
          <p><strong>Ciudad:</strong> {user.city}</p>
          <p><strong>País:</strong> {user.country}</p>
          <p><strong>Sitio web:</strong> <a href={user.website} className="text-blue-600 underline">{user.website}</a></p>
          <p><strong>Redes sociales:</strong> Facebook ({user.facebook}), Instagram ({user.instagram}), TikTok ({user.tiktok})</p>
          <p><strong>Biografía:</strong> {user.biography}</p>
        </div>
      </div>
    </div>
  );
}

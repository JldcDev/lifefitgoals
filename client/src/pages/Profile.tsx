import ProfileCard from '@/components/ProfileCard'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)

  // Datos simulados
  const mockUser = {
    name: 'Juan López',
    email: 'juan@example.com',
    role: 'Atleta',
    createdAt: '2025-01-15',
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <ProfileCard
        name={mockUser.name}
        email={mockUser.email}
        role={mockUser.role}
        createdAt={mockUser.createdAt}
        onEdit={() => setIsEditing(true)}
      />

      {/* Modal de edición simulado */}
      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar perfil</DialogTitle>
          </DialogHeader>
          <p className="text-gray-600 text-sm">Esta es una vista simulada del modal de edición.</p>
        </DialogContent>
      </Dialog>
    </div>
  )
}

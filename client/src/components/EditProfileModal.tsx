// components/EditProfileModal.tsx
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

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

interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
  user: UserData;
  onSave: (user: UserData) => void;
  onPasswordClick?: () => void;
}




export default function EditProfileModal({ open, onClose, user, onSave }: EditProfileModalProps) {
  const [formData, setFormData] = useState(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white p-6 rounded-xl shadow-lg max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800 mb-4">Edit Profile</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries({
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'Email',
            phone: 'Phone',
            city: 'City',
            country: 'Country',
            facebook: 'Facebook',
            instagram: 'Instagram',
            tiktok: 'TikTok',
            website: 'Website'
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
            <Label>Biography</Label>
            <Textarea
              name="biography"
              value={formData.biography}
              onChange={handleChange}
              className="bg-gray-100 min-h-[120px]"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Button onClick={handleSubmit} className="bg-black text-white hover:bg-gray-900">
            Update Profile
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

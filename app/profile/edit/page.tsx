// app/profile/edit/page.tsx
import { EditProfileForm } from './EditProfileForm';

export default function EditProfilePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <EditProfileForm />
      </div>
    </div>
  );
}
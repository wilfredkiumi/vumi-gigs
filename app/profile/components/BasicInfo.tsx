// components/profile/BasicInfo.tsx
import { Upload } from 'lucide-react';
import Image from 'next/image';

interface BasicInfoProps {
  profile: {
    name: string;
    role: string;
    bio: string;
  };
  setProfile: (profile: { name: string; role: string; bio: string }) => void;
  handleAvatarChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  avatarPreview: string | null;
}

export function BasicInfo({ profile, setProfile, handleAvatarChange, avatarPreview }: BasicInfoProps) {
    return (
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-neutral-700">Basic Information</h2>
        
        {/* Avatar Upload */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Profile Photo
          </label>
          <div className="flex items-center gap-6">
            <div className="relative h-24 w-24">
              {avatarPreview ? (
                <Image
                  src={avatarPreview}
                  alt="Avatar preview"
                  fill
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="h-full w-full rounded-full bg-neutral-100" />
              )}
            </div>
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
                id="avatar-upload"
              />
              <label
                htmlFor="avatar-upload"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm hover:border-[#A13163]"
              >
                <Upload className="h-4 w-4" />
                Upload Photo
              </label>
            </div>
          </div>
        </div>
  
        {/* Name and Role */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Professional Role
            </label>
            <input
              type="text"
              value={profile.role}
              onChange={(e) => setProfile({ ...profile, role: e.target.value })}
              className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
            />
          </div>
        </div>
  
        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Bio
          </label>
          <textarea
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
            rows={4}
          />
        </div>
      </div>
    );
  }
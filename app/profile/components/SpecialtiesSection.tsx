
"use client";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { useState } from "react";

interface Profile {
  specialties: string[];
}

interface SpecialtiesSectionProps {
  profile: Profile;
  setProfile: (profile: Profile) => void;
}

export function SpecialtiesSection({ profile, setProfile }: SpecialtiesSectionProps) {
  const [newSpecialty, setNewSpecialty] = useState('');
  
  const addSpecialty = () => {
    if (newSpecialty && !profile?.specialties?.includes(newSpecialty)) {
      setProfile({
        ...profile,
        specialties: [...(profile?.specialties || []), newSpecialty]
      });
      setNewSpecialty('');
    }
  };

  const removeSpecialty = (specialtyToRemove: string) => {
    setProfile({
      ...profile,
      specialties: profile.specialties.filter(specialty => specialty !== specialtyToRemove)
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-neutral-700">Specialties</h2>
      <div className="flex flex-wrap gap-2 mb-2">
        {profile?.specialties?.map((specialty, index) => (
          <span key={index} className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-3 py-1 text-sm">
            {specialty}
            <button
              type="button"
              onClick={() => removeSpecialty(specialty)}
              className="ml-1 text-neutral-400 hover:text-neutral-600"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={newSpecialty}
          onChange={(e) => setNewSpecialty(e.target.value)}
          className="flex-1 rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
          placeholder="Add a specialty..."
        />
        <Button type="button" onClick={addSpecialty} className="bg-[#4B269F] hover:bg-[#4B269F]/90">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
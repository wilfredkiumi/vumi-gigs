// app/profile/components/ProfessionalDetails/ExperienceField.tsx
import React from 'react';

interface Profile {
    yearsOfExperience: number;
}

interface ExperienceFieldProps {
    profile: Profile;
    setProfile: React.Dispatch<React.SetStateAction<Profile>>;
}

export function ExperienceField({ profile, setProfile }: ExperienceFieldProps) {
    return (
        <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
                Years of Experience
            </label>
            <input
                type="number"
                value={profile.yearsOfExperience}
                onChange={(e) => setProfile({ 
                    ...profile, 
                    yearsOfExperience: parseInt(e.target.value) 
                })}
                className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
            />
        </div>
    );
}
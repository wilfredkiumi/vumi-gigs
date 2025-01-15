// app/profile/components/ProfessionalDetails/IndustriesField.tsx
import React from 'react';
import { X } from 'react-feather';

interface Profile {
    industries: string[];
}

interface IndustriesFieldProps {
    profile: Profile;
    setProfile: React.Dispatch<React.SetStateAction<Profile>>;
}

export function IndustriesField({ profile, setProfile }: IndustriesFieldProps) {
    return (
        <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
                Industries
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
                {profile.industries.map((industry, index) => (
                    <span key={index} className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-3 py-1 text-sm">
                        {industry}
                        <button
                            type="button"
                            onClick={() => {
                                setProfile({
                                    ...profile,
                                    industries: profile.industries.filter((_, i) => i !== index)
                                });
                            }}
                            className="ml-1 text-neutral-400 hover:text-neutral-600"
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </span>
                ))}
            </div>
            <input
                type="text"
                placeholder="Add industry..."
                className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        const target = e.target as HTMLInputElement;
                        if (target.value && !profile.industries.includes(target.value)) {
                            setProfile({
                                ...profile,
                                industries: [...profile.industries, target.value]
                            });
                            target.value = '';
                        }
                    }
                }}
            />
        </div>
    );
}
  
// app/profile/components/ProfessionalDetails/index.tsx
"use client";

import { X } from 'lucide-react';
import { CreatorProfile } from '@/app/types';

interface Props {
  profile: CreatorProfile;
  setProfile: (profile: CreatorProfile) => void;
}

export function ProfessionalDetails({ profile, setProfile }: Props) {
  // Ensure industries is always an array
  const industries = profile.industries || [];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-neutral-700">Professional Details</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Experience Field */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Years of Experience
          </label>
          <input
            type="number"
            value={profile.yearsOfExperience || 0}
            onChange={(e) => setProfile({ 
              ...profile, 
              yearsOfExperience: parseInt(e.target.value) 
            })}
            className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
          />
        </div>

        {/* Timezone Field */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Time Zone
          </label>
          <select
            value={profile.timezone || 'UTC'}
            onChange={(e) => setProfile({ ...profile, timezone: e.target.value })}
            className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
          >
            <option value="UTC">UTC</option>
            <option value="EST">EST</option>
            <option value="PST">PST</option>
          </select>
        </div>
      </div>

      {/* Industries Field */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          Industries
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {industries.map((industry: string, index: number) => (
            <span key={index} className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-3 py-1 text-sm">
              {industry}
              <button
                type="button"
                onClick={() => {
                  setProfile({
                    ...profile,
                    industries: industries.filter((_: string, i: number) => i !== index)
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
              if (target.value && !industries.includes(target.value)) {
                setProfile({
                  ...profile,
                  industries: [...industries, target.value]
                });
                target.value = '';
              }
            }
          }}
        />
      </div>

      {/* Availability Field */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          Availability
        </label>
        <div className="grid gap-4 md:grid-cols-3">
          <select
            value={profile.availability?.status || 'available'}
            onChange={(e) => setProfile({
              ...profile,
              availability: {
                ...profile.availability,
                status: e.target.value as 'available' | 'limited' | 'unavailable'
              }
            })}
            className="rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
          >
            <option value="available">Available</option>
            <option value="limited">Limited</option>
            <option value="unavailable">Unavailable</option>
          </select>

          <input
            type="number"
            placeholder="Hours per week"
            value={profile.availability?.hours || 0}
            onChange={(e) => setProfile({
              ...profile,
              availability: {
                ...profile.availability,
                hours: parseInt(e.target.value)
              }
            })}
            className="rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
          />

          <select
            value={profile.availability?.workPreference || 'remote'}
            onChange={(e) => setProfile({
              ...profile,
              availability: {
                ...profile.availability,
                workPreference: e.target.value as 'remote' | 'onsite' | 'hybrid'
              }
            })}
            className="rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
          >
            <option value="remote">Remote</option>
            <option value="onsite">On-site</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
      </div>
    </div>
  );
}
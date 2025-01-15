// app/profile/components/ProfessionalDetails/TimeZoneField.tsx
import React from 'react';

interface Profile {
    timezone: string;
}

interface TimeZoneFieldProps {
    profile: Profile;
    setProfile: (profile: Profile) => void;
}

export function TimeZoneField({ profile, setProfile }: TimeZoneFieldProps) {
    return (
        <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
                Time Zone
            </label>
            <select
                value={profile.timezone}
                onChange={(e) => setProfile({ ...profile, timezone: e.target.value })}
                className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
            >
                <option value="UTC">UTC</option>
                <option value="EST">EST</option>
                <option value="PST">PST</option>
            </select>
        </div>
    );
}
  
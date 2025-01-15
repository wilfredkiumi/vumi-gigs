// app/profile/components/ProfessionalDetails/AvailabilityField.tsx
import React from 'react';

interface Availability {
    status: 'available' | 'limited' | 'unavailable';
    hours: number;
    workPreference: 'remote' | 'onsite' | 'hybrid';
}

interface Profile {
    availability: Availability;
}

interface AvailabilityFieldProps {
    profile: Profile;
    setProfile: React.Dispatch<React.SetStateAction<Profile>>;
}

export function AvailabilityField({ profile, setProfile }: AvailabilityFieldProps) {
    return (
        <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
                Availability
            </label>
            <div className="grid gap-4 md:grid-cols-3">
                <select
                    value={profile.availability.status}
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
                    value={profile.availability.hours}
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
                    value={profile.availability.workPreference}
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
    );
}
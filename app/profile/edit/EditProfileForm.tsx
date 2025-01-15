"use client";

import { useState, FormEvent } from 'react';
import { CreatorProfile } from '@/app/types';
import { BasicInfo } from '../components/BasicInfo';
import { EducationSection } from '../components/EducationSection';
import { SpecialtiesSection } from '../components/SpecialtiesSection';
import { ProfessionalDetails } from '../components/ProfessionalDetails';
import { ServicePackageItem } from '../components/PaymentPackages/PackageItem';
import { FeaturedWorks } from '../components/FeaturedWorks';
import { Button } from '@/components/ui/button';

export function EditProfileForm() {
  const [profile, setProfile] = useState<CreatorProfile>({
    name: '',
    specialties: [],
    education: [],
    featuredWorks: [], // Add this line
    paymentPreferences: {
      packages: [{ name: '', description: '', pricing: '' }]
    }
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleAddPackage = () => {
    const updatedProfile = {
      ...profile,
      paymentPreferences: {
        ...profile.paymentPreferences,
        packages: [
          ...(profile.paymentPreferences?.packages || []),
          { name: '', description: '', pricing: '' }
        ]
      }
    };
    setProfile(updatedProfile);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <BasicInfo 
        profile={profile} 
        setProfile={setProfile} 
        handleAvatarChange={() => { /* handle avatar change logic */ }} 
        avatarPreview={profile.avatarPreview} 
      />
      <SpecialtiesSection profile={profile} setProfile={setProfile} />
      <EducationSection profile={profile} setProfile={setProfile} />
      <ProfessionalDetails profile={profile} setProfile={setProfile} />
      
      {/* Payment Packages Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-700">Service Packages</h2>
          <Button 
            type="button" 
            onClick={handleAddPackage} 
            variant="outline" 
            size="sm"
          >
            Add Package
          </Button>
        </div>
        {profile.paymentPreferences?.packages?.map((pkg, index) => (
          <ServicePackageItem
            key={index}
            package={pkg}
            index={index}
            profile={profile}
            setProfile={setProfile}
          />
        ))}
      </div>

      <FeaturedWorks profile={profile} setProfile={setProfile} />

      <Button type="submit">Save Changes</Button>
    </form>
  );
}
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ServicePackageItem } from './ServicePackageItem';

interface PaymentPackagesProps {
  profile: any;
  setProfile: (profile: any) => void;
}

export function PaymentPackages({ profile, setProfile }: PaymentPackagesProps) {
  const handleAddPackage = () => {
    const paymentPreferences = profile.paymentPreferences || {};
    const packages = paymentPreferences.packages || [];

    setProfile({
      ...profile,
      paymentPreferences: {
        ...paymentPreferences,
        packages: [
          ...packages,
          { name: '', description: '', pricing: '' }
        ]
      }
    });
  };

  const packages = profile.paymentPreferences?.packages || [];

  return (
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
      {packages.map((pkg, index) => (
        <ServicePackageItem
          key={index}
          package={pkg}
          index={index}
          profile={profile}
          setProfile={setProfile}
        />
      ))}
    </div>
  );
}
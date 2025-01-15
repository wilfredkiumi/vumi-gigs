import { X } from 'lucide-react'; 
import { Button } from '@/components/ui/button';

export interface ServicePackage {
  name?: string;
  description?: string;
  pricing?: string;
}

export interface ServicePackageItemProps {
  package?: ServicePackage;
  index: number;
  profile: any;
  setProfile: (profile: any) => void;
}

export function ServicePackageItem({ 
  package: pkg = {}, 
  index, 
  profile, 
  setProfile 
}: ServicePackageItemProps) {
  const paymentPreferences = profile.paymentPreferences || {};
  const packages = paymentPreferences.packages || [];

  return (
    <div className="space-y-4 rounded-lg border border-neutral-200 p-4">
      <input
        type="text"
        value={pkg.name || ''}
        onChange={(e) => {
          const newPackages = [...packages];
          newPackages[index] = {
            ...newPackages[index],
            name: e.target.value
          };
          setProfile({
            ...profile,
            paymentPreferences: {
              ...paymentPreferences,
              packages: newPackages
            }
          });
        }}
        className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
        placeholder="Service package name"
      />
      <textarea
        value={pkg.description || ''}
        onChange={(e) => {
          const newPackages = [...packages];
          newPackages[index] = {
            ...newPackages[index],
            description: e.target.value
          };
          setProfile({
            ...profile,
            paymentPreferences: {
              ...paymentPreferences,
              packages: newPackages
            }
          });
        }}
        className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
        placeholder="Package details and services included"
        rows={3}
      />
      <input
        type="text"
        value={pkg.pricing || ''}
        onChange={(e) => {
          const newPackages = [...packages];
          newPackages[index] = {
            ...newPackages[index],
            pricing: e.target.value
          };
          setProfile({
            ...profile,
            paymentPreferences: {
              ...paymentPreferences,
              packages: newPackages
            }
          });
        }}
        className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
        placeholder="Pricing (e.g., $500/month)"
      />
      <Button
        type="button"
        onClick={() => {
          const newPackages = packages.filter((_, i) => i !== index);
          setProfile({
            ...profile,
            paymentPreferences: {
              ...paymentPreferences,
              packages: newPackages
            }
          });
        }}
        variant="ghost"
        className="text-neutral-400 hover:text-neutral-600"
      >
        <X className="h-4 w-4" /> Remove Package
      </Button>
    </div>
  );
}
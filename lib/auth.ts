export type AccountType = 'personal' | 'business';
export type UserRole = 'creator' | 'influencer' | 'brand' | 'client' | 'admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  accountType: AccountType;
  businessDetails?: {
    name: string;
    website: string;
    industry: string;
    size: string;
  };
}

export async function getCurrentUser(): Promise<User | null> {
  return null;
}

export async function canViewInfluencerProfile(): Promise<boolean> {
  return true; // Allow all users to view influencer profiles for now
}

export async function canSendProposal(): Promise<boolean> {
  return true; // Allow all users to send proposals for now
}

export async function checkUserPermissions(): Promise<boolean> {
  return true; // Allow all actions for now
}
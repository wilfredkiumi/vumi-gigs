"use client";

import { createContext, useContext, useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { signOut } from 'aws-amplify/auth';

interface AuthContextType {
  user: any;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signOut: async () => {}
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth();

  const handleSignOut = useCallback(async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }, []);

  return (
    <AuthContext.Provider 
      value={{ 
        ...auth, 
        signOut: handleSignOut 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
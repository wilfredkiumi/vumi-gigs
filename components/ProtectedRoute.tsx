"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiresAuth?: boolean;
  requiresBusiness?: boolean;
}

export function ProtectedRoute({ 
  children, 
  requiresAuth = true,
  requiresBusiness = false 
}: ProtectedRouteProps) {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (requiresAuth && !user) {
        router.push('/auth');
      } else if (requiresBusiness && (!user || user.accountType !== 'business')) {
        router.push('/');
      }
    }
  }, [user, loading, requiresAuth, requiresBusiness, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if ((requiresAuth && !user) || (requiresBusiness && (!user || user.accountType !== 'business'))) {
    return null;
  }

  return <>{children}</>;
}
"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteWrapperProps {
  children: React.ReactNode;
  requiresAuth?: boolean;
  requiresBusiness?: boolean;
  redirectTo?: string;
}

export function ProtectedRouteWrapper({
  children,
  requiresAuth = true,
  requiresBusiness = false,
  redirectTo = '/auth'
}: ProtectedRouteWrapperProps) {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (requiresAuth && !user) {
        router.push(redirectTo);
      } else if (requiresBusiness && (!user || user.accountType !== 'business')) {
        router.push('/');
      }
    }
  }, [user, loading, requiresAuth, requiresBusiness, redirectTo, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if ((requiresAuth && !user) || (requiresBusiness && (!user || user.accountType !== 'business'))) {
    return null;
  }

  return <>{children}</>;
}
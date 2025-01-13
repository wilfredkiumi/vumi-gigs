"use client";

import { ProtectedRouteWrapper } from '@/components/ProtectedRouteWrapper';

// ... (keep existing imports)

export default function PostGigPage() {
  // ... (keep existing component code)

  return (
    <ProtectedRouteWrapper requiresAuth requiresBusiness>
      {/* Existing JSX */}
    </ProtectedRouteWrapper>
  );
}
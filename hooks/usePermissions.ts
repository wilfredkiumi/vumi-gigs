import { useState, useEffect } from 'react';
import { checkUserPermissions } from '@/lib/auth';
import { useAuth } from './useAuth';

export function usePermissions(resourceType: string, resourceId: string) {
  const [canEdit, setCanEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    async function checkPermissions() {
      if (!user) {
        setCanEdit(false);
        setLoading(false);
        return;
      }

      const hasPermission = await checkUserPermissions(resourceType, resourceId);
      setCanEdit(hasPermission);
      setLoading(false);
    }

    if (!authLoading) {
      checkPermissions();
    }
  }, [user, authLoading, resourceType, resourceId]);

  return { canEdit, loading };
}
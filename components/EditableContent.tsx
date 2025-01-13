import { usePermissions } from '@/hooks/usePermissions';
import { Button } from '@/components/ui/button';

interface EditableContentProps {
  resourceType: string;
  resourceId: string;
  children: React.ReactNode;
  onEdit?: () => void;
}

export function EditableContent({ 
  resourceType, 
  resourceId, 
  children,
  onEdit 
}: EditableContentProps) {
  const { canEdit, loading } = usePermissions(resourceType, resourceId);

  if (loading) {
    return <div className="animate-pulse">{children}</div>;
  }

  return (
    <div className="relative group">
      {children}
      {canEdit && onEdit && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="secondary"
            size="sm"
            onClick={onEdit}
            className="bg-background/80 backdrop-blur-sm"
          >
            Edit
          </Button>
        </div>
      )}
    </div>
  );
}
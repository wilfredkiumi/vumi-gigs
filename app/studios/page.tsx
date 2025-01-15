// app/studios/page.tsx
import Link from 'next/link';
import { studios } from '@/lib/studio';
import { Button } from '@/components/ui/button';

export default function StudiosPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {studios.map((studio) => (
            <Link key={studio.id} href={`/studio/${studio.id}`}>            
            <div className="rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-32 w-32 mb-4 relative">
                <img
                  src={studio.branding.logo.main}
                  alt={studio.name}
                  className="rounded-lg object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold">{studio.name}</h2>
              <p className="text-sm text-muted-foreground">{studio.type}</p>
              <p className="text-sm text-muted-foreground mt-2">{studio.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
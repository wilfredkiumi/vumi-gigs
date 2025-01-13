import { creators } from '@/lib/creators';
import CreatorProfile from './CreatorProfile';

export function generateStaticParams() {
  return creators.map((creator) => ({
    id: creator.id,
  }));
}

export default function CreatorPage({ params }: { params: { id: string } }) {
  const creator = creators.find((c) => c.id === params.id);

  if (!creator) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Creator Not Found</h1>
          <a 
            href="/creators"
            className="text-primary hover:text-primary/90"
          >
            Back to Creators
          </a>
        </div>
      </div>
    );
  }

  return <CreatorProfile creator={creator} />;
}
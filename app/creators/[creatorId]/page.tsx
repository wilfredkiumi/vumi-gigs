import CreatorProfile from './CreatorProfile';
import { creators } from '@/lib/creators';

export function generateStaticParams() {
  return creators.map((creator) => ({
    creatorId: creator.id,
  }));
}

export default function CreatorPage({ params }: { params: { creatorId: string } }) {
  const creator = creators.find(c => c.id === params.creatorId);
  if (!creator) {
    return <div>Creator not found</div>;
  }
  return <CreatorProfile creator={creator} />;
}
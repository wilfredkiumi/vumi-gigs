import { studios } from '@/lib/data';
import StudioProfile from './StudioProfile';

export function generateStaticParams() {
  return studios.map((studio) => ({
    id: studio.id.toString(),
  }));
}

export default function StudioPage({ params }: { params: { id: string } }) {
  const studio = studios.find((s) => s.id === parseInt(params.id));

  if (!studio) {
    return <div>Studio not found</div>;
  }

  return <StudioProfile studio={studio} />;
}
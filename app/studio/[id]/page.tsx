// app/studio/[id]/page.tsx
import { studios } from '@/lib/studio';
import StudioProfile from '../../components/studio/StudioProfile';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "3000" }, { id: "3001" }];
}

export default function StudioPage({ params }: { params: { id: string } }) {
  const studio = studios.find(s => s.id === parseInt(params.id));
  if (!studio) notFound();
  return <StudioProfile studio={studio} />;
}
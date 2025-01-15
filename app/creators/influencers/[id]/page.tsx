import InfluencerProfile from './InfluencerProfile';
import { influencers } from '@/lib/influencers';

export function generateStaticParams() {
  return influencers.map((influencer) => ({
    id: influencer.id,
  }));
}

export default function InfluencerPage({ params }: { params: { id: string } }) {
  const influencer = influencers.find(i => i.id === params.id);
  if (!influencer) {
    return <div>Influencer not found</div>;
  }
  return <InfluencerProfile influencer={influencer} />;
}
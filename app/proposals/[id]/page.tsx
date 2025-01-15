// app/proposals/[id]/page.tsx
import { Proposal } from '@/app/types/proposalTypes';
import ProposalDetailsClient from './ProposalDetailsClient';

const mockProposals: Proposal[] = [
  {
    id: '1',
    creator: {
      id: 'creator1',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      role: '3D Character Animator'
    },
    title: '3D Character Animation for Game',
    description: 'Professional 3D character animation with high-quality rigging and motion design.',
    services: [
      'Character Rigging',
      'Motion Capture Refinement',
      'Facial Animation'
    ],
    pricing: {
      amount: 2500,
      currency: '$',
      type: 'fixed'
    },
    estimatedTimeline: '3-4 weeks',
    status: 'pending',
    portfolio: [
      'https://example.com/portfolio1.jpg',
      'https://example.com/portfolio2.jpg',
      'https://example.com/portfolio3.jpg'
    ]
  },
  {
    id: '2',
    creator: {
      id: 'creator2',
      name: 'Mike Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      role: 'Motion Graphics Designer'
    },
    title: 'Motion Graphics Explainer Video',
    description: 'Create an engaging explainer video with smooth motion graphics and compelling storytelling.',
    services: [
      'Storyboarding',
      'Motion Graphics',
      'Voiceover Integration'
    ],
    pricing: {
      amount: 1800,
      currency: '$',
      type: 'fixed'
    },
    estimatedTimeline: '2-3 weeks',
    status: 'pending'
  }
];

export function generateStaticParams() {
  return mockProposals.map((proposal) => ({
    id: proposal.id
  }));
}

export default function ProposalDetailsPage({ params }: { params: { id: string } }) {
  const proposal = mockProposals.find(p => p.id === params.id);
  return proposal ? <ProposalDetailsClient proposal={proposal} /> : null;
}
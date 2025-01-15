"use client";

import { useState } from 'react';
import { ProposalsList } from '../../components/ProposalList';
import { ProposalDetails } from '../../components/ProposalDetails';
import { Proposal } from '@/app/types/proposalTypes';
import { ArrowLeft } from 'lucide-react';
import { useToast } from "../../components/ui/use-toast";

const mockProposals: Proposal[] = [
  {
    id: '1',
    creator: {
      id: 'creator1',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      role: '3D Character Animator',
      email: 'sarah.chen@example.com'
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
      role: 'Motion Graphics Designer',
      email: 'mike.rodriguez@example.com'
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

export default function ProposalsPage() {
  const [proposals, setProposals] = useState<Proposal[]>(mockProposals);
  const [selectedProposalId, setSelectedProposalId] = useState<string | undefined>(
    mockProposals[0]?.id
  );
  const [showList, setShowList] = useState(true);
  const { toast } = useToast();

  const handleRequestMeeting = (proposalId: string) => {
    const proposal = proposals.find(p => p.id === proposalId);
    if (!proposal) return;

    const mailtoLink = `mailto:${proposal.creator.email}?subject=Meeting Request: ${proposal.title}&body=Hi ${proposal.creator.name},%0D%0A%0D%0AI'd like to schedule a meeting to discuss your proposal for ${proposal.title}.%0D%0A%0D%0ABest regards`;
    
    window.location.href = mailtoLink;

    toast({
      title: "Meeting Request Initiated",
      description: `Opening email to contact ${proposal.creator.name}`,
    });
  };

  const handleRejectProposal = async (proposalId: string) => {
    const proposal = proposals.find(p => p.id === proposalId);
    if (!proposal) return;

    // Update local state
    setProposals(prevProposals => 
      prevProposals.map(p => 
        p.id === proposalId ? { ...p, status: 'rejected' } : p
      )
    );

    // Send rejection email
    const mailtoLink = `mailto:${proposal.creator.email}?subject=Update on Your Proposal: ${proposal.title}&body=Hi ${proposal.creator.name},%0D%0A%0D%0AThank you for your proposal for ${proposal.title}. After careful consideration, we have decided to pursue other options at this time.%0D%0A%0D%0AWe appreciate the time and effort you put into your proposal.%0D%0A%0D%0ABest regards`;
    
    window.location.href = mailtoLink;

    toast({
      title: "Proposal Rejected",
      description: `Rejection email prepared for ${proposal.creator.name}`,
    });

    // Select next proposal if available
    if (proposalId === selectedProposalId) {
      const nextProposal = proposals.find(p => p.id !== proposalId && p.status === 'pending');
      if (nextProposal) {
        setSelectedProposalId(nextProposal.id);
      } else {
        setSelectedProposalId(undefined);
      }
    }
  };

  const selectedProposal = proposals.find(p => p.id === selectedProposalId);

  const handleProposalSelect = (id: string) => {
    setSelectedProposalId(id);
    setShowList(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl bg-white dark:bg-gray-800 shadow-sm min-h-screen lg:min-h-0">
        <div className="flex flex-col lg:flex-row h-full">
          <div className={`
            ${showList ? 'block' : 'hidden'} 
            lg:block lg:w-96 border-r border-gray-200 dark:border-gray-700
          `}>
            <ProposalsList 
              proposals={proposals}
              selectedProposalId={selectedProposalId}
              onSelectProposal={handleProposalSelect}
              className="w-full"
            />
          </div>
          
          {selectedProposal && (
            <div className={`
              ${!showList ? 'block' : 'hidden'}
              lg:block flex-1 relative
            `}>
              <button
                onClick={() => setShowList(true)}
                className="lg:hidden absolute left-4 top-4 p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <ArrowLeft size={24} />
              </button>
              <ProposalDetails 
                proposal={selectedProposal}
                onRequestMeeting={handleRequestMeeting}
                onRejectProposal={handleRejectProposal}
                className="w-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
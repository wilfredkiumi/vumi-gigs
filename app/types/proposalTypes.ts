// proposalTypes.ts
import { Creator } from '@/app/types';

export interface Proposal {
  id: string;
  creator: Creator;
  title: string;
  description: string;
  services: string[];
  pricing: {
    amount: number;
    currency: string;
    type: 'fixed' | 'hourly';
  };
  estimatedTimeline: string;
  status: 'pending' | 'accepted' | 'rejected';
  portfolio?: string[];
}

export interface ProposalReviewPageProps {
  proposals: Proposal[];
}

export interface ProposalDetailsProps {
  proposal: Proposal;
  onRequestMeeting: (proposalId: string) => void;
  onRejectProposal: (proposalId: string) => void;
}
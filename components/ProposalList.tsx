"use client";

import Image from 'next/image';
import { Proposal } from './proposal-types';

interface ProposalsListProps {
  proposals: Proposal[];
  selectedProposalId?: string;
  onSelectProposal: (id: string) => void;
}

export function ProposalsList({ 
  proposals, 
  selectedProposalId, 
  onSelectProposal 
}: ProposalsListProps) {
  return (
    <div className="w-96 border-r border-neutral-200 p-4">
      <h2 className="text-xl font-semibold mb-4">Project Proposals</h2>
      {proposals.map((proposal) => (
        <div 
          key={proposal.id}
          onClick={() => onSelectProposal(proposal.id)}
          className={`
            flex items-center p-4 cursor-pointer hover:bg-neutral-100 
            ${selectedProposalId === proposal.id ? 'bg-neutral-100 border-l-4 border-[#4B269F]' : ''}
          `}
        >
          <div className="relative h-12 w-12 mr-4">
            <Image 
              src={proposal.creator.avatar} 
              alt={proposal.creator.name}
              fill 
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-neutral-800">{proposal.title}</h3>
            <p className="text-sm text-neutral-500">
              {proposal.creator.name} - {proposal.creator.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
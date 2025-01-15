"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Proposal } from './proposal-types';
import { Calendar, DollarSign, Clock, FileText } from 'lucide-react';

export function ProposalDetails({ 
  proposal, 
  onRequestMeeting, 
  onRejectProposal 
}: {
  proposal: Proposal;
  onRequestMeeting: (proposalId: string) => void;
  onRejectProposal: (proposalId: string) => void;
}) {
  return (
    <div className="flex-1 p-8">
      {/* Creator Info */}
      <div className="flex items-center mb-6">
        <div className="relative h-16 w-16 mr-4">
          <Image 
            src={proposal.creator.avatar} 
            alt={proposal.creator.name}
            fill 
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{proposal.title}</h2>
          <p className="text-neutral-600">
            {proposal.creator.name} - {proposal.creator.role}
          </p>
        </div>
      </div>

      {/* Proposal Details */}
      <div className="space-y-6">
        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <FileText className="mr-2 h-5 w-5 text-neutral-500" />
            Project Description
          </h3>
          <p className="text-neutral-700">{proposal.description}</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Services Included</h3>
          <ul className="list-disc pl-5 text-neutral-700">
            {proposal.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Pricing */}
        <div className="flex items-center">
          <DollarSign className="mr-2 h-5 w-5 text-neutral-500" />
          <span className="font-medium">
            {proposal.pricing.type === 'fixed' ? 'Fixed Price' : 'Hourly Rate'}:{' '}
            {proposal.pricing.currency}{proposal.pricing.amount}
          </span>
        </div>

        {/* Timeline */}
        <div className="flex items-center">
          <Clock className="mr-2 h-5 w-5 text-neutral-500" />
          <span className="font-medium">
            Estimated Timeline: {proposal.estimatedTimeline}
          </span>
        </div>

        {/* Portfolio */}
        {proposal.portfolio && proposal.portfolio.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Portfolio</h3>
            <div className="grid grid-cols-3 gap-4">
              {proposal.portfolio.map((image, index) => (
                <div key={index} className="relative pt-[66.66%]">
                  <Image 
                    src={image} 
                    alt={`Portfolio item ${index + 1}`}
                    fill
                    className="absolute inset-0 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="mt-8 flex space-x-4">
        <Button 
          onClick={() => onRequestMeeting(proposal.id)}
          className="bg-[#4B269F] hover:bg-[#4B269F]/90"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Request Meeting
        </Button>
        <Button 
          variant="outline" 
          onClick={() => onRejectProposal(proposal.id)}
          className="text-red-600 hover:text-red-700 border-red-600"
        >
          Reject Proposal
        </Button>
      </div>
    </div>
  );
}
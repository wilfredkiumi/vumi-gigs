// app/proposals/[id]/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Video, FileText, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Proposal } from '@/app/types/proposalTypes';

// Mock data - should be replaced with actual data fetching
const mockProposals: Proposal[] = [
  // ... (same as before)
];

export function generateStaticParams() {
  return mockProposals.map((proposal) => ({
    id: proposal.id,
  }));
}

export default function ProposalDetailsPage({ params }: { params: { id: string } }) {
  const proposal = mockProposals.find((p) => p.id === params.id);

  if (!proposal) {
    return <div className="p-4 text-neutral-600 dark:text-neutral-400">Proposal not found</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/proposals"
          className="inline-flex items-center mb-6 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
        >
          <LucideIcon icon={ArrowLeft} className="mr-2 h-5 w-5" /> Back to Proposals
        </Link>

        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
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
              <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                {proposal.title}
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400">
                {proposal.creator.name} - {proposal.creator.role}
              </p>
            </div>
          </div>

          {/* Proposal Details */}
          <div className="space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center text-neutral-800 dark:text-neutral-100">
                <LucideIcon icon={FileText} className="mr-2 h-5 w-5 text-neutral-500 dark:text-neutral-400" />
                Project Description
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">{proposal.description}</p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-100">
                Services Included
              </h3>
              <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300">
                {proposal.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="flex items-center">
              <LucideIcon icon={DollarSign} className="mr-2 h-5 w-5 text-neutral-500 dark:text-neutral-400" />
              <span className="font-medium text-neutral-800 dark:text-neutral-100">
                {proposal.pricing.type === 'fixed' ? 'Fixed Price' : 'Hourly Rate'}:{' '}
                {proposal.pricing.currency}
                {proposal.pricing.amount}
              </span>
            </div>

            {/* Timeline */}
            <div className="flex items-center">
              <LucideIcon icon={Clock} className="mr-2 h-5 w-5 text-neutral-500 dark:text-neutral-400" />
              <span className="font-medium text-neutral-800 dark:text-neutral-100">
                Estimated Timeline: {proposal.estimatedTimeline}
              </span>
            </div>

            {/* Portfolio */}
            {proposal.portfolio && proposal.portfolio.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-100">
                  Portfolio
                </h3>
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
            <Button className="bg-[#4B269F] hover:bg-[#4B269F]/90">
              <LucideIcon icon={Video} className="mr-2 h-4 w-4" />
              Request Meeting
            </Button>
            <Button
              variant="outline"
              className="text-red-600 hover:text-red-700 border-red-600"
            >
              Reject Proposal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Gig } from '@/lib/gigs';
import ProposalForm from './ProposalForm';

interface ClientGigDetailProps {
  gig: Gig;
}

export default function ClientGigDetail({ gig }: ClientGigDetailProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <Link 
          href="/gigs"
          className="mb-6 inline-flex items-center gap-2 text-neutral-600 hover:text-[#A13163]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Gigs
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-6">
                <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs text-green-700 mb-4">
                  {gig.status}
                </span>
                <h1 className="text-2xl font-bold mb-2">{gig.title}</h1>
                <p className="text-neutral-600">Posted by {gig.client.name}</p>
                {gig.client.company && (
                  <p className="text-neutral-600">{gig.client.company}</p>
                )}
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Project Description</h2>
                <p className="text-neutral-600 whitespace-pre-wrap">{gig.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Required Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {gig.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                  <span className="text-neutral-600">Experience Level</span>
                  <span className="font-medium capitalize">{gig.experience}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                  <span className="text-neutral-600">Project Type</span>
                  <span className="font-medium capitalize">{gig.projectType}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                  <span className="text-neutral-600">Location</span>
                  <span className="font-medium">{gig.location}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                  <span className="text-neutral-600">Duration</span>
                  <span className="font-medium">{gig.duration}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-neutral-600">Posted</span>
                  <span className="font-medium">{new Date(gig.postedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h2 className="text-lg font-semibold mb-6">Submit a Proposal</h2>
              <ProposalForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
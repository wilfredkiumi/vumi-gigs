"use client";

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Gig } from '@/lib/gigs';

interface GigDetailProps {
  gig: Gig;
}

export default function GigDetail({ gig }: GigDetailProps) {
  return (
    <div className="rounded-lg bg-card p-8 shadow-sm border border-border">
      <Link 
        href="/gigs"
        className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Gigs
      </Link>

      <div className="mb-6">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary mb-4">
          {gig.status}
        </span>
        <h1 className="text-2xl font-bold mb-2">{gig.title}</h1>
        <p className="text-muted-foreground">Posted by {gig.client.name}</p>
        {gig.client.company && (
          <p className="text-muted-foreground">{gig.client.company}</p>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Project Description</h2>
        <p className="text-muted-foreground whitespace-pre-wrap">{gig.description}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Required Skills</h2>
        <div className="flex flex-wrap gap-2">
          {gig.skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-full bg-secondary/10 px-3 py-1 text-sm text-secondary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between py-2 border-b border-border">
          <span className="text-muted-foreground">Experience Level</span>
          <span className="font-medium capitalize">{gig.experience}</span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-border">
          <span className="text-muted-foreground">Project Type</span>
          <span className="font-medium capitalize">{gig.projectType}</span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-border">
          <span className="text-muted-foreground">Location</span>
          <span className="font-medium">{gig.location}</span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-border">
          <span className="text-muted-foreground">Duration</span>
          <span className="font-medium">{gig.duration}</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-muted-foreground">Posted</span>
          <span className="font-medium">{new Date(gig.postedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
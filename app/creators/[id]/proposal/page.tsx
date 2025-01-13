"use client";

import { useState } from 'react';
import { ArrowLeft, Upload, Plus, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { creators } from '@/lib/creators';

interface ProposalFormData {
  coverLetter: string;
  projectDetails: {
    title: string;
    description: string;
    timeline: string;
    budget: string;
  };
  attachments: FileList | null;
  portfolio: Array<{
    type: 'link' | 'file';
    url?: string;
    file?: File;
  }>;
}

export default function ProposalPage({ params }: { params: { id: string } }) {
  const creator = creators.find(c => c.id === params.id);
  const [proposal, setProposal] = useState<ProposalFormData>({
    coverLetter: '',
    projectDetails: {
      title: '',
      description: '',
      timeline: '',
      budget: ''
    },
    attachments: null,
    portfolio: []
  });

  if (!creator) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Creator Not Found</h1>
          <Link href="/creators" className="text-primary hover:text-primary/90">
            Back to Creators
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting proposal:', proposal);
  };

  const addPortfolioLink = () => {
    setProposal({
      ...proposal,
      portfolio: [...proposal.portfolio, { type: 'link', url: '' }]
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files).map(file => ({
        type: 'file' as const,
        file
      }));
      setProposal({
        ...proposal,
        portfolio: [...proposal.portfolio, ...newFiles]
      });
    }
  };

  const removePortfolioItem = (index: number) => {
    setProposal({
      ...proposal,
      portfolio: proposal.portfolio.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link 
          href={`/creators/${creator.id}`}
          className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Creator Profile
        </Link>

        <div className="rounded-lg bg-card p-8 shadow-sm border border-border">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-primary mb-2">Send Proposal to {creator.name}</h1>
            <p className="text-muted-foreground">
              Craft a compelling proposal that highlights your project and why you'd like to work with {creator.name}.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Cover Letter */}
            <div>
              <Label htmlFor="coverLetter">Cover Letter</Label>
              <Textarea
                id="coverLetter"
                value={proposal.coverLetter}
                onChange={(e) => setProposal({ ...proposal, coverLetter: e.target.value })}
                placeholder="Introduce yourself and explain why you'd like to work with this creator..."
                className="min-h-[200px]"
                required
              />
            </div>

            {/* Project Details */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Project Details</h2>
              
              <div>
                <Label htmlFor="projectTitle">Project Title</Label>
                <Input
                  id="projectTitle"
                  value={proposal.projectDetails.title}
                  onChange={(e) => setProposal({
                    ...proposal,
                    projectDetails: { ...proposal.projectDetails, title: e.target.value }
                  })}
                  placeholder="Enter your project title"
                  required
                />
              </div>

              <div>
                <Label htmlFor="projectDescription">Project Description</Label>
                <Textarea
                  id="projectDescription"
                  value={proposal.projectDetails.description}
                  onChange={(e) => setProposal({
                    ...proposal,
                    projectDetails: { ...proposal.projectDetails, description: e.target.value }
                  })}
                  placeholder="Describe your project in detail..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="timeline">Timeline</Label>
                  <Input
                    id="timeline"
                    value={proposal.projectDetails.timeline}
                    onChange={(e) => setProposal({
                      ...proposal,
                      projectDetails: { ...proposal.projectDetails, timeline: e.target.value }
                    })}
                    placeholder="e.g., 2-3 months"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="budget">Budget</Label>
                  <Input
                    id="budget"
                    value={proposal.projectDetails.budget}
                    onChange={(e) => setProposal({
                      ...proposal,
                      projectDetails: { ...proposal.projectDetails, budget: e.target.value }
                    })}
                    placeholder="e.g., $5,000"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Portfolio & Work Samples */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Portfolio & Work Samples</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addPortfolioLink}
                >
                  Add Link
                </Button>
              </div>

              <div className="space-y-4">
                {proposal.portfolio.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {item.type === 'link' ? (
                      <Input
                        type="url"
                        value={item.url}
                        onChange={(e) => {
                          const newPortfolio = [...proposal.portfolio];
                          newPortfolio[index] = { ...item, url: e.target.value };
                          setProposal({ ...proposal, portfolio: newPortfolio });
                        }}
                        placeholder="https://"
                        className="flex-1"
                      />
                    ) : (
                      <div className="flex-1 truncate rounded-md border border-input bg-background px-3 py-2 text-sm">
                        {item.file?.name}
                      </div>
                    )}
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removePortfolioItem(index)}
                      className="h-9 w-9"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <input
                  type="file"
                  id="portfolio-files"
                  multiple
                  accept="image/*,video/*,.pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <label
                  htmlFor="portfolio-files"
                  className="flex cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                >
                  <Upload className="h-4 w-4" />
                  Upload Files
                </label>
                <p className="text-xs text-muted-foreground">
                  Supported: Images, Videos, PDFs (max 10MB each)
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-6 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={() => window.history.back()}
              >
                Cancel
              </Button>
              <Button type="submit">
                Send Proposal
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
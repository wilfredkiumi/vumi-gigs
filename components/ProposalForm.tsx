"use client";

import { useState } from 'react';
import { Link2, Upload, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface ProposalFormData {
  coverLetter: string;
  timeframe: string;
  budget: {
    amount: string;
    currency: string;
  };
  milestones: Array<{
    description: string;
    deliverables: string;
    duration: string;
  }>;
  portfolio: Array<{
    type: 'link' | 'file';
    url?: string;
    file?: File;
  }>;
}

export default function ProposalForm() {
  const [proposal, setProposal] = useState<ProposalFormData>({
    coverLetter: '',
    timeframe: '',
    budget: {
      amount: '',
      currency: 'USD'
    },
    milestones: [
      {
        description: '',
        deliverables: '',
        duration: ''
      }
    ],
    portfolio: []
  });

  const addMilestone = () => {
    setProposal({
      ...proposal,
      milestones: [
        ...proposal.milestones,
        { description: '', deliverables: '', duration: '' }
      ]
    });
  };

  const removeMilestone = (index: number) => {
    setProposal({
      ...proposal,
      milestones: proposal.milestones.filter((_, i) => i !== index)
    });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle proposal submission
    console.log('Submitting proposal:', proposal);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Cover Letter */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Cover Letter
        </label>
        <Textarea
          value={proposal.coverLetter}
          onChange={(e) => setProposal({ ...proposal, coverLetter: e.target.value })}
          placeholder="Introduce yourself and explain why you're perfect for this project..."
          className="min-h-[150px]"
          required
        />
      </div>

      {/* Timeframe and Budget */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Estimated Timeframe
          </label>
          <Input
            type="text"
            value={proposal.timeframe}
            onChange={(e) => setProposal({ ...proposal, timeframe: e.target.value })}
            placeholder="e.g., 2-3 weeks"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Budget
          </label>
          <div className="flex gap-2">
            <Input
              type="number"
              value={proposal.budget.amount}
              onChange={(e) => setProposal({
                ...proposal,
                budget: { ...proposal.budget, amount: e.target.value }
              })}
              placeholder="Amount"
              required
            />
            <select
              value={proposal.budget.currency}
              onChange={(e) => setProposal({
                ...proposal,
                budget: { ...proposal.budget, currency: e.target.value }
              })}
              className="rounded-md border border-input bg-background px-3 py-2"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">
            Project Milestones
          </label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addMilestone}
          >
            Add Milestone
          </Button>
        </div>
        
        {proposal.milestones.map((milestone, index) => (
          <div key={index} className="rounded-lg border border-border p-4 space-y-4">
            <div className="flex justify-between items-start">
              <h4 className="text-sm font-medium">Milestone {index + 1}</h4>
              {proposal.milestones.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeMilestone(index)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div className="space-y-4">
              <Input
                value={milestone.description}
                onChange={(e) => {
                  const newMilestones = [...proposal.milestones];
                  newMilestones[index].description = e.target.value;
                  setProposal({ ...proposal, milestones: newMilestones });
                }}
                placeholder="Milestone description"
              />
              <Input
                value={milestone.deliverables}
                onChange={(e) => {
                  const newMilestones = [...proposal.milestones];
                  newMilestones[index].deliverables = e.target.value;
                  setProposal({ ...proposal, milestones: newMilestones });
                }}
                placeholder="Deliverables"
              />
              <Input
                value={milestone.duration}
                onChange={(e) => {
                  const newMilestones = [...proposal.milestones];
                  newMilestones[index].duration = e.target.value;
                  setProposal({ ...proposal, milestones: newMilestones });
                }}
                placeholder="Duration (e.g., 1 week)"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Portfolio */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">
            Portfolio & Work Samples
          </label>
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

      <Button type="submit" className="w-full">
        Submit Proposal
      </Button>
    </form>
  );
}
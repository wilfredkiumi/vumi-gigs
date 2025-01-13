"use client";

import { useState } from 'react';

export default function ProposalForm() {
  const [proposal, setProposal] = useState({
    description: '',
    timeEstimate: '',
    cost: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle proposal submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-1">
          Proposal Description
        </label>
        <textarea
          id="description"
          rows={4}
          className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
          placeholder="Describe your approach to this project..."
          value={proposal.description}
          onChange={(e) => setProposal({ ...proposal, description: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="timeEstimate" className="block text-sm font-medium text-neutral-700 mb-1">
            Time Estimate
          </label>
          <input
            type="text"
            id="timeEstimate"
            className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
            placeholder="e.g., 2 weeks, 3 months"
            value={proposal.timeEstimate}
            onChange={(e) => setProposal({ ...proposal, timeEstimate: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="cost" className="block text-sm font-medium text-neutral-700 mb-1">
            Project Cost
          </label>
          <input
            type="text"
            id="cost"
            className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
            placeholder="e.g., $5,000"
            value={proposal.cost}
            onChange={(e) => setProposal({ ...proposal, cost: e.target.value })}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-[#4B269F] px-4 py-2 text-sm text-white hover:bg-[#4B269F]/90"
      >
        Submit Proposal
      </button>
    </form>
  );
}
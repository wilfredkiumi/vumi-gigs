"use client";

import { useState } from 'react';
import { Link2 } from 'lucide-react';

type PlatformType = 'portfolio' | 'youtube' | 'vimeo' | 'behance' | 'dribbble' | 'artstation';

interface Link {
  platform: PlatformType;
  url: string;
}

export default function ProposalForm() {
  const [proposal, setProposal] = useState({
    description: '',
    timeEstimate: '',
    cost: '',
    links: [] as Link[]
  });

  const platforms = [
    { value: 'portfolio', label: 'Portfolio Website' },
    { value: 'youtube', label: 'YouTube Channel' },
    { value: 'vimeo', label: 'Vimeo Profile' },
    { value: 'behance', label: 'Behance' },
    { value: 'dribbble', label: 'Dribbble' },
    { value: 'artstation', label: 'ArtStation' }
  ];

  const placeholders = {
    portfolio: 'https://your-portfolio.com',
    youtube: 'https://youtube.com/@yourchannel',
    vimeo: 'https://vimeo.com/yourchannel',
    behance: 'https://behance.net/yourprofile',
    dribbble: 'https://dribbble.com/yourprofile',
    artstation: 'https://artstation.com/yourprofile'
  };

  const handleAddLink = () => {
    if (proposal.links.length < 2) {
      setProposal({
        ...proposal,
        links: [...proposal.links, { platform: 'portfolio', url: '' }]
      });
    }
  };

  const handleRemoveLink = (index: number) => {
    setProposal({
      ...proposal,
      links: proposal.links.filter((_, i) => i !== index)
    });
  };

  const handleLinkChange = (index: number, field: 'platform' | 'url', value: string) => {
    const newLinks = [...proposal.links];
    newLinks[index] = {
      ...newLinks[index],
      [field]: field === 'platform' ? value as PlatformType : value
    };
    setProposal({ ...proposal, links: newLinks });
  };

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

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-neutral-700 flex items-center gap-2">
            <Link2 className="h-4 w-4" />
            Portfolio & Social Links
          </h3>
          {proposal.links.length < 2 && (
            <button
              type="button"
              onClick={handleAddLink}
              className="text-sm text-[#4B269F] hover:text-[#4B269F]/90"
            >
              Add Link
            </button>
          )}
        </div>

        {proposal.links.map((link, index) => (
          <div key={index} className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Platform Type
                </label>
                <select
                  value={link.platform}
                  onChange={(e) => handleLinkChange(index, 'platform', e.target.value)}
                  className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                >
                  {platforms.map((platform) => (
                    <option key={platform.value} value={platform.value}>
                      {platform.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-[2]">
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  URL
                </label>
                <input
                  type="url"
                  value={link.url}
                  onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                  placeholder={placeholders[link.platform]}
                  className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                />
              </div>
              <button
                type="button"
                onClick={() => handleRemoveLink(index)}
                className="self-end mb-[9px] px-3 py-2 text-sm text-red-600 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
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
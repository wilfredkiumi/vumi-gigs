"use client";

import { useState } from 'react';
import { Search, Filter, Star, Users, BarChart2, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { creators } from '@/lib/creators';

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    "Art & Design",
    "Gaming",
    "Technology",
    "Education",
    "Lifestyle",
    "Fashion",
    "Beauty",
    "Fitness",
    "Food"
  ];

  // Filter creators based on search and categories
  const filteredCreators = creators.filter(creator => {
    const matchesSearch = searchQuery === '' || 
      creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      creator.categories.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategories = selectedCategories.length === 0 ||
      creator.categories.some(c => selectedCategories.includes(c));

    return matchesSearch && matchesCategories;
  });

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#A13163] mb-4">Creator Marketplace</h1>
            <p className="text-neutral-600 max-w-2xl">
              Connect with talented content creators and influencers to promote your brand. 
              Browse profiles, check engagement metrics, and send collaboration proposals.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search creators by name, specialty, or category..."
                className="w-full rounded-lg border border-neutral-200 px-10 py-2 text-sm focus:border-[#A13163] focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            </div>
            <button className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm hover:border-[#A13163]">
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="rounded-lg bg-white p-6 shadow-sm mb-6">
                <h2 className="font-semibold mb-4">Categories</h2>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories([...selectedCategories, category]);
                          } else {
                            setSelectedCategories(selectedCategories.filter(c => c !== category));
                          }
                        }}
                        className="rounded border-neutral-300 text-[#4B269F] focus:ring-[#4B269F]"
                      />
                      <span className="text-sm text-neutral-600">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Creator List */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {filteredCreators.map((creator) => (
                <div
                  key={creator.id}
                  className="rounded-lg border border-neutral-200 bg-white p-6 hover:border-[#A13163] transition-all"
                >
                  <div className="flex gap-6">
                    {/* Avatar */}
                    <div className="relative h-24 w-24 flex-shrink-0">
                      <Image
                        src={creator.avatar}
                        alt={creator.name}
                        fill
                        className="rounded-lg object-cover"
                      />
                      {creator.verified && (
                        <div className="absolute -right-2 -top-2 rounded-full bg-[#4B269F] p-1">
                          <Star className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-lg font-medium">{creator.name}</h3>
                        <p className="text-neutral-600">{creator.role}</p>
                        <p className="text-sm text-neutral-500">{creator.location}</p>
                      </div>

                      <div className="mb-4 flex flex-wrap gap-2">
                        {creator.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>

                      <div className="mb-4 grid grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-neutral-400" />
                          <span className="text-sm text-neutral-600">
                            {creator.stats.followers.toLocaleString()} Followers
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BarChart2 className="h-4 w-4 text-neutral-400" />
                          <span className="text-sm text-neutral-600">
                            {creator.stats.engagement}% Engagement
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-neutral-400" />
                          <span className="text-sm text-neutral-600">
                            {creator.stats.avgComments.toLocaleString()} Avg. Comments
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-neutral-500">
                          Worked with: {creator.previousBrands.join(", ")}
                        </div>
                        <button className="rounded-lg bg-[#4B269F] px-4 py-2 text-sm text-white hover:bg-[#4B269F]/90">
                          Send Proposal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
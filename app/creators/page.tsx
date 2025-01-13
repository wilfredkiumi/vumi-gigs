"use client";

import { useState } from 'react';
import { Search, Filter, Star, Users, BarChart2, MessageSquare, Briefcase, Award, Lock } from 'lucide-react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { creators, type CreatorType } from '@/lib/creators';
import { canViewInfluencerProfile, canSendProposal } from '@/lib/auth';
import Link from 'next/link';

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

export default function CreatorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<CreatorType | 'all'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const canViewInfluencers = canViewInfluencerProfile();
  const canPropose = canSendProposal();

  const filteredCreators = creators.filter(creator => {
    if (creator.type === 'influencer' && !canViewInfluencers) {
      return false;
    }

    const matchesSearch = searchQuery === '' || 
      creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      creator.categories.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategories = selectedCategories.length === 0 ||
      creator.categories.some(c => selectedCategories.includes(c));

    const matchesType = selectedType === 'all' || creator.type === selectedType;

    return matchesSearch && matchesCategories && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl font-bold text-primary mb-3 sm:text-4xl">Creator Marketplace</h1>
            <p className="text-muted-foreground max-w-2xl">
              Connect with talented content creators and influencers to promote your brand. 
              Browse profiles, check engagement metrics, and send collaboration proposals.
            </p>
            {!canViewInfluencers && (
              <div className="mt-4 rounded-lg bg-secondary/10 p-4 text-secondary-foreground">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  <p className="font-medium">Influencer Profiles Restricted</p>
                </div>
                <p className="mt-1 text-sm">
                  Sign in as a brand or client to view influencer profiles and their detailed metrics.
                  <Link href="/auth" className="ml-2 text-primary hover:text-primary/90">
                    Sign In
                  </Link>
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Search creators by name, specialty, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10"
              />
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden sm:block'}`}>
            <div className="sticky top-6">
              <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold">Categories</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(false)}
                    className="sm:hidden"
                  >
                    ×
                  </Button>
                </div>
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
                        className="rounded border-input text-primary focus:ring-ring"
                      />
                      <span className="text-sm text-muted-foreground">{category}</span>
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
                  className="rounded-lg border border-border bg-card p-4 hover:border-primary transition-all sm:p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                    {/* Avatar */}
                    <div className="relative h-20 w-20 flex-shrink-0 sm:h-24 sm:w-24">
                      <Image
                        src={creator.avatar}
                        alt={creator.name}
                        fill
                        className={`rounded-lg object-cover ${
                          creator.type === 'influencer' && !canViewInfluencers ? 'blur-sm' : ''
                        }`}
                      />
                      {creator.verified && (
                        <div className="absolute -right-2 -top-2 rounded-full bg-primary p-1">
                          <Star className="h-4 w-4 text-primary-foreground" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-lg font-medium">
                            {creator.type === 'influencer' && !canViewInfluencers
                              ? 'Influencer Profile'
                              : creator.name
                            }
                          </h3>
                          <span className="inline-flex items-center gap-1 rounded-full bg-secondary/10 px-2 py-0.5 text-xs text-secondary-foreground">
                            {creator.type === 'influencer' ? (
                              <>
                                <Users className="h-3 w-3" />
                                Influencer
                              </>
                            ) : (
                              <>
                                <Briefcase className="h-3 w-3" />
                                Talent
                              </>
                            )}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{creator.role}</p>
                        <p className="text-sm text-muted-foreground">
                          {creator.type === 'influencer' && !canViewInfluencers
                            ? '* Location hidden *'
                            : creator.location
                          }
                        </p>
                      </div>

                      <div className="mb-4 flex flex-wrap gap-2">
                        {creator.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-secondary/10 px-3 py-1 text-xs text-secondary-foreground"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>

                      <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
                        {creator.type === 'influencer' ? (
                          canViewInfluencers ? (
                            <>
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">
                                  {creator.stats.followers.toLocaleString()} Followers
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <BarChart2 className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">
                                  {creator.stats.engagement}% Engagement
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">
                                  {creator.stats.avgComments.toLocaleString()} Avg. Comments
                                </span>
                              </div>
                            </>
                          ) : (
                            <div className="col-span-full flex items-center justify-center gap-2 text-muted-foreground">
                              <Lock className="h-4 w-4" />
                              <span>Metrics available for verified brands</span>
                            </div>
                          )
                        ) : (
                          <>
                            <div className="flex items-center gap-2">
                              <Award className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                {creator.talent?.experience.years}+ Years Experience
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                {creator.stats.followers.toLocaleString()} Profile Views
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MessageSquare className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                {creator.stats.avgComments.toLocaleString()} Reviews
                              </span>
                            </div>
                          </>
                        )}
                      </div>

                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="text-sm text-muted-foreground">
                          {creator.type === 'influencer' && !canViewInfluencers
                            ? '* Previous collaborations hidden *'
                            : `Worked with: ${creator.previousBrands.join(", ")}`
                          }
                        </div>
                        {canPropose ? (
                          <Button className="w-full sm:w-auto">
                            Send Proposal
                          </Button>
                        ) : (
                          <Button variant="outline" asChild className="w-full sm:w-auto">
                            <Link href="/auth">Sign In to Send Proposal</Link>
                          </Button>
                        )}
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
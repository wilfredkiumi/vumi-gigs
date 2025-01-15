"use client";

import { MapPin, Users, BarChart2, Heart, MessageSquare, Clock, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import type { Influencer } from '@/lib/influencers';

export default function InfluencerProfile({ influencer }: { influencer: Influencer }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-48 bg-gradient-to-r from-primary to-secondary">
        <div className="absolute -bottom-22 sm:-bottom-16 mx-auto w-full px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center md:flex-row md:items-end gap-6">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-background mt-16 sm:mt-8 md:mt-0">
                <Image
                  src={influencer.avatar}
                  alt={influencer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mb-0 flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-foreground dark:text-white">{influencer.name}</h1>
                <p className="text-muted-foreground dark:text-white/90">{influencer.role}</p>
              </div>
              <div className="mb-4 flex gap-3">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 dark:bg-primary">
                  Send Proposal
                </Button>
                <Button 
                  variant="outline" 
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary"
                  onClick={() => window.location.href = '/inbox'}
                >
                  Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-44 sm:pt-24">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* About */}
              <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
                <h2 className="mb-4 text-lg font-semibold text-foreground">About</h2>
                <p className="mb-4 text-muted-foreground">{influencer.bio}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{influencer.location}</span>
                  </div>
                  {influencer.platforms.map((platform) => (
                    <Link
                      key={platform.name}
                      href={platform.url}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="h-4 w-4" />
                      <span>{platform.handle}</span>
                      <span className="text-muted-foreground">
                        ({platform.followers.toLocaleString()} followers)
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
                <h2 className="mb-4 text-lg font-semibold text-foreground">Engagement</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Followers</span>
                    </div>
                    <span className="font-medium">{influencer.stats.followers.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BarChart2 className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Engagement Rate</span>
                    </div>
                    <span className="font-medium">{influencer.stats.engagement}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Avg. Likes</span>
                    </div>
                    <span className="font-medium">{influencer.stats.avgLikes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Avg. Comments</span>
                    </div>
                    <span className="font-medium">{influencer.stats.avgComments.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Rates */}
              <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
                <h2 className="mb-4 text-lg font-semibold text-foreground">Rates</h2>
                <div className="space-y-3">
                  {Object.entries(influencer.sponsorshipRates).map(([type, rate]) => (
                    <div key={type} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground capitalize">{type}</span>
                      <span className="font-medium">${rate.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Audience */}
              <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
                <h2 className="mb-6 text-xl font-semibold text-foreground">Audience Demographics</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-2">Age Range</h3>
                    <div className="space-y-1">
                      {influencer.audience.demographics.ageRanges.map((age) => (
                        <div key={age} className="text-sm text-muted-foreground">{age}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-2">Gender</h3>
                    <div className="space-y-1">
                      {influencer.audience.demographics.genders.map((gender) => (
                        <div key={gender} className="text-sm text-muted-foreground">{gender}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-2">Top Locations</h3>
                    <div className="space-y-1">
                      {influencer.audience.demographics.locations.map((location) => (
                        <div key={location} className="text-sm text-muted-foreground">{location}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Types */}
              <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
                <h2 className="mb-6 text-xl font-semibold text-foreground">Content Types</h2>
                <div className="flex flex-wrap gap-2">
                  {influencer.contentTypes.map((type, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reach */}
              <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
                <h2 className="mb-6 text-xl font-semibold text-foreground">Reach Metrics</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  {Object.entries(influencer.audience.reachMetrics).map(([period, reach]) => (
                    <div key={period} className="rounded-lg bg-background p-4 border border-border">
                      <p className="text-sm text-muted-foreground capitalize mb-1">{period} Reach</p>
                      <p className="text-2xl font-semibold text-foreground">
                        {reach.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Previous Work */}
              <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
                <h2 className="mb-6 text-xl font-semibold text-foreground">Previous Collaborations</h2>
                <div className="flex flex-wrap gap-2">
                  {influencer.previousBrands.map((brand, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
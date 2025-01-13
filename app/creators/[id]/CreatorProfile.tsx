"use client";

import { MapPin, Link2, Twitter, Instagram, Mail, Share2, Globe, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import type { Creator } from '@/lib/creators';

export default function CreatorProfile({ creator }: { creator: Creator }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Profile Header */}
      <div className="relative h-48 bg-gradient-to-r from-primary to-secondary">
        <div className="absolute -bottom-16 mx-auto w-full">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end gap-6">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-background bg-background">
                <Image
                  src={creator.avatar}
                  alt={creator.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mb-4 flex-1">
                <h1 className="text-3xl font-bold text-primary-foreground">{creator.name}</h1>
                <p className="text-primary-foreground/90">{creator.role}</p>
              </div>
              <div className="mb-4 flex gap-3">
                <Link href={`/creators/${creator.id}/proposal`}>
                  <Button size="lg">
                    Send Proposal
                  </Button>
                </Link>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* About */}
              <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
                <h2 className="mb-4 text-lg font-semibold">About</h2>
                <p className="mb-4 text-muted-foreground">{creator.bio}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{creator.location}</span>
                  </div>
                  {creator.platforms.map((platform) => (
                    <Link
                      key={platform.name}
                      href={platform.url}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="h-4 w-4" />
                      <span>{platform.name}</span>
                      <span className="text-muted-foreground">
                        ({platform.followers.toLocaleString()} followers)
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
                <h2 className="mb-4 text-lg font-semibold">Stats</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-semibold">{creator.stats.followers.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Followers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">{creator.stats.engagement}%</p>
                    <p className="text-sm text-muted-foreground">Engagement</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">{creator.stats.posts.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Posts</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">${creator.priceRange.min.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Starting at</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
              <h2 className="mb-6 text-xl font-semibold">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {creator.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-secondary/10 px-3 py-1 text-sm text-secondary-foreground"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-card p-6 shadow-sm border border-border">
              <h2 className="mb-6 text-xl font-semibold">Previous Work</h2>
              <div className="text-muted-foreground">
                <p>Worked with: {creator.previousBrands.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
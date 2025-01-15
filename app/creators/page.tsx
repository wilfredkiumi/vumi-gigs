"use client";

import { useState } from 'react';
import { Search, Filter, Star, Users, BarChart2, MessageSquare, Briefcase, Award, Lock } from 'lucide-react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';

const categories = [
  "Art & Design",
  "Animation",
  "Film",
  "Games",
  "Education",
  "Technology"
];

// Dummy creators data
const creators = [
  {
    id: "1",
    name: "Sarah Chen",
    type: "influencer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400",
    role: "Digital Artist & Content Creator",
    location: "Vancouver, Canada",
    specialties: ["3D Art", "Digital Painting", "Animation", "Creative Tutorials"],
    stats: {
      followers: 250000,
      engagement: 4.8,
      avgComments: 800,
    },
    categories: ["Art & Design", "Education", "Technology"],
    previousBrands: ["Adobe", "Wacom", "Autodesk"],
    verified: true,
  },
  {
    id: "2",
    name: "Alex Thompson",
    type: "talent",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400",
    role: "Senior 3D Animator",
    location: "London, UK",
    specialties: ["Character Animation", "Motion Capture", "Rigging", "Animation Direction"],
    stats: {
      followers: 15000,
      engagement: 3.2,
      avgComments: 50
    },
    categories: ["Animation", "Film", "Games"],
    previousBrands: ["Pixar", "DreamWorks", "Sony Pictures"],
    verified: true,
    talent: {
      experience: {
        years: 12
      }
    }
  },
  {
    id: "3",
    name: "Maya Rodriguez",
    type: "influencer",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&h=400",
    role: "Game Developer & Streamer",
    location: "Madrid, Spain",
    specialties: ["Game Development", "Unity3D", "Live Coding", "Gaming"],
    stats: {
      followers: 180000,
      engagement: 5.2,
      avgComments: 600
    },
    categories: ["Games", "Technology", "Education"],
    previousBrands: ["Unity", "Razer", "Intel"],
    verified: true
  }
];

export default function CreatorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<'influencer' | 'talent' | 'all'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCreators = creators.filter(creator => {
    const matchesSearch = 
      searchQuery === '' || 
      creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      creator.categories.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
      creator.role.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategories = 
      selectedCategories.length === 0 || 
      creator.categories.some(c => selectedCategories.includes(c));
      
    const matchesType = 
      selectedType === 'all' || 
      creator.type === selectedType;

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
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Search by name, specialty, category, or role..."
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

              <div className="mt-6 rounded-lg bg-card p-6 shadow-sm border border-border">
                <h2 className="font-semibold mb-4">Creator Type</h2>
                <div className="space-y-2">
                  {['all', 'influencer', 'talent'].map((type) => (
                    <label key={type} className="flex items-center gap-2">
                      <input
                        type="radio"
                        checked={selectedType === type}
                        onChange={() => setSelectedType(type as 'all' | 'influencer' | 'talent')}
                        className="rounded-full border-input text-primary focus:ring-ring"
                      />
                      <span className="text-sm text-muted-foreground capitalize">{type}</span>
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
                        className="rounded-lg object-cover"
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
                            {creator.name}
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
                          {creator.location}
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
                          Worked with: {creator.previousBrands.join(", ")}
                        </div>
                        <Link href={`/creators/${creator.id}`}>
                          <Button className="w-full sm:w-auto">
                            View Profile
                          </Button>
                        </Link>
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
"use client";

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { gigs } from '@/lib/gigs';

// Define available categories based on the gigs data
const categories = [
  "3D Animation",
  "2D Animation",
  "Motion Graphics",
  "Character Design",
  "Storyboarding",
  "VFX",
  "Rigging",
  "Concept Art",
  "UI Animation"
];

export default function GigsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Filter gigs based on search query and selected categories
  const filteredGigs = gigs.filter(gig => {
    const searchTerm = searchQuery.toLowerCase();
    const matchesSearch = 
      gig.title.toLowerCase().includes(searchTerm) ||
      gig.description.toLowerCase().includes(searchTerm) ||
      gig.skills.some(skill => skill.toLowerCase().includes(searchTerm)) ||
      gig.category.toLowerCase().includes(searchTerm);

    const matchesCategories = selectedCategories.length === 0 ||
      selectedCategories.includes(gig.category.toLowerCase().split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' '));

    return matchesSearch && matchesCategories;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-4">Creative Gigs</h1>
              <p className="text-muted-foreground">
                Find creative projects and opportunities
              </p>
            </div>
            <Link href="/gigs/post">
              <Button>Post a Gig</Button>
            </Link>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search gigs by title, skills, or category..."
                className="w-full rounded-lg border border-input bg-background px-10 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="rounded-lg bg-card p-6 shadow-sm border border-border">
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
                        className="rounded border-input text-primary focus:ring-ring"
                      />
                      <span className="text-sm text-muted-foreground">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Gigs Grid */}
          <div className="lg:col-span-3">
            {filteredGigs.length === 0 ? (
              <div className="text-center text-muted-foreground">
                No gigs found matching your search criteria
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {filteredGigs.map((gig) => (
                  <Link
                    key={gig.id}
                    href={`/gigs/${gig.id}`}
                    className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary"
                  >
                    <div className="mb-4">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        {gig.status}
                      </span>
                    </div>
                    <h3 className="mb-2 font-medium">{gig.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                      {gig.description}
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <span>Category</span>
                        <span className="font-medium">{gig.category.split('-').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Duration</span>
                        <span className="font-medium">{gig.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Experience</span>
                        <span className="font-medium capitalize">{gig.experience}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Location</span>
                        <span className="font-medium">{gig.location}</span>
                      </div>
                      <div className="pt-2">
                        <div className="flex flex-wrap gap-2">
                          {gig.skills.slice(0, 3).map((skill, index) => (
                            <span
                              key={index}
                              className="inline-block rounded-full bg-secondary/10 px-2 py-1 text-xs text-secondary-foreground"
                            >
                              {skill}
                            </span>
                          ))}
                          {gig.skills.length > 3 && (
                            <span className="inline-block rounded-full bg-secondary/10 px-2 py-1 text-xs text-secondary-foreground">
                              +{gig.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
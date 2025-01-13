"use client";

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

type GigFormData = {
  title: string;
  category: string;
  description: string;
  duration: string;
  experience: string;
  location: string;
  projectType: string;
  skills: string;
  attachments: FileList | null;
};

export default function PostGig() {
  const [gig, setGig] = useState<GigFormData>({
    title: '',
    category: '',
    description: '',
    duration: '',
    experience: '',
    location: '',
    projectType: '',
    skills: '',
    attachments: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle gig submission
    console.log('Submitting gig:', gig);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link 
          href="/gigs"
          className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Gigs
        </Link>

        <div className="rounded-lg bg-card p-8 shadow-sm border border-border">
          <h1 className="mb-6 text-2xl font-bold text-primary">Post a Gig</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-foreground mb-1">
                Gig Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="e.g., 3D Character Animation for Short Film"
                value={gig.title}
                onChange={(e) => setGig({ ...gig, title: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-foreground mb-1">
                Category
              </label>
              <select
                id="category"
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                value={gig.category}
                onChange={(e) => setGig({ ...gig, category: e.target.value })}
                required
              >
                <option value="">Select a category</option>
                <option value="3d-animation">3D Animation</option>
                <option value="2d-animation">2D Animation</option>
                <option value="motion-graphics">Motion Graphics</option>
                <option value="character-design">Character Design</option>
                <option value="storyboarding">Storyboarding</option>
                <option value="vfx">VFX</option>
                <option value="rigging">Rigging</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-foreground mb-1">
                Description
              </label>
              <textarea
                id="description"
                rows={6}
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="Describe the project requirements, goals, and expectations..."
                value={gig.description}
                onChange={(e) => setGig({ ...gig, description: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-foreground mb-1">
                  Project Duration
                </label>
                <input
                  type="text"
                  id="duration"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="e.g., 2-3 months"
                  value={gig.duration}
                  onChange={(e) => setGig({ ...gig, duration: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-1">
                  Required Experience
                </label>
                <select
                  id="experience"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                  value={gig.experience}
                  onChange={(e) => setGig({ ...gig, experience: e.target.value })}
                  required
                >
                  <option value="">Select level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-foreground mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="e.g., Remote, New York"
                  value={gig.location}
                  onChange={(e) => setGig({ ...gig, location: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-1">
                  Project Type
                </label>
                <select
                  id="projectType"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                  value={gig.projectType}
                  onChange={(e) => setGig({ ...gig, projectType: e.target.value })}
                  required
                >
                  <option value="">Select type</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="onsite">Onsite</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-foreground mb-1">
                Required Skills
              </label>
              <input
                type="text"
                id="skills"
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="e.g., Maya, Character rigging, Animation principles (comma separated)"
                value={gig.skills}
                onChange={(e) => setGig({ ...gig, skills: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="attachments" className="block text-sm font-medium text-foreground mb-1">
                Attachments
              </label>
              <input
                type="file"
                id="attachments"
                multiple
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                onChange={(e) => setGig({ ...gig, attachments: e.target.files })}
              />
              <p className="mt-1 text-xs text-muted-foreground">
                Upload reference images, documents, or other relevant files (optional)
              </p>
            </div>

            <div className="flex justify-end gap-4 pt-4 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={() => window.history.back()}
              >
                Cancel
              </Button>
              <Button
                type="submit"
              >
                Post Gig
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
"use client";

import { Search, ArrowRight } from 'lucide-react';

export default function Projects() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Featured Project Hero */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="aspect-video rounded-lg bg-neutral-100"></div>
            <div className="flex flex-col justify-center">
              <span className="mb-2 text-sm font-medium text-[#A13163]">Featured Project</span>
              <h1 className="mb-4 text-3xl font-bold">Digital Art Exhibition 2024</h1>
              <p className="mb-6 text-neutral-600">
                A groundbreaking virtual exhibition showcasing the best digital art from around the world.
              </p>
              <div className="mb-6">
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-medium">Creator:</span>
                  <span className="text-neutral-600">Digital Arts Collective</span>
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-medium">Category:</span>
                  <span className="text-neutral-600">Digital Art</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Status:</span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">Active</span>
                </div>
              </div>
              <button className="w-fit rounded-lg bg-[#4B269F] px-6 py-3 text-white hover:bg-[#4B269F]/90">
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full rounded-lg border border-neutral-200 px-10 py-2 text-sm focus:border-[#A13163] focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          </div>
        </div>
      </div>

      {/* Project List */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">All Projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
              <div className="aspect-video bg-neutral-100" />
              <div className="p-4">
                <h3 className="mb-2 font-medium">Creative Project {i}</h3>
                <div className="text-sm text-neutral-600">
                  <div className="mb-1">
                    <span>Digital Art</span>
                    <span className="mx-2">•</span>
                    <span>Artist Name</span>
                  </div>
                  <div>
                    <span>Active</span>
                    <span className="mx-2">•</span>
                    <span>2K Views</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
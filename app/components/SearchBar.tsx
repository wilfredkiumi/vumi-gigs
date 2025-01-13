"use client";

import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative">
        <input
          type="text"
          placeholder="Search projects, creators, or showcases..."
          className="w-full rounded-lg border border-neutral-200 px-12 py-2 md:py-3 text-sm md:text-base focus:border-[#A13163] focus:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-400"
        />
        <Search className="absolute left-4 top-1/2 h-4 w-4 md:h-5 md:w-5 -translate-y-1/2 text-neutral-400" />
      </div>
    </div>
  );
}
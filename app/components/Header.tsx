"use client";

import { Search, Menu, X, Bell, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

interface Platform {
  name: string;
  theme: {
    primary: string;
    secondary: string;
  };
}

// Navigation menus for each platform
const platformNavigation = {
  Showcase: [
    { name: 'Projects', href: '/projects' },
    { name: 'Creators', href: '/creators' },
    { name: 'Showcases', href: '/showcases' },
  ],
  Marketplace: [
    { name: 'Products', href: '/products' },
    { name: 'Courses', href: '/courses' },
    { name: 'Resources', href: '/resources' },
  ],
  Gigs: [
    { name: 'Jobs', href: '/jobs' },
    { name: 'Freelancers', href: '/freelancers' },
    { name: 'Contracts', href: '/contracts' },
  ]
};

// Platform switcher component
const PlatformSwitcher = () => (
  <div className="hidden lg:flex items-center gap-4 border-l border-neutral-200 ml-6 pl-6 dark:border-neutral-800">
    <Link 
      href="https://showcase.vumi.com"
      className="text-sm text-neutral-600 hover:text-[#A13163] dark:text-neutral-400"
    >
      Showcase
    </Link>
    <Link 
      href="https://market.vumi.com"
      className="text-sm text-neutral-600 hover:text-[#2E7D32] dark:text-neutral-400"
    >
      Marketplace
    </Link>
    <Link 
      href="https://gigs.vumi.com"
      className="text-sm text-neutral-600 hover:text-[#1976D2] dark:text-neutral-400"
    >
      Gigs
    </Link>
  </div>
);

export default function Header({ platform }: { platform: Platform }) {
  // Rest of the header component code remains the same, but use platform.theme
  // for styling and platformNavigation[platform.name] for navigation items
  
  // Example of using platform-specific colors:
  const logoColor = platform.theme.primary;
  const navigation = platformNavigation[platform.name as keyof typeof platformNavigation];

  return (
    <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Link href="/" className={`text-xl font-bold`} style={{ color: logoColor }}>
            Vumi {platform.name}
          </Link>
          <PlatformSwitcher />
        </div>
        
        {/* Rest of the header implementation */}
      </div>
    </header>
  );
}
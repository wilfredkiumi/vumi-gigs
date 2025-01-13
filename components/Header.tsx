"use client";

import { Search, Menu, X, Bell, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const navigation = [
  { name: 'Find Work', href: '/gigs' },
  { name: 'Creators', href: '/creators' },
  { name: 'Post a Gig', href: '/gigs/post' },
  { name: 'How it Works', href: '/how-it-works' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-lg font-bold text-primary sm:text-xl">Vumi</span>
            <span className="ml-1 text-lg font-bold text-muted-foreground sm:text-xl">Gigs</span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Link href="/inbox">
            <Button 
              variant="ghost" 
              size="icon"
              className="relative group"
            >
              <MessageSquare className="h-5 w-5 transition-colors group-hover:text-primary" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                2
              </span>
            </Button>
          </Link>
          <Link href="/auth">
            <Button>Sign In</Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-4 py-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-border/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-lg font-bold text-primary">Vumi</span>
              <span className="ml-1 text-lg font-bold text-muted-foreground">Gigs</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-muted-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <div className="flex items-center gap-4 mb-4">
                  <Button variant="ghost" size="icon" className="flex-1">
                    <Bell className="h-5 w-5" />
                  </Button>
                  <Link href="/inbox" className="flex-1">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="relative w-full"
                    >
                      <MessageSquare className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                        2
                      </span>
                    </Button>
                  </Link>
                </div>
                <Link href="/auth">
                  <Button className="w-full">Sign In</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
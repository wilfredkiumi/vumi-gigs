"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div 
      className="relative min-h-[80vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=3270&auto=format&fit=crop")'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Connect with Top Creators
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Find the perfect creative talent for your brand campaigns. Connect with creators and influencers 
            who align with your vision and reach your target audience effectively.
          </p>
          <div className="relative mx-auto mb-12 max-w-3xl">
            <input
              type="text"
              placeholder="Search creators, influencers, or categories..."
              className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-white/60 backdrop-blur-md focus:border-primary focus:outline-none"
            />
            <Button 
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary hover:bg-primary/90"
            >
              Search
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/creators">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90">
                Find Creators
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/gigs">
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full border-white bg-white/10 text-foreground backdrop-blur-sm hover:bg-white hover:text-white dark:text-white dark:hover:bg-white/20"
              >
                List Your Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
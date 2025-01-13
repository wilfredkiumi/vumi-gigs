"use client";

import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="bg-primary text-primary-foreground py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 md:text-4xl">Ready to Start Your Creative Journey?</h2>
        <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-lg">
          Join thousands of creators and brands who are building successful partnerships and bringing creative visions to life.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/auth">
            <Button 
              size="lg" 
              variant="secondary"
              className="min-w-[200px]"
            >
              Sign Up as Creator
            </Button>
          </Link>
          <Link href="/gigs/post">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 min-w-[200px]"
            >
              Post a Gig
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
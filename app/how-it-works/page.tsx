"use client";

import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-6 sm:text-5xl">
              How Vumi Gigs Works
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Connect with top creative talent or find your next creative project. Our platform makes collaboration simple and secure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/creators">
                <Button size="lg">
                  Find Creators
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/gigs">
                <Button size="lg" variant="outline">
                  Browse Gigs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12">
        <HowItWorksSection />
      </div>

      {/* FAQ Section */}
      <div className="py-12 bg-card border-y border-border">
        <FAQSection />
      </div>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
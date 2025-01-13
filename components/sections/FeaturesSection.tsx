"use client";

import { Palette, Shield, Zap, Globe, CreditCard, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: "Creative Freedom",
    description: "Work on projects that match your creative vision and expertise"
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Protected payments and clear payment milestones for every project"
  },
  {
    icon: Zap,
    title: "Quick Matching",
    description: "Smart algorithms to match you with relevant opportunities"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with clients and creators from around the world"
  },
  {
    icon: CreditCard,
    title: "Fair Pricing",
    description: "Transparent pricing with no hidden fees or charges"
  },
  {
    icon: HeartHandshake,
    title: "Quality Support",
    description: "Dedicated support team to help you succeed"
  }
];

export default function FeaturesSection() {
  return (
    <div className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Vumi Gigs</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to succeed in the creative industry
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="rounded-lg bg-card p-6 shadow-sm border border-border"
              >
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
"use client";

import { Button } from "@/components/ui/button";
import Link from 'next/link';

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Set up your professional profile showcasing your skills and experience",
    userType: "creator"
  },
  {
    number: "02",
    title: "Browse Opportunities",
    description: "Find relevant projects that match your expertise and interests",
    userType: "creator"
  },
  {
    number: "03",
    title: "Submit Proposals",
    description: "Send compelling proposals to projects you're interested in",
    userType: "creator"
  },
  {
    number: "04",
    title: "Post Your Project",
    description: "Share your project details and requirements",
    userType: "client"
  },
  {
    number: "05",
    title: "Review Proposals",
    description: "Evaluate proposals from talented creators",
    userType: "client"
  },
  {
    number: "06",
    title: "Collaborate & Pay",
    description: "Work together and process secure payments through our platform",
    userType: "client"
  }
];

export default function HowItWorksSection() {
  return (
    <div className="bg-card py-24 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple steps to start your creative journey
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="relative rounded-lg bg-background p-6 shadow-sm border border-border"
            >
              <div className="mb-4 text-4xl font-bold text-primary/20">
                {step.number}
              </div>
              <h3 className="mb-2 text-lg font-medium">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              <span className="absolute top-4 right-4 text-xs text-muted-foreground">
                {step.userType === 'creator' ? 'For Creators' : 'For Clients'}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Link href="/auth">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/how-it-works">
            <Button size="lg" variant="outline">Learn More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
"use client";

import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react';

export default function NewsletterSection() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <Mail className="h-12 w-12 mb-6" />
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-primary-foreground/90 mb-8 max-w-md">
            Get the latest creative opportunities and industry insights delivered to your inbox
          </p>
          <form className="flex w-full max-w-md gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-primary-foreground placeholder-primary-foreground/60 backdrop-blur-sm focus:border-primary-foreground focus:outline-none"
            />
            <Button variant="secondary">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
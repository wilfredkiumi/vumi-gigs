"use client";

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BusinessFormData {
  name: string;
  website: string;
  industry: string;
  size: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  description: string;
}

export default function BusinessSignupPage() {
  const [formData, setFormData] = useState<BusinessFormData>({
    name: '',
    website: '',
    industry: '',
    size: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Business account data:', formData);
  };

  return (
    <div className="min-h-[calc(100vh-73px)] bg-background flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-lg shadow-sm border border-border p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-primary mb-2">
              Create Business Account
            </h1>
            <p className="text-muted-foreground">
              Get access to our influencer network and collaboration tools
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Business Name</Label>
              <Input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="website">Business Website</Label>
              <Input
                type="url"
                id="website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="industry">Industry</Label>
              <select
                id="industry"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                required
              >
                <option value="">Select industry</option>
                <option value="fashion">Fashion & Apparel</option>
                <option value="beauty">Beauty & Cosmetics</option>
                <option value="tech">Technology</option>
                <option value="food">Food & Beverage</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health & Wellness</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <Label htmlFor="size">Company Size</Label>
              <select
                id="size"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                required
              >
                <option value="">Select size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="501+">501+ employees</option>
              </select>
            </div>

            <div>
              <Label htmlFor="contactName">Contact Name</Label>
              <Input
                type="text"
                id="contactName"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="contactEmail">Contact Email</Label>
              <Input
                type="email"
                id="contactEmail"
                value={formData.contactEmail}
                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="contactPhone">Contact Phone</Label>
              <Input
                type="tel"
                id="contactPhone"
                value={formData.contactPhone}
                onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Business Description</Label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[100px]"
                placeholder="Tell us about your business and your goals with influencer marketing..."
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Create Business Account
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/auth" className="text-primary hover:text-primary/90">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
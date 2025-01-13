"use client";

import { Check } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Basic Creator',
    price: 'Free',
    description: 'Perfect for individual creators getting started',
    features: [
      'Create basic profile',
      'List skills and availability',
      'Get tagged on projects',
      'Access to free webinars',
      'Join creator community',
      'Basic portfolio page'
    ]
  },
  {
    name: 'Creator Pro',
    price: '49.99',
    description: 'For professional creators and small teams',
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Priority support',
      'Custom portfolio',
      'Advanced collaboration',
      'Project management tools',
      'Early access to features'
    ],
    popular: true
  },
  {
    name: 'Studio Basic',
    price: '99.99',
    description: 'Essential tools for growing studios',
    features: [
      'Up to 25 team members',
      'Team management',
      'Studio profile',
      'Project tracking',
      'Basic resource management',
      'Collaboration suite',
      'Analytics dashboard'
    ]
  },
  {
    name: 'Studio Pro',
    price: '199.99',
    description: 'Complete solution for professional studios',
    features: [
      'Unlimited team members',
      'Advanced team management',
      'Custom branding',
      'Advanced project tracking',
      'Resource optimization',
      'Premium support',
      'API access',
      'Custom integrations'
    ]
  },
  {
    name: 'Organization',
    price: '499.99',
    description: 'For showcase organizers and large institutions',
    features: [
      'Event management',
      'Ticketing system',
      'Showcase creation',
      'Participant management',
      'Custom branding',
      'Analytics suite',
      'Marketing tools',
      'Dedicated support',
      'API access'
    ]
  }
];

export default function PlansPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#A13163] mb-4">Choose Your Plan</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Select the perfect tier for your creative journey. From individual creators to large organizations, 
            we have a plan that fits your needs.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`rounded-lg bg-white p-8 shadow-sm border ${
                tier.popular ? 'border-[#A13163]' : 'border-neutral-200'
              }`}
            >
              {tier.popular && (
                <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-[#A13163] text-white mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <p className="text-neutral-600 mb-4">{tier.description}</p>
              <div className="mb-6">
                {tier.price === 'Free' ? (
                  <span className="text-3xl font-bold">Free</span>
                ) : (
                  <>
                    <span className="text-3xl font-bold">${tier.price}</span>
                    <span className="text-neutral-600">/month</span>
                  </>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
                    <Check className="h-4 w-4 text-[#4B269F]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/auth"
                className={`block w-full rounded-lg px-4 py-2 text-center text-sm font-medium ${
                  tier.popular
                    ? 'bg-[#4B269F] text-white hover:bg-[#4B269F]/90'
                    : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Note */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600">
            Have questions about our plans? Check out our{' '}
            <Link href="/faq" className="text-[#4B269F] hover:text-[#4B269F]/90">
              FAQ
            </Link>{' '}
            or{' '}
            <Link href="/contact" className="text-[#4B269F] hover:text-[#4B269F]/90">
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
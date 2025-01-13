"use client";

import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import BrandsCarousel from '@/components/sections/BrandsCarousel';
import ClientTestimonialSection from '@/components/sections/ClientTestimonialSection';
import CreatorTestimonialSection from '@/components/sections/CreatorTestimonialSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import FAQSection from '@/components/sections/FAQSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BrandsCarousel />
      <FeaturesSection />
      <HowItWorksSection />
      <ClientTestimonialSection />
      <CreatorTestimonialSection />
      <FAQSection />
      <NewsletterSection />
      <CTASection />
    </div>
  );
}
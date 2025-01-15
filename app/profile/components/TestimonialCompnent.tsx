"use client";

import { useState } from 'react';
import { X } from "lucide-react";

interface Profile {
  testimonials?: string[];
}

interface TestimonialsSectionProps {
  profile: Profile;
  setProfile: (profile: Profile) => void;
}

export function TestimonialsSection({ profile, setProfile }: TestimonialsSectionProps) {
  const [newTestimonial, setNewTestimonial] = useState('');
  
  const addTestimonial = () => {
    if (newTestimonial && !profile?.testimonials?.includes(newTestimonial)) {
      setProfile({
        ...profile,
        testimonials: [...(profile?.testimonials || []), newTestimonial]
      });
      setNewTestimonial('');
    }
  };

  const removeTestimonial = (testimonialToRemove: string) => {
    setProfile({
      ...profile,
      testimonials: profile.testimonials?.filter(item => item !== testimonialToRemove) || []
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-neutral-700">Testimonials</h2>
      <div className="flex flex-wrap gap-2 mb-2">
        {profile?.testimonials?.map((testimonial, index) => (
          <span key={index} className="inline-flex items-center gap-1 rounded-lg bg-neutral-100 px-3 py-2 text-sm">
            {testimonial}
            <button
              type="button"
              onClick={() => removeTestimonial(testimonial)}
              className="ml-1 text-neutral-400 hover:text-neutral-600"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <textarea
          value={newTestimonial}
          onChange={(e) => setNewTestimonial(e.target.value)}
          className="flex-1 rounded-lg border border-neutral-200 px-4 py-2 text-sm focus:border-[#A13163] focus:outline-none"
          placeholder="Add a testimonial..."
          rows={3}
        />
        <button 
          type="button" 
          onClick={addTestimonial}
          className="h-fit bg-[#4B269F] hover:bg-[#4B269F]/90 rounded-lg px-4 py-2 text-white"
        >
          Add
        </button>
      </div>
    </div>
  );
}
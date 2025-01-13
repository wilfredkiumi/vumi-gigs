"use client";

import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    role: "Creative Director",
    company: "PixelPerfect Studios",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "Finding talented animators used to be a challenge, but Vumi Gigs has transformed our hiring process. The quality of creators and the seamless collaboration tools have helped us complete projects faster than ever.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Production Manager",
    company: "DreamMotion Animation",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    quote: "The level of talent on Vumi Gigs is exceptional. We've built lasting relationships with several creators and the platform's project management tools make collaboration effortless.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Art Director",
    company: "Creative Spark",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    quote: "As someone who regularly needs specialized animation talent, Vumi Gigs has become our go-to platform. The verification process ensures we're working with true professionals.",
    rating: 5
  }
];

export default function ClientTestimonialSection() {
  return (
    <div className="bg-card py-24 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Leading Studios</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from creative directors and studio leads who have found exceptional talent through our platform
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="rounded-lg bg-background p-8 shadow-sm border border-border"
            >
              <div className="flex gap-4 mb-6">
                <div className="relative h-12 w-12 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-muted-foreground">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
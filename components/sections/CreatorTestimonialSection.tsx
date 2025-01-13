"use client";

import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "3D Animator",
    specialty: "Character Animation",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    quote: "Vumi Gigs has been a game-changer for my freelance career. The platform connects me with quality clients and handles all the business aspects so I can focus on creating.",
    rating: 5,
    earnings: "50K+",
    projectsCompleted: 24
  },
  {
    id: 2,
    name: "Lisa Chen",
    role: "Motion Designer",
    specialty: "Motion Graphics",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    quote: "The exposure I've gained through Vumi Gigs has been incredible. I've worked with clients worldwide and built a strong portfolio of high-profile projects.",
    rating: 5,
    earnings: "75K+",
    projectsCompleted: 32
  },
  {
    id: 3,
    name: "David Kim",
    role: "VFX Artist",
    specialty: "Visual Effects",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    quote: "What sets Vumi Gigs apart is the quality of clients and projects. The platform's focus on creative work means I get to work on exciting, challenging projects.",
    rating: 5,
    earnings: "60K+",
    projectsCompleted: 28
  }
];

export default function CreatorTestimonialSection() {
  return (
    <div className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Creator Success Stories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the creators who have built thriving careers through our platform
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="rounded-lg bg-card p-8 shadow-sm border border-border"
            >
              <div className="flex gap-4 mb-6">
                <div className="relative h-16 w-16 flex-shrink-0">
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
                  <p className="text-sm text-muted-foreground">{testimonial.specialty}</p>
                </div>
              </div>
              
              <div className="flex justify-between mb-6 text-sm">
                <div>
                  <div className="font-medium">${testimonial.earnings}</div>
                  <div className="text-muted-foreground">Earnings</div>
                </div>
                <div>
                  <div className="font-medium">{testimonial.projectsCompleted}</div>
                  <div className="text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="text-muted-foreground">Rating</div>
                </div>
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
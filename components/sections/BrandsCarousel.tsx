"use client";

import Image from 'next/image';

const brands = [
  {
    name: "Pixar",
    logo: "https://images.unsplash.com/photo-1640763502425-7668dc1e4023",
  },
  {
    name: "DreamWorks",
    logo: "https://images.unsplash.com/photo-1640763502425-7668dc1e4024",
  },
  {
    name: "Disney Animation",
    logo: "https://images.unsplash.com/photo-1640763502425-7668dc1e4025",
  },
  {
    name: "Sony Pictures Animation",
    logo: "https://images.unsplash.com/photo-1640763502425-7668dc1e4026",
  },
  {
    name: "Warner Bros. Animation",
    logo: "https://images.unsplash.com/photo-1640763502425-7668dc1e4027",
  },
  {
    name: "Netflix Animation",
    logo: "https://images.unsplash.com/photo-1640763502425-7668dc1e4028",
  }
];

export default function BrandsCarousel() {
  return (
    <div className="bg-background py-16 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground text-lg">
            Join the creative professionals working with top animation studios and brands
          </p>
        </div>

        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Infinite Scroll Animation */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll">
              {[...brands, ...brands].map((brand, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center mx-12 min-w-[150px]"
                >
                  <div className="relative h-12 w-32">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
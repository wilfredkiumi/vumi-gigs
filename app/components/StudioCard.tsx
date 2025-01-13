"use client";

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Users, Building } from 'lucide-react';
import type { Studio } from '@/lib/data';

export default function StudioCard({
  id,
  name,
  type,
  location,
  description,
  teamSize,
  specialties,
  branding
}: Studio) {
  return (
    <Link
      href={`/studios/${id}`}
      className="group rounded-lg border border-neutral-200 bg-white p-6 transition-all hover:border-[#A13163]"
    >
      <div className="flex gap-6">
        <div className="relative h-24 w-24 overflow-hidden rounded-lg">
          <Image
            src={branding.logo.main}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="mb-1 font-medium">{name}</h3>
          <p className="mb-2 text-sm text-neutral-600">{type}</p>
          <div className="mb-3 space-y-1">
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <Users className="h-4 w-4" />
              <span>{teamSize} Team Members</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <Building className="h-4 w-4" />
              <span>{specialties.slice(0, 2).join(", ")}</span>
            </div>
          </div>
          <p className="text-sm text-neutral-600 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}
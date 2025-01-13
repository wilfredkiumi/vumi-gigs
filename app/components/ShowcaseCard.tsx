"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Users } from 'lucide-react';

interface ShowcaseCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  price: string;
  image: string;
  description: string;
}

export default function ShowcaseCard({
  id,
  title,
  category,
  date,
  time,
  location,
  price,
  image,
  description
}: ShowcaseCardProps) {
  return (
    <Link 
      href={`/showcases/${id}`}
      className="group overflow-hidden rounded-lg border border-neutral-200 bg-white transition-all hover:border-[#A13163] dark:border-neutral-800 dark:bg-neutral-800 dark:hover:border-[#D14B7A]"
    >
      <div className="relative aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all group-hover:opacity-90"
        />
      </div>
      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-medium dark:text-white">{title}</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{category}</p>
        </div>
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{date} • {time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
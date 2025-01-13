"use client";

import Link from 'next/link';
import Image from 'next/image';
import { slugify } from '@/lib/utils';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  status: 'In Progress' | 'In Development' | 'Completed';
  creator: string;
  views: number;
  image: string;
}

export default function ProjectCard({
  id,
  title,
  category,
  status,
  creator,
  views,
  image
}: ProjectCardProps) {
  const slug = `${id}-${slugify(title)}`;

  return (
    <Link 
      href={`/projects/${slug}`}
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
        <h3 className="mb-2 font-medium dark:text-white">{title}</h3>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          <div className="mb-1">
            <span>{category}</span>
            <span className="mx-2">•</span>
            <span>{creator}</span>
          </div>
          <div>
            <span className="text-[#4B269F] dark:text-[#D14B7A]">{status}</span>
            <span className="mx-2">•</span>
            <span>{views.toLocaleString()} Views</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
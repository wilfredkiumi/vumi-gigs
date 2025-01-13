"use client";

import Link from 'next/link';
import Image from 'next/image';

interface CreatorCardProps {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  projectCount: number;
}

export default function CreatorCard({
  id,
  name,
  role,
  specialty,
  image,
  projectCount
}: CreatorCardProps) {
  return (
    <Link
      href={`/creators/${id}`}
      className="rounded-lg border border-neutral-200 bg-white p-6 transition-all hover:border-[#A13163] dark:border-neutral-800 dark:bg-neutral-800 dark:hover:border-[#D14B7A]"
    >
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium dark:text-white">{name}</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{role}</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{specialty}</p>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">{projectCount} Projects</p>
        </div>
      </div>
    </Link>
  );
}
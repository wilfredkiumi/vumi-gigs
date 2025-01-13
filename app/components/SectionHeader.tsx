"use client";

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface SectionHeaderProps {
  title: string;
  actionLabel: string;
  actionHref: string;
}

export default function SectionHeader({ title, actionLabel, actionHref }: SectionHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-[#A13163] dark:text-[#D14B7A]">{title}</h2>
      <Link 
        href={actionHref}
        className="flex items-center gap-2 text-sm text-neutral-600 hover:text-[#A13163] dark:text-neutral-400 dark:hover:text-[#D14B7A]"
      >
        {actionLabel} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
"use client";

import Link from 'next/link';

const mainNavItems = ['Projects', 'Showcases', 'Creators'];

export default function Navigation() {
  return (
    <nav className="mb-12">
      <ul className="flex flex-wrap justify-center gap-8">
        {mainNavItems.map((link) => (
          <li key={link}>
            <Link 
              href={`/${link.toLowerCase()}`}
              className="text-neutral-600 hover:text-[#A13163]"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
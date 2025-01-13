import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCurrentUser } from '@/lib/auth';

// Add paths that require authentication
const protectedPaths = [
  '/gigs/post',
  '/inbox',
  '/profile',
];

// Add paths that require business accounts
const businessOnlyPaths = [
  '/gigs/post',
];

export async function middleware(request: NextRequest) {
  const user = await getCurrentUser();
  const path = request.nextUrl.pathname;

  // Check if path requires authentication
  if (protectedPaths.some(p => path.startsWith(p)) && !user) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  // Check if path requires business account
  if (businessOnlyPaths.some(p => path.startsWith(p)) && 
      (!user || user.accountType !== 'business')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/gigs/post',
    '/inbox/:path*',
    '/profile/:path*',
  ],
};
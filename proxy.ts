import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static & api
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Root → /vi
  if (pathname === '/') {
    return NextResponse.redirect(
      new URL('/vi', request.url)
    );
  }

  return NextResponse.next();
}

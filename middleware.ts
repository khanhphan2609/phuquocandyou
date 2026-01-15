import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Bỏ qua static & api
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Root → /vn
  if (pathname === '/') {
    return NextResponse.redirect(
      new URL('/vn', request.url)
    );
  }

  return NextResponse.next();
}

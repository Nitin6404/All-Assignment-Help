import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Paths that don't require authentication
const publicPaths = [
  '/',
  '/experts',
  '/review',
  '/services',
  '/api/auth/login',
  '/api/auth/register',
  '/api/csrf',
  '/api/user/login', 
  '/api/user/register', 
];

// Auth paths that should be inaccessible when logged in
const authPaths = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
];

// Protected paths that require authentication
const protectedPaths = [
  '/order',
  '/orders',
  '/profile',
  '/dashboard'
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check for token in both cookie and Authorization header
  const token = request.cookies.get('token')?.value || 
                request.headers.get('Authorization')?.replace('Bearer ', '');

  // Allow access to API routes without token check
  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }
  
  // If logged in and trying to access auth pages, redirect to home
  if (token && authPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Allow access to public paths
  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Check if trying to access protected route
  const isProtectedRoute = protectedPaths.some(path => pathname.startsWith(path));

  // If no token and trying to access protected route, redirect to login
  if (!token && isProtectedRoute) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Configure middleware matching
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
    // Skip public assets
    // '/((?!.*\\.(png|jpg|jpeg|svg|css|js)).*)'
  ],
};

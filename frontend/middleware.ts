// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = ["_next", "favicon.ico", "robots.txt", "locales", "api"];
const locales = ["en", "ar"];
const defaultLocale = "ar";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Skip public assets
  const isPublic = PUBLIC_PATHS.some((path) => pathname.startsWith(`/${path}`));
  if (isPublic) return NextResponse.next();

  // 2. Already has locale in path? Just continue
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) {
    const response = NextResponse.next();
    const localeInPath = pathname.split("/")[1];
    response.cookies.set("NEXT_LOCALE", localeInPath, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
    return response;
  }

  // 3. Root path `/` - redirect to defaultLocale
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    const response = NextResponse.redirect(url);

    // Set cookie
    response.cookies.set("NEXT_LOCALE", defaultLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|api|locales).*)"],
};

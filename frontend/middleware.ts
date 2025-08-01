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

  // 2. Already localized? Just continue
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return NextResponse.next();

  // 3. If path is `/`, redirect with locale
  if (pathname === "/") {
    // Check for NEXT_LOCALE cookie
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
    const finalLocale = locales.includes(cookieLocale || "")
      ? cookieLocale!
      : defaultLocale;

    const url = request.nextUrl.clone();
    url.pathname = `/${finalLocale}`;

    const response = NextResponse.redirect(url);
    response.cookies.set("NEXT_LOCALE", finalLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|api|locales).*)"],
};

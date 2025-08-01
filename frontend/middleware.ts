import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = ["_next", "favicon.ico", "robots.txt", "locales", "api"];
const locales = ["en", "ar"];
const defaultLocale = "ar";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublic = PUBLIC_PATHS.some((path) => pathname.startsWith(`/${path}`));
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  const response = NextResponse.next();

  if (!isPublic && !hasLocale && pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }

  // ✨ Set 'lang' cookie based on the pathname
  const detectedLocale = locales.find((locale) =>
    pathname.startsWith(`/${locale}`)
  );
  if (detectedLocale) {
    response.cookies.set("lang", detectedLocale);
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|api|locales).*)"],
};

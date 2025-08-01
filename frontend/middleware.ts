// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const locale = request.nextUrl.pathname.split("/")[1] || "en";

  const response = NextResponse.next();
  response.cookies.set("lang", locale);
  return response;
}

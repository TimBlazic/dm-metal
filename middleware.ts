import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const defaultLocale = "sl";
const locales = ["sl", "en", "de"];

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /about, /contact)
  const pathname = request.nextUrl.pathname;

  // Check if the pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Get the preferred locale from cookie or header
  const preferredLocale =
    request.cookies.get("preferredLanguage")?.value ||
    request.headers.get("accept-language")?.split(",")?.[0]?.split("-")?.[0] ||
    defaultLocale;

  // Validate locale
  const locale = locales.includes(preferredLocale)
    ? preferredLocale
    : defaultLocale;

  // Redirect to the same pathname with locale prefix
  return NextResponse.redirect(
    new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

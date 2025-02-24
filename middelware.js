
import { NextResponse } from "next/server";

// const checkExpired = (date) => {
//   const currentDate = new Date();
//   const expireDate = new Date(date);
//   if (isNaN(expireDate.getTime())) return false;

//   return currentDate.getTime() < expireDate.getTime();
// };

export function middleware(request) {
  //Auth
  const pathname = request.nextUrl.pathname;

  if (
    [
      "/manifest.json",
      "/favicon.ico",

      "/logo.png",
      "/logo.ico",
      "/favicon.ico",
      "user.svg",
    ].includes(pathname) ||
    pathname.includes("images")
  )
    return;

  // const pathnameIsMissingLocale = i18n.locales.every(
  //   (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  // );

  // If there's no role or the role is not rootAdmin, redirect to sign in page

  return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)/", "/"],
};

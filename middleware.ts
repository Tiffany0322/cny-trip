import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // 1. 公開路徑：登入頁、API 等
    if (
        pathname.startsWith("/login") ||
        pathname.startsWith("/api/login") ||
        pathname.startsWith("/_next") ||
        pathname.startsWith("/favicon.ico") ||
        pathname.includes(".") // 靜態檔案通常有副檔名
    ) {
        return NextResponse.next();
    }

    // 2. 檢查 Cookie
    const hasAuth = req.cookies.has("trip_auth");
    if (!hasAuth) {
        const url = req.nextUrl.clone();
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};

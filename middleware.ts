import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const adminPassword = process.env.ADMIN_PASSWORD

  if (request.nextUrl.pathname.startsWith("/admin")) {
    const authHeader = request.headers.get("authorization")

    if (authHeader) {
      const authValue = authHeader.split(" ")[1]
      const [user, pwd] = atob(authValue).split(":")

      if (pwd === adminPassword) {
        return NextResponse.next()
      }
    }

    return new NextResponse("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/admin/:path*",
}


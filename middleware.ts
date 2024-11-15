import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  if (token) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", req.url));
  }
  
}

export const config = {
  matcher: ["/c/:path*"],
};

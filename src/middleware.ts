import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.hostname = "something";
  return NextResponse.redirect(url, { status:301 });
}
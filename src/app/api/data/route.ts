import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: `Random data: ${Math.random().toString(36).substring(7)}`,
    serverTime: new Date().toLocaleString(),
  });
}

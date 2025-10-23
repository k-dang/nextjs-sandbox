import { NextResponse } from 'next/server';

export async function GET() {
  console.log("API Route: Fetching data...");
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json({
    data: `Random data: ${Math.random().toString(36).substring(7)}`,
    serverTime: new Date().toLocaleString(),
  });
}

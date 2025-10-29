import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { isAuthenticated } = await auth();
  if (!isAuthenticated) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const user = await currentUser();
  return NextResponse.json({ user: user }, { status: 200 });
}

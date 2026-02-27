import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { isAuthenticated } = await auth();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const payload = {
    user: {
      firstName: user.firstName ?? null,
      lastName: user.lastName ?? null,
      primaryEmail: user.emailAddresses?.[0]?.emailAddress ?? null,
    },
  };

  return NextResponse.json(payload, { status: 200 });
}

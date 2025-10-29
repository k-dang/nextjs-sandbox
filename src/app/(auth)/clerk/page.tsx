import { SignedIn } from "@clerk/nextjs";

import { auth, currentUser } from "@clerk/nextjs/server";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { UserData } from "@/components/user-data-client";
import { InlineCode } from "@/components/typography/inline-code";
import { UserDataButton } from "@/components/user-data-button";

export default async function Page() {
  const { isAuthenticated, getToken } = await auth();

  if (!isAuthenticated) {
    return (
      <div>
        Sign in to view this page <Link href="/clerk/sign-in">Sign in</Link>
      </div>
    );
  }

  const user = await currentUser();
  const token = await getToken();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">Clerk</h1>
      <p>
        The page is protected by Clerk and only accessible to signed in users.
      </p>
      <h2 className="text-lg">Signed In User Details</h2>
      <div className="flex items-center gap-2">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <p>
          {user?.fullName} ({user?.emailAddresses[0].emailAddress})
        </p>
      </div>
      <p>Sign up date: {new Date(user?.createdAt ?? 0).toLocaleDateString()}</p>
      <p className="break-all">Token: {token}</p>
      <p>
        The follow section is user data returned from a client{" "}
        <InlineCode>useUser</InlineCode> hook
      </p>
      <UserData />
      <p>
        The next section is making a request to the /api/user route that is
        protected by Clerk
      </p>
      <div className="max-w-sm">
        <UserDataButton />
      </div>
    </div>
  );
}

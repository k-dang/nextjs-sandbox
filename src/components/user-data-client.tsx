"use client";

import { useUser } from "@clerk/nextjs";

export function UserData() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Sign in to view this page</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      <p>
        {user?.fullName} ({user?.emailAddresses[0].emailAddress})
      </p>
    </div>
  );
}

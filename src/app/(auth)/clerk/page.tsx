import { auth, currentUser } from "@clerk/nextjs/server";
import { ClerkGate } from "./clerk-gate";
import { SignedInContent } from "./signed-in-content";

export default async function Page() {
  const { isAuthenticated, getToken } = await auth();

  if (!isAuthenticated) {
    return <ClerkGate />;
  }

  const user = await currentUser();
  const token = await getToken();

  return (
    <SignedInContent
      fullName={user?.fullName ?? null}
      email={user?.emailAddresses[0].emailAddress ?? ""}
      signUpDate={new Date(user?.createdAt ?? 0).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
      token={token}
      imageUrl={user?.imageUrl ?? ""}
    />
  );
}

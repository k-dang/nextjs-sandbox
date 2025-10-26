import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">Clerk</h1>
      <SignedOut>
        <h2>Sign In or Sign Up</h2>
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
        <SignUpButton>
          <Button>Sign Up</Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <h2>You are signed in as</h2>
        <UserButton />
      </SignedIn>
    </div>
  );
}

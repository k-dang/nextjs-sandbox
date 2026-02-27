"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

type UserPayload = {
  firstName: string | null;
  lastName: string | null;
  primaryEmail: string | null;
};

export function UserDataButton() {
  const [userData, setUserData] = useState<UserPayload | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/user");
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong");
        setUserData(null);
        return;
      }

      setUserData(data.user);
    } catch {
      setError("Failed to fetch user data");
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  const displayName = [userData?.firstName, userData?.lastName]
    .filter(Boolean)
    .join(" ")
    .trim() || "—";

  return (
    <div className="flex flex-col gap-2">
      <Button
        variant="outline"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? "Loading…" : "Get User Data"}
      </Button>
      {error && <p className="text-destructive text-sm">{error}</p>}
      {userData && !error && (
        <p>
          User Data: {displayName}
          {userData.primaryEmail && ` (${userData.primaryEmail})`}
        </p>
      )}
    </div>
  );
}

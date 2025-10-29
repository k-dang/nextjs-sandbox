"use client";

import { Button } from "@/components/ui/button";
import { User } from "@clerk/nextjs/server";
import { useState } from "react";

export function UserDataButton() {
  const [userData, setUserData] = useState<User | null>(null);

  const handleClick = () => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.user);
        setUserData(data.user);
      });
  };

  return (
    <div className="flex flex-col gap-2">
      {userData && (
        <p>
          User Data: {userData.firstName}
          {userData.lastName} ({userData.emailAddresses?.[0].emailAddress})
        </p>
      )}
      <Button variant="outline" onClick={handleClick}>
        Get User Data
      </Button>
    </div>
  );
}

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearchInputProps {
  paramName?: string;
}

export function SearchInput({ paramName = "term" }: SearchInputProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get(paramName) || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (value.trim()) {
      const params = new URLSearchParams(searchParams.toString());
      params.set(paramName, value.trim());

      router.push(`?${params.toString()}`);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(paramName);

      router.push(`?${params.toString()}`);
    }
  };

  const handleClear = () => {
    setValue("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete(paramName);
    router.push(`?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm items-center gap-2 relative"
    >
      <Search className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="pl-8"
      />
      <Button type="submit" variant="outline">
        Search
      </Button>
      <Button type="button" variant="outline" onClick={handleClear}>
        Clear
      </Button>
    </form>
  );
}

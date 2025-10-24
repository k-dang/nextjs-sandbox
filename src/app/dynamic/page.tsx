import { DataCard } from "@/components/data-card";
import PokemonGridCopy from "@/components/pokemon-card-copy";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-2xl">Dynamic Rendering</h1>
      <p>
        This page features dynamic rendering, meaning the content is re-rendered
        on each request. Content will be different on each request.
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <PokemonGridCopy />
        <DataCard />
      </Suspense>
    </div>
  );
}

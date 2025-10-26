import PokemonList from "@/components/pokemon-list";
import { Spinner } from "@/components/ui/spinner";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">Dynamic Rendering</h1>
      <p>
        This page features dynamic rendering, meaning the content is re-rendered
        on each request. Content will be different on each request.
      </p>
      <div className="flex justify-center max-w-2xl mx-auto">
        <Suspense fallback={<Spinner />}>
          <PokemonList />
        </Suspense>
      </div>
    </div>
  );
}

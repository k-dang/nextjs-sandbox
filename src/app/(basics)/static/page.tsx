import { cacheLife } from "next/cache";
import PokemonList from "@/components/pokemon-list";

export default async function Page() {
  "use cache";
  cacheLife("max");

  return (
    <div className="flex flex-col gap-4 max-w-2xl mx-auto">
      <h1 className="text-2xl">Static Rendering</h1>
      <p>
        This page features cached content, the content is generated once and
        then cached. This means the content will be the same on each request
        while the page is cached.
      </p>
      <PokemonList />
    </div>
  );
}

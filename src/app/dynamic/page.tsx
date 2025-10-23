import DataCard from "@/components/data-card";
import PokemonCard from "@/components/pokemon-card";
import { getRandomPokemon } from "@/db";

export default async function Page() {
  const pokemon = await getRandomPokemon(12);
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-2xl">Dynamic Rendering</h1>
      <p>
        This page features dynamic rendering, meaning the content is re-rendered
        on each request.
      </p>
      <div className="grid grid-cols-3 gap-4">
        {pokemon.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>
      <DataCard />
    </div>
  );
}

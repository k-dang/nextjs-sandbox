import { getRandomPokemon } from "@/db";
import PokemonCard from "./pokemon-card";
import { Skeleton } from "@/components/ui/skeleton";

export default async function PokemonList() {
  const pokemon = await getRandomPokemon(12);

  return (
    <div className="grid grid-cols-6 gap-4">
      {pokemon.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          likes={pokemon.likes}
          types={pokemon.types}
        />
      ))}
    </div>
  );
}

export function PokemonListSkeleton() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <Skeleton key={index} className="h-[140px] w-[124px]" />
      ))}
    </div>
  );
}

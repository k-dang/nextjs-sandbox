import { getRandomPokemon } from "@/db";
import { Pokemon } from "@/db/schema";
import Image from "next/image";

export default async function PokemonGrid() {
  const pokemon = await getRandomPokemon(12);

  return (
    <div className="grid grid-cols-3 gap-4">
      {pokemon.map((p: Pokemon) => (
        <div
          key={p.id}
          className="bg-muted/50 rounded-xl p-4 flex flex-col items-center justify-center"
        >
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
            alt={p.name}
            width={46}
            height={46}
            unoptimized
          />
          <p className="text-sm text-muted-foreground">{p.name}</p>
        </div>
      ))}
    </div>
  );
}

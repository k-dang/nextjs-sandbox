import { Pokemon } from "@/db/schema";
import Image from "next/image";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="bg-muted/50 rounded-xl p-4 flex flex-col items-center justify-center">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
        width={46}
        height={46}
      />
      <p>{pokemon.name}</p>
    </div>
  );
}

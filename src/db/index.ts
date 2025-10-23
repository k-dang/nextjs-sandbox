import { drizzle } from "drizzle-orm/neon-http";
import { sql } from "drizzle-orm";
import { pokemonTable } from "./schema";

const db = drizzle(process.env.DATABASE_URL!);

export async function getRandomPokemon(limit = 24) {
  const pokemon = await db
    .select()
    .from(pokemonTable)
    .orderBy(sql`RANDOM()`)
    .limit(limit);
  return pokemon;
}

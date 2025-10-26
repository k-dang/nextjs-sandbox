import { drizzle } from "drizzle-orm/neon-http";
import { pokemonTable, Post, postsTable } from "@/db/schema";
import { sql } from "drizzle-orm";

const db = drizzle(process.env.DATABASE_URL!);

export async function getRandomPokemon(limit = 24) {
  const pokemon = await db
    .select()
    .from(pokemonTable)
    .orderBy(sql`RANDOM()`)
    .limit(limit);
  return pokemon;
}

export async function getPosts() {
  const posts = await db.select().from(postsTable);
  return posts;
}

export async function addPost(post: Omit<Post, "id" | "likes">) {
  const newPost = await db
    .insert(postsTable)
    .values({ title: post.title })
    .returning();
  return newPost;
}

export async function clearPosts() {
  await db.delete(postsTable);
}

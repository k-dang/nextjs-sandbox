import {
  uniqueIndex,
  integer,
  pgTable,
  text,
  serial,
} from "drizzle-orm/pg-core";

export const pokemonTable = pgTable(
  "pokemon",
  {
    id: integer().notNull().primaryKey(),
    name: text().notNull(),
    likes: integer().notNull().default(0),
    types: text().array().notNull().default([]),
  },
  (table) => [uniqueIndex("name_idx").on(table.name)]
);

export type Pokemon = typeof pokemonTable.$inferSelect;

export const postsTable = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text().notNull(),
  likes: integer().default(0),
});

export type Post = typeof postsTable.$inferSelect;

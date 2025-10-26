import {
  addPostWithDefaults,
  addPostExplicitDefaults,
  addPostWithSqlDefaults,
  addPokemonWithDefaults,
  addPokemonExplicitDefaults,
  addPokemonWithSqlDefaults
} from "@/db";

/**
 * Examples of how to insert default values with Drizzle ORM
 */
export async function demonstrateDefaultInserts() {
  console.log("=== Drizzle Default Values Examples ===\n");

  // Example 1: Insert post with database defaults (omitting fields with defaults)
  try {
    const post1 = await addPostWithDefaults({
      title: "My First Post with Defaults"
    });
    console.log("✓ Post inserted with database defaults:", post1);
  } catch (error) {
    console.error("✗ Error inserting post with defaults:", error);
  }

  // Example 2: Insert post with explicit defaults
  try {
    const post2 = await addPostExplicitDefaults({
      title: "My Second Post with Explicit Defaults"
    });
    console.log("✓ Post inserted with explicit defaults:", post2);
  } catch (error) {
    console.error("✗ Error inserting post with explicit defaults:", error);
  }

  // Example 3: Insert post with SQL DEFAULT
  try {
    const post3 = await addPostWithSqlDefaults({
      title: "My Third Post with SQL Defaults"
    });
    console.log("✓ Post inserted with SQL defaults:", post3);
  } catch (error) {
    console.error("✗ Error inserting post with SQL defaults:", error);
  }

  // Example 4: Insert Pokemon with database defaults
  try {
    const pokemon1 = await addPokemonWithDefaults({
      id: 1,
      name: "Pikachu"
    });
    console.log("✓ Pokemon inserted with database defaults:", pokemon1);
  } catch (error) {
    console.error("✗ Error inserting Pokemon with defaults:", error);
  }

  // Example 5: Insert Pokemon with explicit defaults
  try {
    const pokemon2 = await addPokemonExplicitDefaults({
      id: 2,
      name: "Charizard"
    });
    console.log("✓ Pokemon inserted with explicit defaults:", pokemon2);
  } catch (error) {
    console.error("✗ Error inserting Pokemon with explicit defaults:", error);
  }

  // Example 6: Insert Pokemon with SQL defaults
  try {
    const pokemon3 = await addPokemonWithSqlDefaults({
      id: 3,
      name: "Blastoise"
    });
    console.log("✓ Pokemon inserted with SQL defaults:", pokemon3);
  } catch (error) {
    console.error("✗ Error inserting Pokemon with SQL defaults:", error);
  }
}

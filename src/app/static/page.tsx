import { DataCardStatic } from "@/components/data-card";
import PokemonGrid from "@/components/pokemon-card";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-2xl">Static Rendering</h1>
      <p>
        This page queries the database for 12 random Pokemon and displays them.
        Content is rendered on the server and is cached to serve the same
        results for each request.
      </p>
      <PokemonGrid />
      <DataCardStatic />
    </div>
  );
}

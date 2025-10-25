import { DataCardStatic } from "@/components/data-card";
import { cacheLife } from "next/cache";

export default async function Page() {
  "use cache";
  cacheLife("max");

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-2xl">Static Rendering</h1>
      <DataCardStatic />
    </div>
  );
}

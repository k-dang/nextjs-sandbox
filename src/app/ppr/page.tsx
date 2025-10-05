import { Suspense } from "react";
import DataCard from "@/components/ppr-card";

export const experimental_ppr = true;

export default async function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-2xl">Partial Prerendering</h1>
      <p>
        Current running theory is that adding a suspense boundary around a
        component will cause it to be rendered dynamically.
      </p>
      <Suspense fallback={<Skeleton />}>
        <DataCard />
      </Suspense>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </div>
  );
}

function Skeleton() {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-2">
      <div className="bg-muted/50 aspect-video rounded-xl animate-pulse" />
      <div className="bg-muted/50 aspect-video rounded-xl animate-pulse" />
    </div>
  );
}

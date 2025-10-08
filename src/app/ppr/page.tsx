import { Suspense } from "react";
import DataCard from "@/components/data-card";
import { Skeleton } from "@/components/ui/skeleton";

export const experimental_ppr = true;

export default async function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-2xl">Partial Prerendering</h1>
      <p>
        Current running theory is that adding a suspense boundary around a
        component will cause it to be rendered dynamically. Is there an issue
        with PPR?
      </p>
      <p>DataCard should always be dynamic data now</p>
      <Suspense fallback={<Skeleton className="h-24" />}>
        <DataCard />
      </Suspense>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </div>
  );
}

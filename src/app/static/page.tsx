import { DataCardStatic } from "@/components/data-card";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-2xl">Static</h1>
      <p>
        Is the content from DataCard rendered on the server and is it gonna stay
        static?
      </p>
      <DataCardStatic />
    </div>
  );
}

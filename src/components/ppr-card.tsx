import { getData } from "@/lib/data";

export default async function DataCard() {
  const { data, serverTime } = await getData();
  return (
    <div className="bg-muted/50 rounded-xl p-4">
      <p>{data}</p>
      <p>{serverTime}</p>
    </div>
  );
}

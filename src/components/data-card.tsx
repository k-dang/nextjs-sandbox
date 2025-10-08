import { getData } from "@/lib/data";
import { headers } from "next/headers";

export default async function DataCard() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent");

  const { data, serverTime } = await getData();

  return (
    <div className="bg-muted/50 rounded-xl p-4">
      <p>{data}</p>
      <p>{serverTime}</p>
      <p>{userAgent}</p>
    </div>
  );
}

export async function DataCardStatic() {
  const { data, serverTime } = await getData();

  return (
    <div className="bg-muted/50 rounded-xl p-4">
      <p>{data}</p>
      <p>{serverTime}</p>
    </div>
  );
}

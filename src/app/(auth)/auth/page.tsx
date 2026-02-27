import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">Auth</h1>
      <p>These set of pages are used to sandbox different auth providers.</p>
      <ul className="list-disc list-inside">
        <li>
          <Link href="/clerk">Clerk</Link>
        </li>
      </ul>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">Sandbox</h1>
      <p>This is a sandbox for testing and learning Next.js features.</p>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </div>
  );
}

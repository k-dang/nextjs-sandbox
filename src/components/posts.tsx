import { getPosts } from "@/db";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <ul className="ml-6 list-disc space-y-2">
      {posts.map((post) => (
        <li key={post.id} className="text-sm text-muted-foreground">{`${post.id}: ${post.title}`}</li>
      ))}
    </ul>
  );
}

"use server";

import { addPost, clearPosts } from "@/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const CreatePost = z.object({
  title: z.string().min(1),
});

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

export async function createPost(prevState: State, formData: FormData) {
  const parsed = CreatePost.safeParse({
    title: formData.get("title"),
  });

  if (!parsed.success) {
    return {
      errors: z.flattenError(parsed.error).fieldErrors,
      message: parsed.error.message,
    };
  }

  const { title } = parsed.data;

  await addPost({ title });

  revalidatePath("/server-actions");

  return { message: "Post created successfully" };
}

export async function deleteAllPosts() {
  await clearPosts();
  revalidatePath("/server-actions");
  return { message: "Posts cleared successfully" };
}
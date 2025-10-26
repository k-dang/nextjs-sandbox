"use client";

import { createPost, deleteAllPosts, State } from "@/lib/actions";
import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export function Form() {
  const initialState: State = { message: null, errors: {} };
  const [state, action, pending] = useActionState(createPost, initialState);

  return (
    <div className="w-full space-y-4">
      <div className="flex items-start gap-2">
        <form action={action} className="flex-1 flex items-start gap-2">
          <div className="flex-1">
            <Input
              type="text"
              name="title"
              aria-invalid={state.errors?.title ? "true" : undefined}
              placeholder="Enter post title"
            />
          </div>

          <Button type="submit" disabled={pending} className="w-24">
            {pending && <Spinner />}
            Create
          </Button>
        </form>

        <Button
          type="button"
          onClick={deleteAllPosts}
          disabled={pending}
          className="w-24"
        >
          {pending && <Spinner />}
          Delete All
        </Button>
      </div>

      {state.message && (
        <div
          className={`text-sm p-3 rounded-md ${
            state.errors && Object.keys(state.errors).length > 0
              ? "bg-destructive/15 text-destructive border border-destructive/20"
              : "bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
          }`}
        >
          {state.message}
        </div>
      )}

      {state.errors?.title && (
        <div className="text-sm text-destructive">
          {state.errors.title.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}
    </div>
  );
}

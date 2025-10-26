import { Form } from "@/components/form";
import Posts from "@/components/posts";
import { InlineCode } from "@/components/typography/inline-code";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">Server Actions</h1>
      <p>
        This page shows how to update data using server actions via the{" "}
        <InlineCode>useActionState</InlineCode> hook on a form.
      </p>
      <p>
        After submitting the form, the new post will be displayed without
        needing to refresh the page.
      </p>
      <Form />
      <div className="space-y-1">
        <h2 className="text-lg">Below are a list of posts:</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <Posts />
        </Suspense>
      </div>
    </div>
  );
}

import { InlineCode } from "@/components/typography/inline-code";
import { SearchInput } from "@/components/search-input";

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ term?: string }>;
}) {
  const term = (await searchParams)?.term;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl">Search Params</h1>
      <p>
        This page is a server component that uses search params via the{" "}
        <InlineCode>searchParams</InlineCode> prop.
      </p>

      <p>
        Using <InlineCode>searchParams</InlineCode> opts the page into dynamic
        rendering
      </p>

      <div>
        <h2 className="text-lg font-semibold mb-3">Try the Search Input</h2>
        <SearchInput />
      </div>

      {term && (
        <div className="p-4 bg-muted rounded-lg border">
          <h3 className="font-medium mb-2">Search Results:</h3>
          <p className="text-sm text-muted-foreground mb-2">
            You searched for: <InlineCode>{term}</InlineCode>
          </p>
          <p className="text-sm">
            This demonstrates how the search input component adds query
            parameters to the URL and updates the page content dynamically.
          </p>
        </div>
      )}

      {!term && (
        <div className="p-4 bg-muted rounded-lg border">
          <p className="text-sm text-muted-foreground">
            Enter a search term above to see how it gets added as a query
            parameter to the URL.
          </p>
        </div>
      )}
    </div>
  );
}

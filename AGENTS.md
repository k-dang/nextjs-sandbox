# AGENTS.md

## Commands

- `pnpm run dev` - Start development server
- `pnpm run build` - Build production bundle
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint on all files
- `pnpm run db:generate` - Generate Drizzle migrations
- `pnpm run db:migrate` - Apply database migrations
- `pnpm run db:push` - Push schema changes to database

## Code Style Guidelines

### TypeScript
- Strict mode enabled
- Use `import type` for type-only imports: `import type { Metadata } from "next"`
- Use `Readonly<>` for component props: `Readonly<{ children: React.ReactNode }>`
- Use `React.ComponentProps<>` to extend native element props
- Use `z` (Zod) for schema validation with explicit `safeParse()` and error flattening
- Infer types from Drizzle schemas: `type Pokemon = typeof pokemonTable.$inferSelect`

### Naming Conventions
- Components: PascalCase (`Button`, `PokemonCard`)
- Functions: camelCase (`createPost`, `getData`)
- Constants: UPPER_SNAKE_CASE (`MOBILE_BREAKPOINT`)
- Types/Interfaces: PascalCase (`Pokemon`, `Post`)
- Files: kebab-case (`pokemon-card.tsx`, `use-mobile.ts`)
- Database tables: camelCase with `Table` suffix (`pokemonTable`, `postsTable`)

### Components
- Functional components with explicit type annotations
- Use `forwardRef` for components that need ref forwarding
- Server Actions must start with `"use server"` directive
- Define State type explicitly: `export type State = { errors?: {...}; message?: string | null }`
- Use Next.js `<Image>` with `unoptimized` for external URLs

### UI Components
- Use shadcn/ui patterns with `class-variance-authority` for variants
- Use `cn()` utility from `@/lib/utils` for merging Tailwind classes
- Support `asChild` prop for Radix Slot composition
- Define `VariantProps` types for component variants

### API Routes
- Use `NextResponse.json()` for responses
- Named export for HTTP methods: `export async function GET()`

### Error Handling
- Use Zod for form validation with `safeParse()` pattern
- Flatten errors: `z.flattenError(parsed.error).fieldErrors`
- Return error objects with `{ errors, message }` structure
- Use `revalidatePath()` after mutations
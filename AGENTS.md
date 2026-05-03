# AGENTS.md

## Commands
- `npm run dev` - Start dev server on port 3000
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm test` - Run all tests with vitest
- `npm test -- -t "test name"` - Run a single test by name
- `npm test -- <path>` - Run tests in a specific file

## Code Style
- **Language**: TypeScript (strict mode, ES2022 target, ESNext modules)
- **Imports**: Use `#/*` or `@/*` path aliases for `src/*`; `verbatimModuleSyntax` enabled
- **Formatting**: 2-space indent, single quotes for JSX attributes, trailing commas
- **Components**: PascalCase function components (`function About() {}`)
- **Routing**: TanStack file-based routing via `createFileRoute` with exported `Route`
- **Styling**: Tailwind CSS v4 with `clsx`/`tailwind-merge` for conditional classes
- **Types**: Strict TypeScript - no unused locals/parameters, no fallthrough switches
- **Error handling**: No lint rules configured; follow React/TanStack conventions
- **Testing**: Vitest + Testing Library (no tests exist yet)

## Rules
- **Design**: Stick to the color scheme and fonts in `src/styles.css` — never change them.
- **Ambiguity**: Clarify with me before proceeding on any ambiguous task. Only invent details if I say "go ham".

## Notes
- No ESLint or Prettier configured
- React 19, TanStack Start/Router, Radix UI primitives
- Content collections via `@content-collections` for typed content

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Vite HMR)
npm run build    # Production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

Single-page React portfolio with no routing and no state management library. The app is composed of static sections rendered in `App.jsx`. Project data is a hardcoded array inside `Projects.jsx` — no external data source.

## Stack

- **React 19** with Vite 7 (`@vitejs/plugin-react`)
- **Tailwind CSS v4** via `@tailwindcss/vite` — configured as a Vite plugin, no `tailwind.config.js` needed
- JSX (no TypeScript)
- ESLint 9 flat config (`eslint.config.js`)

## Styling conventions

**Use Tailwind utility classes exclusively.** Do not create new `.css` files or use inline `style` props.

Custom design tokens (colors, fonts) are declared in `src/index.css` inside the `@theme {}` block using CSS custom properties. Add new tokens there rather than hardcoding values in components.

```css
/* src/index.css */
@import "tailwindcss";

@theme {
  --color-background: #242424;
  --font-sans: system-ui, Avenir, Helvetica, Arial, sans-serif;
}
```

Tokens defined in `@theme` are automatically available as Tailwind classes (e.g. `bg-background`, `font-sans`).

## React patterns

Write components at a professional level:

- **Functional components only**, with named exports.
- Prefer **composition over prop drilling** — break complex UI into focused sub-components.
- Keep components **presentational by default**; lift state only when genuinely shared.
- Use `clsx` or template literals for conditional class composition if needed.
- Co-locate component logic with the component file; avoid global state unless necessary.
- Prop types should be documented inline (JSDoc or propTypes) when a component is non-trivial.

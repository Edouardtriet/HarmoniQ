# HarmoniQ - Project Guidelines

## Brand Color

The primary brand color is `#00A980` (green). It is defined as `--primary` in `src/styles/globals.css` and `src/index.css`.

- Use `var(--primary)` in CSS
- Use Tailwind `primary` classes in components (e.g. `text-primary`, `bg-primary`, `bg-primary/10`, `border-primary/20`)
- Use the `.gradient-text` class for styled headings — it applies flat `var(--primary)`, no gradient
- Never hardcode green hex values in components — always use `primary`
- No gradients for the brand color — always flat/solid

## Project Structure

- `src/index.css` — Compiled Tailwind v4 CSS (the actual stylesheet imported by the app)
- `src/styles/globals.css` — Source CSS with theme variables and custom classes
- `src/components/` — React components

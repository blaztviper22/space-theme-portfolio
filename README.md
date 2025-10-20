<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      # space-theme-portfolio

      A space-themed portfolio built with React, TypeScript and Vite.

      This repository started from the official Vite React + TypeScript template. The README below includes project-specific notes and a short reference to the original template guidance.

      Highlights
      - React + TypeScript + Vite starter
      - Space-themed portfolio UI and components

      React compiler

      The React Compiler is not enabled by default because it can affect dev and build performance. To enable it, see: https://react.dev/learn/react-compiler/installation

      # space-theme-portfolio

      A space-themed portfolio built with React, TypeScript and Vite.

      This repository started from the official Vite React + TypeScript template. The README below includes project-specific notes and a short reference to the original template guidance.

      Highlights
      - React + TypeScript + Vite starter
      - Space-themed portfolio UI and components

      React compiler

      The React Compiler is not enabled by default because it can affect dev and build performance. To enable it, see: https://react.dev/learn/react-compiler/installation

      ESLint configuration notes

      For production apps we recommend enabling type-aware lint rules. Example (excerpt):

      ```js
      export default defineConfig([
        globalIgnores(['dist']),
        {
          files: ['**/*.{ts,tsx}'],
          extends: [
            // Remove tseslint.configs.recommended and replace with this
            tseslint.configs.recommendedTypeChecked,
            // Or use stricter rules
            tseslint.configs.strictTypeChecked,
            // Optional stylistic rules
            tseslint.configs.stylisticTypeChecked,
          ],
          languageOptions: {
            parserOptions: {
              project: ['./tsconfig.node.json', './tsconfig.app.json'],
              tsconfigRootDir: import.meta.dirname,
            },
          },
        },
      ])
      ```

      You can also add React-specific lint rules with plugins like `eslint-plugin-react-x` and `eslint-plugin-react-dom`.

      Getting started

      1. Install dependencies: `npm install` or `pnpm install`.
      2. Start dev server: `npm run dev`.
      3. Build for production: `npm run build`.

      Files of interest
      - `src/` — app source
      - `src/components` — UI components (Navbar, ThemeToggle, StarBackground, etc.)
      - `vite.config.ts`, `tsconfig.json`, `package.json`

      License

      See `package.json` for license information or add one if needed.

      ---

      Original template notes (kept for reference)

      This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

      Currently, two official plugins are available:

      - `@vitejs/plugin-react` uses Babel (or oxc when used in rolldown-vite) for Fast Refresh
      - `@vitejs/plugin-react-swc` uses SWC for Fast Refresh

      For further development and configuration, consult Vite and React documentation.

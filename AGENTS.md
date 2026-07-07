# Repository Guidelines

## Project Structure & Module Organization

This is a Vue 3, Vite, and TypeScript application. The app entry point is `src/main.ts`, and the root component is `src/App.vue`. Route definitions live in `src/router/`, with `src/router/index.ts` currently configuring the router. Pinia stores belong in `src/stores/`; name store files by domain, such as `user.ts` or `settings.ts`. Static assets that must be served as-is go in `public/`. Build and tooling configuration is kept at the repository root, including `vite.config.ts`, `tsconfig*.json`, and `eslint.config.ts`.

## Build, Test, and Development Commands

- `npm install`: install project dependencies.
- `npm run dev`: start the Vite development server with hot reload.
- `npm run build`: run Vue type checking and create a production build.
- `npm run build-only`: build with Vite only.
- `npm run type-check`: run `vue-tsc --build` for TypeScript and `.vue` type checks.
- `npm run lint`: run oxlint and ESLint with automatic fixes.
- `npm run format`: format files under `src/` with `oxfmt`.
- `npm run preview`: serve the production build locally for verification.

Use Node `^22.18.0` or `>=24.12.0`, as declared in `package.json`.

## Coding Style & Naming Conventions

Use Vue single-file components for UI and TypeScript for application logic. Keep component names in PascalCase, store files in camelCase or domain-style lowercase, and exported composables with the `useXxx` pattern. Prefer explicit route names and path constants when routes grow. Let the configured tools enforce style: run `npm run lint` and `npm run format` before submitting changes.

## Testing Guidelines

No test framework is currently configured. When adding tests, keep them close to the relevant feature, such as `src/components/__tests__/Example.spec.ts`, and add a matching `npm test` script. At minimum, run `npm run type-check` and `npm run build` before opening a pull request.

## Commit & Pull Request Guidelines

This directory does not currently expose Git history, so use clear imperative commit messages such as `Add landing page router` or `Fix store initialization`. Pull requests should include a short description, validation steps, linked issues when applicable, and screenshots for visible UI changes.

## Security & Configuration Tips

Do not commit secrets or local credentials. Keep environment-specific values in local `.env*` files and document required variables in the pull request or README when introducing new configuration.

# GitHub Pages Deployment Guide

## Overview

This project is a React + Vite static site deployed to GitHub Pages via the `gh-pages` package.

**Live URL:** https://mkirzon.github.io/accent-dental-care/

---

## How It Works

The deployment pipeline consists of three key configurations:

### 1. Vite Base Path (`vite.config.ts`)

```ts
export default defineConfig({
  base: '/accent-dental-care/',
  plugins: [react()],
})
```

The `base` setting tells Vite that the site will be served from the `/accent-dental-care/` subpath (required for repository-based GitHub Pages, as opposed to the `username.github.io` site).

### 2. Hash Routing (`src/App.tsx`)

```tsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
```

GitHub Pages is a static hosting service and cannot handle client-side route fallbacks. Using `HashRouter` instead of `BrowserRouter` ensures all routes work by encoding the path after the `#` (e.g., `/#/about`), which the server never sees — the JS handles all routing.

### 3. Deploy Scripts (`package.json`)

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

- **`predeploy`** — Runs automatically before `deploy`. It builds the production bundle into the `dist/` folder.
- **`deploy`** — Pushes the contents of `dist/` to the `gh-pages` branch on GitHub, which triggers the GitHub Pages deployment.

---

## Deployment Steps

To build and deploy the site:

```bash
# Step 1: Install dependencies (first time only)
npm install

# Step 2: Build and deploy in one command
npm run deploy
```

That's it. The `predeploy` script runs the build automatically, then `gh-pages` publishes the output.

### Step-by-step breakdown

| Step | Command | What it does |
|------|---------|-------------|
| 1 | `npm run build` | Runs TypeScript type checking (`tsc -b`) then Vite production build (`vite build`) → outputs to `dist/` |
| 2 | `gh-pages -d dist` | Commits the `dist/` folder contents to the `gh-pages` branch and pushes to GitHub |
| 3 | GitHub Pages | Automatically serves the `gh-pages` branch at `https://mkirzon.github.io/accent-dental-care/` |

---

## Development Workflow

```bash
# Local development server
npm run dev

# Preview the production build locally
npm run build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

## Troubleshooting

### Blank page after deployment
- Check the browser console for 404 errors on assets
- Verify `base: '/accent-dental-care/'` in `vite.config.ts` matches the repo name
- Clear browser cache

### Routes not working
- Ensure `HashRouter` is used (not `BrowserRouter`) in `src/App.tsx`
- Links should use `to="/path"` with React Router's `<Link>` component

### Build fails
- Run `npm run build` locally to see error details
- Check TypeScript errors with `npx tsc --noEmit`

---

## Key Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Sets `base` path for GitHub Pages subdirectory |
| `src/App.tsx` | Uses `HashRouter` for client-side routing compatibility |
| `package.json` | Contains `predeploy` and `deploy` scripts |
| `dist/` | Production build output (gitignored, deployed to `gh-pages` branch) |
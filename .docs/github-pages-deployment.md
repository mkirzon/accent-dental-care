# GitHub Pages Deployment Guide

## Overview

This project is a React + Vite static site deployed to GitHub Pages. The production build outputs to a `docs/` folder, which GitHub Pages serves directly from the repository branch.

**Live URL:** https://mkirzon.github.io/accent-dental-care/

---

## Architecture

### Why `docs/` and not `dist/`?

Vite's default output folder is `dist/`, but we configure it to output to `docs/` instead. This is the recommended GitHub Pages pattern: the `docs/` folder is committed to the repository, and GitHub Pages is pointed at it. This avoids needing a separate CI/CD pipeline or a `gh-pages` branch.

### Why `HashRouter` and not `BrowserRouter`?

GitHub Pages is static file hosting — it has no server-side router to fall back to `index.html` for unknown paths. `BrowserRouter` uses real URL paths (e.g., `/about`), which 404 when loaded directly. `HashRouter` encodes routes after `#` (e.g., `/#/about`), which the browser's JS handles entirely without server involvement.

---

## Key Configuration Files

| File | Setting | Purpose |
|------|---------|---------|
| `vite.config.ts` | `base: '/accent-dental-care/'` | Tells Vite the site is served from a subdirectory (repo name) |
| `vite.config.ts` | `build.outDir: 'docs'` | Outputs production build to `docs/` instead of `dist/` |
| `src/App.tsx` | `HashRouter as Router` | SPA routing compatible with static hosting |
| `.gitignore` | `dist` listed | The old `dist/` folder is ignored; only `docs/` is committed |

---

## One-Time Setup (GitHub Side)

Before the first deployment, configure GitHub Pages:

1. Go to **https://github.com/mkirzon/accent-dental-care/settings/pages**
2. Under **Build and deployment** → **Source**, select **Deploy from a branch**
3. Under **Branch**, select your branch (e.g., `main`) and the **`/docs`** folder
4. Click **Save**

GitHub will publish within 1–2 minutes.

---

## Build and Deploy

```bash
# Install dependencies (first time only)
npm install

# Build the production bundle (outputs to docs/)
npm run build

# Commit and push the docs/ folder
git add docs
git commit -m "build: update production site"
git push origin <branch>

# GitHub Pages auto-deploys from the docs/ folder
```

### What each step does

| Step | Command | What it does |
|------|---------|-------------|
| 1 | `npm run build` | Runs TypeScript type-check (`tsc -b`) then Vite production build (`vite build`) → outputs to `docs/` |
| 2 | `git add docs && git commit` | Stages the new build artifacts |
| 3 | `git push` | Pushes to the remote; GitHub Pages detects the change and deploys |

---

## Development Workflow

```bash
# Local development server (hot-reload, source maps)
npm run dev

# Preview the production build locally before pushing
npm run build
npm run preview        # serves docs/ locally at localhost:4173

# When ready, commit and push docs/ to deploy
git add docs
git commit -m "build: deploy update"
git push origin main
```

---

## Branch Workflow

This project uses branches for development. The typical flow:

1. Work on a feature branch (e.g., `first-ai-pass`)
2. Build locally: `npm run build` → verifies everything compiles
3. Commit changes including the `docs/` folder
4. Push branch, open a Pull Request
5. After PR is merged to `main`, the `docs/` folder on `main` is what GitHub Pages serves

> **Note:** Always run `npm run build` before opening a PR so the `docs/` folder in the branch reflects the latest production output.

---

## Troubleshooting

### Blank white page after deployment
- Open browser DevTools → Console tab → look for 404 errors on JS/CSS assets
- Verify `base: '/accent-dental-care/'` in `vite.config.ts` matches the repository name exactly
- Hard refresh the page (`Cmd+Shift+R` / `Ctrl+Shift+R`) to clear cache

### Routes not working (page not found when navigating)
- Confirm `HashRouter` is used in `src/App.tsx` (not `BrowserRouter`)
- All internal navigation should use React Router's `<Link to="/path">` component

### Build fails locally
- Run `npm run build` to see full error output
- Check TypeScript errors: `npx tsc --noEmit`
- Ensure all dependencies are installed: `npm install`

### GitHub Pages shows old version
- Wait 1–2 minutes for GitHub to finish deploying (check deployment status in repo Settings → Pages)
- Clear browser cache or use incognito mode

---

## Folder Structure (Build Output)

```
docs/
├── index.html            ← entry point
├── favicon.svg           ← site icon (copied from public/)
├── icons.svg             ← icon sprite (copied from public/)
└── assets/
    ├── index-*.css       ← compiled Tailwind CSS
    └── index-*.js        ← bundled React app + vendor code
```

The `docs/` folder is committed to the repository. The `dist/` folder (Vite default) is in `.gitignore` and is not used for deployment.
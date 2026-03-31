## World Travel Demo (Next.js + Tailwind CSS)

A simple 1-page world travel demo built with **Next.js (TypeScript + App Router)** and **Tailwind CSS**.

## Features

- One-page layout:
  - Hero section
  - 3 destination cards
  - Why-us section
  - Contact form UI (static)
  - Footer
- Fully static demo content (no DB/auth)
- GitHub Actions deploy workflow for VPS via SSH + PM2

## Local Setup

### 1) Create app (if not already scaffolded)

```bash
npx create-next-app@latest . --typescript --tailwind --app --eslint
```

### 2) Install dependencies

```bash
npm install
```

### 3) Run development server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Production Run (VPS)

```bash
npm ci
npm run build
npm run start
```

For PM2 (as used by deploy workflow):

```bash
pm2 restart worldtravel || pm2 start npm --name worldtravel -- start
```

## GitHub Actions Auto-Deploy

Workflow file: `.github/workflows/deploy.yml`

On push to `main`, GitHub Actions will:

1. SSH into your server
2. `cd /var/www/worldtravel`
3. `git fetch origin main && git reset --hard origin/main`
4. `npm ci`
5. `npm run build`
6. `pm2 restart worldtravel || pm2 start npm --name worldtravel -- start`
7. Optional health check: `curl -f http://127.0.0.1:3000/api/health || true`

### Required GitHub Repository Secrets

Add these in **GitHub → Repository → Settings → Secrets and variables → Actions**:

- `SSH_HOST` — VPS host/IP
- `SSH_PORT` — SSH port (usually `22`)
- `SSH_USER` — SSH username
- `SSH_PASSWORD` — SSH user password

## Notes

- This demo intentionally uses static content only.
- No database, authentication, or Docker setup is included.
- If `/api/health` does not exist, the health-check step will not fail deployment (`|| true`).

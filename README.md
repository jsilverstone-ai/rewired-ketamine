This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Private SEO dashboard (`/seo`)

Password-protected (`SEO_DASHBOARD_PASSWORD`; login sets a 30-day httpOnly cookie derived from it) and `noindex`.
Every API route below returns 401 without that cookie.

| Route | Source | Env vars |
|---|---|---|
| `/api/seo-login` | GET session check · POST sign in · DELETE sign out | `SEO_DASHBOARD_PASSWORD` |
| `/api/seo/status` | health check of every upstream | — |
| `/api/seo/weekly-report` | Google Search Console API, last 7 finalized days vs prior 7 (cached 1 h; `?refresh=1`) | `GSC_SERVICE_ACCOUNT_JSON`, optional `GSC_SITE_URL` (default `sc-domain:rewiredketamine.com`) |
| `/api/seo/social` | weekly social plans in `src/data/social/` (`?week=YYYY-MM-DD`) | — |
| `/api/mangools/rankings` | Mangools SERPWatcher | `MANGOOLS_API_KEY` |
| `/api/mangools/site` | Mangools SiteProfiler overview (cached 6 h) | `MANGOOLS_API_KEY` |
| `/api/mangools/backlinks` | Mangools LinkMiner (cached 6 h) | `MANGOOLS_API_KEY` |
| `/api/mangools/serp` | Mangools SERPChecker, Miami FL (cached 6 h) | `MANGOOLS_API_KEY` |

### Connecting Search Console

1. Google Cloud Console → create/select a project → APIs & Services → enable **Google Search Console API**.
2. IAM & Admin → Service Accounts → Create → (no roles needed) → Keys → Add key → JSON.
3. Search Console → `rewiredketamine.com` (Domain property) → Settings → Users and permissions → Add user → the service account's email → **Restricted**.
4. Vercel → project `rewired-ketamine-live` → Settings → Environment Variables → `GSC_SERVICE_ACCOUNT_JSON` = full JSON file contents (Production; Preview too if wanted) → Redeploy.

### Weekly social plan

See [`src/data/social/README.md`](src/data/social/README.md) for the file path and schema a Monday automation writes.

# Camila Gonzalez — Portfolio

React + TypeScript + Vite portfolio site. Password-protected; deploys to Vercel at [camilagonzalez.xyz](https://camilagonzalez.xyz).

## Local development

```bash
npm install
npm run dev          # UI only (Vite)
```

### Terminal chat (OpenRouter)

The homepage terminal calls `/api/chat` (Vercel serverless). To test locally:

1. Copy `.env.example` → `.env.local` and set `OPENROUTER_API_KEY` ([openrouter.ai/keys](https://openrouter.ai/keys)).
2. Run `npx vercel dev` (installs Vercel CLI if needed) — serves Vite + API routes together.

Optional: `OPENROUTER_MODEL` defaults to `google/gemma-4-31b-it:free`.

**Production:** Vercel → Project → Settings → Environment Variables → add `OPENROUTER_API_KEY` (and optionally `OPENROUTER_MODEL`). Redeploy after adding.

## Build

```bash
npm run build    # output: dist/
npm run preview  # preview production build locally
```

## Deployment (Vercel + GoDaddy)

Hosting is on **Vercel**, connected to this GitHub repo. Custom domain **camilagonzalez.xyz** is configured in GoDaddy DNS.

### Vercel (one-time setup)

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. **Add New Project** → import `camila-go/portfolio`.
3. Confirm settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy. Each push to `main` redeploys automatically.
5. **Settings → Domains** → add `camilagonzalez.xyz` and `www.camilagonzalez.xyz`.
6. Set primary domain and enable `www` → apex redirect (or vice versa).

[`vercel.json`](vercel.json) includes SPA rewrites so React Router paths (e.g. `/work/jynx-networking`) work on direct load.

### GoDaddy DNS

In GoDaddy → **camilagonzalez.xyz** → **Manage DNS**:

1. Remove conflicting A/CNAME records (parking / old hosting). **Do not delete MX records** if you use email on this domain.
2. Add the records Vercel shows when you add the domain. Typical values:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | `@`  | `76.76.21.21`          |
| CNAME | `www`| `cname.vercel-dns.com` |

3. Wait for DNS propagation (often under 1 hour). Vercel should show **Valid Configuration** and issue HTTPS.

### Post-deploy checklist

- [ ] `https://camilagonzalez.xyz` — password gate, then home
- [ ] `https://camilagonzalez.xyz/work/jynx-networking` — direct URL works
- [ ] `https://camilagonzalez.xyz/cGonzalezResume2026.pdf` — résumé downloads
- [ ] Homepage terminal — ask "What is Jynx?" and get a grounded answer
- [ ] HTTPS padlock in browser

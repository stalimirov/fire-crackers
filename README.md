# Fire Crackers — Brand Pitch Presentation

Self-contained HTML pitch deck. No build step. No dependencies. Offline-ready (except Google Fonts).

---

## Deploy to GitHub Pages (free, ~5 minutes)

### Step 1 — Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `firecrackers-pitch` (or anything you like)
3. Set it to **Public** (required for free GitHub Pages)
4. Do **not** add a README — you already have one
5. Click **Create repository**

### Step 2 — Push this folder

Open Terminal in the `presentation/` folder and run:

```bash
git init
git add .
git commit -m "Fire Crackers pitch presentation"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/firecrackers-pitch.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 3 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Branch: `main` · Folder: `/ (root)`
4. Click **Save**

GitHub will build and deploy. After ~60 seconds, your URL will be:

```
https://YOUR_USERNAME.github.io/firecrackers-pitch/
```

---

## Alternative: Netlify (even faster, drag-and-drop)

1. Go to [netlify.com](https://netlify.com) → Log in → **Sites**
2. Drag the entire `presentation/` folder into the deploy zone
3. Netlify assigns a URL instantly (e.g. `cheerful-cracker-abc123.netlify.app`)
4. Rename it under **Site settings → Site name**

---

## Add a custom domain (optional)

If you own `firecrackers.bg`:

**GitHub Pages:**
Settings → Pages → Custom domain → enter `pitch.firecrackers.bg`
Add a CNAME DNS record: `pitch` → `YOUR_USERNAME.github.io`

**Netlify:**
Site settings → Domain management → Add domain → follow Netlify DNS instructions

---

## File structure

```
presentation/
  index.html          ← single-file presentation (all 15 sections)
  style.css           ← full brand design system
  README.md           ← this file
  assets/
    grain.svg         ← film grain overlay
    seal.svg          ← rotating brand seal
    silhouette-1.svg  ← Blaze
    silhouette-2.svg  ← Matchstick
    silhouette-3.svg  ← Ha-Hank
    silhouette-4.svg  ← Carolina
    silhouette-5.svg  ← Ghost
    silhouette-6.svg  ← Abi
    silhouette-7.svg  ← Shipka
    silhouette-8.svg  ← Smoky
    art/
      art-01.jpg      ← through art-18.jpg (Art Style references)
```

---

## Presentation sections

| # | Section | Content |
|---|---------|---------|
| 0 | Cover | Brand name, tagline, spinning seal |
| 1 | The Idea | Core pitch + 4 key stat cards |
| 2 | Market Opportunity | TAM/SAM/SOM pyramid, craft beer parallel |
| 3 | Competition | Bulgarian table + 4 global benchmarks |
| 4 | Our Advantage | Three moats: Product, Brand IP, Channel |
| 5 | Art Style | Visual DNA intro + 18-image gallery (click to enlarge) |
| 6 | Brand Identity | 9 color swatches, typography, voice, 5 heat tiers |
| 7 | The Cast | 8 character cards with silhouettes + antagonist |
| 8 | Content Strategy | Platforms, "Against All Blandness" series, smoke test calendar |
| 9 | The Product | 6 SKUs, LTO model, packaging description |
| 10 | Business Model | Bar math flow + 3 revenue streams |
| 11 | Unit Economics | COGS 3-stage table + gross margin ladder |
| 12 | Revenue Scenarios | Smoke Test / Early Traction / Growth projections |
| 13 | Go-to-Market | 3-phase timeline + Lean Startup BML framework |
| 14 | Capital | Phased budget table + regulatory costs |
| 15 | Next Steps | Pre-launch page status + 4-column action timeline |

# Fire Crackers Website — Global AI Instructions

This file serves as the core context for any AI assistant working on the Fire Crackers brand pitch and website.

## Project Structure & Build Process
This repository uses a token-efficient Node.js build system to assemble the presentation.
- `presentation/index.html` is **GENERATED**. Do not edit it directly!
- `src/layout.html` contains the head, topbar, and shell.
- `src/sections/` contains individual HTML chunks for each section (e.g., `01-idea.html`, `02-market.html`).
- **To make changes**: Edit the specific `.html` file in `src/sections/`, then run the build command.
  
### Build Command
```bash
npm run build
```

## Brand Guidelines & Tone of Voice
- **Theme**: "The snack is real. The universe is the point." 
- **Art Style**: Mid-Century Print Mascot meets Sailor Jerry tattoo flash. Thick black outlines, limited flat colors, halftone dots. NEVER use modern flat corporate illustration or 3D.
- **Tone**: Unapologetic, slightly irreverent. "Made in Bulgaria. Deal with it." No generic marketing speak ("crafted with passion").
- **Pricing & Units**: Always use **EUR (€)**. Standard pack size is **60g**.

## Automated GitHub Workflow
To quickly save your work and push to GitHub, use the provided script:
```bash
./bin/push.sh "Your commit message here"
```
This script will automatically run the build, format, commit, and push to the `main` branch.

## Strategy & Asset Docs
Important strategy files are located in the `docs/` folder:
- `docs/brand_guidelines.md`
- `docs/content_strategy.md`
- `docs/visual_asset_brief.md`
Review these before proposing new copy or design changes.

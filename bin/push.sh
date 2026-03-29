#!/bin/bash
# Automatically build, commit, and push changes to GitHub

# Exit immediately if a command exits with a non-zero status
set -e

# Move to the project root directory
cd "$(dirname "$0")/.."

# 1. Run the build script to ensure presentation/index.html is up to date
echo "🔨 Building the presentation..."
npm run build

# 2. Stage all changes
echo "📦 Staging changes..."
git add .

# 3. Commit changes (use the first param as message, or default)
COMMIT_MSG=${1:-"Update presentation and strategy docs"}
echo "📝 Committing with message: '$COMMIT_MSG'"
git commit -m "$COMMIT_MSG" || true # Ignore if there's nothing to commit

# 4. Push to remote
echo "🚀 Pushing source code to origin main..."
git push origin HEAD

# 5. Deploy to GitHub Pages
echo "🌐 Deploying presentation to GitHub Pages..."
npm run deploy

echo "✅ All done! Changes are live on GitHub & GitHub Pages!"

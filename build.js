const fs = require('fs');
const path = require('path');

const layoutPath = path.join(__dirname, 'src', 'layout.html');
const sectionsDir = path.join(__dirname, 'src', 'sections');
const outputPath = path.join(__dirname, 'presentation', 'index.html');

console.log('Building presentation/index.html...');

let layout = fs.readFileSync(layoutPath, 'utf-8');

// Replace <!-- INCLUDE: filename.html --> with the actual file contents
const includeRegex = /<!--\s*INCLUDE:\s*([a-zA-Z0-9_.-]+)\s*-->/g;

layout = layout.replace(includeRegex, (match, filename) => {
  const filePath = path.join(sectionsDir, filename);
  if (fs.existsSync(filePath)) {
    console.log(`  Including ${filename}`);
    return fs.readFileSync(filePath, 'utf-8');
  } else {
    console.warn(`  WARNING: Included file not found: ${filename}`);
    return match; // Leave untouched if not found
  }
});

fs.writeFileSync(outputPath, layout);
console.log('Build completed. Output: presentation/index.html');

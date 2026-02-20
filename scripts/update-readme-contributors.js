#!/usr/bin/env node
/**
 * Update README.md with latest contributors
 * Run: node scripts/update-readme-contributors.js
 */

const fs = require('fs');
const path = require('path');

const contributorsPath = path.join(__dirname, '../contributors.json');
const readmePath = path.join(__dirname, '../README.md');

function updateReadme() {
  const contributors = JSON.parse(fs.readFileSync(contributorsPath, 'utf8'));
  let readme = fs.readFileSync(readmePath, 'utf8');
  
  const top5 = contributors.contributors.slice(0, 5);
  
  let contributorsSection = '<!-- CONTRIBUTORS_START -->\n';
  contributorsSection += 'This section is auto-generated. Top contributors by question count:\n\n';
  
  top5.forEach((c, i) => {
    contributorsSection += `${i + 1}. **${c.name}** ([${c.github}](https://github.com/${c.github.replace('@', '')})) - ${c.count} question${c.count > 1 ? 's' : ''}\n`;
  });
  
  contributorsSection += '\n[View all contributors →](contributors.json)\n';
  contributorsSection += '<!-- CONTRIBUTORS_END -->';
  
  const startMarker = '<!-- CONTRIBUTORS_START -->';
  const endMarker = '<!-- CONTRIBUTORS_END -->';
  
  const startIndex = readme.indexOf(startMarker);
  const endIndex = readme.indexOf(endMarker);
  
  if (startIndex !== -1 && endIndex !== -1) {
    readme = readme.substring(0, startIndex) + contributorsSection + readme.substring(endIndex + endMarker.length);
    fs.writeFileSync(readmePath, readme);
    console.log('✅ Updated README.md with top contributors');
  } else {
    console.log('⚠️  Could not find contributor markers in README.md');
  }
}

updateReadme();

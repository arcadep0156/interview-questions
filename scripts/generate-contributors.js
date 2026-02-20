#!/usr/bin/env node
/**
 * Generate contributors leaderboard from question data
 * Run: node scripts/generate-contributors.js
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');
const outputPath = path.join(__dirname, '../contributors.json');

function getAllJsonFiles(dir) {
  const files = [];
  const years = fs.readdirSync(dir);
  
  for (const year of years) {
    const yearPath = path.join(dir, year);
    if (!fs.statSync(yearPath).isDirectory()) continue;
    
    const companyFiles = fs.readdirSync(yearPath).filter(f => f.endsWith('.json'));
    for (const file of companyFiles) {
      files.push(path.join(yearPath, file));
    }
  }
  
  return files;
}

function generateContributors() {
  const files = getAllJsonFiles(dataDir);
  const contributorMap = new Map();
  
  for (const filePath of files) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    if (data.questions) {
      data.questions.forEach(q => {
        const github = q.contributor.github;
        const name = q.contributor.name;
        
        if (contributorMap.has(github)) {
          contributorMap.get(github).count++;
        } else {
          contributorMap.set(github, {
            name: name,
            github: github,
            count: 1
          });
        }
      });
    }
  }
  
  // Convert to array and sort by count (descending)
  const contributors = Array.from(contributorMap.values())
    .sort((a, b) => b.count - a.count);
  
  const output = {
    version: 'v1',
    lastUpdated: new Date().toISOString(),
    totalContributors: contributors.length,
    contributors: contributors
  };
  
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2) + '\n');
  console.log(`✅ Generated contributors.json with ${contributors.length} contributors`);
  console.log(`📊 Top 5 contributors:`);
  contributors.slice(0, 5).forEach((c, i) => {
    console.log(`   ${i + 1}. ${c.name} (${c.github}) - ${c.count} questions`);
  });
}

generateContributors();

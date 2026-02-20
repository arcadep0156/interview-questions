#!/usr/bin/env node
/**
 * Auto-generate index.json from data files
 * Run: node scripts/generate-index.js
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');
const indexPath = path.join(__dirname, '../index.json');

function getAllJsonFiles(dir) {
  const files = [];
  const years = fs.readdirSync(dir);
  
  for (const year of years) {
    const yearPath = path.join(dir, year);
    if (!fs.statSync(yearPath).isDirectory()) continue;
    
    const companyFiles = fs.readdirSync(yearPath).filter(f => f.endsWith('.json'));
    for (const file of companyFiles) {
      files.push({ year, file, path: path.join(yearPath, file) });
    }
  }
  
  return files;
}

function generateIndex() {
  const files = getAllJsonFiles(dataDir);
  const fileEntries = [];
  let totalQuestions = 0;
  const companies = new Set();
  const years = new Set();
  const topics = new Set();
  
  for (const { year, file, path: filePath } of files) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const company = data.company;
    const count = data.questions.length;
    const fileTopics = [...new Set(data.questions.map(q => q.topic))];
    
    fileEntries.push({
      path: `data/${year}/${file}`,
      company,
      year,
      count,
      topics: fileTopics
    });
    
    totalQuestions += count;
    companies.add(company);
    years.add(year);
    fileTopics.forEach(t => topics.add(t));
  }
  
  const index = {
    version: 'v1',
    lastUpdated: new Date().toISOString(),
    totalQuestions,
    files: fileEntries.sort((a, b) => a.path.localeCompare(b.path)),
    metadata: {
      companies: Array.from(companies).sort(),
      years: Array.from(years).sort(),
      topics: Array.from(topics).sort()
    }
  };
  
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2) + '\n');
  console.log(`✅ Generated index.json with ${totalQuestions} questions from ${fileEntries.length} files`);
}

generateIndex();

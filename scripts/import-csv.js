/**
 * CSV to People Data Importer
 *
 * Usage: node scripts/import-csv.js data/people.csv
 *
 * This reads your CSV file and generates data/people.ts
 */

const fs = require('fs');
const path = require('path');

// Get CSV file path from command line
const csvPath = process.argv[2];

if (!csvPath) {
  console.log('Usage: node scripts/import-csv.js <path-to-csv>');
  console.log('Example: node scripts/import-csv.js data/people.csv');
  process.exit(1);
}

// Read and parse CSV
const csvContent = fs.readFileSync(csvPath, 'utf-8');
const lines = csvContent.split('\n').filter(line => line.trim());

// Parse CSV header
const header = parseCSVLine(lines[0]);
console.log('Found columns:', header.join(', '));

// Parse each row
const people = [];
for (let i = 1; i < lines.length; i++) {
  const values = parseCSVLine(lines[i]);
  if (values.length < header.length) continue;

  const person = {};
  header.forEach((col, index) => {
    person[col.trim()] = values[index]?.trim() || '';
  });

  // Convert to proper types
  const formatted = {
    id: person.id || String(i),
    name: person.name,
    photo: person.photo ? `/photos/${person.photo}` : '/photos/placeholder.svg',
    lat: parseFloat(person.lat),
    lng: parseFloat(person.lng),
    tags: person.tags ? person.tags.split(',').map(t => t.trim()) : [],
    title: person.title || '',
    bio: person.bio || '',
    email: person.email || undefined,
    location: person.location || ''
  };

  // Validate required fields
  if (!formatted.name || isNaN(formatted.lat) || isNaN(formatted.lng)) {
    console.warn(`Skipping row ${i}: missing name or invalid coordinates`);
    continue;
  }

  people.push(formatted);
}

console.log(`Parsed ${people.length} people`);

// Generate TypeScript file
const output = `export interface Person {
  id: string;
  name: string;
  photo: string;
  lat: number;
  lng: number;
  tags: string[];
  title: string;
  bio: string;
  email?: string;
  location: string;
}

export const people: Person[] = ${JSON.stringify(people, null, 2)};

// Extract all unique tags from people data
export const allTags = [...new Set(people.flatMap(person => person.tags))].sort();
`;

// Write output
const outputPath = path.join(__dirname, '..', 'data', 'people.ts');
fs.writeFileSync(outputPath, output);
console.log(`\nGenerated: ${outputPath}`);
console.log(`\nTags found: ${[...new Set(people.flatMap(p => p.tags))].sort().join(', ')}`);

// Simple CSV parser that handles quoted fields
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);

  return result;
}

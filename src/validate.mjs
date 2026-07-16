import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const CHUNKS = join(import.meta.dirname, 'chunks');

const EXPECTED = {
  '01-languages-runtimes': ['Languages & Runtimes', 40],
  '02-frontend-web-ui': ['Frontend & Web UI', 40],
  '03-backend-apis': ['Backend, APIs & Services', 40],
  '04-databases-data-modeling': ['Databases & Data Modeling', 40],
  '05-devops-cicd': ['DevOps, CI/CD & Release', 40],
  '06-cloud-platform': ['Cloud & Platform Engineering', 35],
  '07-security-appsec': ['Security & AppSec', 40],
  '08-testing-qa': ['Testing & QA', 40],
  '09-performance-observability': ['Performance & Observability', 35],
  '10-architecture-system-design': ['Architecture & System Design', 35],
  '11-mobile-cross-platform': ['Mobile & Cross-Platform', 30],
  '12-git-collaboration': ['Git & Code Collaboration', 30],
  '13-code-quality-refactoring': ['Code Quality & Refactoring', 30],
  '14-developer-tooling-build': ['Developer Tooling & Build Systems', 30],
  '15-systems-embedded': ['Systems, Embedded & Low-Level', 25],
  '16-accessibility': ['Accessibility Engineering', 15],
  '17-i18n-localization': ['Localization & i18n', 15],
  '18-ai-llm-engineering': ['AI & LLM Engineering', 40],
  '19-agents-mcp-tooling': ['Agents, MCP & Claude Code Tooling', 35],
  '20-data-engineering': ['Data Engineering & Pipelines', 30],
  '21-ml-data-science': ['Machine Learning & Data Science', 35],
  '22-analytics-bi': ['Analytics, BI & Reporting', 25],
  '23-research-synthesis': ['Research & Synthesis', 25],
  '24-design-systems-visual': ['Design Systems & Visual Design', 28],
  '25-ux-product-design': ['UX Research & Product Design', 18],
  '26-product-project-management': ['Product & Project Management', 24],
  '27-technical-writing-docs': ['Technical Writing & Documentation', 22],
  '28-marketing-seo-growth': ['Marketing, SEO & Growth', 28],
  '29-sales-crm': ['Sales, CRM & Customer Success', 16],
  '30-content-media-creative': ['Content, Media & Creative Production', 22],
  '31-business-finance-legal': ['Business, Finance & Legal Ops', 22],
  '32-personal-productivity': ['Personal Productivity & Life Ops', 18],
  '33-career-hiring-team': ['Career, Hiring & Team Ops', 14],
  '34-automation-integrations': ['Automation & Integrations', 18],
  '35-domain-verticals': ['Domain Verticals', 20],
};

const BANNED = ['powerful', 'amazing', 'comprehensive', 'seamless', 'robust',
  'cutting-edge', 'best-in-class', 'ultimate'];

const ENTRY_RE = /^- `([a-z0-9]+(?:-[a-z0-9]+)+)` — (.+)$/;

const errors = [];
const warnings = [];
const bySlug = new Map();
const categories = [];

const files = readdirSync(CHUNKS).filter(f => f.endsWith('.md')).sort();
const seenKeys = new Set();

for (const file of files) {
  const key = file.replace(/\.md$/, '');
  const exp = EXPECTED[key];
  if (!exp) { errors.push(`${file}: unexpected file, not in taxonomy`); continue; }
  seenKeys.add(key);
  const [catName, expCount] = exp;

  const raw = readFileSync(join(CHUNKS, file), 'utf8').replace(/\r\n/g, '\n');
  const lines = raw.split('\n');

  if (lines[0] !== `## ${catName}`) {
    errors.push(`${file}: heading is "${lines[0]}", expected "## ${catName}"`);
  }

  const entries = [];
  lines.slice(1).forEach((line, i) => {
    const lineNo = i + 2;
    if (line.trim() === '') return;
    const m = line.match(ENTRY_RE);
    if (!m) { errors.push(`${file}:${lineNo}: malformed line → ${line.slice(0, 90)}`); return; }
    const [, slug, desc] = m;

    const words = slug.split('-').length;
    if (words < 2 || words > 4) warnings.push(`${file}:${lineNo}: slug has ${words} words → ${slug}`);

    const wc = desc.trim().split(/\s+/).length;
    if (wc < 14 || wc > 24) warnings.push(`${file}:${lineNo}: description is ${wc} words → ${slug}`);
    if (!desc.endsWith('.')) errors.push(`${file}:${lineNo}: description missing terminal period → ${slug}`);

    const sentences = desc.replace(/\b(e\.g|i\.e|vs|etc|Inc|approx)\./gi, '$1<>')
      .split(/[.!?](?:\s|$)/).filter(s => s.trim());
    if (sentences.length > 1) warnings.push(`${file}:${lineNo}: ${sentences.length} sentences → ${slug}`);

    const lower = ` ${desc.toLowerCase()} `;
    for (const b of BANNED) if (lower.includes(` ${b} `) || lower.includes(` ${b},`)) {
      warnings.push(`${file}:${lineNo}: banned adjective "${b}" → ${slug}`);
    }
    if (/^(this skill|a skill|the skill)/i.test(desc)) {
      errors.push(`${file}:${lineNo}: description starts with "This skill…" → ${slug}`);
    }

    if (!bySlug.has(slug)) bySlug.set(slug, []);
    bySlug.get(slug).push(`${key}:${lineNo}`);
    entries.push({ slug, desc });
  });

  if (entries.length !== expCount) {
    errors.push(`${file}: has ${entries.length} entries, expected ${expCount}`);
  }
  categories.push({ key, name: catName, expCount, entries });
}

for (const k of Object.keys(EXPECTED)) {
  if (!seenKeys.has(k)) errors.push(`MISSING FILE: ${k}.md`);
}

const dupes = [...bySlug.entries()].filter(([, locs]) => locs.length > 1);

const total = categories.reduce((s, c) => s + c.entries.length, 0);

console.log('='.repeat(72));
console.log(`Files:        ${files.length} / 35`);
console.log(`Total entries: ${total} / 1000`);
console.log(`Unique slugs:  ${bySlug.size}`);
console.log(`Duplicates:    ${dupes.length}`);
console.log(`Errors:        ${errors.length}`);
console.log(`Warnings:      ${warnings.length}`);
console.log('='.repeat(72));

if (dupes.length) {
  console.log('\n--- DUPLICATE SLUGS ---');
  for (const [slug, locs] of dupes) console.log(`  ${slug}  →  ${locs.join('  |  ')}`);
}
if (errors.length) {
  console.log('\n--- ERRORS ---');
  for (const e of errors) console.log(`  ${e}`);
}
if (warnings.length) {
  console.log('\n--- WARNINGS ---');
  for (const w of warnings) console.log(`  ${w}`);
}

console.log('\n--- PER CATEGORY ---');
for (const c of categories) {
  const flag = c.entries.length === c.expCount ? 'ok ' : 'BAD';
  console.log(`  ${flag} ${c.key.padEnd(32)} ${String(c.entries.length).padStart(3)} / ${c.expCount}`);
}

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
const CHUNKS = join(import.meta.dirname, 'chunks');
const ENTRY_RE = /^- `([a-z0-9-]+)` — (.+)$/;

const GROUPS = [
  {
    id: 'engineering',
    name: 'Engineering',
    blurb: 'Building, shipping, and operating software.',
    cats: ['01-languages-runtimes', '02-frontend-web-ui', '03-backend-apis',
      '04-databases-data-modeling', '05-devops-cicd', '06-cloud-platform',
      '07-security-appsec', '08-testing-qa', '09-performance-observability',
      '10-architecture-system-design', '11-mobile-cross-platform', '12-git-collaboration',
      '13-code-quality-refactoring', '14-developer-tooling-build', '15-systems-embedded',
      '16-accessibility', '17-i18n-localization'],
  },
  {
    id: 'ai-data',
    name: 'AI & Data',
    blurb: 'Models, agents, pipelines, and evidence.',
    cats: ['18-ai-llm-engineering', '19-agents-mcp-tooling', '20-data-engineering',
      '21-ml-data-science', '22-analytics-bi', '23-research-synthesis'],
  },
  {
    id: 'product-business',
    name: 'Product, Design & Business',
    blurb: 'Everything around the code that decides whether it matters.',
    cats: ['24-design-systems-visual', '25-ux-product-design', '26-product-project-management',
      '27-technical-writing-docs', '28-marketing-seo-growth', '29-sales-crm',
      '30-content-media-creative', '31-business-finance-legal', '32-personal-productivity',
      '33-career-hiring-team', '34-automation-integrations', '35-domain-verticals'],
  },
];

const read = (key) => {
  const lines = readFileSync(join(CHUNKS, `${key}.md`), 'utf8').replace(/\r\n/g, '\n').split('\n');
  const name = lines[0].replace(/^## /, '');
  const entries = [];
  for (const line of lines.slice(1)) {
    const m = line.match(ENTRY_RE);
    if (m) entries.push({ slug: m[1], desc: m[2] });
  }
  return { key, num: key.slice(0, 2), name, entries };
};

const groups = GROUPS.map(g => ({ ...g, categories: g.cats.map(read) }));
const allCats = groups.flatMap(g => g.categories);
const total = allCats.reduce((s, c) => s + c.entries.length, 0);

/* ---------------------------------------------------------------- CATALOG.md */

// Mirrors GitHub's heading slugger: lowercase, drop everything that is not a word
// character, hyphen, or space, then map each surviving space to a hyphen. Stripped
// punctuation leaves its spaces behind, so "01 · Foo & Bar" becomes "01--foo--bar".
const ghAnchor = (heading) => heading.toLowerCase()
  .replace(/[^\w\- ]+/g, '').replace(/ /g, '-');

// One source for each category heading, so the anchor cannot drift from the text.
const catHeading = (c) => `${c.num} · ${c.name}`;

const md = [];
md.push('# Claude Skills — A Catalog of 1000');
md.push('');
md.push(`A proposed catalog of **${total} Claude Skills**, spread across **${allCats.length} categories**.`);
md.push('Each entry is a candidate skill: a name and a one-sentence brief describing what it does');
md.push('and when Claude should reach for it.');
md.push('');
md.push('> **Status: catalog only.** These are specifications, not implementations. Nothing here');
md.push('> is built yet. See [Selection criteria](#selection-criteria) for what earned a slot.');
md.push('');
md.push('## Contents');
md.push('');

for (const g of groups) {
  const n = g.categories.reduce((s, c) => s + c.entries.length, 0);
  md.push(`### ${g.name} — ${n} skills`);
  md.push('');
  md.push('| # | Category | Skills |');
  md.push('|---|----------|-------:|');
  for (const c of g.categories) {
    md.push(`| ${c.num} | [${c.name}](#${ghAnchor(catHeading(c))}) | ${c.entries.length} |`);
  }
  md.push('');
}

md.push('## Selection criteria');
md.push('');
md.push('A skill earns a slot only if it carries knowledge Claude does not reliably have or apply');
md.push('by default. Every entry is one of:');
md.push('');
md.push('- a repeatable multi-step workflow where the **order matters**');
md.push('- a checklist that prevents specific, nameable mistakes');
md.push('- a house convention that must be applied **consistently** across runs');
md.push('- reference material Claude would otherwise hallucinate (formats, standards, limits)');
md.push('- a wrapper around a script or tool with non-obvious invocation');
md.push('');
md.push('Ideas rejected on principle: *"write X code"*, *"explain X"*, restatements of a tool\'s');
md.push('own docs, and anything too broad to have a procedure.');
md.push('');
md.push('The intended mix is roughly **55%** workflow skills, **25%** reference skills, and');
md.push('**20%** skills that ship something executable.');
md.push('');
md.push('---');
md.push('');

for (const g of groups) {
  const n = g.categories.reduce((s, c) => s + c.entries.length, 0);
  md.push(`# ${g.name}`);
  md.push('');
  md.push(`*${g.blurb} — ${n} skills.*`);
  md.push('');
  for (const c of g.categories) {
    md.push(`## ${catHeading(c)}`);
    md.push('');
    md.push(`*${c.entries.length} skills*`);
    md.push('');
    for (const e of c.entries) md.push(`- \`${e.slug}\` — ${e.desc}`);
    md.push('');
  }
  md.push('---');
  md.push('');
}

md.push('## License');
md.push('');
md.push('Apache License 2.0. See [LICENSE](LICENSE).');
md.push('');

writeFileSync(join(ROOT, 'CATALOG.md'), md.join('\n'), 'utf8');

/* ------------------------------------------------------------------ summary */

writeFileSync(join(import.meta.dirname, 'catalog.json'),
  JSON.stringify({ total, groups }, null, 0), 'utf8');

console.log(`CATALOG.md written — ${total} skills, ${allCats.length} categories, ${md.length} lines`);
for (const g of groups) {
  const n = g.categories.reduce((s, c) => s + c.entries.length, 0);
  console.log(`  ${g.name.padEnd(28)} ${String(n).padStart(4)}  (${(n / total * 100).toFixed(1)}%)`);
}

import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const CHUNKS = join(import.meta.dirname, 'chunks');
const ENTRY_RE = /^- `([a-z0-9-]+)` — (.+)$/;

// Role suffixes carry no topical meaning — ignore them when comparing.
const ROLES = new Set(['auditor', 'builder', 'designer', 'migrator', 'profiler', 'reviewer',
  'tuner', 'generator', 'triager', 'planner', 'hardener', 'analyzer', 'validator', 'writer',
  'mapper', 'linter', 'debugger', 'optimizer', 'checker', 'selector', 'runner', 'fixer',
  'detector', 'estimator', 'calculator', 'tracker', 'extractor', 'converter', 'splitter',
  'scorer', 'calibrator', 'diagnoser', 'reducer', 'enforcer', 'guard', 'gate', 'kit']);

const STOP = new Set(['a', 'the', 'and', 'or', 'to', 'of', 'in', 'on', 'for', 'with', 'when',
  'then', 'from', 'each', 'per', 'that', 'so', 'into', 'by', 'an', 'at', 'it', 'its', 'is',
  'as', 'before', 'after', 'against', 'across', 'not', 'no', 'any', 'every', 'their', 'them',
  'you', 'your', 'this', 'these', 'those', 'which', 'while', 'without', 'using', 'use', 'uses']);

const all = [];
for (const file of readdirSync(CHUNKS).filter(f => f.endsWith('.md')).sort()) {
  const cat = file.replace(/\.md$/, '');
  for (const line of readFileSync(join(CHUNKS, file), 'utf8').split(/\r?\n/)) {
    const m = line.match(ENTRY_RE);
    if (!m) continue;
    const [, slug, desc] = m;
    const slugTokens = slug.split('-').filter(t => !ROLES.has(t));
    const descTokens = new Set(desc.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ')
      .split(/\s+/).filter(t => t.length > 3 && !STOP.has(t)));
    all.push({ cat, slug, desc, slugSet: new Set(slugTokens), descSet: descTokens });
  }
}

const jaccard = (a, b) => {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
};

const hits = [];
for (let i = 0; i < all.length; i++) {
  for (let j = i + 1; j < all.length; j++) {
    const A = all[i], B = all[j];
    const slugSim = jaccard(A.slugSet, B.slugSet);
    const descSim = jaccard(A.descSet, B.descSet);
    // Flag when the topic words in the slug overlap heavily, or the descriptions do.
    const score = slugSim * 0.65 + descSim * 0.35;
    if (slugSim >= 0.5 || descSim >= 0.34) {
      hits.push({ score, slugSim, descSim, A, B, cross: A.cat !== B.cat });
    }
  }
}

hits.sort((a, b) => b.score - a.score);
console.log(`Compared ${all.length} entries → ${hits.length} candidate pairs\n`);
for (const h of hits) {
  console.log(`[${h.score.toFixed(2)}] slug=${h.slugSim.toFixed(2)} desc=${h.descSim.toFixed(2)} ${h.cross ? 'CROSS-CAT' : 'same-cat'}`);
  console.log(`   ${h.A.cat} :: ${h.A.slug}`);
  console.log(`      ${h.A.desc}`);
  console.log(`   ${h.B.cat} :: ${h.B.slug}`);
  console.log(`      ${h.B.desc}`);
  console.log('');
}

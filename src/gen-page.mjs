import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BUILD = import.meta.dirname;
const ROOT = join(BUILD, '..');

const data = JSON.parse(readFileSync(join(BUILD, 'catalog.json'), 'utf8'));
const template = readFileSync(join(BUILD, 'page.template.html'), 'utf8');

// Strip the authoring fields the page never reads, so the payload stays lean.
const payload = {
  total: data.total,
  groups: data.groups.map((g) => ({
    id: g.id,
    name: g.name,
    categories: g.categories.map((c) => ({
      num: c.num,
      name: c.name,
      entries: c.entries.map((e) => ({ slug: e.slug, desc: e.desc })),
    })),
  })),
};

const json = JSON.stringify(payload);
if (json.includes('</script')) throw new Error('payload would break out of the script tag');

const body = template.replace('/*__DATA__*/', () => json);

// The Artifact host supplies its own <!doctype>/<head>/<body>, so it takes the body as-is.
writeFileSync(join(BUILD, 'artifact.html'), body, 'utf8');

// An index card in the catalog's olive, inlined so the page makes no network request.
const favicon =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>" +
  "<rect width='32' height='32' rx='4' fill='%235c6b0f'/>" +
  "<path d='M7 11h18M7 16h18M7 21h11' stroke='%23e8eae5' stroke-width='2.5' stroke-linecap='round'/>" +
  '</svg>';

// The repo copy has to stand alone for GitHub Pages.
const title = 'Claude Skills — A Catalog of 1000';
const standalone = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="A proposed catalog of 1000 Claude Skills across 35 categories, each with a one-sentence brief.">
<meta name="color-scheme" content="light dark">
<link rel="icon" href="${favicon}">
${body.split('\n')[0]}
</head>
<body>
${body.split('\n').slice(1).join('\n')}
</body>
</html>
`;
writeFileSync(join(ROOT, 'index.html'), standalone, 'utf8');

const kb = (s) => `${(Buffer.byteLength(s, 'utf8') / 1024).toFixed(1)} KB`;
console.log(`payload      ${kb(json)}  (${payload.total} entries)`);
console.log(`artifact.html ${kb(body)}`);
console.log(`index.html    ${kb(standalone)}`);
if (!body.includes(json.slice(0, 40))) throw new Error('data injection failed');
console.log(`title check   ${standalone.includes(`<title>${title}</title>`) ? 'ok' : 'MISSING'}`);

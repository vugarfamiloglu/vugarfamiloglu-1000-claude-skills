# Claude Skills — A Catalog of 1000

A proposed catalog of **1000 Claude Skills** across **35 categories**. Each entry is a
candidate skill: a name and one sentence saying what it does and when Claude should reach
for it.

**[Browse the catalog →](CATALOG.md)** · **[Interactive index →](https://vugarfamiloglu.github.io/vugarfamiloglu-1000-claude-skills/)**

> **Status: catalog only.** These are specifications, not implementations. Nothing in this
> repo is a working skill yet.

## What is a skill

A Skill is a directory containing `SKILL.md`: YAML frontmatter (`name`, `description`) plus
a body of procedural instructions that Claude loads **on demand** when a task matches the
description. It can bundle reference files and executable scripts.

## What earned a slot

A skill is worth building only if it carries knowledge Claude does not reliably have or
apply by default. Every entry is one of:

- a repeatable multi-step workflow where the **order matters**
- a checklist that prevents specific, nameable mistakes
- a house convention that must be applied **consistently** across runs
- reference material Claude would otherwise hallucinate (formats, standards, limits)
- a wrapper around a script or tool with non-obvious invocation

Rejected on principle: *"write X code"*, *"explain X"*, restatements of a tool's own docs,
and anything too broad to have a procedure. The test every entry had to pass:

> *Would a competent Claude with no skill loaded already do this correctly and consistently?*
> If yes, it is not a skill.

Target mix: **~55%** workflow, **~25%** reference, **~20%** ship something executable.

## The shape of it

| Group | Skills | Share | Categories |
|-------|-------:|------:|------------|
| Engineering | 560 | 56% | Languages, frontend, backend, databases, DevOps, cloud, security, testing, performance, architecture, mobile, git, code quality, tooling, systems, accessibility, i18n |
| AI & Data | 190 | 19% | LLM engineering, agents & MCP, data engineering, ML & data science, analytics, research |
| Product, Design & Business | 250 | 25% | Design systems, UX, product management, docs, marketing, sales, media, business ops, personal productivity, career, automation, verticals |

Full breakdown in [CATALOG.md](CATALOG.md#contents).

## Repo layout

```
CATALOG.md          the catalog — generated, do not hand-edit
index.html          interactive index — generated, do not hand-edit
src/
  SPEC.md           authoring contract: naming, descriptions, quality bar, category map
  chunks/*.md       per-category source of truth (35 files)
  build.mjs         chunks    → CATALOG.md
  gen-page.mjs      chunks    → index.html
  validate.mjs      counts, format, duplicate slugs, description rules
  near-dupes.mjs    token-overlap scan for semantic near-duplicates
```

## Working on it

Edit the files in `src/chunks/`, never the generated output. Then:

```sh
node src/validate.mjs     # must report 1000/1000, 0 errors, 0 duplicates
node src/near-dupes.mjs   # review any pair you have not already judged
node src/build.mjs        # regenerate CATALOG.md
node src/gen-page.mjs     # regenerate index.html
```

`validate.mjs` enforces [SPEC.md](src/SPEC.md) mechanically: entry counts per category,
the exact line format, globally unique slugs, and one-sentence descriptions of 14–24 words
that start with a verb and avoid marketing adjectives.

## Roadmap

- [x] Taxonomy — 35 categories, fixed counts summing to 1000
- [x] Catalog — 1000 names and briefs, validated and deduplicated
- [ ] Review pass — cut, merge, and rewrite entries that do not earn their slot
- [ ] Implementation — turn accepted entries into real `SKILL.md` directories
- [ ] Packaging — bundle by category as installable plugins

## License

Apache License 2.0. See [LICENSE](LICENSE).

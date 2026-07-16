# Claude Skills Catalog — Authoring Spec

You are writing entries for a 1000-skill catalog that will become a public GitHub repo.
Every entry is a candidate skill: a `name` and a one-sentence `description`.
Read this whole file before writing anything.

---

## 1. What a Claude Skill actually is

A Skill is a directory containing `SKILL.md`: YAML frontmatter (`name`, `description`)
plus a body of procedural instructions that Claude loads **on demand** when a task matches
the description. It can bundle reference files (schemas, regulations, API tables) and
executable scripts.

A skill is worth building **only** if it carries knowledge Claude does not reliably have or
apply by default. Valid shapes:

- a repeatable multi-step workflow where the **order matters**
- a checklist that prevents specific, nameable mistakes
- a house convention or standard that must be applied **consistently** across runs
- domain reference material Claude would otherwise hallucinate (formats, schemas, laws, limits)
- a wrapper around a script or tool with non-obvious invocation

## 2. The quality test — apply to EVERY entry

> "Would a competent Claude with **no skill loaded** already do this correctly and
> consistently?"

If **yes** → reject the idea. A skill must add procedure, constraints, reference data, or
tooling that measurably changes the outcome.

Reject ideas that are merely:

- **"Write X code" / "Explain X"** — Claude already does this
- **A restatement of a tool's docs** with no workflow attached
- **A synonym** of another entry in this catalog
- **Too broad to have a procedure** — "be a good engineer", "help with backend"
- **A single function call** dressed up as a skill

## 3. Naming rules

- `kebab-case`, 2–4 words, **globally unique** across all 1000 entries
- Pattern: `<domain>-<object>-<role>` → `postgres-index-tuner`, `csp-header-builder`
- Role suffixes that read well: `-auditor`, `-builder`, `-designer`, `-migrator`,
  `-profiler`, `-reviewer`, `-tuner`, `-generator`, `-triager`, `-planner`, `-hardener`,
  `-analyzer`, `-validator`, `-writer`, `-mapper`, `-linter`, `-debugger`, `-optimizer`
- Vary the suffixes. Do not end 30 entries in a row with `-reviewer`.
- No version numbers, no years, no vendor trademarks you are not sure exist.

## 4. Description rules

- **Exactly one sentence.** 14–24 words. Ends with a period.
- Must convey **(a)** what it produces or does and **(b)** the trigger — when Claude reaches
  for it.
- Concrete. Name real tools, standards, and formats where relevant.
- **Start with a verb.** Never "This skill…", never "A skill that…".
- No marketing adjectives: banned — *powerful, amazing, comprehensive, seamless, robust,
  cutting-edge, best-in-class, ultimate*.
- English only.

**GOOD**

```
- `postgres-index-tuner` — Reads EXPLAIN ANALYZE output, finds missing or redundant indexes, and emits migration SQL when a query misses its latency budget.
```

**BAD**

```
- `postgres-helper` — A powerful skill that helps you with all your PostgreSQL needs.
```

(vague, no procedure, marketing words, no concrete trigger)

## 5. Output format — EXACT, machine-parsed

Write **only** this to your assigned file. Nothing before, nothing after.

```
## <Category Name>

- `slug-one` — Description sentence.
- `slug-two` — Description sentence.
```

- Backticks around the slug.
- An **em dash** (`—`, U+2014) with a single space on each side, between slug and description.
- One entry per line. No blank lines between entries. No numbering. No sub-headings.
- No commentary, no trailing notes, no "Here are the skills:".
- The entry count must match your assignment **exactly**.

## 6. Anti-duplication

You own your category only. Another agent owns each neighbouring category and is writing at
the same time. Stay inside your lane:

- If an idea's centre of gravity belongs to another category, **drop it** — don't hedge.
- Do not produce near-synonyms inside your own list either (`api-docs-writer` +
  `api-documentation-generator` = one idea, not two).
- When two of your ideas overlap, keep the more specific one and replace the other.

### Category map — full catalog

| # | Category | Owns | Explicitly NOT yours |
|---|----------|------|----------------------|
| 01 | Languages & Runtimes | language idioms, type systems, memory models, runtime/GC/concurrency semantics, stdlib depth, per-language migration | frameworks (02/03), build tools (14) |
| 02 | Frontend & Web UI | React/Svelte/Vue/Solid/Astro/Qwik/Angular/HTMX, rendering, state, forms, routing, browser APIs, CSS engineering | visual design (24), a11y (16), web perf (09) |
| 03 | Backend, APIs & Services | REST/GraphQL/gRPC/tRPC, auth flows, webhooks, queues, caching, rate limits, idempotency, service design | DB internals (04), infra (05/06), architecture (10) |
| 04 | Databases & Data Modeling | schema design, indexing, query plans, migrations, transactions, replication, Postgres/MySQL/SQLite/Mongo/Redis/ClickHouse | pipelines/ETL (20), analytics/BI (22) |
| 05 | DevOps, CI/CD & Release | Docker, K8s, Terraform, GitHub Actions, deploys, rollbacks, feature flags, release engineering | cloud-provider specifics (06), observability (09) |
| 06 | Cloud & Platform Engineering | AWS/GCP/Azure/Cloudflare/Vercel/Fly/Supabase specifics, IAM, cost, serverless, edge, multi-region | generic CI/CD (05), monitoring (09) |
| 07 | Security & AppSec | OWASP, threat modeling, secrets, crypto, authz, supply chain, SAST/DAST, incident response | infra hardening as deploy config (05) |
| 08 | Testing & QA | unit/integration/E2E, property-based, fuzz, mutation, contract, snapshot, flake, coverage, test data | load/perf testing (09), code quality (13) |
| 09 | Performance & Observability | profiling, tracing, metrics, logging, SLO, Core Web Vitals, load testing, memory/CPU, cost-of-latency | correctness testing (08) |
| 10 | Architecture & System Design | ADRs, boundaries, DDD, event-driven, CQRS, monolith/microservice, scaling, resilience, capacity | code-level refactors (13), API surface (03) |
| 11 | Mobile & Cross-Platform | iOS/Swift, Android/Kotlin, Flutter, React Native, Expo, Tauri, Electron, store release, offline, push | web frontend (02) |
| 12 | Git & Code Collaboration | branching, rebase, merge conflicts, bisect, history surgery, PR review, monorepo VCS, commit hygiene | CI pipelines (05) |
| 13 | Code Quality & Refactoring | dead code, duplication, complexity, naming, lint/format rules, legacy strangling, type-tightening | tests (08), architecture (10) |
| 14 | Developer Tooling & Build Systems | bundlers, compilers, package managers, monorepo tooling, codegen, CLI/DX, editor/LSP, dependency mgmt | CI (05), language semantics (01) |
| 15 | Systems, Embedded & Low-Level | C/C++/Rust systems, kernels, drivers, RTOS, firmware, networking stack, protocols, hardware/IoT | app backend (03) |
| 16 | Accessibility Engineering | WCAG, ARIA, screen readers, keyboard nav, contrast, reduced motion, a11y testing | general UX (25) |
| 17 | Localization & i18n | translation pipelines, ICU/plurals, RTL, locale formatting, l10n QA, currency/date | content writing (30) |
| 18 | AI & LLM Engineering | prompting, RAG, evals, fine-tuning, embeddings, guardrails, token/cost, inference serving | agents/MCP (19), classical ML (21) |
| 19 | Agents, MCP & Claude Code Tooling | agent loops, MCP servers, tool design, subagents, hooks, skills-about-skills, sandboxing, memory | model-level LLM work (18) |
| 20 | Data Engineering & Pipelines | ETL/ELT, dbt, Airflow, Kafka, Spark, warehouses, CDC, data quality, lakehouse | BI dashboards (22), DB internals (04) |
| 21 | Machine Learning & Data Science | feature engineering, training, model eval, PyTorch/sklearn, MLOps, drift, statistics, experiment design | LLM-specific work (18) |
| 22 | Analytics, BI & Reporting | product analytics, dashboards, metric definitions, cohorts, funnels, SQL for analysts, attribution | marketing execution (28) |
| 23 | Research & Synthesis | source triage, citation discipline, literature review, competitive/market scans, fact-check, briefs | data analysis (21/22) |
| 24 | Design Systems & Visual Design | tokens, typography, color, spacing, components, motion, brand, Figma ops, icons | UX process (25), a11y (16) |
| 25 | UX Research & Product Design | interviews, usability tests, journey maps, IA, personas, wireframes, service design | visual craft (24) |
| 26 | Product & Project Management | PRDs, roadmaps, OKRs, prioritization, sprints, estimation, stakeholder comms, launch | design (24/25), business ops (31) |
| 27 | Technical Writing & Documentation | API docs, READMEs, ADR writing, changelogs, tutorials, runbooks, style guides, doc IA | marketing copy (28) |
| 28 | Marketing, SEO & Growth | SEO, content marketing, ads, email, CRO, landing pages, growth loops, positioning | sales process (29), analytics (22) |
| 29 | Sales, CRM & Customer Success | pipeline, outreach, proposals, demos, onboarding, churn, support ops, QBRs | marketing (28) |
| 30 | Content, Media & Creative Production | video, audio, podcast, image, scripts, editing, social formats, storytelling craft | marketing strategy (28) |
| 31 | Business, Finance & Legal Ops | contracts, pricing, invoicing, cap tables, budgets, compliance, vendor mgmt, entity ops | product mgmt (26) |
| 32 | Personal Productivity & Life Ops | inbox, calendar, notes, tasks, habits, reading, travel, home admin, focus | team process (33) |
| 33 | Career, Hiring & Team Ops | resumes, interviews, leveling, onboarding, 1:1s, performance, team rituals, comp | personal ops (32) |
| 34 | Automation & Integrations | n8n/Zapier, browser automation, scraping, scripting, cron, webhooks glue, file/OS automation | CI/CD (05), MCP (19) |
| 35 | Domain Verticals | fintech, healthcare, e-commerce, real estate, logistics, gaming, legal tech, edtech, govtech, energy | horizontal tech (01–21) |

## 7. Spread inside your category

Do not cluster all entries on one sub-topic. Cover your category's real surface area:
different tools, different lifecycle stages (design → build → test → operate → migrate),
different seniority levels (mechanical chores → judgement-heavy calls).

Aim for roughly:

- **~55%** workflow/checklist skills (the bread and butter)
- **~25%** reference-material skills (formats, standards, limits Claude would hallucinate)
- **~20%** script/tool-wrapper skills (something executable ships with it)

## 8. Final self-check before you write the file

1. Entry count matches the assignment exactly?
2. Every slug unique within your file, and none obviously owned by another category?
3. Every description exactly one sentence, 14–24 words, starts with a verb, no banned adjectives?
4. Every entry passes the quality test in §2?
5. Format byte-exact per §5 — backticks, em dash, one line per entry, no extra prose?

# Claude Skills — A Catalog of 1000

A proposed catalog of **1000 Claude Skills**, spread across **35 categories**.
Each entry is a candidate skill: a name and a one-sentence brief describing what it does
and when Claude should reach for it.

> **Status: catalog only.** These are specifications, not implementations. Nothing here
> is built yet. See [Selection criteria](#selection-criteria) for what earned a slot.

## Contents

### Engineering — 560 skills

| # | Category | Skills |
|---|----------|-------:|
| 01 | [Languages & Runtimes](#01--languages--runtimes) | 40 |
| 02 | [Frontend & Web UI](#02--frontend--web-ui) | 40 |
| 03 | [Backend, APIs & Services](#03--backend-apis--services) | 40 |
| 04 | [Databases & Data Modeling](#04--databases--data-modeling) | 40 |
| 05 | [DevOps, CI/CD & Release](#05--devops-cicd--release) | 40 |
| 06 | [Cloud & Platform Engineering](#06--cloud--platform-engineering) | 35 |
| 07 | [Security & AppSec](#07--security--appsec) | 40 |
| 08 | [Testing & QA](#08--testing--qa) | 40 |
| 09 | [Performance & Observability](#09--performance--observability) | 35 |
| 10 | [Architecture & System Design](#10--architecture--system-design) | 35 |
| 11 | [Mobile & Cross-Platform](#11--mobile--cross-platform) | 30 |
| 12 | [Git & Code Collaboration](#12--git--code-collaboration) | 30 |
| 13 | [Code Quality & Refactoring](#13--code-quality--refactoring) | 30 |
| 14 | [Developer Tooling & Build Systems](#14--developer-tooling--build-systems) | 30 |
| 15 | [Systems, Embedded & Low-Level](#15--systems-embedded--low-level) | 25 |
| 16 | [Accessibility Engineering](#16--accessibility-engineering) | 15 |
| 17 | [Localization & i18n](#17--localization--i18n) | 15 |

### AI & Data — 190 skills

| # | Category | Skills |
|---|----------|-------:|
| 18 | [AI & LLM Engineering](#18--ai--llm-engineering) | 40 |
| 19 | [Agents, MCP & Claude Code Tooling](#19--agents-mcp--claude-code-tooling) | 35 |
| 20 | [Data Engineering & Pipelines](#20--data-engineering--pipelines) | 30 |
| 21 | [Machine Learning & Data Science](#21--machine-learning--data-science) | 35 |
| 22 | [Analytics, BI & Reporting](#22--analytics-bi--reporting) | 25 |
| 23 | [Research & Synthesis](#23--research--synthesis) | 25 |

### Product, Design & Business — 250 skills

| # | Category | Skills |
|---|----------|-------:|
| 24 | [Design Systems & Visual Design](#24--design-systems--visual-design) | 28 |
| 25 | [UX Research & Product Design](#25--ux-research--product-design) | 18 |
| 26 | [Product & Project Management](#26--product--project-management) | 24 |
| 27 | [Technical Writing & Documentation](#27--technical-writing--documentation) | 22 |
| 28 | [Marketing, SEO & Growth](#28--marketing-seo--growth) | 28 |
| 29 | [Sales, CRM & Customer Success](#29--sales-crm--customer-success) | 16 |
| 30 | [Content, Media & Creative Production](#30--content-media--creative-production) | 22 |
| 31 | [Business, Finance & Legal Ops](#31--business-finance--legal-ops) | 22 |
| 32 | [Personal Productivity & Life Ops](#32--personal-productivity--life-ops) | 18 |
| 33 | [Career, Hiring & Team Ops](#33--career-hiring--team-ops) | 14 |
| 34 | [Automation & Integrations](#34--automation--integrations) | 18 |
| 35 | [Domain Verticals](#35--domain-verticals) | 20 |

## Selection criteria

A skill earns a slot only if it carries knowledge Claude does not reliably have or apply
by default. Every entry is one of:

- a repeatable multi-step workflow where the **order matters**
- a checklist that prevents specific, nameable mistakes
- a house convention that must be applied **consistently** across runs
- reference material Claude would otherwise hallucinate (formats, standards, limits)
- a wrapper around a script or tool with non-obvious invocation

Ideas rejected on principle: *"write X code"*, *"explain X"*, restatements of a tool's
own docs, and anything too broad to have a procedure.

The intended mix is roughly **55%** workflow skills, **25%** reference skills, and
**20%** skills that ship something executable.

---

# Engineering

*Building, shipping, and operating software. — 560 skills.*

## 01 · Languages & Runtimes

*40 skills*

- `ts-type-narrowing-debugger` — Traces why TypeScript control-flow analysis widens a union, then fixes guards, discriminants, and assertion signatures to restore narrowing.
- `ts-generic-variance-designer` — Designs generic signatures with correct variance, conditional types, and inference sites when a library API leaks `any` or breaks inference.
- `ts-strict-mode-migrator` — Enables TypeScript strict flags one at a time, measures error fallout per flag, and stages the fixes across incremental pull requests.
- `js-event-loop-tracer` — Maps microtask, macrotask, and timer ordering to explain surprising async output, starvation, or unhandled rejection timing in Node and browsers.
- `esm-cjs-interop-resolver` — Diagnoses `ERR_REQUIRE_ESM`, dual-package hazards, and default-export mismatches, then picks a conditional exports map satisfying both module systems.
- `python-gil-workload-router` — Decides between threads, `multiprocessing`, asyncio, or free-threaded builds by classifying a workload's GIL contention and serialization cost.
- `python-typing-adoption-planner` — Adds type hints to untyped Python incrementally, choosing mypy or pyright strictness per module and writing stubs for untyped dependencies.
- `python-asyncio-blocking-auditor` — Finds synchronous calls blocking the event loop, misused `run_in_executor`, and unawaited coroutines, then rewrites them with structured concurrency.
- `python-deprecation-triager` — Triages DeprecationWarnings and removed stdlib modules when moving between CPython releases, then patches each breakage in dependency order.
- `rust-ownership-refactorer` — Rewrites code the borrow checker rejects, choosing between lifetimes, split borrows, interior mutability, or restructured ownership instead of reflexive cloning.
- `rust-unsafe-soundness-auditor` — Audits `unsafe` blocks for aliasing, alignment, and validity violations, runs Miri, and writes the `# Safety` contract each call site requires.
- `rust-async-cancellation-auditor` — Finds futures dropped at await points that lose state, then fixes `Send` bounds, cancellation safety, and blocking calls inside Tokio tasks.
- `rust-macro-expansion-debugger` — Debugs declarative and procedural macros with `cargo expand`, fixing hygiene collisions, token-stream spans, and errors that point at generated code.
- `go-goroutine-leak-hunter` — Finds goroutines blocked on channels or missing context cancellation using pprof and goleak, then repairs the lifecycle that never terminates.
- `go-error-wrapping-linter` — Enforces `errors.Is` and `errors.As` over string matching, adds `%w` wrapping at real boundaries, and strips redundant error decoration.
- `go-generics-constraint-designer` — Decides when type parameters beat interfaces, writes constraint sets with `~` approximation, and works around inference limits forcing explicit instantiation.
- `java-virtual-thread-migrator` — Converts thread-pool and reactive code to virtual threads, finding pinning from `synchronized` blocks and native calls that block carrier threads.
- `jvm-gc-tuner` — Picks between G1, ZGC, Shenandoah, or Parallel from allocation rate and pause targets, then sets heap flags and reads GC logs.
- `csharp-nullable-annotation-migrator` — Turns on nullable reference types per project, resolves the resulting warnings, and annotates public APIs without scattering null-forgiving operators.
- `dotnet-async-deadlock-debugger` — Diagnoses `ConfigureAwait`, sync-over-async, and `ValueTask` misuse that deadlocks or starves the thread pool in .NET applications.
- `kotlin-coroutine-scope-auditor` — Fixes structured-concurrency leaks from `GlobalScope`, wrong dispatchers, and swallowed `CancellationException` across suspend functions, flows, and lifecycle-bound scopes.
- `kotlin-java-interop-designer` — Adds `@JvmStatic`, `@JvmOverloads`, and platform-type null guards so mixed Kotlin and Java modules compile cleanly with an idiomatic Java surface.
- `swift-concurrency-migrator` — Moves callback and GCD code to async/await with actors, resolving `Sendable` conformance errors and data-race warnings under strict concurrency checking.
- `swift-arc-cycle-breaker` — Traces retain cycles through closures, delegates, and `Task` captures, then applies `weak` or `unowned` capture lists without introducing crashes.
- `ruby-method-lookup-tracer` — Traces Ruby method resolution through singleton classes, prepended modules, and refinements to explain why an unexpected implementation wins the ancestor chain.
- `php-version-upgrade-planner` — Maps deprecations and breaking changes across PHP releases, applies Rector rule sets, and orders fixes so each step stays deployable.
- `beam-process-memory-profiler` — Explains per-process heaps, refc binary sharing, and mailbox growth, then fixes memory blowups in long-lived Elixir or Erlang processes.
- `scala-implicit-resolution-tracer` — Explains why a given or implicit fails to resolve or picks the wrong instance, then restructures the typeclass hierarchy deterministically.
- `zig-allocator-strategy-planner` — Picks arena, GPA, fixed-buffer, or page allocators per call site and threads `errdefer` cleanup through Zig code that must not leak.
- `haskell-space-leak-fixer` — Locates thunk buildup with heap profiling, then applies strict folds, bang patterns, and `seq` to bound memory in lazy code.
- `lua-c-api-mapper` — Balances the Lua C API stack, defines userdata metatables, and handles `lua_error` longjmp semantics when embedding an interpreter in a host program.
- `bash-strict-mode-hardener` — Applies `set -euo pipefail`, IFS discipline, and quoting fixes, then explains where strict mode silently changes an existing script's behavior.
- `posix-shell-portability-validator` — Flags bashisms, GNU-only flags, and `/bin/sh` assumptions with shellcheck, then rewrites the script to run on dash, BusyBox, and macOS.
- `ffi-boundary-designer` — Designs FFI layers across the C ABI, JNI, PyO3, cgo, or N-API, pinning ownership, string encoding, and exception translation per crossing.
- `memory-model-reasoner` — Explains acquire/release, sequential consistency, and data-race rules for a target language, then picks the weakest atomic ordering that stays correct.
- `language-port-planner` — Plans a port between languages by mapping idioms, error models, and concurrency primitives, then sequencing an incremental migration with parity tests.
- `exception-safety-auditor` — Audits cleanup paths across try/finally, `defer`, RAII, and context managers, finding resources leaked when an error unwinds mid-operation.
- `pattern-matching-refactorer` — Converts nested conditionals and visitor classes into exhaustive pattern matches using the target language's match, switch, or destructuring syntax.
- `regex-engine-dialect-mapper` — Maps regex syntax across PCRE, RE2, ECMAScript, Python `re`, and POSIX, flagging features that silently change behavior or backtrack catastrophically.
- `numeric-precision-auditor` — Finds overflow, float precision loss, and rounding-mode differences in a language's numeric types, then picks decimal, bigint, or checked arithmetic.

## 02 · Frontend & Web UI

*40 skills*

- `rsc-boundary-planner` — Draws the server/client boundary in React Server Components when a tree mixes data access with interactivity, checking prop serializability and leaf placement.
- `hydration-mismatch-debugger` — Traces SSR hydration mismatches to dates, locales, randomness, or browser-only globals by diffing server markup against the first client render.
- `streaming-suspense-planner` — Places Suspense boundaries for streaming SSR when a route waterfalls on slow data, staging shell markup, flush order, and selective hydration.
- `astro-island-strategist` — Assigns Astro `client:load`, `client:idle`, `client:visible`, and `client:only` directives per island when a page mixes static content with widgets.
- `isr-revalidation-planner` — Plans Next.js incremental static regeneration when content outpaces builds, choosing revalidate windows, cache tags, on-demand invalidation, and stale-while-revalidate fallbacks.
- `qwik-resumability-auditor` — Audits Qwik components for resumability breaks such as unserializable closure captures, missing `$` boundaries, and eager imports that force hydration.
- `next-app-router-migrator` — Moves Next.js Pages Router routes to the App Router, porting `getServerSideProps`, `_app` layouts, API routes, metadata, and middleware in dependency order.
- `sveltekit-load-designer` — Chooses between SvelteKit universal and server `load` functions, wiring parent data, `depends` keys, invalidation, and streamed promises for each route.
- `svelte-runes-migrator` — Converts Svelte stores, reactive statements, and `export let` props onto runes, mapping each to `$state`, `$derived`, `$effect`, or `$props`.
- `nuxt-data-fetch-selector` — Picks between Nuxt `useFetch`, `useAsyncData`, and `$fetch` per call site, fixing duplicate requests, payload hydration, and unstable cache keys.
- `vue-composition-migrator` — Ports Vue Options API components to Composition API with `<script setup>`, converting mixins, filters, event buses, and `v-model` contracts.
- `solid-reactivity-debugger` — Finds lost SolidJS reactivity from destructured props, early signal reads, and untracked effects, then restores tracking without adding wrapper components.
- `angular-signals-migrator` — Migrates Angular RxJS-based components to signals and standalone bootstrapping, replacing NgModules, async pipes, and zone-triggered change detection step by step.
- `remix-route-module-designer` — Structures Remix and React Router route modules: nested layouts, loaders, actions, deferred data, and error boundaries that survive partial failures.
- `htmx-swap-designer` — Defines an htmx contract of `hx-target`, `hx-swap`, out-of-band fragments, and `hx-boost` history so server templates stay the single source of truth.
- `custom-element-interop-bridger` — Wraps custom elements for React, Vue, or Svelte, mapping attributes versus properties, custom events, refs, and SSR fallbacks for undefined elements.
- `shadow-dom-style-planner` — Plans shadow DOM styling for Lit or vanilla custom elements using `:host`, `::part`, `::slotted`, adopted stylesheets, and custom properties that pierce.
- `server-state-cache-tuner` — Tunes TanStack Query or SWR cache keys, `staleTime`, and invalidation so refetches stop thrashing and mutations settle the right queries.
- `client-server-state-mapper` — Classifies each piece of UI state as server cache, client store, URL, or form state, then deletes stores mirroring server data.
- `store-tearing-auditor` — Audits external stores (Zustand, Redux, custom emitters) for concurrent-rendering tearing, verifying `useSyncExternalStore` subscriptions and stable snapshot identity.
- `url-search-state-mapper` — Moves filters, sort, pagination, and tabs into typed URL search params with parsers, defaults, and history modes that survive back navigation.
- `form-state-machine-designer` — Models form state explicitly in React Hook Form or TanStack Form: validation timing, dirty tracking, async checks, field arrays, and submit errors.
- `progressive-form-enhancer` — Builds forms that submit without JavaScript first, then layers enhancement via SvelteKit form actions, Next server actions, or htmx swaps.
- `optimistic-ui-designer` — Applies optimistic mutations via `useOptimistic` or TanStack Query with snapshot, rollback, and reconciliation rules for actions rendered before server confirmation.
- `scroll-restoration-fixer` — Restores scroll position across client-side back and forward navigation, handling nested scroll containers, late-loading content, and router-managed history entries.
- `cascade-layers-architect` — Orders CSS with `@layer` (reset, base, components, utilities, overrides) so third-party styles and utility classes stop fighting specificity with `!important`.
- `container-query-converter` — Replaces viewport media queries with container queries, declaring containment contexts, container units, and fallbacks so components respond to their own slot.
- `tailwind-convention-linter` — Enforces Tailwind or UnoCSS house rules: class order, arbitrary-value budget, `@apply` policy, variant naming, and safelist entries for dynamic classes.
- `css-runtime-migrator` — Migrates styled-components or Emotion runtime CSS to vanilla-extract, Panda, or Tailwind when a codebase adopts React Server Components, porting themes and dynamic props.
- `stacking-context-debugger` — Diagnoses z-index failures by mapping stacking contexts created by `transform`, `filter`, `opacity`, `will-change`, containment, and position, then proposes minimal fixes.
- `top-layer-overlay-builder` — Rebuilds modals, dropdowns, and tooltips on native `<dialog>`, the Popover API, and CSS anchor positioning, with fallbacks for unsupported browsers.
- `list-virtualization-builder` — Virtualizes long lists and grids with TanStack Virtual, handling dynamic row heights, sticky headers, scroll anchoring, and remeasurement after data changes.
- `drag-drop-surface-builder` — Builds drag-and-drop with dnd-kit or the native HTML drag API, defining sensors, drop targets, collision detection, autoscroll, and reorder persistence.
- `rich-text-editor-integrator` — Integrates TipTap, ProseMirror, or Lexical: document schema, paste sanitization, serialization to storage format, custom nodes, and controlled React interop.
- `canvas-render-loop-builder` — Scaffolds canvas and WebGL surfaces with device-pixel-ratio scaling, ResizeObserver sizing, `requestAnimationFrame` loops, context-loss recovery, and teardown on unmount.
- `view-transition-choreographer` — Wires View Transitions for same-document router swaps and cross-document navigation, naming transition elements and gating animation behind capability checks.
- `service-worker-strategist` — Chooses service worker caching strategies per route and asset with Workbox, planning precache manifests, update prompts, and safe unregistration paths.
- `browser-storage-strategist` — Picks localStorage, IndexedDB, Cache API, or cookies per dataset, accounting for quota, eviction, sync versus async access, and server-render safety.
- `component-port-planner` — Ports components between React, Svelte, Vue, and Solid by mapping lifecycle, reactivity, slots, and context idioms before rewriting any markup.
- `compound-component-designer` — Designs component APIs: controlled versus uncontrolled state, compound children sharing context, polymorphic `as` props, and slot contracts that stay type-safe.

## 03 · Backend, APIs & Services

*40 skills*

- `openapi-drift-detector` — Compares implemented routes against the OpenAPI document and reports undocumented endpoints, stale schemas, and response codes handlers actually return.
- `api-breaking-change-detector` — Diffs two contract versions with oasdiff or buf, classifies each change as breaking or additive, and fails CI on undeclared breaks.
- `client-sdk-generator` — Generates typed client SDKs from OpenAPI or protobuf specs, wiring pagination helpers, retry policy, and token refresh into every release.
- `api-error-taxonomy-builder` — Builds a stable error code catalog mapped onto HTTP statuses and RFC 9457 problem+json bodies, marking each code retryable or terminal.
- `etag-precondition-wirer` — Adds ETag generation and If-Match handling to mutating endpoints so concurrent writers receive 412 instead of silently clobbering each other.
- `graphql-dataloader-wirer` — Wires DataLoader batching into GraphQL resolvers, collapsing per-field fan-out into batched loads with request-scoped caches and correct key ordering.
- `graphql-cost-limiter` — Caps query depth and complexity with static cost analysis, persisted query allowlists, and per-client budgets enforced before any resolver runs.
- `proto-schema-designer` — Designs protobuf messages and services with safe field numbering, reserved ranges, and oneof usage that keeps the wire format backward compatible.
- `grpc-streaming-designer` — Designs unary, server, and bidirectional gRPC calls with deadlines, keepalive settings, flow control, and cancellation that reaches the handler.
- `trpc-router-organizer` — Splits tRPC routers by domain, types the request context, chains auth middleware, and maps thrown errors onto stable client-facing codes.
- `oauth-grant-selector` — Picks the right OAuth 2.0 grant per client type, mandating PKCE and rejecting implicit and password grants per the Security BCP.
- `oidc-token-validator` — Validates ID tokens against issuer, audience, nonce, and signature, caching JWKS with rotation and clock-skew tolerance instead of trusting decoded claims.
- `passkey-ceremony-wirer` — Implements WebAuthn registration and authentication ceremonies with server-stored challenges, correct relying party IDs, user verification policy, and discoverable credentials.
- `refresh-token-rotator` — Rotates refresh tokens on every use, detects replay of a retired token, and revokes the whole token family when reuse appears.
- `session-cookie-hardener` — Sets session cookie attributes, __Host- prefixes, idle and absolute lifetimes, and rotation on privilege change to close fixation and CSRF gaps.
- `api-key-lifecycle-manager` — Issues, scopes, hashes, and rotates API keys with searchable prefixes, last-used tracking, and one-click revocation when a key leaks publicly.
- `webhook-signature-verifier` — Verifies inbound webhook signatures using timestamped HMAC schemes, constant-time comparison, replay windows, and the raw body before any JSON parsing.
- `webhook-delivery-retrier` — Builds outbound webhook delivery with exponential backoff, jitter, attempt logs, endpoint auto-disable after repeated failures, and manual replay from the dashboard.
- `payment-webhook-reconciler` — Handles payment provider events idempotently, tolerating out-of-order and duplicate delivery, and reconciles local state against the provider API as truth.
- `dead-letter-queue-triager` — Groups dead-letter messages by failure signature, separates poison payloads from transient outages, and replays the recoverable ones after the fix ships.
- `queue-backpressure-tuner` — Tunes consumer concurrency, prefetch, and visibility timeouts against queue lag, adding load shedding before the worker pool drowns in redeliveries.
- `outbox-pattern-implementer` — Replaces dual writes with a transactional outbox and relay so committed state changes still publish their events when the broker is down.
- `job-status-endpoint-builder` — Turns slow endpoints into 202 responses with a status resource carrying progress, terminal states, cancellation, and a result link clients can poll.
- `cron-schedule-planner` — Writes cron schedules that survive DST and leap days, adds distributed locks against overlapping runs, and sets catch-up policy for missed executions.
- `cache-invalidation-planner` — Designs cache key namespaces, TTL versus event-driven invalidation, negative caching, and single-flight guards that stop stampedes when a hot key expires.
- `http-cache-header-writer` — Chooses Cache-Control directives, Vary, and stale-while-revalidate values per endpoint so shared caches never serve one user's private response to another.
- `rate-limit-algorithm-selector` — Compares token bucket, sliding window, and GCRA for a given traffic shape, then emits limiter config plus 429 responses with Retry-After.
- `cursor-pagination-builder` — Replaces offset paging with opaque keyset cursors, stable sort tiebreakers, and bidirectional page info that stays correct while rows are inserted.
- `bulk-endpoint-designer` — Designs batch endpoints with per-item results, partial failure reporting, size caps, and idempotent semantics instead of failing everything on one bad row.
- `api-version-strategist` — Chooses between URI, header, and media type versioning, defines the support window, and decides which changes justify a new major version.
- `api-deprecation-scheduler` — Plans endpoint retirement with Deprecation and Sunset headers, usage telemetry gates, consumer notice timelines, and a dated brownout schedule before removal.
- `tenant-isolation-auditor` — Traces tenant context from request to storage, flagging queries, caches, and background jobs that can leak one tenant's rows to another.
- `websocket-protocol-designer` — Defines a WebSocket message envelope with heartbeats, resume tokens, per-connection backpressure, and an auth handshake that survives reconnects and proxy timeouts.
- `sse-stream-builder` — Streams server-sent events with correct framing, event ids for Last-Event-ID resume, retry hints, and headers that stop proxies from buffering.
- `presigned-upload-designer` — Moves uploads off the API with presigned URLs, enforcing size, content type, and expiry constraints, then confirming the object before linking it.
- `resumable-upload-implementer` — Implements chunked resumable uploads with the tus protocol or multipart parts, checksum verification, offset recovery, and cleanup of abandoned sessions.
- `transactional-email-dispatcher` — Sends transactional email idempotently, respects suppression lists, ingests bounce and complaint webhooks, and verifies SPF, DKIM, and DMARC alignment before launch.
- `sms-delivery-router` — Normalizes numbers to E.164, counts GSM-7 versus UCS-2 segments, handles STOP opt-outs, and processes delivery receipts across per-country sender rules.
- `bff-aggregation-composer` — Composes a backend-for-frontend endpoint that fans out to upstream services in parallel, degrades on partial failure, and returns what the screen needs.
- `idempotency-key-enforcer` — Implements Idempotency-Key handling with request fingerprinting, stored responses, concurrent-duplicate locking, and a retention window so retried POSTs never double-charge.

## 04 · Databases & Data Modeling

*40 skills*

- `schema-normalization-auditor` — Detects update anomalies and denormalization debt in a live schema, then proposes a 3NF or BCNF decomposition with migration steps.
- `jsonb-document-modeler` — Decides which fields stay relational versus JSONB in Postgres, then picks GIN, jsonb_path_ops, or expression indexes to match query shapes.
- `temporal-history-designer` — Builds system-versioned audit tables with triggers, tstzrange validity columns, and exclusion constraints when history must be queryable as of any timestamp.
- `soft-delete-designer` — Adds deleted_at semantics with partial unique indexes, filtered views, and cascade rules so archived rows stop leaking into queries.
- `primary-key-strategist` — Compares bigint identity, UUIDv4, UUIDv7, and ULID keys on index locality, page splits, and replication before a table exists.
- `multi-tenant-schema-planner` — Chooses shared-table, schema-per-tenant, or database-per-tenant isolation and maps the migration, backup, and noisy-neighbour cost of each.
- `check-constraint-auditor` — Finds business invariants enforced only in application code and emits CHECK, EXCLUDE, domain, and generated-column constraints that push them into the schema.
- `mongo-document-modeler` — Decides embed versus reference per relationship in MongoDB using access patterns, document growth, and the 16MB limit.
- `cassandra-partition-designer` — Derives Cassandra partition and clustering keys from query shapes, then flags wide rows, tombstone risk, and hot partitions.
- `postgres-index-tuner` — Reads EXPLAIN ANALYZE output, finds missing or redundant indexes, and emits migration SQL when a query misses its latency budget.
- `index-bloat-rebuilder` — Measures index bloat with pgstattuple, runs REINDEX CONCURRENTLY in safe order, and cleans up INVALID indexes left by failed rebuilds.
- `mysql-innodb-index-advisor` — Tunes InnoDB clustered keys, secondary-index primary-key suffixes, and prefix indexes, reading EXPLAIN FORMAT=JSON for filesort and temporary-table spills.
- `vector-index-tuner` — Tunes pgvector, Qdrant, or Milvus HNSW and IVFFlat parameters against a recall-versus-latency target using a measured ground-truth set.
- `explain-plan-interpreter` — Walks EXPLAIN (ANALYZE, BUFFERS) node by node to spot row-estimate misses, disk spills, and loop counts driving the real cost.
- `slow-query-triager` — Ranks pg_stat_statements or performance_schema output by total time rather than mean, then assigns each query cluster a concrete fix.
- `orm-nplus-one-detector` — Instruments query logs from Prisma, ActiveRecord, or SQLAlchemy to find N+1 loops, then prescribes eager loading or dataloader batching.
- `planner-statistics-tuner` — Fixes bad row estimates with ANALYZE targets, CREATE STATISTICS on correlated columns, and n_distinct overrides instead of reaching for query hints.
- `neo4j-cypher-profiler` — Reads Neo4j PROFILE output for AllNodesScan and cartesian products, then adds label indexes and reshapes MATCH ordering.
- `zero-downtime-migrator` — Sequences expand-migrate-contract phases so schema changes ship while old and new application versions both run against the same database.
- `migration-lock-auditor` — Flags DDL that takes ACCESS EXCLUSIVE locks or rewrites a table, and replaces it with lock_timeout-guarded two-step alternatives.
- `online-ddl-runner` — Drives gh-ost or pt-online-schema-change for MySQL ALTERs, sizing chunk, throttle, and cutover so replicas never fall behind.
- `data-backfill-batcher` — Generates a resumable keyset-paginated backfill script with batch sizing, replication-lag throttling, and progress checkpoints for billion-row tables.
- `isolation-level-selector` — Maps each required invariant to read-committed, repeatable-read, or serializable, naming the anomaly that level still allows and its retry cost.
- `deadlock-forensics-analyzer` — Parses Postgres deadlock logs or InnoDB status output to reconstruct the lock cycle and enforce one consistent acquisition order.
- `lock-contention-profiler` — Builds a blocking tree from pg_locks and pg_stat_activity to name the head blocker behind stalled writes and pile-ups.
- `vacuum-bloat-tuner` — Tunes autovacuum thresholds and cost limits from dead-tuple counts, long transactions, and xid wraparound distance before bloat stalls writes.
- `connection-pool-sizer` — Sizes PgBouncer or HikariCP pools from core count and workload mix, and flags prepared-statement breakage under transaction pooling mode.
- `replication-lag-diagnoser` — Separates write, flush, and replay lag on Postgres standbys or MySQL replicas and traces each stage to its real bottleneck.
- `pitr-restore-verifier` — Runs a timed point-in-time restore drill with pgBackRest or wal-g and reports the RPO and RTO actually achieved.
- `partition-lifecycle-manager` — Builds declarative range or hash partitions, automates detach-and-archive with pg_partman, and verifies partition pruning appears in the plan.
- `sharding-key-planner` — Picks a shard key that spreads writes evenly, bounds cross-shard joins, and leaves a resharding path before the first split.
- `rls-policy-builder` — Writes Postgres row-level security policies for tenant isolation, checks BYPASSRLS and leaky-function exposure, and measures the plan cost added.
- `redis-keyspace-designer` — Designs Redis key naming, TTLs, eviction policy, and structure choice, then hunts hot keys and unbounded collections with MEMORY USAGE.
- `postgres-fts-builder` — Builds tsvector generated columns, GIN indexes, and pg_trgm fallback ranking so full-text search stays inside Postgres instead of a separate engine.
- `elasticsearch-mapping-designer` — Designs Elasticsearch mappings, analyzers, and dynamic templates, then runs a zero-downtime reindex behind an alias swap.
- `clickhouse-mergetree-tuner` — Chooses ClickHouse ORDER BY keys, partitioning, projections, and skip indexes, and diagnoses too-many-parts errors and merge backlog.
- `sqlite-durability-tuner` — Sets SQLite journal_mode, synchronous, busy_timeout, and mmap_size for the workload, and resolves SQLITE_BUSY under concurrent writers.
- `duckdb-memory-planner` — Sizes DuckDB memory_limit, threads, and temp_directory spilling, and rewrites joins that exceed RAM on out-of-core workloads.
- `orphan-row-repairer` — Locates rows breaking an intended foreign key, scripts quarantine or repair batches, then adds the constraint using NOT VALID and VALIDATE.
- `database-seed-builder` — Generates idempotent, FK-ordered seed scripts with deterministic IDs and referentially valid fake data for local and staging databases.

## 05 · DevOps, CI/CD & Release

*40 skills*

- `dockerfile-layer-slimmer` — Restructures Dockerfiles into multi-stage builds with distroless or slim bases, cutting image size when builds ship compilers and dev dependencies.
- `docker-build-cache-tuner` — Configures BuildKit cache mounts and registry cache backends so CI rebuilds hit warm layers instead of recompiling every dependency.
- `buildx-multiarch-publisher` — Builds and pushes arm64 plus amd64 manifest lists with docker buildx, choosing native runners over QEMU emulation when build times spike.
- `container-image-tagger` — Establishes immutable tag and digest conventions across registries, replacing floating latest tags when deployments must pin exactly what was tested.
- `registry-retention-pruner` — Codifies garbage-collection and retention rules for image registries, reclaiming storage when untagged layers and stale build tags accumulate unbounded.
- `container-signal-drainer` — Fixes PID 1 signal handling, preStop hooks, and shutdown timeouts so rolling deploys drain connections instead of dropping in-flight requests.
- `ci-cache-key-designer` — Designs cache keys, restore-keys, and scope boundaries for GitHub Actions or GitLab CI when cache hit rates collapse across branches.
- `ci-matrix-build-planner` — Trims build matrices using include, exclude, and fail-fast semantics, invoked when every runtime and OS pair triggers combinatorial job explosion.
- `self-hosted-runner-operator` — Provisions and autoscales self-hosted CI runners with ephemeral workspaces and labels, replacing hosted minutes when jobs need GPUs or private networks.
- `reusable-workflow-refactorer` — Extracts duplicated CI steps into composite actions or reusable workflows with typed inputs, invoked when pipeline YAML repeats across many repositories.
- `ci-test-gate-designer` — Classifies which checks block merges versus report advisory results, applied when required status checks either wave regressions through or stall delivery.
- `gitlab-pipeline-dag-optimizer` — Rewires GitLab CI stages into needs-based DAGs with rules and parent-child pipelines, shortening wall-clock time when stages serialize unnecessarily.
- `monorepo-affected-builder` — Wires Nx or Turborepo affected graphs into CI so only packages touched by a diff rebuild and retest.
- `terraform-state-surgeon` — Performs state mv, import, and rm operations plus backend migrations, used when refactored resources would otherwise be destroyed and recreated.
- `terraform-drift-reconciler` — Detects infrastructure drift with scheduled plan runs and decides whether to import, revert, or codify changes made outside Terraform.
- `terraform-plan-reviewer` — Reads terraform plan output to flag forced replacements, destroys, and unknown-after-apply values before an apply reaches production infrastructure.
- `pulumi-stack-migrator` — Ports Terraform configurations or restructures Pulumi stacks with aliases and stack references, keeping resource URNs stable during ownership changes.
- `helm-release-upgrader` — Runs helm upgrade with atomic, wait, and timeout flags, and recovers releases stuck in pending-upgrade after a failed hook.
- `kustomize-overlay-organizer` — Structures Kustomize bases and per-environment overlays with strategic merge patches, invoked when copied manifests drift between staging and production.
- `k8s-probe-configurator` — Sets liveness, readiness, and startup probe fields with correct thresholds, called when slow-booting pods get killed or receive traffic early.
- `k8s-resource-limit-tuner` — Derives CPU and memory requests and limits from observed usage, fixing OOMKills, CPU throttling, and unstable Guaranteed or Burstable QoS classes.
- `hpa-scaling-planner` — Picks HPA or KEDA metrics, target values, and stabilization windows, applied when autoscalers flap or fail to absorb traffic spikes.
- `pod-disruption-budgeter` — Writes PodDisruptionBudgets and topology spread rules so node drains and cluster upgrades never evict every replica of a service.
- `argocd-applicationset-designer` — Generates ArgoCD ApplicationSets with cluster and git generators, replacing hand-copied Application manifests when environments or tenants multiply.
- `argocd-sync-wave-orderer` — Orders ArgoCD sync waves, hooks, and prune settings so dependencies apply before dependents and self-heal does not fight controllers.
- `blue-green-cutover-planner` — Stages blue-green cutovers across warm-up, traffic switch, session drain, and green-to-blue fallback, used when rollback must complete in seconds.
- `canary-rollout-designer` — Defines canary steps, traffic weights, and automated analysis gates for Argo Rollouts or Flagger, aborting promotion when error budgets burn.
- `rolling-update-tuner` — Computes maxSurge, maxUnavailable, and progressDeadlineSeconds against replica counts and quotas, called when rolling deploys stall or halve capacity mid-flight.
- `migration-deploy-sequencer` — Sequences expand-and-contract schema phases across releases so old and new pod versions safely share one database during a rollout.
- `deploy-smoke-gater` — Executes post-deploy smoke checks against the new revision and fails the pipeline before traffic shifts when critical paths return errors.
- `feature-flag-rollout-planner` — Plans percentage ramps, targeting rules, and kill switches in LaunchDarkly or OpenFeature, separating release toggles from experiment and ops flags.
- `feature-flag-debt-auditor` — Finds permanently-on flags and dead branches behind them, then orders removal PRs when flag counts outlive their rollout window.
- `rollback-decision-triager` — Decides between rollback, fix-forward, and flag-off during a bad deploy, weighing migration reversibility, blast radius, and time since release.
- `semantic-release-configurator` — Automates version bumps, tags, and changelog generation from conventional commits using semantic-release or Changesets across single and multi-package repositories.
- `artifact-digest-promoter` — Promotes one built artifact by digest through dev, staging, and production without rebuilding, invoked when each environment currently compiles its own image.
- `deploy-runbook-writer` — Drafts deploy runbooks with preflight checks, exact commands, verification steps, rollback triggers, and owner escalation for a specific service release.
- `oncall-handoff-writer` — Produces shift handoff notes covering in-flight deploys, active freezes, degraded services, and open follow-ups when on-call rotation changes hands.
- `preview-environment-builder` — Spins up ephemeral per-pull-request environments with seeded data and unique URLs, then tears them down and reclaims resources on merge.
- `env-parity-auditor` — Diffs staging against production configuration, image digests, replica counts, and resource limits, run before releases that staging failed to catch.
- `runtime-secret-delivery-mapper` — Maps secrets from Vault or cloud stores into pods via External Secrets, CSI driver, or sealed secrets without baking values into images.

## 06 · Cloud & Platform Engineering

*35 skills*

- `iam-policy-minimizer` — Mines CloudTrail and IAM Access Analyzer findings to shrink wildcard policies down to the actions each role actually invoked.
- `gcp-iam-binding-auditor` — Audits GCP project IAM bindings for primitive roles, unused service accounts, and long-lived keys, emitting gcloud remediation commands.
- `azure-rbac-scope-designer` — Designs Azure RBAC assignments across management group, subscription, and resource group scopes, producing custom role definitions with minimal actions.
- `workload-identity-federator` — Replaces long-lived cloud keys with OIDC workload identity federation, writing trust policies and audience conditions for CI and Kubernetes workloads.
- `aws-landing-zone-builder` — Lays out AWS Organizations OUs, service control policies, and account vending with Control Tower guardrails when bootstrapping a new landing zone.
- `azure-policy-initiative-author` — Authors Azure Policy definitions and initiatives using audit, deny, and deployIfNotExists effects, testing compliance impact before assigning them at scope.
- `cloud-cost-anomaly-triager` — Traces a bill spike to the responsible service, account, and change window using Cost Explorer or BigQuery billing exports.
- `egress-cost-mapper` — Maps inter-region, cross-AZ, and NAT gateway data paths to price egress before an architecture ships, flagging cheaper transfer routes.
- `reserved-capacity-planner` — Sizes Savings Plans, Reserved Instances, and committed use discounts from usage history, modeling coverage and break-even before any purchase.
- `idle-resource-reaper` — Finds unattached volumes, idle NAT gateways, orphaned elastic IPs, and stale snapshots that still bill, then emits a staged deletion plan.
- `vercel-usage-cost-auditor` — Attributes Vercel bill growth to image optimization, ISR writes, edge middleware invocations, or bandwidth, then applies caching and spend caps.
- `lambda-cold-start-tuner` — Cuts Lambda cold starts by right-sizing memory, trimming package size, and choosing between SnapStart, provisioned concurrency, and a leaner runtime.
- `serverless-concurrency-planner` — Sizes reserved and provisioned concurrency against downstream database connection limits, adding RDS Proxy or pooling before throttles and exhaustion hit.
- `cloudflare-workers-porter` — Ports Node.js handlers onto the Workers runtime, replacing unsupported APIs and respecting CPU time, subrequest, and isolate memory limits.
- `durable-objects-designer` — Models coordination state as Cloudflare Durable Objects, choosing ID strategy, alarms, and hibernation to avoid hot shards and runaway duration billing.
- `vercel-function-region-tuner` — Aligns Vercel serverless and edge function regions with the primary database region, removing cross-continent round trips from request paths.
- `gcp-cloud-run-tuner` — Tunes Cloud Run concurrency, min instances, and CPU allocation mode, trading cold starts against idle billing for a measured traffic shape.
- `fly-machines-scaler` — Configures Fly.io Machines autostop, region placement, and volume affinity so scale-to-zero apps wake quickly without stranding stateful data.
- `railway-private-network-wirer` — Wires Railway private networking between services with internal hostnames, IPv6 binding, and reference variables so billable public egress stops.
- `supabase-pooler-configurator` — Picks Supavisor transaction or session pooling for Supabase and sizes pool limits so serverless bursts stop exhausting Postgres connections.
- `s3-lifecycle-architect` — Designs S3 lifecycle rules and storage class transitions from access patterns, pricing Glacier retrieval and Intelligent-Tiering fees before applying them.
- `r2-migration-planner` — Plans an S3 to Cloudflare R2 move, quantifying egress savings, mapping API and feature gaps, and sequencing a dual-write cutover.
- `do-spaces-cdn-configurator` — Configures DigitalOcean Spaces with CDN endpoints, CORS rules, and custom subdomain certificates, mapping S3 API gaps before code assumes parity.
- `cdn-cache-rule-builder` — Writes CloudFront or Cloudflare cache rules with explicit cache keys, TTLs, and Vary headers so dynamic routes stop poisoning the edge.
- `netlify-redirect-linter` — Validates Netlify redirect rule files for first-match ordering, splat and placeholder syntax, and force flags before SPA routes silently break.
- `dns-cutover-planner` — Sequences a nameserver or registrar migration with TTL step-downs, record parity diffs, and a rollback window before flipping production traffic.
- `vpc-cidr-planner` — Allocates non-overlapping VPC CIDR blocks across accounts and regions, reserving ranges so later peering and Transit Gateway attachments remain possible.
- `vpc-peering-troubleshooter` — Debugs cross-VPC connectivity by walking route tables, security groups, NACLs, and DNS resolution, catching the non-transitive peering trap early.
- `private-endpoint-architect` — Replaces NAT gateway egress with VPC endpoints, PrivateLink, or Private Service Connect, weighing per-endpoint fees against saved data transfer charges.
- `multi-region-failover-drill` — Builds and rehearses a regional failover runbook with stated RTO and RPO, replication lag gates, and DNS or Global Accelerator switching.
- `sqs-dlq-triager` — Diagnoses SQS dead-letter buildup by matching visibility timeout to handler duration, then scripts a safe redrive with poison message quarantine.
- `pubsub-subscription-tuner` — Tunes Pub/Sub ack deadlines, flow control, and ordering keys, choosing push or pull delivery so redelivery storms and backlog growth stop.
- `service-quota-forecaster` — Projects launch traffic against AWS Service Quotas and GCP limits, filing increase requests early with the lead time each quota needs.
- `cloud-migration-assessor` — Maps services between AWS, GCP, and Azure for a migration, scoring lock-in, rewrite effort, and one-time egress cost per workload.
- `golden-path-template-builder` — Codifies a paved-road service template with Backstage scaffolder actions, wiring defaults for runtime, ownership, and provisioning so teams skip bespoke setup.

## 07 · Security & AppSec

*40 skills*

- `stride-threat-modeler` — Builds a data-flow diagram, enumerates STRIDE threats per element and trust boundary, and ranks mitigations before design freeze.
- `attack-tree-builder` — Decomposes an attacker goal into an attack tree, annotating each leaf with cost, skill, and detection likelihood to prioritize defenses.
- `crypto-primitive-selector` — Picks AEAD ciphers, KDFs, and signature schemes for a stated threat model, rejecting ECB, static IVs, and homegrown constructions.
- `rbac-role-designer` — Designs application role and permission matrices, collapses role explosion, and emits a deny-by-default table mapping every endpoint to required grants.
- `abac-policy-author` — Writes attribute-based authorization policies in Rego or Cedar with fixtures covering allow, deny, conflicting-rule, and missing-attribute cases.
- `rebac-relation-modeler` — Models Zanzibar-style relationship tuples for OpenFGA or SpiceDB, then validates the schema against expected check results and recursion depth limits.
- `broken-authz-auditor` — Sweeps every handler for missing object-level ownership checks, surfacing IDOR and BOLA gaps that authentication middleware silently lets through.
- `csp-policy-author` — Authors a nonce-based Content-Security-Policy, stages it through report-only collection, and folds violation reports into tightened directives without breaking the app.
- `security-headers-hardener` — Sets HSTS, Referrer-Policy, Permissions-Policy, COOP/COEP, and Set-Cookie flags to correct values, then verifies them against live production responses.
- `ssrf-defense-builder` — Adds allowlist URL validation, blocks cloud metadata and private ranges, and closes DNS rebinding and redirect-chain bypasses in outbound fetch code.
- `deserialization-risk-auditor` — Finds unsafe pickle, Java, YAML, and .NET deserialization sinks reachable from untrusted input, and replaces them with schema-bound parsers.
- `jwt-validation-hardener` — Fixes algorithm confusion, kid injection, unchecked aud and iss claims, and clock-skew handling wherever token verification runs.
- `oauth-redirect-validator` — Enforces exact redirect_uri matching, PKCE, and state binding, then replays known authorization-code interception and mix-up attacks against your own flow.
- `input-validation-schema-builder` — Places allowlist schema validation at each trust boundary, canonicalizing input once before checks so normalization gaps cannot smuggle payloads through.
- `xss-sink-tracer` — Traces untrusted values into HTML, attribute, URL, and script sinks, then applies context-correct encoding, sanitization, or Trusted Types.
- `sql-injection-auditor` — Audits every query construction site for identifier interpolation, ORM raw escapes, and second-order injection that parameterized-query habits alone miss.
- `password-storage-migrator` — Tunes Argon2id or bcrypt parameters to a latency budget and rehashes legacy digests transparently at login without forcing a password reset.
- `tls-config-hardener` — Selects protocol versions, cipher suites, and certificate validation settings, then confirms them with testssl.sh before the endpoint faces the internet.
- `secret-rotation-planner` — Sequences zero-downtime credential rotation with dual-read grace windows, revocation checkpoints, and rollback steps for keys, tokens, and certificates.
- `leaked-secret-responder` — Runs the post-leak drill for an exposed credential: revoke, rotate, hunt for abuse in logs, then scrub history and reissue.
- `semgrep-rule-writer` — Encodes house security invariants as custom Semgrep rules with taint mode, test cases, and autofix, so reviewers stop repeating the same catch.
- `sast-finding-triager` — Sorts Semgrep or CodeQL output into exploitable, unreachable, and false-positive buckets, and records suppressions with justification and expiry.
- `dast-scan-orchestrator` — Configures authenticated ZAP or Nuclei scans against a staging target, seeding session tokens and scoping rules so crawls stay inside authorized hosts.
- `secret-scanner-installer` — Wires gitleaks or TruffleHog into pre-commit and CI, backfills a full history scan, and tunes allowlists to keep the signal usable.
- `security-regression-test-writer` — Converts each fixed vulnerability into a failing-then-passing test with the original payload, so the bug cannot silently return in a refactor.
- `dependency-cve-triager` — Ranks advisory alerts by reachability, exploit maturity, and runtime exposure, then decides patch, pin, or accept with a written rationale.
- `sbom-generator` — Emits CycloneDX or SPDX inventories from lockfiles and images, fills required component fields, and attaches the SBOM to the release artifact.
- `dependency-pinning-enforcer` — Converts floating version ranges into hash-pinned lockfiles across npm, pip, and Actions, closing the window for dependency-confusion and tag-mutation attacks.
- `build-provenance-attestor` — Signs build artifacts with cosign and emits SLSA in-toto provenance, then adds a verification gate that rejects unattested images at deploy.
- `secure-review-checklister` — Applies per-language security review checklists to a diff, surfacing ecosystem traps like Python pickle, JavaScript prototype pollution, and PHP type juggling.
- `pentest-scope-planner` — Drafts rules of engagement for an authorized test: in-scope hosts, excluded actions, testing window, evidence handling, and the abort contact.
- `cvss-vector-scorer` — Builds a defensible CVSS v3.1 or v4.0 vector from a finding's real attack path, showing the reasoning behind every metric choice.
- `incident-response-planner` — Produces a security incident runbook with severity ladder, on-call roles, containment gates, evidence preservation, and communication triggers before the first alert.
- `tabletop-exercise-designer` — Scripts a tabletop scenario with timed injects, role assignments, and scoring rubric, then captures the gaps the room could not answer.
- `security-postmortem-writer` — Writes a blameless security postmortem covering detection lag, containment timeline, root cause, and the control that should have caught it.
- `breach-notification-mapper` — Maps incident facts to notification duties and clocks under GDPR, HIPAA, PCI, and state breach laws, flagging which deadline bites first.
- `vuln-disclosure-handler` — Stands up security.txt and a coordinated disclosure policy, then triages inbound reports with acknowledgement, severity, fix, and credit timelines.
- `soc2-control-mapper` — Maps SOC 2 Trust Services Criteria to concrete engineering controls and names the evidence artifact each one must produce during the audit window.
- `iso27001-soa-builder` — Drafts an ISO 27001 Statement of Applicability, justifying each Annex A control's inclusion or exclusion and linking it to implemented practice.
- `pci-scope-reducer` — Shrinks PCI DSS cardholder-data scope through tokenization, hosted fields, and network segmentation, then picks the SAQ type the design actually earns.

## 08 · Testing & QA

*40 skills*

- `test-pyramid-planner` — Allocates test cases across unit, integration, and end-to-end layers by risk, and flags inverted pyramids during suite design.
- `pairwise-combination-generator` — Reduces exponential parameter combinations to an all-pairs covering array using PICT or allpairspy when config matrices explode.
- `test-name-standardizer` — Renames tests to a given-when-then or stated-behavior convention per framework, so a failure name alone explains the regression.
- `exploratory-charter-designer` — Drafts timeboxed session-based test charters with mission, oracles, and coverage notes when a feature needs unscripted manual probing.
- `tdd-cycle-driver` — Enforces red-green-refactor by proving each new test fails first, then blocking implementation edits until the failure message reads correctly.
- `bug-repro-test-writer` — Converts a bug report into a minimal failing test that reproduces the defect before any fix touches production code.
- `test-double-selector` — Picks between dummy, stub, spy, mock, and fake using Meszaros criteria, explaining why the chosen double fits the assertion.
- `over-mocking-auditor` — Flags tests that mock types you do not own or stub the unit under test, then proposes real collaborators.
- `http-stub-server-builder` — Stands up MSW, WireMock, or nock stubs and record-replay cassettes with secret redaction when tests hit third-party HTTP APIs.
- `fixture-factory-builder` — Swaps shared fixture files for test data builders and object mothers using factory_boy or Fishery, so each test owns its setup.
- `fake-clock-injector` — Injects controllable fake clocks via vi.useFakeTimers, freezegun, or java.time.Clock so time-dependent tests stop failing at midnight.
- `random-seed-controller` — Pins PRNG seeds, UUID generation, and shuffle order behind an injectable source so a failing run replays byte-for-byte.
- `db-test-isolator` — Isolates database tests with per-test transaction rollback, template databases, or truncation, choosing the strategy that survives parallel workers.
- `testcontainers-orchestrator` — Spins up real Postgres, Kafka, or Redis per suite via Testcontainers, with container reuse and readiness waits replacing hand-rolled Docker scripts.
- `property-invariant-designer` — Derives round-trip, idempotence, and oracle invariants from a function's contract, then encodes them as Hypothesis or fast-check properties.
- `stateful-model-tester` — Models stateful APIs with a simplified reference implementation and command generators so property tests shrink failing call sequences automatically.
- `fuzz-harness-builder` — Builds a libFuzzer, cargo-fuzz, Atheris, or go test fuzz entry point with structured input decoding and a seed corpus.
- `mutation-score-analyzer` — Runs Stryker, PIT, mutmut, or cargo-mutants, then triages surviving mutants into missing assertions versus equivalent mutants worth ignoring.
- `consumer-contract-writer` — Writes consumer-driven Pact tests that record only the fields the client reads, publishing pacts to a broker on green.
- `provider-contract-verifier` — Verifies a provider against broker pacts with state handlers and gates deploys through can-i-deploy when services release independently.
- `openapi-conformance-validator` — Generates schema-driven request tests from an OpenAPI document with Schemathesis or Dredd, catching responses that drift from the spec.
- `snapshot-test-curator` — Prunes obsolete and oversized snapshots, enforces CI mode against silent rewrites, and rejects diffs no reviewer can actually read.
- `golden-file-approver` — Sets up approval tests with committed golden files and an explicit update flag, for outputs too large to assert inline.
- `visual-regression-harness` — Configures pixel-diff suites in Playwright or Chromatic with animation freezing, font pinning, and dynamic-region masking to stop baseline churn.
- `flaky-test-quarantiner` — Detects reruns that flip results, moves offenders to a quarantined lane with an expiry date and owner, and reports leakage.
- `flake-root-cause-tracer` — Classifies a flaky failure into async leak, shared state, timing, or resource contention, then names the fix for that class.
- `test-pollution-bisector` — Bisects a randomized test order to find the test that leaks state into a later failure, isolating the polluting pair.
- `coverage-gap-prioritizer` — Ranks uncovered branches by change frequency, blast radius, and diff coverage, so effort goes where a bug would actually hurt.
- `coverage-gaming-detector` — Finds assertion-free tests, unchecked mocks, and exercise-only paths that inflate coverage percentages when the number rises but bugs escape.
- `legacy-seam-introducer` — Introduces object, link, and preprocessing seams via sprout or wrap methods so untestable legacy code accepts a test double.
- `characterization-test-writer` — Captures current legacy behavior, bugs included, by asserting observed output before a refactor, using coverage to find unexercised branches.
- `test-suite-accelerator` — Profiles the slowest tests, then shards, parallelizes, and trims setup to cut wall-clock runtime without deleting behavioral coverage.
- `obsolete-test-pruner` — Deletes tests for removed features, duplicate cases, and change-detector assertions, proving with mutation score that protection survives the cut.
- `playwright-locator-hardener` — Replaces brittle CSS and XPath selectors with role-based locators and web-first assertions, deleting every hard-coded sleep from the spec.
- `pytest-fixture-architect` — Structures conftest layering, fixture scopes, and indirect parametrize so pytest setup stays explicit instead of collapsing into implicit fixture soup.
- `spring-slice-test-designer` — Chooses between @WebMvcTest, @DataJpaTest, and full @SpringBootTest, keeping JUnit context caching effective when suite startup dominates the runtime.
- `go-table-test-writer` — Writes table-driven Go subtests with t.Parallel, t.Cleanup, and cmp.Diff, avoiding loop-variable capture, shared fixtures, and require-versus-assert mistakes.
- `cypress-to-playwright-migrator` — Ports Cypress specs to Playwright, mapping chained retry-ability onto async web-first assertions and rewriting cy.intercept stubs as route handlers.
- `a11y-ci-gate-builder` — Wires axe-core through jest-axe or Playwright into CI with a violation baseline, failing builds on new accessibility regressions only.
- `defect-escape-analyzer` — Traces each production bug back to the test layer that should have caught it, then adds that case and reports escape trends.

## 09 · Performance & Observability

*35 skills*

- `otel-instrumentation-planner` — Plans which operations get OpenTelemetry spans, where boundaries fall, and which attributes carry cardinality risk before instrumentation code lands.
- `otel-semconv-mapper` — Maps span and metric names onto OpenTelemetry semantic conventions, so traces from separate services join instead of drifting into private vocabularies.
- `trace-sampling-strategist` — Designs head, tail, and error-biased sampling rules for the OpenTelemetry Collector so rare failures survive while trace storage stays inside budget.
- `trace-waterfall-analyzer` — Reads a distributed trace waterfall, separates critical-path latency from parallel fan-out and queue wait, and names the span worth fixing.
- `context-propagation-debugger` — Diagnoses orphaned spans and broken traces across async boundaries, message queues, and gateways by checking W3C traceparent handoff at every hop.
- `structured-log-schema-designer` — Defines a JSON log schema with stable field names, severity levels, bounded payloads, and trace IDs so incident queries return whole requests.
- `log-volume-cost-cutter` — Cuts log ingest spend by ranking lines by volume, then applying sampling, level demotion, and field pruning without losing debuggable signal.
- `metric-cardinality-auditor` — Finds the labels exploding Prometheus series counts, ranks offenders by active series, and replaces unbounded dimensions with bucketed or dropped ones.
- `histogram-bucket-designer` — Chooses latency histogram bucket boundaries, native or explicit, so p99 stays accurate near the SLO threshold without multiplying series per endpoint.
- `engineer-dashboard-composer` — Lays out a service dashboard top-down from SLO to saturation, cutting vanity panels so an on-call engineer finds cause within two screens.
- `slo-target-definer` — Derives SLIs and SLO targets from real user journeys and historical latency data, rejecting numbers the current architecture provably cannot hold.
- `error-budget-policy-writer` — Drafts an error budget policy fixing burn thresholds, feature-freeze triggers, and decision owners, so budget exhaustion produces action rather than argument.
- `burn-rate-alert-calculator` — Computes multi-window multi-burn-rate thresholds from an SLO target, emitting Prometheus rules that page on fast burns and ticket slow ones.
- `alert-fatigue-reducer` — Audits months of firing history, deletes alerts nobody ever acted on, and merges the rest into symptom-based pages with named owners.
- `incident-timeline-reconstructor` — Rebuilds a minute-by-minute incident timeline from traces, metrics, logs, and deploy events, marking first symptom, first page, and causal change.
- `flamegraph-hotpath-reader` — Ranks flame graph frames by self time from pprof, async-profiler, or perf output, then proposes the narrowest fix per hot path.
- `alloc-profile-reducer` — Pinpoints allocation call sites by bytes from Go pprof, JFR, or tracemalloc, then converts the worst offenders into pooling or reuse.
- `gc-pause-correlator` — Correlates garbage collection pause telemetry with p99 latency spikes across JVM, Go, and Node, proving whether collection actually causes the tail.
- `heap-snapshot-differ` — Diffs successive heap snapshots from Chrome DevTools or Eclipse MAT, follows retainer chains, and names the cache, closure, or listener leaking.
- `span-fanout-detector` — Detects repeated identical spans fanning out inside one trace, exposing N+1 patterns across databases, HTTP calls, and cache lookups in production.
- `cache-effectiveness-auditor` — Measures hit ratio, key churn, and stampede rate per cache tier, then reports whether the cache actually buys latency or hides staleness.
- `tail-latency-interpreter` — Explains why averaged percentiles lie, recomputes true aggregate p99 from histograms, and identifies which requests and users live in the tail.
- `latency-budget-allocator` — Splits an end-to-end latency target across gateway, service, cache, and database hops, flagging every hop whose measured p99 overruns its share.
- `latency-cost-modeler` — Prices a latency change by tying p95 shifts to conversion, retry volume, and compute spend, so optimizations get funded or dropped.
- `k6-load-script-author` — Writes k6 scripts with staged ramps, think time, and thresholds bound to SLOs, so a failed latency target fails the run.
- `saturation-knee-finder` — Ramps k6, Locust, or JMeter load until throughput plateaus, records the knee point, and names what saturated first: CPU, pool, or disk.
- `perf-regression-ci-gate` — Wires bundle bytes, Lighthouse scores, and benchmark timings into a CI baseline comparison that fails pull requests exceeding budget beyond noise.
- `lcp-bottleneck-diagnoser` — Breaks LCP into TTFB, resource load delay, load duration, and render delay, then names which of the four subparts to attack.
- `inp-interaction-profiler` — Attributes slow INP to input delay, processing time, or presentation delay using Long Animation Frames data, then names the handler to fix.
- `cls-shift-source-tracer` — Traces layout shifts to their source nodes with PerformanceObserver, then reserves space using aspect-ratio, size attributes, or min-height on late slots.
- `long-task-splitter` — Chops main-thread tasks over fifty milliseconds into yielded chunks with scheduler.yield or postTask, restoring input responsiveness without changing output.
- `worker-offload-planner` — Decides which parsing, diffing, or crypto work belongs in a Web Worker, then designs the transferable message boundary and main-thread fallback.
- `image-delivery-optimizer` — Picks format, responsive sizes, srcset, priority hints, and placeholder strategy per image role, cutting bytes without introducing a layout shift.
- `font-loading-strategist` — Selects subsetting, preload, font-display, and fallback metric overrides so text paints early and the webfont swap costs no visible reflow.
- `bundle-bloat-analyzer` — Pins bundle weight on dependencies, duplicates, and polyfills using webpack, Vite, or Rollup stats, then proposes splits, swaps, or removals.

## 10 · Architecture & System Design

*35 skills*

- `architecture-problem-framer` — Converts an open technical argument into a decision brief naming constraints, quality attributes, non-goals, assumptions, and reversibility before options appear.
- `tradeoff-matrix-builder` — Scores competing designs against weighted quality attributes with explicit disqualifiers, then runs a sensitivity check so the winner is not weight-tuning.
- `build-buy-evaluator` — Compares building, buying, and adopting open source using total cost, exit cost, and whether the capability is a real differentiator.
- `greenfield-stack-selector` — Picks a language, framework, and datastore for a new service from team skills, load shape, and operational budget rather than familiarity.
- `tech-radar-curator` — Maintains an adopt/trial/assess/hold technology radar with entry criteria, blip movement rules, and a quarterly review that retires dead entries.
- `adr-record-drafter` — Captures an architecture decision as a MADR record with context, considered options, consequences, and a status field that tracks supersession.
- `adr-review-auditor` — Reviews a proposed ADR for unexamined options, missing consequences, unstated assumptions, and decisions the record claims but never actually makes.
- `rfc-process-designer` — Establishes an RFC lifecycle with author, reviewer, and approver roles, comment deadlines, and a rule for when an RFC is required.
- `design-review-facilitator` — Runs an architecture design review with a pre-read, timeboxed agenda, named challenge roles, and a written decision captured before anyone leaves.
- `decision-revisit-planner` — Re-opens architecture decisions whose stated assumptions expired, drafts the superseding record, and sequences the unwind work each reversal actually costs.
- `bounded-context-mapper` — Draws a DDD context map naming each relationship as shared kernel, conformist, anticorruption layer, open host service, or separate ways.
- `event-storming-facilitator` — Facilitates a big-picture or design-level event storming session with sticky color conventions, hotspot capture, and a pivot to candidate aggregates.
- `aggregate-boundary-designer` — Sizes DDD aggregates so one transaction touches one aggregate, invariants stay inside, and cross-aggregate consistency moves to domain events.
- `service-boundary-analyzer` — Grades proposed service seams using git co-change history, call-graph coupling, and data ownership to expose boundaries that will leak chatter.
- `microservice-split-arbiter` — Decides whether a workload warrants separate services by testing independent deployability, divergent scaling, team ownership, and the failure modes distribution adds.
- `monolith-decomposition-planner` — Sequences a monolith breakup by extracting the highest-churn, lowest-coupling seam first and defining the data ownership move each step requires.
- `strangler-fig-migrator` — Plans a strangler migration with a routing facade, per-route cutover gates, dual-run verification, and a rollback path that survives partial traffic.
- `deprecation-runway-planner` — Schedules retirement of a system or capability with consumer inventory, migration runway, sunset dates, brownout drills, and enforced removal.
- `event-driven-topology-designer` — Chooses choreography or orchestration per flow, fixes delivery semantics and ordering guarantees, and names the owner of every published event.
- `cqrs-boundary-planner` — Judges where splitting read and write models pays, sizes projection lag budgets, and blocks CQRS on domains that never needed it.
- `event-sourcing-modeler` — Designs an event store with stream boundaries, snapshot cadence, projection rebuild strategy, and an upcasting plan for events already written.
- `saga-compensation-mapper` — Maps every saga step to its compensation and pivot transaction, then proves each partial failure leaves a business state someone will accept.
- `distributed-transaction-eliminator` — Replaces proposed two-phase commit or XA with sagas, reservations, or single-writer redesign whenever atomicity is claimed across service boundaries.
- `transactional-outbox-builder` — Removes dual writes to database and broker by building an outbox table, a relay or CDC publisher, and consumer-side deduplication.
- `consistency-model-selector` — Assigns each read path a strong, causal, read-your-writes, or eventual consistency guarantee and states the staleness the product actually tolerates.
- `cap-pacelc-analyzer` — Frames a datastore or replication choice with CAP and PACELC, correcting the usual claim that a system simply picks two letters.
- `read-write-split-designer` — Routes reads to replicas with a staleness budget, session-consistency escape hatch, and lag-aware fallback so users never read behind their own writes.
- `idempotent-workflow-hardener` — Makes a multi-service workflow safe to retry end to end with dedup keys, effect ledgers, and bounded replay windows at every hop.
- `multi-tenancy-isolation-architect` — Selects silo, bridge, or pool tenant isolation per tier, then plans noisy-neighbor limits, tenant routing, and the migration between models.
- `capacity-envelope-estimator` — Estimates QPS, storage, and bandwidth for a design with back-of-envelope math, Little's Law, and peak factors before any code exists.
- `failure-mode-analyzer` — Walks each dependency through an FMEA table of failure mode, effect, detection, and mitigation, ranking by severity times likelihood times undetectability.
- `circuit-breaker-tuner` — Sets breaker thresholds, half-open probe rates, and fallback behavior from measured downstream latency so the breaker trips before the caller starves.
- `bulkhead-pool-partitioner` — Partitions thread pools, connections, and queues per dependency so one slow downstream cannot exhaust the capacity every other call path shares.
- `timeout-budget-allocator` — Distributes an end-to-end latency budget across a call chain so inner timeouts stay shorter than outer ones and retries fit inside.
- `fitness-function-builder` — Encodes architecture rules as CI tests with ArchUnit, dependency-cruiser, or Deptrac so layering and coupling limits fail the build when violated.

## 11 · Mobile & Cross-Platform

*30 skills*

- `ios-codesign-debugger` — Decodes Xcode signing errors by comparing provisioning profile entitlements, certificates, and bundle IDs, then prescribes the exact fix.
- `ios-privacy-manifest-writer` — Generates PrivacyInfo.xcprivacy with required-reason API codes, tracking domains, and SDK signatures when App Store upload warns about missing manifests.
- `ios-background-task-planner` — Decides between BGAppRefreshTask, BGProcessingTask, silent push, and background modes, then documents budget limits and simulator triggers for testing.
- `swiftui-state-flow-auditor` — Flags misused @State, @StateObject, @ObservedObject, and @Observable ownership that causes lost state or redundant view rebuilds in SwiftUI.
- `appstore-rejection-triager` — Maps an App Store Review rejection to the cited guideline, the code change required, and reviewer-note wording for resubmission.
- `testflight-beta-orchestrator` — Plans TestFlight internal and external tester groups, build expiry, beta review triggers, and phased rollout gates before a public release.
- `iap-receipt-validator` — Verifies StoreKit 2 transactions and Play Billing purchase tokens server-side, covering renewals, refunds, grace periods, and replay-safe entitlement grants.
- `compose-recomposition-profiler` — Traces excessive Jetpack Compose recompositions using Layout Inspector counts and the compiler stability report, then applies keys and stable wrappers.
- `android-workmanager-tuner` — Chooses WorkManager constraints, backoff, and expedited or foreground service types so jobs survive Doze and App Standby buckets.
- `android-target-api-migrator` — Lists the behavior changes each targetSdk level forces, then sequences manifest, permission, and API edits for a safe compile-and-ship bump.
- `android-keystore-rotator` — Rotates upload keys under Play App Signing, regenerating certificates, updating CI secrets, and re-registering SHA fingerprints for App Links and Firebase.
- `android-oem-quirk-mapper` — Documents Xiaomi, Huawei, Samsung, and OnePlus background-kill behavior, then adds autostart prompts and watchdogs so scheduled work still runs.
- `play-data-safety-generator` — Derives the Play Console Data safety declaration from actual SDK and permission usage, flagging collected fields the manifest never disclosed.
- `flutter-platform-channel-designer` — Designs MethodChannel or Pigeon interfaces with correct threading, codec, and error mapping so Dart and native code stay type-safe.
- `react-native-newarch-migrator` — Ports bridge modules to TurboModules and Fabric components, ordering codegen specs, interop layers, and library upgrades so the app keeps building.
- `expo-eas-build-fixer` — Diagnoses failed EAS builds from log output, separating config plugin, prebuild, native dependency, and credential causes before retrying.
- `capacitor-plugin-bridger` — Wires a Capacitor plugin across web, Swift, and Kotlin layers, registering it and declaring permissions in both native manifests.
- `tauri-capability-hardener` — Narrows Tauri capability files, permission scopes, and CSP so the webview reaches only the commands and paths it needs.
- `electron-security-auditor` — Checks contextIsolation, sandbox, nodeIntegration, preload surface, and navigation handlers against Electron's security checklist before packaging a desktop build.
- `kmp-expect-actual-mapper` — Structures Kotlin Multiplatform source sets and expect/actual declarations so shared code compiles for JVM, iOS, and wasm targets.
- `apns-payload-validator` — Validates APNs payloads against the 4KB limit, apns-push-type, priority, collapse-id, and alert key rules before a send fails silently.
- `fcm-delivery-debugger` — Isolates why FCM messages never arrive, separating data-only versus notification payloads, Doze throttling, stale tokens, and quota rejections.
- `deep-link-matrix-builder` — Builds apple-app-site-association and assetlinks.json alongside intent filters, then verifies each URL path resolves without falling back to the browser.
- `mobile-permission-flow-builder` — Sequences rationale screens, iOS purpose strings, and Android runtime requests, covering one-time grants, precise location, and permanent denial paths.
- `offline-sync-conflict-designer` — Selects last-write-wins, CRDT, or server-authority merge for an offline mobile store, then specifies the outbox queue and replay semantics.
- `app-size-budget-analyzer` — Breaks an IPA or AAB into asset, framework, and R8 contributions, then names the cuts that meet a download-size budget.
- `battery-drain-profiler` — Runs Battery Historian or Xcode energy logs against a session, attributing drain to wakelocks, location polling, and network retry storms.
- `mobile-crash-symbolicator` — Symbolicates iOS and Android stack traces with dSYMs, ProGuard mappings, and ndk-stack, and wires the upload step into release builds.
- `device-farm-matrix-planner` — Picks the smallest real-device and OS-version matrix covering your install base, weighting screen sizes, memory tiers, and vendor skins.
- `maestro-flow-author` — Writes Maestro YAML flows for login, purchase, and deep-link journeys, adding waits and selectors that survive real-device timing variance.

## 12 · Git & Code Collaboration

*30 skills*

- `branching-model-designer` — Compares trunk-based, GitHub Flow, and release-branch models against deploy cadence and team size, then writes the branching policy a repo adopts.
- `rebase-todo-scripter` — Generates a git rebase todo list and drives it through GIT_SEQUENCE_EDITOR, so interactive rebases run unattended in non-interactive shells.
- `merge-conflict-resolver` — Resolves merge conflicts by hunk with rerere caching, then rebuilds and tests to catch semantic conflicts that compile-clean markers hide.
- `lockfile-conflict-mediator` — Regenerates package-lock.json, yarn.lock, pnpm-lock.yaml, or Cargo.lock from the merged manifest instead of hand-editing conflict markers that corrupt dependency trees.
- `git-bisect-automator` — Wraps git bisect run with a scripted reproducer and skip rules, pinpointing the commit that introduced a regression across long ranges.
- `git-reflog-rescuer` — Recovers commits, branches, and stashes lost to a bad reset, rebase, or amend by walking reflog and dangling objects.
- `atomic-commit-splitter` — Splits a sprawling work-in-progress commit into reviewable atomic commits using git add --patch and rebase, each building and passing tests.
- `conventional-commit-enforcer` — Derives a scope taxonomy from the repo tree and emits commitlint rules, so Conventional Commits stay consistent across contributors and releases.
- `history-secret-purger` — Strips a leaked credential or stray blob from every commit with git-filter-repo or BFG, then coordinates force-push, reclone, and key rotation.
- `subdir-history-extractor` — Extracts a subdirectory into a standalone repo with its commit history intact via git-filter-repo, preserving tags, authorship, and merge topology.
- `repo-bloat-analyzer` — Ranks the largest blobs in packed history with rev-list and cat-file, reporting what to purge when clone times balloon.
- `git-lfs-migrator` — Moves existing binaries into Git LFS using lfs migrate import and .gitattributes patterns, handling rewritten history, locking, and pointer-file pitfalls.
- `sparse-checkout-configurer` — Configures cone-mode sparse checkout and partial clone filters so a huge monorepo checks out only the paths a task touches.
- `submodule-sync-fixer` — Repairs detached or drifted submodule pointers, wiring recursive update, branch tracking, and .gitmodules URLs after a clone or bump breaks.
- `subtree-vendoring-manager` — Vendors an upstream repo with git subtree add and pull, and splits local changes back out when contributing patches upstream.
- `git-worktree-orchestrator` — Sets up parallel git worktrees for concurrent branches, handling per-tree dependencies, shared hooks, and pruning so stashing between contexts disappears.
- `git-hooks-installer` — Installs shareable pre-commit, commit-msg, and pre-push hooks via husky, lefthook, or core.hooksPath, keeping them fast enough that nobody uses --no-verify.
- `gitattributes-designer` — Writes .gitattributes rules for line-ending normalization, binary marking, diff and merge drivers, linguist overrides, and export-ignore when checkouts differ across platforms.
- `fork-upstream-syncer` — Keeps a long-lived fork current with upstream by choosing rebase or merge per branch, and resolving recurring drift in vendored files.
- `oss-contribution-navigator` — Walks a first upstream contribution through issue claiming, CLA or DCO sign-off, project commit conventions, and the review cadence maintainers expect.
- `pr-description-writer` — Builds a pull request body from the commit range, covering context, risk, test plan, and linked issues before a branch opens for review.
- `pr-stack-planner` — Breaks an oversized branch into a stacked chain of dependent pull requests with rebase order and landing sequence that reviewers can follow.
- `diff-review-sequencer` — Orders a thousand-line diff into a reading path, separating generated files, moves, and renames from real logic changes worth scrutiny.
- `review-comment-composer` — Phrases pull request feedback tagged blocking, non-blocking, or nit, using questions rather than commands, so review threads stay short.
- `review-queue-triager` — Prioritizes a backlog of open pull requests by staleness, blast radius, and who is blocked, producing a review sequence for the day.
- `codeowners-file-builder` — Assembles and audits CODEOWNERS from directory ownership, catching last-match-wins surprises, unmatched paths, and stale teams that stall review routing.
- `hotfix-backporter` — Cherry-picks a landed fix onto active release branches with -x provenance, resolving divergence and confirming each branch still builds after.
- `merge-revert-planner` — Reverts a merge commit with the right -m parent and plans the revert-of-the-revert, so the branch can be re-merged later without silent drops.
- `blame-archaeologist` — Traces why a line exists using git log -S, -L, --follow, and blame-ignore-revs, surviving reformat commits and file renames along the way.
- `release-tag-cutter` — Cuts annotated, signed semver tags with a consistent naming scheme and moves them safely when a tag lands on the wrong commit.

## 13 · Code Quality & Refactoring

*30 skills*

- `dead-code-eliminator` — Finds unreachable exports and files with knip, ts-prune, or vulture, then deletes them after clearing dynamic-import and reflection false positives.
- `stale-flag-cleaner` — Deletes a fully rolled-out feature flag and collapses the dead branch behind it, including its constants, helper wrappers, and orphaned test cases.
- `copy-paste-detector` — Runs jscpd or PMD-CPD with tuned token thresholds, filters generated files, and ranks clone clusters by size and edit frequency.
- `dry-abstraction-arbiter` — Decides whether duplicated code should be extracted or left alone, applying the rule of three and testing for coincidental similarity.
- `complexity-hotspot-reducer` — Lowers cyclomatic and cognitive complexity in a flagged function using guard clauses, table dispatch, and extraction, re-measuring with lizard or radon.
- `churn-complexity-mapper` — Crosses git churn with complexity metrics to rank refactor candidates, so effort lands on files that are both tangled and edited constantly.
- `naming-clarity-reviewer` — Flags misleading identifiers such as getters that mutate, booleans lacking is or has prefixes, and quantities missing units, then proposes replacements.
- `convention-drift-detector` — Surveys a codebase for competing conventions in imports, error shapes, and file layout, then picks one and lists every deviating file.
- `lint-ruleset-curator` — Chooses which lint rules earn their keep, separating bug-catching rules from style noise and assigning error, warn, or off tiers per directory.
- `custom-lint-rule-author` — Writes an ESLint, Ruff, or Semgrep rule that encodes a house convention reviewers keep repeating, with fixture tests and an autofix where safe.
- `formatter-rollout-planner` — Introduces Prettier, Black, or gofmt to a legacy repo in staged commits that keep blame readable and reviews free of whitespace noise.
- `mutation-to-immutable-converter` — Replaces in-place mutation with copy-on-write updates at module boundaries, flagging shared-reference aliasing that other callers silently depend on.
- `mikado-refactor-planner` — Maps a large refactor with the Mikado Method, trying a change, recording what breaks, reverting, and emitting a leaf-first landing order.
- `rewrite-vs-refactor-arbiter` — Weighs incremental refactor against a clean rewrite for one module using churn, defect density, and knowledge loss, then records the call.
- `any-type-eliminator` — Replaces any with real types file by file, starting at leaf modules and using per-file strictness so the build never turns red.
- `nullability-tightener` — Turns on strictNullChecks or an Option type incrementally, ranking call sites by blast radius and settling a null versus undefined convention.
- `type-assertion-auditor` — Hunts every as cast, non-null bang, ts-expect-error, and type ignore, then removes, narrows, or documents each with the reason it survives.
- `import-cycle-breaker` — Detects circular imports with madge or dependency-cruiser and breaks them by extracting shared types, inverting a dependency, or moving the offending symbol.
- `god-object-decomposer` — Splits an overgrown class by clustering methods around the fields they touch, then extracts each cluster behind its own narrow interface.
- `over-abstraction-collapser` — Inlines single-implementation interfaces, one-caller helpers, and speculative generics, shrinking indirection that was added for a second case that never arrived.
- `code-smell-cataloger` — Names smells from Fowler's catalog consistently and maps each to its refactoring, detection query, and risk, so reviews stop inventing vocabulary.
- `error-handling-normalizer` — Unifies mixed throw, Result, and error-code styles into one convention, adding context wrapping and typed errors at each module boundary.
- `silent-catch-hunter` — Tracks down empty catch blocks, except-pass, ignored error returns, and swallowed promise rejections, then makes each one log, wrap, or propagate.
- `comment-rot-auditor` — Catches comments that contradict the code beside them, commented-out blocks, and docstrings describing removed parameters, then fixes or deletes each.
- `todo-debt-triager` — Sorts every TODO, FIXME, and HACK marker into fix now, file an issue, or delete, and stops new ones landing unowned.
- `public-api-shrinker` — Narrows an exported surface by demoting internally-used symbols to private, collapsing barrel files, and marking entry points a package actually promises.
- `internal-deprecation-runner` — Retires an internal API by marking it deprecated, migrating every caller, and deleting it on a dated schedule instead of leaving shims forever.
- `codemod-author` — Builds a jscodeshift, ts-morph, ast-grep, or comby codemod for a mechanical change too large to hand-edit, with idempotence and dry-run checks.
- `behavior-preservation-checker` — Proves a mechanical refactor changed nothing by diffing normalized ASTs or compiled output and reviewing only the hunks that fail to cancel.
- `quality-ratchet-builder` — Baselines current lint, complexity, and type-error counts, then blocks any change that raises them, letting a legacy repo improve without a freeze.

## 14 · Developer Tooling & Build Systems

*30 skills*

- `webpack-vite-migrator` — Ports webpack or Create React App setups to Vite, mapping loaders onto plugins, rewriting env access, and flagging unsupported features.
- `rollup-treeshake-debugger` — Traces why Rollup or Vite keeps dead exports, checking sideEffects flags, PURE annotations, CJS interop, and re-export barrels.
- `vite-plugin-author` — Writes Vite plugins with correct hook order, apply and enforce options, and virtual module conventions when build behavior needs customizing.
- `sourcemap-chain-verifier` — Verifies source maps survive transpile, bundle, and minify steps, then checks upload to Sentry resolves original stack frames.
- `browserslist-target-tuner` — Aligns browserslist queries with transpile targets and core-js polyfill mode, then reports which syntax each configured browser still misses.
- `hmr-failure-debugger` — Diagnoses dead hot reload and file watchers, covering inotify limits, Docker bind mounts, WSL paths, polling fallbacks, and self-accepting modules.
- `tsc-trace-analyzer` — Runs tsc --generateTrace, reads the trace for type instantiation hotspots, and proposes fixes when TypeScript compiles too slowly.
- `tsconfig-references-designer` — Splits a TypeScript codebase into composite projects with references, wiring incremental builds and declaration output for faster rebuilds.
- `babel-swc-migrator` — Moves a Babel toolchain to SWC or oxc, mapping presets to equivalents, listing plugins without parity, and preserving decorator semantics.
- `pnpm-workspace-migrator` — Converts npm or Yarn workspaces to pnpm, exposing phantom dependencies, setting hoisting and peer rules, and regenerating the lockfile.
- `lockfile-merge-resolver` — Resolves lockfile merge conflicts by regenerating rather than hand-editing, covering package-lock.json, pnpm-lock.yaml, yarn.lock, Cargo.lock, and uv.lock.
- `dependency-upgrade-planner` — Batches a dependency upgrade backlog into risk tiers using semver diffs and changelogs, then sequences batches so each stays independently revertable.
- `package-exports-mapper` — Authors package.json exports, imports, and types conditions for dual ESM/CJS output, then validates with publint and are-the-types-wrong.
- `uv-python-migrator` — Migrates pip, Poetry, or Pipenv projects to uv, translating dependency groups, pinning the interpreter, and producing a committed uv.lock.
- `cargo-feature-unifier` — Debugs Cargo feature unification across a workspace, explaining resolver versions, default-features leaks, and why one crate silently enables another's optional features.
- `go-module-graph-auditor` — Audits go.mod graphs for stray replace directives, +incompatible versions, missing major suffixes, and minimal version selection surprises after go get.
- `peer-dependency-resolver` — Untangles ERESOLVE and peer conflicts by reading the dependency tree, then choosing between overrides, resolutions, or an actual version bump.
- `native-addon-build-fixer` — Repairs node-gyp and prebuild failures by checking toolchain versions, Python, ABI targets, and choosing prebuilt binaries over local compilation.
- `turborepo-task-graph-designer` — Models Turborepo tasks with precise inputs, outputs, and dependsOn edges so caching stays correct when packages are added or split.
- `nx-generator-author` — Builds custom Nx generators and executors with a virtual file tree, dry-run support, and tests so scaffolding stays consistent across teams.
- `bazel-target-writer` — Writes BUILD.bazel targets with correct visibility, deps, and toolchain rules, translating an existing npm or Go layout into hermetic builds.
- `build-cache-miss-debugger` — Finds why Turborepo, Nx, or Bazel caches miss, hunting timestamps, absolute paths, env leaks, and unlisted inputs in the hash.
- `path-alias-synchronizer` — Keeps tsconfig paths, bundler aliases, Jest moduleNameMapper, and ESLint resolver settings in agreement so imports resolve identically everywhere.
- `codegen-drift-detector` — Regenerates checked-in generated code and fails when output drifts from its schema, wiring the check into pre-commit and build steps.
- `cli-flag-designer` — Designs CLI surfaces with POSIX-conformant flags, subcommand nesting, exit codes, stdin/stdout contracts, and --json output before the first command ships.
- `shell-completion-generator` — Emits bash, zsh, and fish completion scripts from a CLI's command tree, including dynamic value completion and install instructions.
- `devcontainer-spec-builder` — Assembles devcontainer.json with features, lifecycle hooks, mounts, and forwarded ports so a repo opens ready to build on any machine.
- `nix-devshell-builder` — Writes a Nix flake devShell pinning compilers, language servers, and CLI tools, with direnv wiring and a cache-friendly input strategy.
- `toolchain-version-pinner` — Pins runtime versions across .nvmrc, .tool-versions, rust-toolchain.toml, and .python-version, reconciling mise or asdf with engines fields and Dockerfiles.
- `editor-toolchain-aligner` — Points the editor at the repo's own TypeScript, formatter, and linter versions so in-editor diagnostics match what the build actually reports.

## 15 · Systems, Embedded & Low-Level

*25 skills*

- `linker-script-author` — Authors GNU ld scripts with correct MEMORY regions, section placement, VMA versus LMA, and symbols the startup code expects.
- `cross-toolchain-configurator` — Sets up a cross-compile target with matching triple, sysroot, CMake toolchain file, and Rust target spec, then proves it links.
- `no-std-rust-migrator` — Strips std from a Rust crate, adding panic handler, allocator choice, memory.x layout, and embedded-hal traits until the target flashes.
- `unsafe-ffi-boundary-validator` — Checks repr(C) layouts, ownership transfer, and null and lifetime invariants across a Rust-to-C boundary, then runs Miri on the wrappers.
- `misra-c-compliance-auditor` — Maps flagged code to specific MISRA C:2012 rules, separating mandatory from advisory, and drafts the deviation records auditors require.
- `mmio-register-accessor-generator` — Turns a CMSIS-SVD file into typed register accessors, guarding volatile ordering, read-modify-write hazards, and write-only bits the datasheet forbids reading.
- `devicetree-overlay-writer` — Composes device tree overlays and bindings for pinctrl, clocks, and interrupts, then verifies the compiled blob against the driver's compatible string.
- `char-device-ioctl-designer` — Designs a stable ioctl ABI with _IOR and _IOW numbering, copy_to_user checks, compat handlers, and versioned structs for a char device.
- `kernel-lock-context-checker` — Finds sleeping calls in atomic context, wrong GFP flags, and spinlock versus mutex misuse before a kernel module deadlocks.
- `dma-coherency-debugger` — Tracks corrupted DMA transfers to missing cache clean or invalidate, wrong buffer alignment, or descriptors placed in cacheable memory.
- `isr-latency-budgeter` — Budgets interrupt latency and jitter per priority level, splitting work into top and bottom halves and banning blocking calls from handlers.
- `rtos-priority-inversion-auditor` — Detects unbounded priority inversion in FreeRTOS or Zephyr tasks, prescribing mutex inheritance, ceilings, or rate-monotonic priority reassignment.
- `rtos-stack-depth-profiler` — Measures worst-case task stack use from high-water marks and call-graph analysis, then sizes each stack with a justified safety margin.
- `hardfault-postmortem-analyzer` — Decodes Cortex-M CFSR, HFSR, and BFAR bits, unwinds the stacked frame, and names the faulting instruction from the map file.
- `jtag-swd-session-runner` — Drives OpenOCD or probe-rs sessions to halt, flash, and single-step a target, wiring RTT output and GDB into one command.
- `logic-analyzer-trace-decoder` — Reads sigrok or Saleae captures to explain I2C NAKs, SPI mode mismatches, clock stretching, and UART framing errors on a bus.
- `bootloader-flow-mapper` — Traces reset vector through boot ROM, SPL, U-Boot, and kernel handoff, marking where clocks, DRAM, and the vector table initialize.
- `secure-boot-chain-designer` — Plans a signed boot chain with key hierarchy, fuse programming, rollback counters, and MCUboot slot layout before the device ships locked.
- `mcu-power-budget-planner` — Models average current from sleep-mode residency, radio duty cycle, and peripheral draw, then reports battery life against a coin-cell budget.
- `heap-fragmentation-analyzer` — Replaces malloc churn with static pools or arenas on memory-constrained targets, sizing each pool from allocation traces and worst-case concurrency.
- `elf-symbol-size-mapper` — Attributes flash and RAM use to symbols and sections with bloaty, nm, and the map file, then names what to cut.
- `endianness-abi-linter` — Flags struct padding, bitfield ordering, unaligned access, and byte-order assumptions that break when the same code crosses architectures.
- `wire-protocol-frame-builder` — Specifies framing with COBS or length prefixes, CRC placement, version negotiation, and resynchronization rules so a corrupted link recovers deterministically.
- `lwip-stack-tuner` — Sizes lwipopts.h pbuf pools, TCP windows, and memory settings for a constrained target, then explains which knobs caused packet drops.
- `binary-format-parser-generator` — Writes Kaitai Struct specs for an undocumented binary or wire format, emitting parsers plus a hexdump-backed test corpus.

## 16 · Accessibility Engineering

*15 skills*

- `wcag-criteria-mapper` — Maps a feature to the WCAG 2.2 success criteria it must meet, including the nine criteria added since 2.1.
- `aria-pattern-selector` — Chooses the correct ARIA Authoring Practices pattern before a custom widget is built, then lists its required roles, states, and properties.
- `accessible-name-debugger` — Traces accessible name computation order when a screen reader reads the wrong label, covering aria-labelledby, aria-label, content, title, and placeholder.
- `dialog-focus-validator` — Checks modal dialogs contain focus, restore it on close, use inert or aria-modal correctly, and stay dismissible by Escape.
- `roving-tabindex-builder` — Implements composite widget keyboard models using roving tabindex or aria-activedescendant, wiring arrow keys, Home, End, and typeahead selection.
- `heading-landmark-mapper` — Audits page structure for landmark regions, heading level order, skip links, and unique titles so screen reader navigation shortcuts work.
- `live-region-tuner` — Fixes silent or spammy aria-live announcements by tuning politeness, atomic, relevant, and mount timing across NVDA, JAWS, and VoiceOver.
- `form-error-announcer` — Wires accessible form validation with label association, aria-describedby, aria-invalid, an error summary, and focus moved to the first failure.
- `contrast-token-auditor` — Scores a color palette against text, non-text, and focus indicator contrast thresholds, then proposes token adjustments for each failing pair.
- `reduced-motion-auditor` — Reviews animation for vestibular triggers, adds prefers-reduced-motion alternatives, and confirms parallax, autoplay, and looping content meet pause requirements.
- `zoom-reflow-validator` — Tests layouts at 400 percent zoom and 320 CSS pixels, checking reflow, text spacing overrides, and content that disappears or clips.
- `axe-violation-triager` — Triages axe-core and Lighthouse findings into real defects, false positives, and gaps machines cannot catch, then assigns each a fix.
- `screen-reader-test-planner` — Writes manual test scripts for NVDA, JAWS, and VoiceOver, listing exact key commands and expected announcements for each flow under review.
- `vpat-statement-writer` — Drafts a VPAT accessibility conformance report and public accessibility statement, citing evidence per criterion and recording known gaps with remediation dates.
- `mobile-a11y-auditor` — Audits iOS and Android screens for VoiceOver and TalkBack labels, traits, focus order, touch target size, and dynamic type scaling.

## 17 · Localization & i18n

*15 skills*

- `icu-message-writer` — Writes ICU MessageFormat strings with plural, select, and selectordinal arms, escaping apostrophes and avoiding sentence fragments translators cannot reorder.
- `cldr-plural-mapper` — Maps each target locale to its CLDR plural categories, so Arabic, Russian, and Welsh messages carry every form the language requires.
- `hardcoded-string-extractor` — Scans source for user-facing literals, extracts them into message catalogs with stable keys, and leaves placeholders for interpolated values.
- `message-context-annotator` — Adds translator notes, placeholder descriptions, and character limits to message catalogs so ambiguous source strings do not get guessed wrong.
- `rtl-layout-auditor` — Audits layouts for RTL readiness, converting to logical CSS properties, setting dir, and deciding which icons and charts must mirror.
- `bidi-isolation-debugger` — Fixes garbled mixed-direction text by applying bidi isolation with bdi elements or FSI and PDI marks around user data and numbers.
- `intl-date-formatter` — Replaces hardcoded date patterns with Intl.DateTimeFormat, selecting skeletons, and handling Hijri, Buddhist, and Japanese calendars where the locale expects them.
- `currency-display-formatter` — Formats money per locale using ISO 4217 codes, correct minor unit digits for JPY and KWD, and symbol placement rules.
- `timezone-handling-planner` — Decides where to store instants, wall clock times, and IANA zone ids, then handles DST gaps, overlaps, and recurring event drift.
- `pseudo-locale-generator` — Generates a pseudo-locale that pads strings, accents characters, and brackets boundaries, surfacing truncation and hardcoded text before translators are paid.
- `tms-sync-planner` — Wires a repo to Crowdin, Lokalise, or Weblate with branch-scoped sync, glossary and translation memory reuse, and placeholder validation.
- `l10n-regression-auditor` — Runs a localization QA pass across locales, catching truncation, overlap, untranslated keys, placeholder mismatches, and layout breakage in RTL builds.
- `script-font-auditor` — Checks font stacks cover CJK, Arabic, Devanagari, and Thai glyphs, adjusting line height and subsetting so no locale renders tofu.
- `encoding-mojibake-debugger` — Tracks mojibake back to its source, checking double encoding, MySQL utf8 versus utf8mb4, BOM handling, and NFC or NFD normalization mismatches.
- `address-format-mapper` — Maps postal address fields, personal name order, and phone formats per country, so forms and labels match local expectations and E.164.

---

# AI & Data

*Models, agents, pipelines, and evidence. — 190 skills.*

## 18 · AI & LLM Engineering

*40 skills*

- `prompt-refactor-planner` — Splits a bloated prompt into ordered sections, extracts few-shot blocks, then re-runs evals to prove behaviour held after rewriting.
- `few-shot-example-curator` — Selects, orders, and balances few-shot exemplars to counter recency and label bias when a prompt's accuracy plateaus.
- `json-schema-conformer` — Constrains model output to a JSON Schema, adds a validate-and-repair loop, and flags keywords the provider silently ignores.
- `grammar-constrained-decoder` — Writes GBNF or regex grammars for Outlines, XGrammar, or llama.cpp so open-weight models emit parseable output every call.
- `streaming-output-parser` — Assembles SSE deltas into usable state, parsing incomplete JSON safely so streaming UIs render partial structured output without crashing.
- `rag-chunking-planner` — Picks chunk size, overlap, and split boundaries from document structure, then measures retrieval hit rate across the candidate settings.
- `chunk-context-enricher` — Prepends document titles, breadcrumbs, and LLM-written context to each chunk before embedding, cutting retrieval misses on ambiguous fragments.
- `hybrid-search-fuser` — Combines BM25 and dense retrieval with reciprocal rank fusion, tuning weights and k on a labelled query set.
- `reranker-cascade-tuner` — Sizes the retrieve-then-rerank cascade, choosing cross-encoder top-k and cutoff scores when recall is fine but precision drags.
- `retrieval-recall-evaluator` — Scores retrieval alone with recall@k, MRR, and nDCG on golden query-document pairs before blaming the generator for bad answers.
- `citation-span-validator` — Forces span-level citations in RAG answers and verifies each quoted span appears verbatim in the retrieved source text.
- `embedding-model-selector` — Benchmarks candidate embedding models on your own labelled pairs instead of MTEB averages, weighing dimension, cost, and domain fit.
- `retrieval-query-expander` — Rewrites user queries with HyDE, multi-query, and step-back variants, measuring which expansion lifts recall on ambiguous questions.
- `embedding-compression-tuner` — Shrinks vector storage with Matryoshka truncation and int8 or binary quantization, plotting the recall lost at each compression step.
- `llm-eval-harness-builder` — Scaffolds a versioned eval suite with dataset, task runner, scorers, and a CI report before any prompt ships to production.
- `llm-judge-calibrator` — Aligns an LLM judge to human labels, measuring agreement and correcting position, verbosity, and self-preference bias in the rubric.
- `eval-dataset-curator` — Builds a golden eval set from production traces, stratifying by difficulty, deduplicating near-matches, and checking for training-data leakage.
- `hallucination-rate-auditor` — Measures groundedness by decomposing answers into atomic claims and checking each against source context, reporting a per-release hallucination rate.
- `prompt-regression-gate` — Blocks a prompt or model change in CI when eval scores drop beyond the noise band, using paired significance tests.
- `finetune-vs-rag-decider` — Decides whether a task needs retrieval, fine-tuning, or better prompting, using failure-mode evidence rather than instinct, before budget is committed.
- `sft-dataset-formatter` — Converts raw conversations into JSONL with the model's exact chat template, masking prompt tokens so only completions contribute loss.
- `lora-adapter-tuner` — Sets LoRA rank, alpha, dropout, and target modules for a given base model and dataset size, then checks for overfitting.
- `prompt-injection-hardener` — Hardens an LLM feature against injected instructions in retrieved or user content using delimiters, spotlighting, provenance tags, and privilege separation.
- `llm-redteam-prober` — Runs a jailbreak and injection attack corpus against a deployed integration, scoring bypass rate per attack family and logging survivors.
- `content-filter-calibrator` — Calibrates moderation thresholds per category against a labelled sample, trading false positives for false negatives with the risk owner's numbers.
- `pii-redaction-gateway` — Strips PII from prompts before they leave your network and rehydrates placeholders in responses, logging every redaction for audit.
- `token-cost-accountant` — Attributes token spend per feature, tenant, and route using the provider's own tokenizer, then flags the queries burning the budget.
- `prompt-cache-optimizer` — Reorders prompts so the stable prefix stays byte-identical, places cache breakpoints, and reports hit rate against the minimum cacheable length.
- `semantic-cache-builder` — Caches responses by embedding similarity with a tuned threshold, plus namespace and invalidation rules that stop stale answers being served.
- `model-cost-router` — Routes each request to the cheapest model that passes its eval bar, with escalation rules and a measured cost-per-solved-task.
- `inference-latency-budgeter` — Divides an end-to-end latency target into TTFT, inter-token, retrieval, and guardrail budgets, then names which stage broke the SLO.
- `vllm-server-tuner` — Tunes vLLM knobs like max_num_seqs, gpu_memory_utilization, and chunked prefill against a measured request mix when GPU throughput disappoints.
- `local-model-quantizer` — Chooses GGUF, AWQ, or GPTQ quantization for a VRAM budget, computing weight and KV cache footprint before writing the Ollama Modelfile.
- `batch-inference-runner` — Ships offline jobs through provider batch APIs at discount, handling shard sizing, partial failures, and reconciliation of results to input rows.
- `vision-token-estimator` — Computes image token cost from resolution and tiling rules per provider, then resizes inputs before an upload blows the budget.
- `document-vision-extractor` — Extracts structured fields and tables from page images with a vision model, emitting per-field confidence and a human review queue.
- `llm-trace-instrumenter` — Instruments an LLM app with OpenTelemetry GenAI semantic conventions so prompts, tokens, and retrieval spans land in Langfuse or Phoenix.
- `online-eval-sampler` — Samples live traffic, scores it with reference-free judges, and alerts when quality drifts before users report the regression.
- `model-capability-mapper` — Tabulates context limits, modality support, pricing, and feature gaps across candidate models so selection stops running on stale assumptions.
- `model-migration-planner` — Plans a swap to a new model with prompt portability checks, re-baselined evals, shadow traffic, and a rollback trigger.

## 19 · Agents, MCP & Claude Code Tooling

*35 skills*

- `agent-topology-selector` — Chooses between a fixed workflow, a single agent loop, and orchestrator-worker fan-out when scoping an automation, scoring ambiguity, error cost, and verifiability.
- `agent-loop-designer` — Designs an agent's think-act-observe loop with explicit stop conditions, turn budgets, and state carried between steps, before writing the runner.
- `agent-handoff-designer` — Specifies handoff contracts between agents covering payload schema, ownership transfer, and termination rules, so multi-agent runs stop dropping task state.
- `subagent-task-decomposer` — Decomposes a large task into parallel subagent briefs with isolated context, explicit deliverables, and merge rules, when one context window cannot hold it.
- `subagent-definition-writer` — Writes .claude/agents definition files with name, description, tools, and model frontmatter so Claude Code delegates to the right subagent automatically.
- `autonomous-loop-hardener` — Adds step budgets, drift detection, cost ceilings, and a kill switch to an agent loop that will run unattended overnight or in CI.
- `tool-description-tuner` — Rewrites tool names, descriptions, and parameter docs from eval traces where the model picked the wrong tool or hallucinated arguments.
- `tool-result-shaper` — Caps and reshapes tool return payloads with field filtering, pagination cursors, and truncation markers when raw API responses flood the context window.
- `tool-error-message-writer` — Turns tool failures into model-actionable error strings that name the bad field and the fix, replacing raw stack traces and HTTP codes.
- `tool-idempotency-hardener` — Gives write tools idempotency keys, dry-run flags, and confirmation gates so an agent retrying after a timeout cannot duplicate side effects.
- `mcp-server-scaffolder` — Scaffolds a new MCP server in FastMCP or the TypeScript SDK, wiring tool registration, structured output schemas, and server lifecycle correctly.
- `mcp-transport-selector` — Picks stdio, Streamable HTTP, or legacy SSE transport for an MCP server and configures sessions, resumability, and origin checks accordingly.
- `mcp-oauth-flow-builder` — Wires OAuth 2.1 with PKCE, dynamic client registration, and resource indicators into a remote MCP server when bearer tokens must be user-scoped.
- `mcp-tool-surface-trimmer` — Measures token cost per tool definition across connected MCP servers, then disables unused tools and merges overlapping ones crowding the context window.
- `mcp-server-conformance-tester` — Exercises an MCP server against the protocol: initialize handshake, capability negotiation, JSON-RPC error codes, and schema round-trips, before publishing it.
- `mcp-connection-debugger` — Diagnoses an MCP server that starts but exposes no tools, checking stdout pollution, env inheritance, handshake timeouts, and protocol version skew.
- `mcp-confused-deputy-auditor` — Audits an MCP server for token passthrough, confused deputy proxying, and tool-description injection before it is exposed to untrusted callers.
- `claude-hooks-builder` — Implements PreToolUse, PostToolUse, and Stop hooks for Claude Code with correct JSON stdin parsing and blocking exit codes when a rule must always fire.
- `claude-settings-resolver` — Traces why a Claude Code permission, env var, or model setting is not applying, across enterprise, project, local, and user settings files.
- `slash-command-builder` — Authors Claude Code slash commands with frontmatter for allowed-tools, argument-hint, and model, plus $ARGUMENTS handling and bash or file interpolation.
- `claude-md-curator` — Prunes and restructures CLAUDE.md when instructions stop being followed, cutting contradictions, dead rules, and prose the model reads but never applies.
- `skill-description-optimizer` — Tunes SKILL.md frontmatter descriptions to fix false and missed triggers, then measures firing accuracy against a labeled prompt set.
- `skill-content-splitter` — Splits an oversized SKILL.md into progressive-disclosure reference files and scripts, keeping the always-loaded body under budget when the instructions outgrow one file.
- `skill-library-deduplicator` — Finds overlapping, stale, and never-triggered skills in a large library, measures description collisions, and proposes merges or deletions.
- `agent-memory-designer` — Separates what an agent persists between sessions into facts, episodes, and artifacts, with write, refresh, and decay rules that stop memory rot.
- `context-compaction-planner` — Plans mid-run history compaction: what to summarize, what to offload to files, and what must survive verbatim, before a long agent session degrades.
- `context-window-budgeter` — Allocates a run's context window across system prompt, tool schemas, history, and retrieved files, flagging overruns before the agent starts working.
- `agent-permission-scoper` — Scopes allow, ask, and deny permission rules for an agent's tools, narrowing paths, commands, and domains to what the task actually needs.
- `agent-sandbox-builder` — Builds a container, VM, or git worktree sandbox with filesystem and network egress allowlists before letting an agent run unattended shell commands.
- `human-checkpoint-designer` — Places approval gates at an agent workflow's irreversible steps, defining what the reviewer sees, what they can edit, and how the run resumes.
- `agent-eval-harness-builder` — Assembles a regression suite for an agent from frozen task fixtures, mocked tools, and trajectory assertions, so prompt edits stop silently breaking behavior.
- `tool-call-mock-recorder` — Records live tool calls into replayable fixtures so agent tests run deterministically offline instead of hitting real APIs on every suite run.
- `agent-failure-triager` — Classifies a failed agent run against a taxonomy of wrong tool, bad argument, ignored result, lost context, and premature stop, then prescribes the fix.
- `agent-run-checkpointer` — Persists agent state after each committed step so a crashed or interrupted long run resumes from the last good checkpoint instead of restarting.
- `agent-cost-profiler` — Attributes token spend across turns, tools, and subagents from run logs, then names the biggest waste like re-read files or unbounded tool output.

## 20 · Data Engineering & Pipelines

*30 skills*

- `debezium-cdc-planner` — Configures Debezium connectors with snapshot modes, tombstone handling, and a stream cutover so initial loads and change events merge without gaps.
- `ingestion-connector-builder` — Writes a Singer tap or Airbyte source with incremental state bookmarks, schema discovery, and rate-limit backoff when no vendor connector exists.
- `source-target-reconciler` — Generates row-count and checksum comparisons between source tables and warehouse copies, then reports drift by partition when totals stop matching.
- `kafka-topic-designer` — Sizes Kafka partitions, picks message keys, and sets retention, cleanup.policy, and replication before a topic ships and ordering guarantees get locked.
- `kafka-consumer-lag-triager` — Diagnoses growing consumer lag from rebalance storms, slow poll loops, or partition skew, and prescribes max.poll.records and scaling fixes.
- `avro-schema-evolution-validator` — Checks Avro or Protobuf changes against Schema Registry compatibility modes and flags field removals and default gaps that break live consumers.
- `flink-checkpoint-tuner` — Tunes Flink checkpoint intervals, state backends, and two-phase-commit sinks when barrier alignment stalls or exactly-once delivery drops to at-least-once.
- `stream-windowing-designer` — Picks tumbling, sliding, or session windows and sets watermarks and allowed lateness so event-time aggregations stay correct under out-of-order streams.
- `dbt-incremental-strategist` — Chooses between merge, insert_overwrite, and append strategies, sets unique_key and partition predicates, and rewrites full-refresh models that outgrew their runtime.
- `dbt-test-coverage-auditor` — Maps dbt generic and singular tests against source freshness and model criticality, then fills gaps and tunes test severity thresholds.
- `dbt-snapshot-designer` — Builds slowly changing dimension snapshots with timestamp or check strategies, picking invalidate_hard_deletes and unique keys before history starts accumulating wrong.
- `airflow-scheduling-auditor` — Audits Airflow schedule_interval, catchup, data_interval, and timezone settings to catch DAGs that skip runs or double-process partitions.
- `airflow-to-dagster-migrator` — Converts Airflow DAGs into Dagster software-defined assets, mapping operators, XComs, and sensors, and stages a dual-run cutover plan.
- `dagster-asset-designer` — Models pipelines as Dagster software-defined assets with partition definitions, io_managers, and auto-materialize policies instead of imperative op graphs.
- `backfill-run-planner` — Plans a partitioned backfill with concurrency caps, checkpointing, and blast-radius limits, then sequences reruns so downstream models refresh in order.
- `pipeline-idempotency-hardener` — Converts append-only pipeline writes into partition-overwrite or upsert operations keyed on stable business keys so retries never duplicate rows.
- `late-arriving-dimension-resolver` — Handles facts landing before their dimension rows using inferred members, lookback windows, and restatement jobs that repair keys once dimensions arrive.
- `spark-skew-join-tuner` — Diagnoses Spark stage skew from the SQL tab, then applies salting, broadcast hints, or adaptive query execution to unstick straggler tasks.
- `parquet-layout-tuner` — Sets Parquet row-group size, compression codec, dictionary encoding, and Bloom filters, and merges small files that inflate scan latency.
- `iceberg-table-maintainer` — Schedules Iceberg compaction, snapshot expiration, orphan-file cleanup, and manifest rewrites when metadata bloat slows planning or storage costs climb.
- `delta-merge-tuner` — Speeds up Delta Lake MERGE upserts using partition pruning predicates, Z-order or liquid clustering, and deletion vectors when rewrite volume explodes.
- `lake-partition-strategist` — Chooses partition columns and granularity for lake tables, sizing files against query filters and avoiding high-cardinality keys that shatter directories.
- `snowflake-credit-optimizer` — Cuts Snowflake credit burn by right-sizing warehouses, tuning auto-suspend, adding query tags, and finding the queries behind spend spikes.
- `bigquery-cost-controller` — Caps BigQuery spend with partition pruning, clustering, materialized views, custom quotas, and slot reservations after bytes-scanned billing surprises the team.
- `redshift-distkey-planner` — Selects Redshift distribution style and sort keys from join and filter patterns, then schedules VACUUM and ANALYZE to keep plans honest.
- `warehouse-migration-planner` — Sequences a Redshift or Hadoop move to Snowflake or BigQuery with dialect transpilation, dual-write parity checks, and a staged consumer cutover.
- `data-contract-drafter` — Writes producer-consumer data contracts with schema, semantics, freshness SLAs, and breaking-change policy, then wires enforcement into CI before publishing a table.
- `data-quality-suite-builder` — Assembles Great Expectations or Soda checks for volume, nullability, uniqueness, and distribution drift, wiring failures to quarantine instead of silent passes.
- `column-lineage-tracer` — Parses warehouse SQL with sqlglot to emit column-level lineage graphs, answering which upstream field feeds a column before a breaking change lands.
- `pipeline-pii-masker` — Classifies PII columns during ingestion and applies hashing, tokenization, or dynamic masking policies so raw identifiers never reach downstream marts.

## 21 · Machine Learning & Data Science

*35 skills*

- `feature-leakage-auditor` — Traces each feature back to its source timestamp, flags target leakage and look-ahead bias, and blocks offending columns before training.
- `categorical-encoding-selector` — Chooses between one-hot, target, and ordinal encoding by cardinality and model family, fitting target encoders inside cross-validation folds.
- `cv-split-designer` — Chooses grouped, stratified, or time-ordered cross-validation from the data's leakage structure and emits the matching scikit-learn splitter code.
- `imbalanced-data-strategist` — Compares class weighting, threshold moving, and resampling for rare-event targets, then picks one and states its calibration cost.
- `sklearn-pipeline-refactorer` — Converts ad-hoc preprocessing into a scikit-learn ColumnTransformer pipeline so scalers and encoders fit only on training folds.
- `gradient-boosting-tuner` — Tunes XGBoost and LightGBM in a fixed order of depth, regularization, then learning rate, using early stopping on holdout.
- `hyperparameter-search-planner` — Sizes the search budget, picks random, Optuna TPE, or Hyperband, and defines log-scale ranges with early-stopping pruners.
- `pytorch-training-loop-auditor` — Checks a PyTorch loop for missing zero_grad, eval-mode leaks, undetached loss accumulation, and wrong scheduler stepping order.
- `nan-loss-debugger` — Bisects NaN or exploding training loss through gradient norms, warmup schedule, fp16 overflow, and unnormalized input rows.
- `torch-oom-resolver` — Clears CUDA out-of-memory failures during training using batch-size search, gradient accumulation, activation checkpointing, and memory-snapshot profiling.
- `classification-metric-selector` — Picks an evaluation metric that matches the cost matrix and class prior, rejecting accuracy when base rates are heavily skewed.
- `probability-calibration-tuner` — Diagnoses overconfident classifiers with reliability curves, applies Platt scaling or isotonic regression, and confirms the gain using Brier score.
- `model-error-slicer` — Slices evaluation metrics by cohort to locate where a model fails, ranking segments by volume-weighted error contribution.
- `shap-attribution-analyzer` — Selects the right SHAP explainer for the model type, computes global and local attributions, and flags misleading correlated-feature readings.
- `model-fairness-auditor` — Measures demographic parity, equalized odds, and subgroup error gaps across protected attributes, then reports the mitigation tradeoff per threshold.
- `notebook-to-module-refactorer` — Extracts a Jupyter notebook into tested modules with a CLI entrypoint, config file, and seeds, removing hidden cell-order state.
- `training-run-reproducer` — Pins seeds, library versions, data hashes, and determinism flags so a training run reproduces its metrics or explains the divergence.
- `model-registry-promoter` — Gates promotion from staging to production on signature checks, reproducible metrics, and MLflow registry stage transitions with recorded lineage.
- `model-serving-packager` — Packages a trained model with its preprocessing, pinned versions, and input schema into a BentoML or TorchServe endpoint.
- `train-serve-skew-detector` — Compares offline feature distributions against live serving logs, isolating skew caused by duplicated code, timing gaps, or null handling.
- `feature-drift-detector` — Sets population stability index and KS thresholds per feature, separates covariate drift from concept drift, and wires retraining alerts.
- `retraining-trigger-planner` — Defines retraining triggers from drift magnitude, label lag, and performance decay rather than an arbitrary fixed calendar cadence.
- `statistical-test-selector` — Maps data shape, pairing, and distribution assumptions to the correct test, blocking t-tests on skewed or dependent samples.
- `multiple-comparison-corrector` — Applies Bonferroni, Holm, or Benjamini-Hochberg correction across a test family and restates which findings survive the adjusted threshold.
- `experiment-power-calculator` — Computes sample size and runtime from baseline rate, minimum detectable effect, and variance, then warns about peeking and multiple comparisons.
- `causal-effect-estimator` — Draws the DAG, picks an identification strategy, and estimates treatment effects with propensity scores, difference-in-differences, or instrumental variables.
- `observational-bias-checker` — Checks an observational analysis for Simpson's paradox, collider bias, survivorship filtering, and unmeasured confounding before any causal claim ships.
- `timeseries-backtest-designer` — Builds walk-forward and expanding-window backtests with embargo gaps, blocking random shuffles that leak future values into forecast training.
- `forecast-model-selector` — Tests stationarity and seasonality, then chooses among ETS, ARIMA, Prophet, and gradient boosting against a seasonal naive baseline.
- `recsys-evaluation-harness` — Evaluates recommenders with leave-one-last-item splits, NDCG and recall at k, plus coverage and popularity-bias diagnostics per segment.
- `recsys-cold-start-planner` — Designs content-based fallbacks, exploration bandits, and onboarding prompts for new users and items that lack interaction history.
- `image-augmentation-designer` — Selects augmentations that preserve label semantics for the imaging domain, orders Albumentations transforms, and previews train-versus-serve mismatch.
- `object-detection-evaluator` — Computes mAP across IoU sweeps, separates localization from classification errors, and surfaces the worst false-positive clusters per class.
- `text-classifier-baseline-builder` — Builds a TF-IDF plus linear baseline with stratified evaluation before any deep model, reporting the accuracy floor to beat.
- `topic-model-tuner` — Tunes LDA or BERTopic cluster counts using coherence scores, then labels topics and flags junk clusters formed from boilerplate.

## 22 · Analytics, BI & Reporting

*25 skills*

- `event-taxonomy-designer` — Defines an object-action event naming scheme with typed properties and a versioned tracking plan before instrumentation scatters ad-hoc event names.
- `tracking-plan-auditor` — Compares live Amplitude or Mixpanel events against the tracking plan, flagging missing properties, casing drift, and events firing twice per action.
- `identity-stitching-planner` — Maps anonymous IDs to user IDs across devices with alias tables and merge rules so pre-signup activity survives in retention reports.
- `metric-layer-modeler` — Encodes metrics once in dbt Semantic Layer, Cube, or LookML with dimensions, filters, and grain, so every tool returns identical numbers.
- `metric-definition-arbiter` — Resolves competing definitions of active user, revenue, or churn into one documented spec with owner, grain, filters, and deprecation notes.
- `north-star-metric-selector` — Picks a north-star metric and input metrics that survive gaming, tie to revenue, and move within a team's control horizon.
- `metric-tree-decomposer` — Breaks a headline metric into a multiplicative driver tree with owned inputs, then quantifies each branch's contribution to the current movement.
- `retention-cohort-analyzer` — Builds N-day and unbounded retention curves by signup cohort, separating true churn from reporting-window truncation before anyone declares a trend.
- `funnel-dropoff-analyzer` — Defines funnel steps, conversion windows, and denominators, then locates drop-off segments while ruling out instrumentation gaps masquerading as user behavior.
- `attribution-model-selector` — Compares last-touch, position-based, Markov, and Shapley attribution against holdout lift, then documents which credit model the reported numbers use.
- `ltv-cohort-modeler` — Projects cohort lifetime value from partial revenue curves using retention decay and payback windows, marking where extrapolation stops being defensible.
- `user-path-analyzer` — Extracts common navigation paths and loops from event streams into Sankey-ready aggregates, collapsing rare branches that make path charts unreadable.
- `metric-anomaly-explainer` — Triages a metric spike or drop through instrumentation breaks, seasonality, mix shift, and segment drill-down before anyone writes an incident narrative.
- `experiment-readout-writer` — Turns A/B results into a readout with effect sizes, confidence intervals, guardrails, and a ship-or-kill recommendation instead of a bare p-value.
- `sql-fanout-join-auditor` — Inspects analyst SQL for join fan-out, duplicated aggregates, and NULL-swallowing filters that silently inflate counts in dashboards and one-off pulls.
- `sessionization-sql-builder` — Writes gaps-and-islands SQL that groups events into sessions by inactivity timeout, handling timezone boundaries and cross-day sessions window functions usually mangle.
- `sql-date-spine-builder` — Generates a date or hour spine and left-joins it to sparse aggregates so time-series charts show zeros instead of skipping empty periods.
- `dashboard-layout-designer` — Arranges a dashboard around one question per view with a headline metric, supporting cuts, and filters, cutting tiles nobody acts on.
- `chart-type-selector` — Matches chart form to the analytical question and data shape, rejecting pie charts, dual axes, and truncated baselines that mislead readers.
- `dashboard-sprawl-pruner` — Ranks dashboards by view counts, owners, and duplication, then archives or merges the stale ones and redirects viewers to certified replacements.
- `lookml-explore-designer` — Designs LookML Explores with join relationships, symmetric aggregates, and fan-out-safe measures so self-serve users cannot build silently wrong queries.
- `bi-row-security-modeler` — Implements row-level security in Looker, Metabase, or Superset with user attributes and sandbox tests proving each role sees only permitted rows.
- `tableau-extract-tuner` — Speeds up slow Tableau workbooks by replacing live connections with extracts, pruning unused fields, and moving row-level calculations upstream into the warehouse.
- `exec-metric-brief-writer` — Drafts a recurring executive metrics brief that leads with movement, names the driver and owner, and keeps chart count under a page.
- `insight-narrative-builder` — Structures a one-off analysis into a decision-ready storyline with a claim, evidence chain, annotated charts, and the action it should trigger.

## 23 · Research & Synthesis

*25 skills*

- `research-question-framer` — Converts a vague brief into an answerable question with scope, unit of analysis, the decision at stake, and stopping criteria.
- `literature-review-planner` — Turns a research question into search strings, database choices, inclusion criteria, and a screening log before any reading starts.
- `scholarly-search-builder` — Writes database-specific syntax for PubMed MeSH, Scopus, and Google Scholar, then tunes recall against a known-item seed set.
- `snowball-citation-crawler` — Runs forward and backward citation snowballing from seed papers until new hits stop appearing, logging the saturation point reached.
- `prisma-protocol-builder` — Drafts a systematic review protocol with PRISMA flow counts, PICO framing, dual screening, and a pre-registered deviation log.
- `source-credibility-scorer` — Rates each source on provenance, funding, peer review, and recency against a fixed rubric, recording the score beside every claim.
- `source-bias-mapper` — Identifies funding ties, selection effects, and framing language across a source set, then rebalances the reading list toward opposing evidence.
- `primary-source-locator` — Replaces press releases and secondary retellings with the underlying filing, dataset, or paper, and records the retrieval date.
- `retraction-status-checker` — Screens a reference list against retraction and expression-of-concern registries, flagging withdrawn work and the papers still citing it.
- `paper-methods-auditor` — Reads a paper in methods-first order, testing sample size, controls, and effect claims against the abstract's stated conclusion.
- `evidence-table-builder` — Extracts population, method, effect size, and limitation fields from each study into a comparable evidence table with source anchors.
- `finding-confidence-rater` — Assigns GRADE-style confidence to each finding from study design, consistency, and directness, then states what evidence would raise it.
- `source-conflict-reconciler` — Resolves conflicting sources by comparing method, sample, and date, then reports which finding supersedes and what would change the verdict.
- `research-note-synthesizer` — Clusters raw notes into claim-level themes with traceable source anchors, keeping quotes, paraphrase, and inference visibly separated.
- `claim-provenance-tracer` — Traces a claim back through citation chains to its primary source, exposing citation laundering and quotes that mutated in transit.
- `claim-checkability-triager` — Ranks claims in a draft by falsifiability and damage if wrong, then verifies the top tier against primary sources.
- `citation-integrity-checker` — Verifies every citation resolves to a real work that says what the text claims, flagging fabricated DOIs and misquotes.
- `web-source-archiver` — Snapshots cited web pages into an archive with timestamps and hashes so quotes survive link rot and silent edits.
- `briefing-doc-writer` — Structures a decision brief with the bottom line first, confidence levels, dissenting evidence, and an appendix carrying full citations.
- `expert-interview-planner` — Prepares an expert interview with prior-knowledge gaps, non-leading question ladders, disclosure boundaries, and a note-capture template.
- `survey-instrument-designer` — Writes survey items free of double-barreled and leading wording, orders them to limit priming, and specifies the sampling frame.
- `competitive-scan-builder` — Maps competitors across pricing, positioning, and feature gaps from public sources into a comparison grid with dated evidence links.
- `market-sizing-estimator` — Builds top-down and bottom-up market size estimates from cited inputs, stating assumptions and a range instead of one number.
- `prior-art-searcher` — Searches patent databases with CPC classes and claim-term synonyms, then charts each hit against the target claim elements.
- `patent-landscape-mapper` — Clusters a patent corpus by assignee, priority date, and CPC class to expose white space and expiring blocking families.

---

# Product, Design & Business

*Everything around the code that decides whether it matters. — 250 skills.*

## 24 · Design Systems & Visual Design

*28 skills*

- `design-token-architect` — Structures raw, semantic, and component token tiers into DTCG-format JSON when a design system outgrows scattered CSS custom properties.
- `multi-brand-theme-builder` — Derives per-brand token overrides from one shared core so a single component library skins several products without forking stylesheets.
- `token-deprecation-migrator` — Plans a token rename or removal with an alias window, codemod, and adoption report so downstream consumers migrate without breaking.
- `figma-variable-syncer` — Reconciles Figma variable collections against the repository token JSON, resolving renames, mode mismatches, and drift before either side publishes.
- `hardcoded-style-detector` — Scans a codebase for hex colors, magic pixel values, and inline shadows that bypass tokens, suggesting the nearest token per hit.
- `oklch-ramp-generator` — Generates perceptually even lightness ramps in OKLCH with controlled chroma curves, emitting CSS custom properties for every brand hue.
- `apca-palette-tuner` — Adjusts palette lightness steps until each documented foreground and background pairing clears its APCA target, printing the corrected OKLCH values.
- `semantic-color-mapper` — Binds palette ramps to intent roles such as danger, success, and info, recording each mapping so components stop choosing colors ad hoc.
- `dark-mode-palette-deriver` — Derives a dark counterpart from a light palette by rebalancing lightness and chroma in OKLCH, then rechecking surface tints and pairings.
- `type-scale-composer` — Composes a modular type scale from a base size and ratio, emitting clamp() values with matched line heights and tracking per step.
- `typeface-pairing-selector` — Selects display and text pairings by x-height ratio, stroke contrast, and vertical metrics, noting license tier and self-hosted weight budget.
- `baseline-grid-aligner` — Snaps type and component heights onto a four-pixel baseline grid, listing every offender with the line-height or padding fix required.
- `spacing-scale-calibrator` — Calibrates a spacing scale with density tiers, binding each step to component padding and stack gaps so layouts abandon arbitrary pixels.
- `layout-grid-planner` — Specifies column count, gutter, and margin per breakpoint, then records which components span which tracks so responsive layouts stay predictable.
- `elevation-system-builder` — Builds a layered shadow scale with matched ambient and key light values, tying each z-level to surface tint and border treatment.
- `motion-token-designer` — Defines duration and easing tokens per interaction class, pairing enter, exit, and emphasis curves so every transition reads as one system.
- `easing-curve-tuner` — Converts spring parameters into cubic-bezier approximations and back, reporting overshoot, settling time, and the CSS value to paste.
- `figma-component-api-designer` — Names Figma component properties, variants, and slots to mirror coded props so a boolean in the file matches a boolean in code.
- `variant-state-enumerator` — Enumerates the interaction states a component owes (hover, focus, active, disabled, selected, loading) and lays out the Figma variant grid before design review.
- `figma-library-hygienist` — Audits a Figma library for detached instances, local styles, duplicate components, and page sprawl, ranking cleanup by how many files break.
- `brand-book-translator` — Converts a static brand book's logo rules, palette, and type specs into product design tokens and component overrides for a live surface.
- `icon-set-normalizer` — Normalizes icon artwork onto one grid, stroke weight, and optical size, outlining strokes to paths and pruning near-duplicate glyphs.
- `chart-palette-composer` — Composes categorical, sequential, and diverging chart scales that stay separable under color-vision deficiency and hold their meaning in both themes.
- `dataviz-style-tokenizer` — Turns axis, gridline, legend, and tooltip treatments into tokens, stripping chart junk so every chart looks native to the product.
- `spec-redline-annotator` — Annotates a design frame with measured spacing, type, and color redlines that name the token behind each value instead of the raw pixel.
- `design-drift-auditor` — Compares a staging build against its design source, listing spacing, type, and color drifts alongside the token each element should use.
- `generic-aesthetic-detector` — Scores a UI against default-template tells like centered hero, gradient blob, uniform cards, and violet accent, prescribing a specific replacement direction.
- `art-direction-brief-writer` — Turns product positioning into a named visual direction with references, palette, type, texture, and motion rules before any pixels move.

## 25 · UX Research & Product Design

*18 skills*

- `interview-protocol-planner` — Plans an interview protocol with a recruiting screener, consent, timeboxed sections, and note-taking roles, so separate sessions produce comparable data.
- `leading-question-linter` — Flags leading, double-barreled, and hypothetical questions in a research script, rewriting each into a past-behavior prompt participants can actually answer.
- `usability-test-scripter` — Scripts a moderated usability session with tasks, success criteria, and think-aloud prompts, sizing the sample to the decision at hand.
- `journey-map-builder` — Builds a journey map with stages, actions, thoughts, pain points, and an emotional curve, anchored to research quotes instead of team assumptions.
- `service-blueprint-mapper` — Maps frontstage actions onto backstage systems, support processes, and handoffs, exposing where a service breaks between teams rather than screens.
- `ia-sitemap-restructurer` — Restructures a sitemap around user mental models, testing every label for information scent, depth, and category overlap before navigation ships.
- `card-sort-analyzer` — Analyzes open and closed card sort results into a dendrogram and agreement matrix, naming the categories participants actually formed.
- `jtbd-persona-builder` — Turns interview transcripts into behavioral personas and job stories carrying situation, motivation, and outcome, dropping demographics that never change a decision.
- `wireframe-flow-sketcher` — Sketches low-fidelity screen flows in grayscale using real content lengths, deferring color and type so structure gets critiqued first.
- `prototype-fidelity-selector` — Chooses paper, clickable, or coded prototype fidelity from the question being answered, the audience, and the cost of being wrong.
- `heuristic-evaluation-scorer` — Walks an interface against Nielsen's ten heuristics, logging every violation with its location, severity rating, and the heuristic it breaks.
- `sus-survey-scorer` — Scores System Usability Scale responses into a 0-100 value, percentile rank, and adjective rating, flagging samples too small to trust.
- `research-repo-curator` — Structures a research repository with atomic nuggets, tags, and evidence links, so past studies surface before a team re-runs them.
- `onboarding-flow-designer` — Designs a first-run sequence around time-to-first-value, cutting tours and modals that delay the activation moment the product actually depends on.
- `empty-state-designer` — Designs empty, error, and loading states with cause, next action, and recovery path, so a blank screen stops reading as a broken one.
- `form-ux-optimizer` — Restructures a form by cutting optional fields, correcting input types and validation timing, and moving errors beside the control that caused them.
- `research-findings-synthesizer` — Clusters raw observations into themes with supporting quotes and confidence levels, separating what participants did from what the team hoped to hear.
- `research-readout-composer` — Assembles a stakeholder readout that opens with the decision, backs each claim with evidence, and states what the study cannot answer.

## 26 · Product & Project Management

*24 skills*

- `prd-spec-drafter` — Drafts a product requirements doc with problem framing, non-goals, success metrics, rollout plan, and open questions when a feature leaves discovery.
- `prd-gap-auditor` — Audits a draft PRD for undefined success metrics, missing non-goals, unstated assumptions, and unowned dependencies before the spec review meeting.
- `roadmap-horizon-planner` — Converts a ranked backlog into a now/next/later roadmap with themes, confidence bands, and dependency callouts instead of dated feature promises.
- `okr-objective-designer` — Turns strategy statements into objectives with measurable key results, baselines, and targets, rejecting task lists and binary ship-dates disguised as outcomes.
- `okr-checkin-scorer` — Scores each key result 0.0 to 1.0 at mid-quarter check-in, records confidence trend, and calls whether to re-scope, drop, or double down.
- `rice-score-calculator` — Computes RICE scores from reach, impact, confidence, and effort inputs, flagging items whose ranking flips under plausible confidence error.
- `kano-survey-analyzer` — Classifies features as must-be, performance, delighter, or indifferent from paired functional and dysfunctional survey answers using the Kano evaluation table.
- `wsjf-backlog-ranker` — Ranks a SAFe backlog by weighted shortest job first, scoring business value, time criticality, risk reduction, and job size on Fibonacci scales.
- `epic-story-slicer` — Splits oversized epics into vertical slices using SPIDR patterns, keeping every slice independently demoable and rejecting horizontal layer-by-layer tickets.
- `acceptance-criteria-writer` — Converts a user story into testable Given/When/Then criteria covering happy path, edge cases, error states, and an explicit out-of-scope list.
- `backlog-hygiene-auditor` — Sweeps an issue tracker for stale, duplicate, and unrefined tickets, proposing close, merge, or refine actions against agreed age thresholds.
- `feature-request-triager` — Clusters inbound feature requests by underlying job, links them to canonical backlog entries, and replies to requesters with a routing decision.
- `estimate-drift-auditor` — Compares past estimates against actual cycle times to expose systematic optimism and derive a calibration multiplier for the next planning round.
- `throughput-forecast-simulator` — Runs Monte Carlo simulation over historical throughput to produce 50/85/95 percent delivery-date bands instead of a single committed ship date.
- `sprint-capacity-planner` — Builds a sprint plan from real capacity minus holidays, on-call, and carryover, flagging over-commitment before the team locks the sprint goal.
- `dependency-register-mapper` — Maps cross-team dependencies into a register with owner, needed-by date, and confirmation status, escalating any blocker the providing team has not acknowledged.
- `risk-register-builder` — Builds a risk register scoring probability against impact, assigning owners, mitigation triggers, and review dates for every entry above the escalation threshold.
- `critical-path-analyzer` — Computes critical path and float across a milestone dependency graph, identifying which slipping tasks actually move the launch date and which absorb slack.
- `stakeholder-update-writer` — Composes a weekly stakeholder update with status color, deltas since last update, decisions needed, and top risks, cutting narrative filler.
- `scope-cut-negotiator` — Produces a ranked scope-reduction menu with cost and user impact per cut when a date is at risk, forcing an explicit trade-off.
- `launch-readiness-auditor` — Runs a go/no-go checklist across support, docs, legal, pricing, rollback, and on-call ownership, blocking launch on any unowned or unverified item.
- `discovery-handoff-packager` — Packages research findings, settled scope, and open questions into an engineering-ready brief that separates decided calls from assumptions still under test.
- `retro-action-tracker` — Structures a retrospective into owned, dated action items and tracks carryover across cycles, surfacing themes that reappear in three consecutive retros.
- `incident-followup-router` — Turns incident postmortem actions into prioritized backlog tickets with owners and dates, promoting repeat root causes into named roadmap investments.

## 27 · Technical Writing & Documentation

*22 skills*

- `openapi-description-filler` — Fills missing summaries, parameter descriptions, and response examples in an OpenAPI spec, enforcing consistent verb mood and documented error statuses per endpoint.
- `api-error-catalog-generator` — Documents every error an API returns with code, HTTP status, cause, and remediation, cross-checking the catalog against error paths in source.
- `readme-skeleton-builder` — Builds a README ordered as pitch, quickstart, install, usage, and links, keeping the first runnable command above the fold.
- `troubleshooting-page-builder` — Turns recurring support tickets into a symptom-first troubleshooting page, pairing each error signature with its cause and a verified fix.
- `changelog-entry-curator` — Turns merged pull requests into Keep a Changelog sections, sorting entries into Added, Changed, Deprecated, Removed, Fixed, and Security while dropping internal refactors.
- `release-notes-composer` — Composes user-facing release notes for a version, leading with impact and upgrade steps rather than commit titles or ticket numbers.
- `diataxis-doc-classifier` — Classifies each docs page as tutorial, how-to, reference, or explanation, then splits pages that mix two Diátaxis modes into separate documents.
- `tutorial-path-designer` — Designs a learning-oriented tutorial with one guaranteed happy path, no optional branches, and a working artifact the reader finishes holding.
- `runbook-procedure-writer` — Writes an operational runbook with preconditions, copy-pasteable commands, expected output per step, escalation contacts, and a rollback path for each action.
- `docs-style-guide-linter` — Enforces a docs style guide with Vale rules covering voice, tense, person, and banned phrasing, failing pull requests on new violations.
- `terminology-glossary-keeper` — Builds a product glossary and flags synonym drift where docs, UI strings, and code call one concept by three different names.
- `docs-nav-architect` — Restructures documentation navigation around reader tasks instead of team org charts, capping tree depth and eliminating orphan pages no link reaches.
- `docs-ci-pipeline-builder` — Wires a docs-as-code pipeline that builds, link-checks, spell-checks, and deploys a preview per pull request, failing on broken anchors.
- `doc-freshness-auditor` — Flags pages whose referenced endpoints, flags, or version pins changed since last review, ranking staleness by page traffic and support ticket volume.
- `doc-snippet-executor` — Extracts fenced code and shell blocks from documentation, runs them in a clean container during CI, and fails on the first divergent output.
- `migration-guide-writer` — Writes an upgrade guide with a breaking-change table, before-and-after diffs, codemod commands, and an ordered path for users skipping several versions.
- `deprecation-notice-writer` — Writes deprecation notices naming the removal version, replacement API, and migration snippet, then mirrors the same wording into docs, changelog, and runtime warnings.
- `error-message-rewriter` — Rewrites error strings to state what failed, why it failed, and the next action, attaching stable error codes and documentation links.
- `onboarding-path-mapper` — Maps a new-contributor onboarding path with verified setup commands, an architecture tour, ownership pointers, and a scoped first issue to ship.
- `code-comment-auditor` — Audits comments for restating code, stale claims, and missing rationale, rewriting each survivor to explain why the code exists rather than what it does.
- `docstring-coverage-enforcer` — Enforces docstring coverage on exported symbols using per-language conventions like JSDoc, Google style, and rustdoc, failing CI below an agreed threshold.
- `mermaid-diagram-composer` — Composes Mermaid sequence and flow diagrams for docs, capping node counts for readability and matching every label to real source identifiers.

## 28 · Marketing, SEO & Growth

*28 skills*

- `seo-crawl-auditor` — Crawls a site for broken links, redirect chains, canonical conflicts, and orphan pages, then ranks fixes by traffic impact.
- `robots-sitemap-validator` — Checks robots.txt directives and XML sitemaps against protocol limits like 50,000 URLs, flagging blocked canonicals and stale lastmod values.
- `redirect-map-builder` — Maps old URLs to new ones for a site migration, detecting chains, loops, and unmapped pages before launch.
- `internal-link-optimizer` — Builds an internal link graph, finds orphaned and over-linked pages, and proposes anchor placements that push equity to revenue pages.
- `hreflang-matrix-validator` — Validates hreflang annotations for return-tag reciprocity, x-default coverage, and correct ISO 639-1 and 3166-1 codes across locale clusters.
- `jsonld-schema-builder` — Emits schema.org JSON-LD with the required and recommended properties each rich result needs, then validates nesting and @id references.
- `keyword-cluster-mapper` — Groups keywords into topic clusters by SERP overlap, assigns each cluster one target URL, and flags cannibalization between existing pages.
- `content-brief-writer` — Turns a keyword cluster into a writer brief with search intent, entity coverage, heading outline, and required internal links.
- `editorial-calendar-planner` — Sequences a quarterly content calendar from keyword clusters, balancing funnel stages, production capacity, and dependencies between pillar and supporting posts.
- `content-decay-triager` — Finds pages losing impressions over time and sorts them into refresh, consolidate, redirect, or prune buckets with effort estimates.
- `backlink-profile-auditor` — Scores a backlink profile for anchor over-optimization and spam patterns, then emits a Google-format disavow file for the worst domains.
- `link-prospect-analyzer` — Scores link prospects on topical relevance, organic traffic, and outbound-link spam signals, then drafts a specific pitch angle per site.
- `ad-account-structurer` — Designs Meta and Google campaign hierarchies with naming conventions, budget splits, and audience exclusions that prevent overlap and learning-phase resets.
- `ad-creative-test-planner` — Builds a creative test matrix with one variable per cell, required sample size, and stopping rules that prevent calling winners early.
- `ad-copy-policy-linter` — Checks ad copy against per-placement character limits and prohibited-claim policies for Google and Meta before assets reach review.
- `negative-keyword-miner` — Parses search term reports to find wasted spend, then builds negative keyword lists at the right campaign or account level.
- `email-deliverability-auditor` — Verifies SPF, DKIM, and DMARC alignment, checks blocklists and bounce rates, and traces why sends land in spam.
- `lifecycle-email-mapper` — Maps trigger emails to lifecycle stages with entry conditions, exit criteria, frequency caps, and suppression rules that stop overlapping sends.
- `newsletter-list-pruner` — Defines sunset and re-engagement rules for unengaged subscribers, protecting sender reputation while quantifying the list revenue you give up.
- `landing-page-cro-auditor` — Scores a landing page on message match, friction, proof, and call-to-action clarity, then returns a ranked experiment backlog.
- `pricing-page-designer` — Structures pricing tiers, anchor placement, feature-gating tables, and objection FAQs so visitors self-select a plan without contacting sales.
- `growth-loop-mapper` — Diagrams acquisition loops as input, action, and output steps, then locates the constrained step and estimates cycle time and amplification.
- `referral-program-designer` — Designs referral incentives, sharing surfaces, and fraud guards, then models payback against the k-factor needed to cover the reward cost.
- `positioning-canvas-builder` — Derives positioning from competitive alternatives, unique attributes, and the value they enable, in that order, before naming a market category.
- `brand-voice-guide-writer` — Codifies voice as tone dimensions, lexicon rules, and paired do/don't rewrites so every writer and model produces consistent copy.
- `competitor-funnel-analyzer` — Tears down a competitor's ads, landing pages, pricing, and email flow, then names the positioning gaps you can attack.
- `launch-campaign-planner` — Builds a T-minus launch timeline with channel sequencing, asset checklists, embargo handling, and a day-of runbook with named owners.
- `social-cadence-planner` — Allocates a weekly posting matrix across platforms by content pillar and funnel stage, with distribution slots for each long-form asset.

## 29 · Sales, CRM & Customer Success

*16 skills*

- `pipeline-stage-designer` — Defines pipeline stages with buyer-verifiable exit criteria and required evidence, so stage movement reflects reality instead of rep optimism.
- `pipeline-hygiene-auditor` — Flags deals with stale activity, missing next steps, or past-due close dates, then emits per-owner cleanup tasks before forecast calls.
- `outbound-sequence-builder` — Builds a multi-touch outbound cadence with per-touch angle, channel, timing, bump logic, and exit rules tied to reply signals.
- `meddic-qualification-mapper` — Maps discovery notes onto MEDDIC or SPIN fields, scores each element, and lists the questions needed to close qualification gaps.
- `demo-flow-designer` — Sequences a demo around discovered pain instead of a feature tour, scripting three proof moments and the transition to next steps.
- `sales-proposal-generator` — Assembles a proposal from CRM deal data with scope, quoted line items, ROI math, and discount approval thresholds applied.
- `objection-library-builder` — Builds an objection library sorted by price, timing, authority, and need, pairing each response with proof assets and a redirect question.
- `crm-data-auditor` — Detects duplicate records, malformed emails, unowned accounts, and empty required fields, then emits a merge and backfill plan.
- `lead-scoring-router` — Scores leads on firmographic fit and engagement, then routes them by territory and capacity with speed-to-lead SLA timers and fallbacks.
- `onboarding-playbook-builder` — Builds a customer onboarding plan with time-to-value milestones, kickoff agenda, success criteria, and a sales-to-CS handoff checklist.
- `churn-risk-scorer` — Computes account health from usage decline, support volume, and sponsor changes, then selects a save play matched to the risk driver.
- `qbr-deck-generator` — Generates a QBR deck that compares delivered outcomes against stated goals, surfaces adoption gaps, and lands one expansion ask.
- `ticket-severity-triager` — Classifies inbound tickets by severity and business impact, assigns queues and response clocks, and separates real incidents from noise.
- `support-macro-writer` — Writes a support macro library from top ticket intents, with variable placeholders, tone rules, and coverage gaps reported per intent.
- `escalation-path-designer` — Designs escalation tiers with objective triggers, owner at each level, customer comms cadence, and criteria for pulling in an executive sponsor.
- `renewal-motion-planner` — Plans the renewal timeline from T-minus-120 with risk gates, uplift justification, and expansion triggers surfaced before the customer starts shopping.

## 30 · Content, Media & Creative Production

*22 skills*

- `ffmpeg-filtergraph-composer` — Builds FFmpeg filter_complex graphs for overlay, concat, scale and audio mixing, validating stream labels and pad counts before running.
- `video-encode-preset-picker` — Maps a delivery target to codec, bitrate ladder, container and pixel format, emitting the matching FFmpeg or HandBrake preset.
- `subtitle-format-migrator` — Converts between SRT, WebVTT, ASS and TTML, preserving styling and cue timing while fixing overlaps and frame-rate drift.
- `caption-readability-auditor` — Checks caption cues against characters-per-second, line-length and minimum-duration limits, flagging every cue that outruns broadcast and streaming style guides.
- `podcast-audio-restorer` — Chains noise reduction, de-essing, de-reverb and click removal in the order that avoids artifacts, auditioning each stage before render.
- `loudness-target-normalizer` — Normalizes audio to per-platform LUFS and true-peak targets with two-pass ffmpeg loudnorm, reporting measured integrated loudness and range.
- `podcast-rss-feed-validator` — Validates a podcast feed against Apple and Spotify namespace rules, catching missing enclosures, unstable GUIDs and artwork that fails ingestion.
- `image-prompt-iterator` — Turns a visual brief into structured generation prompts with seed, aspect and negative controls, logging every variant for reproducible re-rolls.
- `photo-retouch-sequencer` — Orders raw development, blemish work, dodge-and-burn, frequency separation and output sharpening so every edit stays non-destructive and re-editable.
- `thumbnail-variant-designer` — Drafts thumbnail variants with subject crop, text-safe zones and contrast checks, then previews each at small-player size before export.
- `video-script-drafter` — Drafts a shootable script with hook, beats, B-roll cues and word-count timing, hitting the target runtime within ten percent.
- `storyboard-shot-planner` — Breaks a script into numbered shots with framing, lens, movement and duration, emitting a shot list and animatic timing sheet.
- `vertical-video-reframer` — Reframes horizontal footage to 9:16 with subject-tracked crops, safe-area guards for platform chrome, and burned-in caption placement.
- `youtube-chapter-generator` — Derives timestamped chapters from a transcript, enforcing the zero-start rule, three-chapter minimum and ten-second floor YouTube requires.
- `media-asset-librarian` — Designs naming, folder and sidecar-metadata conventions for footage and stills, then bulk-renames and indexes an existing unsorted library.
- `color-grade-planner` — Plans a grade from log normalization through primaries, secondaries and look, checking scopes stay inside broadcast-legal levels at each stage.
- `lut-colorspace-mapper` — Maps camera log profiles to the correct conversion LUT and working color space, preventing double transforms and clipped highlights.
- `voiceover-script-marker` — Marks a script with pronunciation, pacing and emphasis cues, then splits it into takes sized for clean recording and retakes.
- `lower-third-motion-builder` — Builds lower-third and title animations with shared easing, hold and exit timings, exporting templates that survive text-length changes.
- `story-beat-doctor` — Diagnoses a draft against beat structure, stakes escalation and turn placement, then prescribes specific cuts and reorderings with stated reasons.
- `production-calendar-builder` — Sequences shoot days, edit buffers and publish slots into a calendar that respects real turnaround times and batch capacity.
- `longform-clip-harvester` — Scans a transcript for self-contained moments with hooks, then cuts timestamped clip candidates ranked by payoff and standalone clarity.

## 31 · Business, Finance & Legal Ops

*22 skills*

- `nda-clause-comparator` — Compares an inbound NDA against a house baseline, flagging term length, residuals, non-solicit and jurisdiction drift for counsel review.
- `msa-redline-drafter` — Drafts MSA redlines covering liability caps, indemnity, IP ownership and termination rights, marking each change for a qualified lawyer to approve.
- `sow-scope-definer` — Writes a SOW with deliverables, acceptance criteria, change-order triggers and payment milestones, removing the ambiguities that cause scope disputes.
- `safe-note-modeler` — Models SAFE conversion across valuation caps, discounts and MFN terms, showing resulting dilution per round for founders to verify with counsel.
- `employment-agreement-reviewer` — Reviews employment and contractor agreements for IP assignment, classification risk and restrictive covenants, flagging state-specific gaps for counsel.
- `pricing-model-selector` — Compares per-seat, usage, tiered and hybrid packaging against cost floors and willingness-to-pay data, recommending one model with stated trade-offs.
- `invoice-compliance-checker` — Checks invoices for VAT numbers, reverse-charge notes, sequential numbering and payment terms that tax authorities require before sending.
- `collections-dunning-sequencer` — Sequences dunning notices, service-suspension thresholds and escalation timing for overdue invoices, keeping the tone recoverable until the final demand.
- `cash-flow-forecaster` — Projects thirteen-week cash flow from AR aging, AP schedules, payroll dates and committed spend, surfacing the weeks that go negative.
- `cap-table-auditor` — Audits a cap table for option-pool math, vesting schedules, fully-diluted counts and 409A staleness, listing every error for the company lawyer.
- `equity-grant-packager` — Assembles option grants with strike, vesting, cliff, exercise window and 83(b) timing, flagging which resolutions need board approval first.
- `unit-economics-analyzer` — Breaks contribution margin down by cohort from CAC, COGS, payback and retention curves, testing whether the economics survive at scale.
- `vendor-risk-screener` — Screens a new vendor for security posture, data residency, subprocessor chain and financial stability before procurement commits to a contract.
- `gdpr-ropa-builder` — Builds an Article 30 record of processing activities from system inventories, mapping lawful basis, retention and transfer mechanism per data flow.
- `dpa-clause-checker` — Checks a data processing agreement against Article 28 duties, subprocessor consent, SCC modules and audit rights, listing gaps for counsel.
- `soc2-readiness-mapper` — Maps existing controls to Trust Services Criteria, naming evidence owners and the gaps that would fail a Type II observation window.
- `entity-formation-planner` — Compares LLC, C-corp and holding structures against fundraising, tax and multi-state plans, listing the filings each option needs before counsel signs.
- `investor-update-writer` — Drafts a monthly investor update with metrics, burn, runway, asks and misses, keeping the bad news in the first third.
- `expense-policy-drafter` — Drafts an expense policy with per-diem limits, approval thresholds, receipt rules and exceptions, sized to real headcount and travel patterns.
- `sales-tax-nexus-mapper` — Maps where sales-tax and VAT registration obligations trigger from revenue, staff and inventory, listing thresholds for an accountant to confirm.
- `insurance-coverage-reviewer` — Reviews E&O, D&O, cyber and general liability policies against real exposure, flagging sublimits, exclusions and gaps for a broker.
- `trademark-conflict-triager` — Screens a proposed name against Nice classes, existing marks and common-law use, ranking conflict risk before a trademark attorney files.

## 32 · Personal Productivity & Life Ops

*18 skills*

- `inbox-triage-router` — Sorts an email backlog into reply, delegate, defer, and archive lanes by detecting the real ask buried in each thread.
- `email-voice-calibrator` — Extracts greeting, register, and sign-off patterns from your sent mail, then drafts replies that sound like you wrote them.
- `gmail-filter-composer` — Turns recurring inbox annoyances into Gmail search-operator filters with labels and skip-inbox rules, exported as an importable filter XML.
- `calendar-defragmenter` — Rewrites a shredded week into contiguous focus blocks by batching meetings, respecting travel buffers, and proposing decline or async swaps.
- `meeting-action-extractor` — Pulls owners, deadlines, and next steps out of raw meeting notes, flagging every decision that left the room without an assignee.
- `gtd-inbox-clarifier` — Runs GTD's clarify pass over a capture list, applying the two-minute rule and forcing one concrete next action per project.
- `para-vault-organizer` — Files loose notes into PARA's projects, areas, resources, and archives tiers using actionability tests instead of topic guesswork.
- `zettel-link-weaver` — Splits long notes into atomic zettels, adds bidirectional links and index notes, and reports orphans your vault never references.
- `reading-queue-prioritizer` — Scores a read-later backlog on decay, effort, and payoff, then cuts the queue to what this month actually needs.
- `reading-highlight-distiller` — Condenses exported highlights through progressive summarization layers, bolding then restating, so a note stays rediscoverable years after capture.
- `habit-streak-analyzer` — Reads habit-tracker exports to find where streaks break, then shrinks each habit to a cue-anchored minimum you can keep.
- `trip-itinerary-builder` — Assembles day-by-day travel plans with transfer buffers, opening hours, and booking references, flagging connections tighter than the airport allows.
- `home-maintenance-planner` — Builds a household upkeep calendar from appliance intervals, filter and detector schedules, and warranty dates, with seasonal reminders per room.
- `subscription-spend-auditor` — Parses card and bank statements for recurring charges, ranks each by cost per use, and drafts the cancellation steps.
- `expense-ledger-reconciler` — Reconciles a personal ledger against bank exports, catching duplicate imports, uncategorized splits, and balances that drifted since the last close.
- `deep-work-block-designer` — Carves focus blocks around your energy curve and hard commitments, then writes the notification, door, and status-message rules that defend them.
- `weekly-review-facilitator` — Walks the weekly review in order: clear inboxes, close loops, check calendars two weeks out, then reset next week's commitments.
- `digital-clutter-sweeper` — Ranks Downloads, Desktop, and duplicate photos by staleness and size, then stages a reversible delete list before removing anything.

## 33 · Career, Hiring & Team Ops

*14 skills*

- `resume-ats-optimizer` — Rewrites CV bullets into quantified accomplishment statements, aligns keywords with the target job description, and checks ATS-parseable formatting.
- `portfolio-case-writer` — Structures a project into context, constraint, decision, and measured outcome so a portfolio piece shows judgment rather than screenshots.
- `mock-interview-runner` — Runs mock loops by format, drilling STAR stories, system design frameworks, and role-specific coding patterns, then scoring answers against interviewer rubrics.
- `job-posting-linter` — Lints a job description for gendered wording, inflated must-haves, missing pay range, and level language that mismatches the ladder.
- `interview-rubric-designer` — Converts a role's success criteria into behaviorally anchored rating scales and a scorecard interviewers can fill without inventing their own bar.
- `take-home-brief-builder` — Scopes a take-home to a truthful time box with starter code, a published rubric, and no work the company would ship.
- `hiring-debrief-facilitator` — Orders a debrief so scorecards land before discussion, dissent gets aired, and the hire decision cites evidence instead of vibes.
- `career-ladder-mapper` — Drafts level definitions with scope, autonomy, and impact signals per rung, then maps current engineers onto the ladder with evidence.
- `comp-band-benchmarker` — Builds salary bands from leveled market data, adjusts for geography and equity mix, and flags employees drifting below band midpoint.
- `onboarding-ramp-planner` — Sequences a new hire's first ninety days into access, context, and shipped-work milestones with a named buddy and week-one commit.
- `direct-report-agenda-curator` — Curates a rolling 1:1 agenda from open threads, growth goals, and unsaid friction, keeping the report's items ahead of the manager's.
- `promo-packet-assembler` — Assembles review and promotion packets that map artifacts to each ladder expectation, replacing adjectives with dated evidence before calibration.
- `team-health-pulse-analyzer` — Scores anonymous squad health checks, tracks dimension trends across quarters, and turns each red rating into one owned action item.
- `offboarding-handover-auditor` — Audits a departure for orphaned access, undocumented ownership, and knowledge only one person held, then schedules the transfer sessions.

## 34 · Automation & Integrations

*18 skills*

- `n8n-flow-designer` — Designs n8n workflows with explicit item mapping, error branches, and Split In Batches loops instead of one node that silently drops items.
- `n8n-code-node-writer` — Writes n8n Code nodes against the real item shape, using $input.all and $json correctly so runs do not fail per-item.
- `zapier-task-budgeter` — Restructures Zaps so filters and paths run before paid actions, projecting monthly task consumption before the plan limit bites.
- `make-scenario-router` — Lays out Make scenarios with routers, iterators, and aggregators in the order that keeps bundle counts and operations spend predictable.
- `zapier-to-n8n-migrator` — Ports Zaps into n8n workflows, mapping triggers, filters, and formatter steps while rebuilding the auth and error handling each platform expects.
- `scrape-policy-gatekeeper` — Checks robots.txt, terms of service, and rate limits before any scrape, then documents what the target permits and what stays off-limits.
- `playwright-scrape-stabilizer` — Hardens Playwright scrapers against layout drift with role-based locators, network idle waits, pagination guards, and session reuse across runs.
- `bash-script-hardener` — Rewrites shell scripts with strict mode, quoted expansions, trap cleanup, and ShellCheck-clean syntax so failures stop instead of cascading.
- `powershell-compat-linter` — Flags PowerShell that breaks on 5.1: pipeline chain operators, ternaries, native stderr redirection, and UTF-16 output other tools cannot read.
- `cron-expression-validator` — Validates cron expressions against the day-of-month plus day-of-week OR rule, DST shifts, and timezone drift, printing the next ten fire times.
- `saas-webhook-glue-generator` — Wires one SaaS webhook to another app's API, mapping payload fields, verifying signatures, and replaying the events a receiver rejected.
- `file-watcher-pipeline-builder` — Builds watch-folder pipelines that debounce partial writes, move files atomically, and quarantine anything the converter step could not process.
- `bulk-rename-planner` — Plans bulk file renames as a dry run first, detecting collisions, case-only clashes, and path-length limits before writing a single change.
- `apps-script-batch-optimizer` — Converts Apps Script that loops cell by cell into batched getValues and setValues calls, keeping runs under the six-minute execution limit.
- `ipaas-retry-tuner` — Tunes retry policy per connector with exponential backoff, jitter, a dead-letter path, and caps that stop a partial failure replaying forever.
- `nocode-idempotency-guard` — Adds dedupe keys and a seen-runs store to no-code flows so webhook replays and manual reruns stop creating duplicate records.
- `automation-secret-vaulter` — Moves credentials out of step names, notes, and logs into platform credential stores, then plans rotation without breaking live scenarios.
- `automation-heartbeat-monitor` — Instruments scheduled flows with dead-man heartbeats and expected-run windows so a trigger that quietly stopped firing pages someone within hours.

## 35 · Domain Verticals

*20 skills*

- `double-entry-ledger-designer` — Designs append-only double-entry ledger schemas with integer minor units, balanced journal entries, and clearing accounts for wallet, payout, or billing systems.
- `iso20022-message-mapper` — Maps payment data onto pain.001, pacs.008, and camt.053 schemas, flagging XSD violations and MT-to-MX gaps during bank rail integration.
- `hl7-fhir-migrator` — Maps legacy HL7 v2 segments like PID and OBX onto FHIR R4 resources when migrating an interface engine feed, flagging terminology gaps.
- `phi-exposure-auditor` — Traces PHI through logs, analytics SDKs, and backups against the eighteen Safe Harbor identifiers, drafting a remediation checklist for a privacy officer.
- `product-feed-validator` — Validates Google Merchant Center and Meta catalog feeds against required attributes, GTIN check digits, and availability enums before submission.
- `returns-rma-planner` — Plans returns and RMA flows for online stores, covering restocking fees, EU fourteen-day withdrawal rights, reverse-logistics labels, and refund tender rules.
- `reso-listing-mapper` — Maps property records onto RESO Data Dictionary fields and Web API OData queries when syncing MLS feeds, resolving enum and status mismatches.
- `comparable-sales-analyzer` — Builds comparable-sales grids with paired-sales adjustments for living area, condition, and market timing, producing a draft valuation for a licensed appraiser.
- `edi-transaction-mapper` — Maps purchase orders and shipments onto X12 850, 856, and 810 or EDIFACT equivalents, validating ISA envelopes and 997 acknowledgments.
- `hts-code-classifier` — Proposes HS and HTS codes using the General Rules of Interpretation, flags origin and valuation risks, and leaves confirmation to a customs broker.
- `rollback-netcode-designer` — Designs client prediction, server reconciliation, and rollback windows with tick rates and lag compensation for real-time multiplayer games.
- `game-economy-balancer` — Models currency faucets, sinks, and drop-table expected values, projecting inflation and checking loot-odds disclosure rules before a live-ops season.
- `ediscovery-load-file-builder` — Builds Concordance DAT and OPT load files with Bates ranges, delimiter conventions, and metadata fields for Relativity or similar review platforms.
- `legal-citation-formatter` — Formats case and statute citations to Bluebook or OSCOLA rules with correct signals, pincites, and short forms, flagging authorities counsel must verify.
- `lti-launch-integrator` — Wires LTI 1.3 OIDC launches, JWT role claims, Deep Linking, and grade passback through Assignment and Grade Services against an LMS.
- `assessment-item-designer` — Designs multiple-choice items for question banks with plausible distractors, Bloom's-aligned stems, and rationales, screening for cueing flaws that inflate scores.
- `open-data-catalog-publisher` — Publishes dataset metadata as DCAT and data.json entries with license, spatial, and update-frequency fields that CKAN and federal harvesters require.
- `vpat-conformance-drafter` — Drafts VPAT conformance reports for procurement bids, mapping tested results onto Section 508 and EN 301 549 criteria and flagging untested claims.
- `interval-meter-normalizer` — Normalizes Green Button and SCADA interval data into billing determinants, handling DST gaps, kW versus kWh, and time-of-use demand windows.
- `ghg-inventory-builder` — Builds Scope 1, 2, and 3 inventories under the GHG Protocol, setting control boundaries and separating location-based from market-based Scope 2 reporting.

---

## License

Apache License 2.0. See [LICENSE](LICENSE).

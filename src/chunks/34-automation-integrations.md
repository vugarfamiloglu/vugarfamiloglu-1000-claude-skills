## Automation & Integrations

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

## Localization & i18n

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

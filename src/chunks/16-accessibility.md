## Accessibility Engineering

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

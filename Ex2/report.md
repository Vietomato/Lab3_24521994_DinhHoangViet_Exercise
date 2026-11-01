# Scientist Directory — Ex2 Report

## Requirements and implementation

The app presents a scientist directory with name search, an IQ threshold,
sorting, deletion, reset, and accessible feedback. The page is implemented
with React 19 and Vite. Its behavior and visual styling live in
`ScientistDirectory.jsx` and `ScientistDirectory.module.css`; individual
scientist rows and delete buttons are rendered by `ScientistList.jsx`.

## State and data handling

`ScientistDirectory` stores the current people, search query, minimum IQ, and
sort selection. The matching and sorted lists are derived from that state
during render rather than stored separately. Search trims surrounding
whitespace and ignores case. Sorting uses `toSorted()` so it does not mutate
the source array. Delete uses a functional state setter and filters by stable
`person.id`. Reset restores the initial data and the default search, IQ, and
sort values.

React keys use stable scientist IDs. Deletion tracks the next visible row and
recovers focus to that row's delete button, the preceding visible row, or Reset
when no rows remain. Labeled controls, a live result count, distinct empty
states, semantic form markup, visible focus styling, and responsive CSS are
implemented.

## Verification results

| Check | Actual result |
|---|---|
| `npm run lint` | Passed in the latest verification run. |
| `npm run build` | Passed in the latest verification run. |
| Browser form and labels | One semantic form rendered; all three controls had associated labels. |
| Keyboard submit | Enter in the search field kept the current URL unchanged. |
| Search, IQ, sort, deletion, Reset, keyboard focus, and 375px layout | Exercised in prior browser checks in this session; no reproducible functional defect was reported for these behaviors. Screenshot files and a standalone manual-check record are not available in the workspace. |
| React DevTools Profiler | Not run; render-call versus committed-update observations are pending. |

No screenshots are currently present under `docs/evidence/`, and
`docs/manual-checks.md` is not present. Therefore this report does not link to
or claim screenshot evidence.

## AI failure audit

One verified specification gap was found: the original controls wrapper was a
`div` rather than a semantic form. It was fixed in commit `ac1d5db` and
retested in the browser as described in [AI_FAILURE_AUDIT.md](./AI_FAILURE_AUDIT.md).
No additional reproducible issues were confirmed; the audit does not invent
findings to meet the suggested target of three.

## Git and remaining limitations

The `EX2` branch contained 11 commits relative to `origin/main` after the
verified form fix and before this documentation commit. This count is a local
history count; it does not establish that the latest changes have been pushed.
Task 11's manual-check document, saved screenshots, and Profiler observations
remain outstanding. Task 13 remains unchecked until its evidence and prompt-log
requirements are met.

# AI Failure Audit

## Summary

One verified specification failure was found and fixed. The task requested
that confirmed findings be recorded without inventing issues to reach the
target of three; no additional reproducible failures were confirmed.

## Verified finding

### Missing semantic form around directory controls

- **Prompt/rule:** `task_decomposition.md`, Task 05, requires preventing
  default form submission; `project_rules.md`, section 7, requires semantic
  `form` markup and prevention of accidental submission.
- **Original code:** Commit `d464654`,
  `src/components/ScientistDirectory.jsx`; the controls were wrapped in a
  `<div className={styles.controls}>`, and the file contained no `<form>`.
- **Reproduction:** Inspect the source at the original commit:
  `git show d464654:Ex2/src/components/ScientistDirectory.jsx`. The controls
  wrapper is a `div` and no form element is rendered.
- **Expected:** The controls are grouped in a semantic form and submitting
  through the keyboard does not navigate or reload the page.
- **Actual:** The controls were not a form, so the semantic requirement was
  unmet. This was a verified specification/accessibility gap; no claim is made
  that the old page navigated on Enter.
- **Cause:** The controls were styled as a visual group but were not given the
  required form semantics.
- **Fix:** Wrap the controls in a `<form>` and prevent its default submit
  behavior.
- **Retest:** In the running app, confirmed one form is rendered, all three
  input/select controls have associated labels, and pressing Enter in the
  search field leaves the page URL unchanged.
- **Evidence:** Original source at `d464654`; current-browser observations
  above. No screenshot was saved, so there is no image evidence.
- **Fix commit:** `ac1d5db` (`fix(ex2): wrap directory controls in semantic form`).

## Pending

- React DevTools Profiler observations have not been captured.
- No other candidate issue was confirmed reproducibly; none is reported as a
  failure.

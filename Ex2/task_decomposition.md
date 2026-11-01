# Task Decomposition 

## Objective

Build an Interactive Scientist & Pioneer Directory using
React 19, Vite and JavaScript.

Required features:
- Name search.
- Minimum IQ filter.
- Immutable sorting.
- Delete and Reset.
- Accessible result count.
- Empty states.
- Responsive 375px layout.

## Working Convention

- Work inside Ex2/ on branch EX2.
- Follow project_rules.md.
- Complete one task at a time.
- Each task corresponds to one meaningful commit.
- Update prompt_log.md with actual AI usage.
- Mark a task complete only after verification.
- If a task is already completed and committed, record the
  existing commit instead of repeating the work.

Completion loop:

1. Read the current task.
2. Send a scoped prompt to AI or implement it manually.
3. Review and understand the changes.
4. Perform the acceptance checks.
5. Update the task status and prompt log.
6. Inspect staged changes.
7. Commit and push.

Planned commits: 13.
Minimum required: 10 meaningful commits.

---

## [ ] Task 01 — Initialize and Clean the React App

Actions:
- Initialize a Vite React app in Ex2/ if it does not exist.
- Install dependencies.
- Keep StrictMode in main.jsx.
- Remove unused Vite demo content and assets.
- Display a main heading: Scientist Directory.
- Display a subtitle: Lab 3 — Exercise 2.

Acceptance:
- Development server starts.
- The page shows the heading and subtitle.
- React 19 is installed.
- No unused demo imports remain.
- Lint and build pass.

Commit:
chore(ex2): scaffold React directory app

---

## [ ] Task 02 — Define Rules and Workflow Documents

Actions:
- Add project_rules.md.
- Add task_decomposition.md.
- Create prompt_log.md.
- Create AI_FAILURE_AUDIT.md with a pending-status template.
- Keep documents inside Ex2/.

Acceptance:
- Rules and task acceptance criteria are clear.
- Prompt log contains actual activity only.
- Audit does not claim unverified failures.

Commit:
docs(ex2): define project rules and task decomposition

---

## [ ] Task 03 — Create the Scientist Dataset

Actions:
- Create src/data/smartPeople.js.
- Export SMART_PEOPLE.
- Add all six records from project_rules.md.
- Store fixed IDs with each record.

Acceptance:
- Exactly six records exist.
- Every ID is unique.
- Names are strings.
- Ages and IQ values are numbers.
- Values match the assignment dataset.

Commit:
feat(ex2): add scientist dataset with stable IDs

---

## [ ] Task 04 — Render the Semantic Directory

Actions:
- Create ScientistDirectory.jsx.
- Accept initialData = SMART_PEOPLE.
- Initialize people state from initialData.
- Create ScientistList.jsx.
- Display name, age and IQ using ul/li.
- Use person.id as the list key.
- Integrate the directory into App.

Acceptance:
- All six people appear.
- Every record displays its name, age and IQ.
- No missing-key warnings occur.
- No index keys or render-generated IDs exist.

Commit:
feat(ex2): render semantic scientist directory

---

## [ ] Task 05 — Implement Name Search

Actions:
- Add query state with default ''.
- Add a controlled search input.
- Bind its visible label with useId().
- Trim and lowercase the query for matching.
- Derive matching results directly during render.
- Prevent default form submission.

Acceptance:
- EINSTEIN matches Albert Einstein.
- Leading and trailing spaces do not affect matching.
- Clearing the query restores all people.
- No filtered-list state or filtering effect exists.

Commit:
feat(ex2): implement controlled name search

---

## [ ] Task 06 — Implement the Minimum IQ Filter

Actions:
- Add minIq state with default 160.
- Add a labeled, controlled number input with min=0.
- Read valueAsNumber.
- Handle NaN with a fallback of 0.
- Combine IQ filtering with name search.

Acceptance:
- Minimum IQ 200 returns Goethe, Einstein and Sidis.
- Minimum IQ 210 returns Goethe.
- Minimum IQ 211 returns no results.
- Clearing the input does not store NaN.
- Search and IQ filters work together.

Commit:
feat(ex2): add numeric minimum IQ filter

---

## [ ] Task 07 — Implement Immutable Sorting

Actions:
- Add sortBy state with default 'iq-desc'.
- Add a labeled select using useId().
- Support IQ descending and age ascending.
- Apply toSorted() after filtering.
- Preserve the source array.

Acceptance:
- IQ descending gives:
  Goethe, Einstein, Sidis, Newton, Maxwell, da Vinci.
- Age ascending gives:
  Sidis, Maxwell, da Vinci, Einstein, Goethe, Newton.
- Search and IQ filtering still work.
- The source array order is not mutated.

Commit:
feat(ex2): add immutable IQ and age sorting

---

## [ ] Task 08 — Implement Delete and Focus Recovery

Actions:
- Add a delete button for each person.
- Include the person's name in the accessible button name.
- Delete by person.id using a functional state update.
- Do not mutate the people array.
- Recover keyboard focus after deletion.
- Provide a focusable Reset button as a fallback;
  its reset behavior will be completed in Task 09.

Acceptance:
- The correct person is deleted after filtering or sorting.
- Other records remain unchanged.
- Search and sort settings remain unchanged.
- Enter or Space activates delete.
- Focus moves to a useful remaining control.

Commit:
feat(ex2): delete scientists with keyboard focus recovery

---

## [ ] Task 09 — Implement Reset and Accessible Status

Actions:
- Complete the Reset button behavior.
- Restore initialData and all filter defaults.
- Add output role="status" aria-live="polite".
- Display the visible result count.
- Add messages for:
  1. No matching results.
  2. An empty source list after deletion.
- Keep Reset available in both cases.

Acceptance:
- Reset restores all six people.
- Reset clears query and restores minIq=160.
- Reset restores sortBy='iq-desc'.
- Reset works after deleting everyone.
- The displayed count matches the visible list.
- Empty messages match the actual situation.

Commit:
feat(ex2): add reset empty states and live result count

---

## [ ] Task 10 — Implement Responsive Styling

Actions:
- Create ScientistDirectory.module.css.
- Use CSS custom properties.
- Style controls, list items, buttons and empty messages.
- Add visible focus indicators.
- Adapt layout for 375px and desktop screens.

Acceptance:
- No horizontal page scrolling at 375px.
- Controls and text do not overlap.
- Long names wrap correctly.
- Keyboard focus is visible.
- Text and controls have sufficient contrast.

Commit:
style(ex2): add responsive CSS module and focus styles

---

## [ ] Task 11 — Verify Functionality and Accessibility

Actions:
- Create docs/manual-checks.md.
- Record expected, actual and pass/fail results.
- Check search, IQ, sort, delete and Reset together.
- Check empty results and deleting every person.
- Check keyboard operation and focus recovery.
- Inspect labels and accessible names.
- Inspect search updates using React DevTools Profiler.
- Run lint and build.
- Save actual evidence under docs/evidence/.
- Fix any reproduced defects.

Acceptance:
- Functional checks have recorded outcomes.
- Profiler observations distinguish render calls from commits.
- Unperformed checks are marked Not run.
- Lint and build pass.
- Evidence refers to real files.

Commit:
test(ex2): document functional and accessibility checks

---

## [ ] Task 12 — Complete the AI Failure Audit

Actions:
- Review actual AI output and verification findings.
- Document confirmed failures in AI_FAILURE_AUDIT.md.
- For every confirmed failure, include:
  - Prompt or prompt-log reference.
  - Original code and location.
  - Reproduction steps.
  - Expected and actual behavior.
  - Root cause and violated rule.
  - Fix and retest outcome.
  - Actual evidence and fix commit.
- Target at least three verified findings for the lab audit.
- If fewer are found, report the actual number honestly.
- Keep hypothetical candidates separate.
- Never introduce defects just to populate the audit.

Acceptance:
- Every confirmed finding is reproducible and supported.
- Fixed findings include retest outcomes.
- No fabricated bugs, hashes or screenshots exist.
- Pending findings remain clearly labeled.

Commit:
docs(ex2): record verified AI failures and fixes

---

## [ ] Task 13 — Complete Submission Documents

Actions:
- Write README.md with setup and run commands.
- Write report.md explaining:
  - Requirements and implementation.
  - Component responsibilities.
  - State and derived-state design.
  - Immutable sorting and deletion.
  - Accessibility and responsive checks.
  - Actual AI failures and fixes.
  - Screenshots and verification results.
- Complete prompt_log.md.
- Review task checkboxes.
- Run final lint and build.
- Verify commit history and push branch EX2.

Acceptance:
- A reviewer can run the app using README.md.
- Report references actual screenshots.
- Prompt log matches the work performed.
- At least 10 meaningful Ex2 commits exist.
- Final lint and build pass.
- Git working tree is clean after committing.
- Branch EX2 is available on GitHub.

Commit:
docs(ex2): complete README report and evidence
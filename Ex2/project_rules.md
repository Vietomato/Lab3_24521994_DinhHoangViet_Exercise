# Project Rules 

## 1. Objective

Build an Interactive Scientist & Pioneer Directory with:
- Case-insensitive name search.
- Minimum IQ filter.
- Sorting by IQ descending or age ascending.
- Delete and Reset.
- Accessible result count and empty states.
- Responsive layout at 375px.

## 2. Scope and Technology

- Work only inside Ex2/.
- Do not modify Ex1/, Ex3/ or repository-root documents.
- Use React 19, Vite and JavaScript.
- Use functional components and ES module imports.
- Keep StrictMode enabled in main.jsx.
- No backend or external API is required.

## 3. Component Architecture

Suggested structure:

src/
  data/
    smartPeople.js
  components/
    ScientistDirectory.jsx
    ScientistList.jsx
    ScientistDirectory.module.css
  App.jsx
  main.jsx

Responsibilities:
- App: page structure and integration.
- ScientistDirectory: state, controls and derived results.
- ScientistList: display records and delete actions.
- smartPeople.js: original sample data.

Avoid unnecessary components and abstractions.

## 4. Data Contract

Each scientist has:
- id: unique, stable string.
- name: string.
- age: number.
- iq: number.

Use these six sample records:

| id | name | age | iq |
|---|---|---|---|
| sp-1 | Johann Goethe | 82 | 210 |
| sp-2 | Albert Einstein | 76 | 205 |
| sp-3 | Leonardo da Vinci | 67 | 180 |
| sp-4 | Isaac Newton | 84 | 190 |
| sp-5 | James Maxwell | 48 | 190 |
| sp-6 | William Sidis | 46 | 200 |

These are assignment sample values.

Use person.id as the React list key.
Do not use array indices or generate IDs during render.

## 5. State Contract

ScientistDirectory accepts:
initialData = SMART_PEOPLE

Store only these independent application values in state:
- people: initialized from initialData.
- query: default ''.
- minIq: default 160.
- sortBy: default 'iq-desc'.

Supported sort values:
- iq-desc.
- age-asc.

Compute visiblePeople directly during render.

Do not:
- Store visiblePeople or filteredPeople in state.
- Use useEffect to synchronize filtered or sorted results.
- Mutate state, props or original sample data.

Refs may be used for DOM focus management.

## 6. Feature Rules

### Search

- Use a controlled search input.
- Trim the query before matching.
- Match names without case sensitivity.
- An empty query matches every name.

### Minimum IQ

- Use a controlled number input.
- Read event.target.valueAsNumber.
- Convert NaN to 0 when the input is cleared.
- Set min=0.
- Include people whose iq >= minIq.

### Sorting

- Apply sorting after filtering.
- Use toSorted().
- IQ mode: descending.
- Age mode: ascending.
- Never mutate the people array.

### Delete

- Delete by stable person.id.
- Use a functional state update with filter().
- Keep search and sort settings unchanged.
- After keyboard deletion, move focus to the next delete
  button, the previous one, or Reset when no results remain.

### Reset

Restore:
- Original initialData.
- query = ''.
- minIq = 160.
- sortBy = 'iq-desc'.

Reset must work after every person has been deleted.

### Result and Empty States

- Display visiblePeople.length.
- Use output with role="status" and aria-live="polite".
- Show an appropriate message when filters match nothing.
- Show a different message when people is empty.
- Keep Reset available in both cases.

## 7. Accessibility and HTML

- Use semantic main, section, form, ul, li and button elements.
- Use a logical heading hierarchy.
- Every input and select needs a visible label.
- Bind label htmlFor and control id using useId().
- Do not use useId() to generate list keys.
- Use explicit button types.
- Prevent accidental form submission.
- Delete button accessible names must identify the person.
- Support keyboard operation and visible focus.
- Do not use window.alert().

## 8. Styling

- Use CSS Modules and CSS custom properties.
- Avoid inline styles.
- Support 375px and desktop layouts.
- No horizontal page scrolling at 375px.
- Do not hide overflow to conceal layout problems.
- Maintain readable text, sufficient contrast and clear focus.

## 9. Forbidden Patterns

- Class components.
- ReactDOM.render().
- Component.defaultProps.
- Index-based list keys.
- State mutation.
- Redundant filtered-list state.
- useEffect for filtering or sorting.
- dangerouslySetInnerHTML.
- keyCode.
- window.alert().

## 10. AI Workflow

- Read this file and task_decomposition.md before coding.
- Implement only the requested task.
- Do not implement future tasks automatically.
- Explain changed files, logic and verification steps.
- Do not commit or push unless explicitly requested.
- Do not mark a task complete before student verification.
- Record actual prompts in prompt_log.md.
- Do not invent test results, screenshots or audit findings.

## 11. Verification and Evidence

Before submission:
- npm run lint passes.
- npm run build passes.
- All feature combinations work.
- Keyboard navigation works.
- The 375px layout has no horizontal scrolling.
- Capture actual screenshots and relevant Profiler evidence.

StrictMode may invoke rendering more than once in development.
Distinguish component function calls from committed updates
when interpreting Profiler results.

## 12. Git and Documentation

- Follow task_decomposition.md.
- Make at least 10 meaningful commits; 13 are planned.
- Commit only completed, verified changes.
- Do not create empty commits to increase the count.
- Do not commit node_modules, dist or secrets.

Maintain:
- prompt_log.md.
- README.md.
- report.md.
- docs/manual-checks.md.
- docs/evidence/.


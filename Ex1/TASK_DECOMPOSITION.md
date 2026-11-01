# TASK DECOMPOSITION 
## Objective

Build a semantic, accessible and responsive profile card using
React 19, Vite, DeveloperCard and SkillBadge.

## Implementation Rules

- Complete and verify one task before starting the next.
- Each task corresponds to one meaningful Git commit.
- Use functional components and ES6 default parameters.
- Do not use div tags inside DeveloperCard.jsx.
- Use stable IDs as list keys.
- Use CSS Modules and CSS Custom Properties.
- Avatar images must use HTTPS and explicit dimensions.
- Support a 375px viewport without horizontal scrolling.

---

## Task 01 — Initialize the React project

Actions:
- Initialize React with Vite.
- Install dependencies.
- Verify that the development server runs.
- Verify the installed React version is 19.

Acceptance criteria:
- The starter page opens successfully.
- React 19 is installed.

Commit:
chore(ex1): initialize React 19 project with Vite

---

## Task 02 — Add project rules and task decomposition

Actions:
- Create project-rules.md.
- Create TASK_DECOMPOSITION.md.
- Define semantic HTML, accessibility and styling constraints.

Acceptance criteria:
- Both documents exist.
- Tasks have clear acceptance criteria and commit messages.

Commit:
docs(ex1): define project rules and task decomposition

---

## Task 03 — Prepare a clean application shell

Actions:
- Remove unused Vite demo content and assets.
- Remove demo styles that affect page layout.
- Create a main element with a page heading in App.jsx.
- Keep the root mounting element in index.html.

Acceptance criteria:
- The page displays the exercise heading.
- No Vite demo content remains.
- The browser console has no errors.

Commit:
refactor(ex1): replace Vite demo with semantic app shell

---

## Task 04 — Create the DeveloperCard component contract

Actions:
- Create src/components/DeveloperCard.jsx.
- Define fullName and role props with ES6 default values.
- Render article, header, hgroup, h2 and p.
- Display DeveloperCard inside App.jsx.
- Use useId to connect aria-labelledby with the card heading.

Acceptance criteria:
- The card displays the supplied name and role.
- Default values work when props are omitted.
- DeveloperCard.jsx contains no div tags.
- Each card instance has its own heading ID.

Commit:
feat(ex1): create semantic DeveloperCard with default props

---

## Task 05 — Add the HTTPS avatar

Actions:
- Add the avatarUrl prop.
- Render an img element using an HTTPS URL.
- Set explicit width and height to 64.
- Provide suitable alternative text.

Acceptance criteria:
- The avatar loads successfully.
- The image has explicit width, height and alt attributes.
- The image URL uses HTTPS.

Commit:
feat(ex1): add HTTPS avatar with explicit dimensions

---

## Task 06 — Handle avatar loading failure

Actions:
- Handle the image error event.
- Derive initials from fullName.
- Display initials when the image is missing or fails to load.
- Ensure a changed avatarUrl can be attempted again.

Acceptance criteria:
- A broken URL displays initials.
- An empty URL displays initials.
- Changing to a valid URL displays the new image.
- The fallback has an accessible description.

Commit:
feat(ex1): add accessible avatar initials fallback

---

## Task 07 — Render profile metrics semantically

Actions:
- Add the metrics prop with a default value.
- Use Object.entries to iterate over metrics.
- Render metrics using dl, dt and dd.
- Group each dt/dd pair with a keyed Fragment.

Acceptance criteria:
- All supplied metrics are displayed.
- No extra wrapper div is introduced.
- The console has no missing-key warnings.

Commit:
feat(ex1): render profile metrics with description lists

---

## Task 08 — Create the reusable SkillBadge component

Actions:
- Create src/components/SkillBadge.jsx.
- Define name and tier props with default values.
- Render the skill name and tier.
- Prepare a dedicated CSS Module for the component.

Acceptance criteria:
- SkillBadge displays supplied values.
- Default prop values work.
- SkillBadge can be reused independently.

Commit:
feat(ex1): create reusable SkillBadge component

---

## Task 09 — Integrate the skills list and profile data

Actions:
- Add the skills prop to DeveloperCard.
- Render skills using ul and li.
- Render SkillBadge inside each list item.
- Use skill.id as the list key.
- Pass personal profile data from App.jsx.
- Handle an empty skills list with a suitable message.

Acceptance criteria:
- All skills are displayed.
- No array index is used as a key.
- Empty skills are handled clearly.
- Profile information is supplied through props.

Commit:
feat(ex1): integrate profile data and stable-key skill list

---

## Task 10 — Style the card using CSS Modules

Actions:
- Create DeveloperCard.module.css.
- Define CSS Custom Properties for colors, spacing and radius.
- Style the card, header, avatar, fallback and metrics.
- Keep the avatar and initials fallback at the same dimensions.
- Avoid inline styles.

Acceptance criteria:
- Card styling is scoped through CSS Modules.
- Avatar failure does not change its reserved dimensions.
- No inline style attributes are introduced.

Commit:
style(ex1): style profile card with CSS Modules and variables

---

## Task 11 — Style skill badges

Actions:
- Style SkillBadge using its CSS Module.
- Arrange the skills list with wrapping and consistent gaps.
- Ensure long skill names can wrap.
- Keep text readable against the badge background.

Acceptance criteria:
- Badges have consistent spacing.
- Long skill names do not overflow.
- Skill styling remains scoped to its component.

Commit:
style(ex1): add scoped skill badge styles and wrapping

---

## Task 12 — Adapt the layout to a 375px viewport

Actions:
- Apply fluid widths and suitable page padding.
- Adapt the card header and metrics to narrow screens.
- Allow long names, roles and values to wrap.
- Verify the layout at 375px and desktop widths.
- Fix overflow at its source.

Acceptance criteria:
- No horizontal scrolling at 375px.
- All profile content remains readable.
- No content is clipped.
- overflow-x: hidden is not used to conceal layout problems.

Commit:
style(ex1): support 375px layout without horizontal overflow

---

## Task 13 — Verify and document the final result

Actions:
- Run npm run build.
- Check the browser console.
- Inspect semantic HTML and the accessibility tree.
- Verify HTTPS avatar, image dimensions and initials fallback.
- Verify multiple card instances have unique heading IDs.
- Verify the layout at 375px.
- Create README.md with run instructions and actual check results.
- Save screenshots showing desktop, mobile and avatar fallback.

Acceptance criteria:
- The production build succeeds.
- No console errors or key warnings remain.
- DeveloperCard.jsx contains no div tags.
- Verification results and screenshots are recorded.
- Do not claim checks that were not performed.

Commit:
docs(ex1): record build accessibility and responsive verification
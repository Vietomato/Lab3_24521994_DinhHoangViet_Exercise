# Project Rules — Exercise 3

- Scope: PUBG VN Live Telemetry inside Ex3/ only.
- Do not modify Ex1/, Ex2/ or repository-root documents.
- Use React 19, Vite, JavaScript and functional components.
- Keep StrictMode enabled.
- Use CSS Modules and semantic HTML.
- All inputs/selects need visible labels linked with useId().
- Buttons need explicit types and visible keyboard focus.

## Data
- Use assignment mock data for ces, te and ge.
- These statistics are simulated, not current real match data.
- No real PUBG API key is required.
- Records contain id, name, map, phase, alive, kills,
  wwcdProb and status.

## Async service
- Contract: fetchKraftonPubgTelemetry(squadId, { signal }).
- Return a Promise containing the selected squad data.
- Simulate network delay and 35% failure probability.
- Allow deterministic delay/failure settings for verification.
- Support already-aborted signals and cancellation during loading.
- On abort: clear timer, remove listener and reject AbortError.
- Remove abort listeners after success or failure.

## State and effects
- Use one view state: IDLE, LOADING, SUCCESS or ERROR.
- Do not use conflicting loading/error/success booleans.
- Keep selected squadId in App.
- PubgMatchTelemetry accepts squadId.
- Each fetching effect creates a fresh AbortController.
- Cleanup aborts the old request on dependency change/unmount.
- Aborted or stale requests must not update current state.
- Intentional AbortError must not display an error.
- Retry uses a functional counter update.
- Effect dependencies include squadId and retryTick.
- Do not add automatic polling unless separately requested.

## UI
- LOADING: accessible skeleton with a 220px reserved card area.
- SUCCESS: selected squad details using article and dl/dt/dd.
- ERROR: inline section role="alert" and Retry button.
- Never use window.alert().
- Keep the card area stable across states; avoid content overflow.
- Support 375px without horizontal page scrolling.
- Respect prefers-reduced-motion.

## Workflow
- Implement one task at a time.
- Explain changes and provide verification steps.
- Do not auto-commit/push or invent verification results.
- Record actual prompts in prompt_log.md.
- Record only observed, reproducible failures in AI_FAILURE_AUDIT.md.
- Keep unverified audit candidates clearly labeled.
- Use at least 10 meaningful commits; 13 are planned.
- Do not commit node_modules, dist or secrets.
- Run lint/build before submission.

## Evidence
- Save actual screenshots/logs under docs/evidence/.
- A setTimeout mock does not appear as an HTTP request in Network.
- Slow 3G does not throttle a JavaScript mock timer.
- Use service logs/tests for mock cancellation evidence.
- Network "(canceled)" evidence requires an actual HTTP fetch.
- Do not claim memory safety merely because no warning appeared.
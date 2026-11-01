# Task Decomposition 

Complete and verify one task before committing.
Update prompt_log.md with actual prompts and outcomes.
Do not mark pending browser checks as passed.

| Task | Scope | Acceptance | Commit |
|---|---|---|---|
| 01 | React scaffold | App runs; StrictMode retained | chore(ex3): scaffold telemetry app |
| 02 | Rules and documents | Rules, plan, prompt log and audit template exist | docs(ex3): define rules and task decomposition |
| [x] 03 | Squad dataset | Three stable IDs and correct sample fields | feat(ex3): add PUBG VN squad dataset |
| [x] 04 | Async mock service | Correct data, delay and configurable failure | feat(ex3): add simulated telemetry service |
| [x] 05 | Abort support | Timer/listener cleanup and AbortError verified | feat(ex3): support abortable telemetry requests |
| [x] 06 | Squad selector | App controls labeled squad selector | feat(ex3): add accessible squad selector |
| [x] 07 | Fetch state machine | IDLE/LOADING/SUCCESS/ERROR with cleanup | feat(ex3): implement telemetry state machine |
| [x] 08 | Success view | Correct squad and semantic statistics | feat(ex3): render squad telemetry details |
| 09 | Loading skeleton | Accessible reserved 220px card area | feat(ex3): add accessible loading skeleton |
| 10 | Error and Retry | Inline error; retry restarts request | feat(ex3): add error recovery and retry |
| 11 | Responsive CSS | 375px layout, focus and reduced motion | style(ex3): add responsive telemetry layout |
| 12 | Verification and audit | Actual checks, race/abort evidence and honest audit | test(ex3): verify cancellation and document AI failures |
| 13 | Submission documents | README, report, evidence and final checks | docs(ex3): complete report and submission evidence |

Final verification:
- npm run lint.
- npm run build.
- Success and failure forced separately.
- Rapid squad switching.
- Unmount during loading.
- Retry after failure.
- Keyboard controls and 375px viewport.
- At least 10 meaningful Ex3 commits.
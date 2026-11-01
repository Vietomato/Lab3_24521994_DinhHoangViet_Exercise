# Ex3 — PUBG VN Live Telemetry Report

## Scope and data

The app demonstrates an asynchronous telemetry view for three fixed PUBG VN
squads. The squad records are simulated assignment data in
`src/data/pubgSquads.js`; they are not current match data and the service does
not make HTTP requests to PUBG.

## Fetch state and lifecycle

`PubgMatchTelemetry` stores a single view object containing status, data,
error, and the squad/retry identifiers associated with the result. The
supported view states are `IDLE`, `LOADING`, `SUCCESS`, and `ERROR`:

- The view initializes as `IDLE`.
- The fetching effect starts for the selected squad. Until a result matches
  the current squad and retry tick, the UI derives and displays `LOADING`.
- A resolved service promise stores `SUCCESS` and the selected squad data.
- A rejected non-abort error stores `ERROR`; intentional or stale
  cancellations are ignored.
- The Retry button increments `retryTick` with a functional state updater.
  The effect, not the event handler, starts the next request.

The effect dependencies are `squadId` and `retryTick`. Each setup creates a
fresh `AbortController` and passes its signal to the service. Cleanup marks
the request inactive and aborts its controller. Promise handlers check both
the active flag and signal before updating state. Results also carry their
request identifiers; the component only renders success/error data if those
identifiers still match the current props. This prevents a previous squad's
data from appearing under a newly selected squad.

The mock service simulates delay with `setTimeout` and failure with a
configurable probability. It clears the timer and removes the abort listener
when the request settles or is cancelled. A JavaScript timer is not an HTTP
request, so browser Network `(canceled)` is not evidence for this service.

## UI, accessibility, and responsive behavior

The controlled squad selector has a visible label connected with `useId()`.
The success view uses an `article` and `dl`/`dt`/`dd` for squad details. The
loading state includes a polite status message, an `aria-busy` region, and a
decorative skeleton hidden from screen readers. The error state is an inline
`section[role="alert"]` with a **Reconnect Satellite** button. No
`window.alert()` or full-page reload is used.

CSS Modules style the application and telemetry card, with shared CSS custom
properties for colors, borders, and spacing. Keyboard focus is visible,
content can wrap, and reduced-motion preferences are respected. A
development-only button can mount/unmount the widget for lifecycle checks.

## Verification results

The following checks were run against the current source:

| Check | Result |
|---|---|
| `npm run lint` | Passed. |
| `npm run build` | Passed. |
| Deterministic service success/failure, delay, unknown squad ID, and copied result | Passed with Node assertions. |
| Already-aborted signal; abort while pending; abort listener cleanup | Passed with Node assertions. |
| Browser success and failure states | Observed. |
| Retry recovery | Observed in the same mounted page after changing the development-only failure-rate override from `1` to `0`; the selected squad reached `SUCCESS`. |
| Rapid squad changes while requests were delayed | Observed loading without stale squad details; final selection was rendered. |
| Widget unmount during loading | Observed timer cleanup and abort instrumentation; no cancellation error was displayed. |
| StrictMode effect cleanup | Instrumentation observed an initial request setup followed by abort/clear and a subsequent setup. `src/main.jsx` mounts under `StrictMode`. |
| Keyboard and 375px viewport | Selector and widget toggle worked by keyboard; focus outline was visible; no horizontal overflow was observed. |
| Screenshots | Not saved; there are no screenshot evidence files to link. |

Dev-only request overrides used for deterministic browser checks are
`globalThis.__PUBG_TELEMETRY_FAILURE_RATE__` (0 through 1) and
`globalThis.__PUBG_TELEMETRY_DELAY_MS__` (non-negative milliseconds). They
are read when each effect request starts, so they can be changed in DevTools
without editing a module or triggering HMR. Retry must be tested in the same
mounted page to avoid mistaking an HMR remount for Retry behavior.

## Audit, prompt log, and remaining limits

`AI_FAILURE_AUDIT.md` and `docs/manual-checks.md` were removed from the
workspace at the user's request. Consequently this report cannot link to an
audit record or manual-check file. No AI failure is claimed here.

The existing `prompt_log.md` contains only prompts that were authorized for
logging. Other prompts were explicitly excluded, and the current documentation
request was also excluded; the log is therefore not a complete transcript.

This is a local mock service, not a production telemetry integration. Its
probabilistic failures and timer delay do not establish network behavior,
real match accuracy, or real API cancellation. Screenshots have not been
captured.

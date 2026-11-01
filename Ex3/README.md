# PUBG VN Live Telemetry

A React 19 and Vite exercise that displays simulated PUBG VN squad match
telemetry. The values are assignment mock data, not live match information;
the app does not connect to a real PUBG API and needs no API key.

## Requirements

- Node.js and npm

## Install and run

From the `Ex3` directory:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Available npm scripts

These are the scripts currently defined in `package.json`:

```sh
npm run dev
npm run lint
npm run build
npm run preview
```

There is no `test` script in `package.json`. Service and browser checks
performed for this exercise are summarized in [report.md](./report.md).

## Features

- Select one of three assignment squads: Cerberus Esports, The Expendables,
  or Genius Esports.
- View the selected squad's map, phase, alive count, kills, simulated WWCD
  probability, and status.
- Show accessible loading and error states; Retry starts a fresh request
  through the fetching effect.
- Abort a pending mock request when the squad changes or the widget unmounts.
- Use the widget with keyboard controls and responsive layout, including at a
  375px viewport.

## Project structure

```text
Ex3/
├── src/
│   ├── components/
│   │   ├── PubgMatchTelemetry.jsx
│   │   └── PubgMatchTelemetry.module.css
│   ├── data/
│   │   └── pubgSquads.js
│   ├── services/
│   │   └── telemetryApi.js
│   ├── App.jsx
│   ├── App.module.css
│   ├── index.css
│   └── main.jsx
├── project_rules.md
├── task_decomposition.md
├── prompt_log.md
└── report.md
```

The exercise branch is `EX3`. At the time this README was written, the local
branch contained 11 commits beyond `main`; see `git log main..EX3` for the
actual local history. Pushes are not performed automatically.

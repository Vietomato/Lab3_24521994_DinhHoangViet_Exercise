# Scientist Directory

A React and Vite directory for browsing scientists. It supports name search,
minimum-IQ filtering, sorting, deleting entries, keyboard focus recovery, and
resetting the directory.

## Requirements

- Node.js and npm

## Run locally

From the `Ex2` directory:

```sh
npm ci
npm run dev
```

Vite serves the development app on port `5174` when it is available. If that
port is occupied, Vite may choose another available port; use the URL printed
in the terminal.

## Checks

```sh
npm run lint
npm run build
```

To serve the production build locally:

```sh
npm run preview
```

## Features

- Case-insensitive name search that ignores surrounding whitespace.
- Minimum IQ filter and IQ-descending or age-ascending sorting.
- Deletion by stable person ID, with focus moved to the next visible person,
  the previous person, or Reset.
- Reset restores the initial data and default controls.
- A live result count and distinct messages for an empty filter result and an
  empty directory.
- Responsive CSS Module styling, visible keyboard focus, and labeled controls.

## Project structure

```text
Ex2/
├── src/
│   ├── components/
│   │   ├── ScientistDirectory.jsx
│   │   ├── ScientistDirectory.module.css
│   │   └── ScientistList.jsx
│   ├── data/
│   │   └── smartPeople.js
│   └── ...
├── AI_FAILURE_AUDIT.md
├── project_rules.md
├── task_decomposition.md
└── report.md
```

The implementation branch is `EX2`. From the repository root, switch to it
with:

```sh
git switch EX2
```

See [report.md](./report.md) for the implementation and verification summary.

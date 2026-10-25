# Land Board

A rent and property tracking dashboard for small landlords.

---

## Links

[GitHub](https://www.github.com/C-Local) · [LinkedIn](https://www.linkedin.com/in/christian-lanier/)

---

## Vision

Organizing a schedule, tracking payments, and setting reminders are frustrating activities many people deal with, but what if they are all for the exact same thing? That is what I wondered for small landlords, where meeting with tenants, tracking leases, and setting reminders on important issues like property repairs are all needed but usually segmented across spreadsheets, notes, receipts, and pure memory. To ease the workload, Land Board puts it all in one place. Though the current version is limited, the goal of Land Board is to hold property, lease, tenant, and transaction information, allowing quick navigation, insightful summaries, and simplified reporting of the most important information for small landlords.

---

## Features

- **Dashboard** with collected and outstanding rent, occupancy, vacancies, expiring leases, and
  repair requests at a glance
- **Rent and occupancy charts** drawn with plain SVG, no chart library
- **Recent payments, upcoming lease expirations, and a maintenance to-do list**
- **Time-aware greeting and current month**, computed in the browser
- **Responsive layout** from desktop down to phone width, with an icon-only sidebar on small
  screens
- **Accessible by design:** WCAG AA color contrast, semantic landmarks, one heading per page, and
  labelled controls

## Tech stack

| Area      | Choice                                                        |
| --------- | ------------------------------------------------------------- |
| Framework | [Next.js 16](https://nextjs.org) (App Router), React 19       |
| Language  | TypeScript and JavaScript                                     |
| Styling   | CSS Modules, with shared color variables in `app/globals.css` |
| Icons     | [Lucide](https://lucide.dev)                                  |
| Fonts     | Instrument Sans via `next/font`                               |
| CI        | GitHub Actions (lint, type-check, build)                      |

## Getting started

Requires Node.js 22 or later.

```bash
git clone https://github.com/YOUR-USERNAME/land-board.git
cd land-board
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Command             | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Start the development server                  |
| `npm run build`     | Create a production build                     |
| `npm run start`     | Serve the production build                    |
| `npm run lint`      | Check the code with ESLint                    |
| `npm run typecheck` | Generate Next.js route types, then type-check |

## Project structure

```
app/
  layout.tsx              Page shell: sidebar, top bar, and main area in a CSS Grid
  globals.css             Reset, shared color variables, and the page shell grid
  page.tsx                Dashboard
  page.module.css         Dashboard styles
  properties/page.tsx     ┐
  tenants/page.tsx        │
  leases/page.tsx         │
  ledger/page.tsx         ├ "Coming soon" pages for upcoming sections
  maintenance/page.tsx    │
  reports/page.tsx        │
  settings/page.tsx       ┘
components/
  Nav/                    Sidebar links and top bar (search, current month, profile)
  Greeting/               Time-of-day greeting and "Add reminder" button
  CurrentMonth/           Month and year shown in the top bar
  Chart/                  Reusable SVG line chart
  PagePlaceholder/        Shared "Coming soon" page
hooks/
  useClientValue.js       Reads browser-only values (like the current time) without a
                          server/browser mismatch
assets/                   Logo and greeting icons
```

## How it works

**Page shell.** `app/layout.tsx` wraps every page in a two-column CSS Grid. The sidebar spans the
full height and stays in view while scrolling, and the top bar and page content sit beside it.
The sidebar column sizes itself, so the icon-only phone layout needs no extra offsets.

**Charts.** `components/Chart` turns data into SVG coordinates with two small functions: one
spreads points evenly across the width, the other maps values onto the height, flipped because
SVG's y-axis grows downward. The `viewBox` makes the chart scale to any container.

**Time-based values.** Pages are rendered on the server before the browser takes over, and the
server doesn't know the visitor's local time. `hooks/useClientValue.js` uses React's
`useSyncExternalStore` to show a neutral value from the server, swap in the real time once in the
browser, and refresh every minute.

**Styling.** Each component owns its styles in a CSS Module, so class names can't collide. Shared
colors live as variables in `app/globals.css`.

## Roadmap

- Properties and tenants pages
- Database for properties, units, leases, charges, and payments
- Recording payments
- Outreach for feedback

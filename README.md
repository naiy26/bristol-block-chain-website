# Blockchain Bristol

A responsive frontend using Next.js App Router, TypeScript, Tailwind CSS 4, and Lucide React.

## Start locally

On this Windows computer, dependencies are already installed. Double-click `start-local.cmd`, or run `.\start-local.cmd` in PowerShell. This script uses an available Node.js installation, including the bundled Codex runtime, without requiring npm. Keep the terminal open while using the website.

Install Node.js 20.9 or newer, then:

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production: `npm run build`, then `npm start`. TypeScript: `npm run typecheck`. pnpm is also supported and a pnpm lockfile is included.

## Pages

- `/`: society introduction, event/resource previews, community
- `/about`: mission, activities, committee placeholders
- `/events`: sample events, period/category filters, registration details
- `/learn`: searchable educational resources with category filters
- `/join`: validated membership demo; no transmission or storage
- `/admin`: public prototype with fictional members and in-memory editing

## Structure

`app/` contains routes/styles; `components/` contains reusable UI and interactive views; `data/` contains mock events, resources, and committee roles; `lib/types.ts` defines shared contracts. `public/logo.png` is the original, unmodified supplied image. Decorative geometry uses CSS; no external fonts or images are requested.

## Future Supabase integration

Replace mock data imports with server-side queries returning the shared types. Add server-side validation and a server action for `MembershipInput`, plus a real privacy notice, before enabling registration. Add admin authentication and row-level security before connecting dashboard controls. Keep service-role keys on the server.

No database, authentication, wallet, analytics, or membership persistence is implemented. Dates and venues are illustrative. Member addresses use example.com. Social accounts and committee names await confirmation. Admin edits reset on reload and do not affect public pages.

## Optional browser checks

With a local server running on port 3000, install Playwright separately (`npm install --no-save playwright`, then `npx playwright install chromium`) and run `node scripts/verify.cjs`. The checks cover routes, desktop/mobile overflow, navigation, event filtering/dialogs, resource search, form validation, and temporary admin edits. Screenshots are written to `artifacts/`. `PLAYWRIGHT_MODULE` and `BROWSER_EXECUTABLE` can select an existing installation.

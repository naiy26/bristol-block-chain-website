# Bristol University Blockchain Society

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

- `/`: bridge illustration hero, society introduction, and community channels with the official logo; event and resource listings live on their dedicated pages
- `/about`: society introduction and activities; committee display is currently hidden
- `/events`: Encode London Hackathon 2026, poster, period/category filters, and an expression-of-interest modal with a QR code and Microsoft Forms link
- `/learn`: searchable educational resources with category filters
- `/join`: redirects to `/about`; on-site membership registration is temporarily disabled
- `/admin`: public prototype with fictional members and in-memory editing

## Structure

`app/` contains routes/styles; `components/` contains reusable UI and interactive views; `data/` contains event information, resources, and committee roles; `lib/types.ts` defines shared contracts. `public/logo.png` is the original, unmodified supplied logo. `public/events/encode-london-2026.jpg` is the supplied hackathon poster. Decorative geometry uses CSS; no external fonts or images are requested.

## Future Supabase integration

The About page uses the society-supplied University of Bristol photograph. Its Expedia source URL is recorded in `data/media.ts` and displayed under **Admin → Website content → Image sources**.

Replace mock data imports with server-side queries returning the shared types. Add server-side validation and a server action for `MembershipInput`, plus a real privacy notice, before enabling registration. Add admin authentication and row-level security before connecting dashboard controls. Keep service-role keys on the server.

No database, authentication, wallet, analytics, or membership persistence is implemented. Hackathon dates and venue are transcribed from the supplied poster. The expression-of-interest URL was decoded from the society’s supplied QR image; daily times and society travel arrangements have not been provided. Member addresses use example.com. Official Instagram is `@bristolblockchain`; a clean vector WhatsApp QR code and direct group button are available in the footer. Social URLs are centralised in `data/socials.ts`. Both vector QR codes encode the supplied destinations exactly. Committee profiles and on-site registration are hidden. Admin edits reset on reload and do not affect public pages.

## Optional browser checks

With a local server running on port 3000, install Playwright separately (`npm install --no-save playwright`, then `npx playwright install chromium`) and run `node scripts/verify.cjs`. The checks cover routes, desktop/mobile overflow, navigation, event filtering/dialogs, resource search, social channels, disabled registration, and temporary admin edits. Screenshots are written to `artifacts/`. `PLAYWRIGHT_MODULE` and `BROWSER_EXECUTABLE` can select an existing installation.

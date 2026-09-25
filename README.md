# developermajd.com

Personal portfolio of Majd Kalthoum. Next.js 16 (App Router, static), Tailwind CSS v4, Motion, English and German.

```bash
npm install
npm run dev     # http://localhost:3000 (redirects to /en or /de)
npm run build   # every page is prerendered
npm run lint
```

## Where things live

| What | Where |
| --- | --- |
| All page text, EN and DE | `app/[lang]/dictionaries/en.ts`, `de.ts` (`de` is typed against `en`, so a missing key fails the build) |
| Email, GitHub, LinkedIn, CV path | `lib/site.ts` |
| Colours, fonts, radii | `app/globals.css` (tokens copied from RTM's Signal design system) |
| Hero chat intro | `components/hero/ChatIntro.tsx` |
| Designo architecture diagram | `components/work/DesignoDiagram.tsx` |
| Theme and first-visit flags | `components/BootScript.tsx` |
| `/` → `/en` or `/de` | `proxy.ts` (cookie from the language switch, else `Accept-Language`) |
| Images and CV | `public/images`, `public/cv` |

## Motion

- Hero: typing indicator, then chat bubbles, once per browser session.
- Designo diagram: a request dot plays once when it scrolls into view.
- "How it's built" disclosures, the mobile menu and the theme icon animate on click.
- With reduced motion turned on in the OS, everything shows in its final state immediately.

## Before going live

- Optional: add an English CV and switch `site.cv` per locale; switch to a domain email in `lib/site.ts`.
- Deploy on Vercel and point developermajd.com at it.

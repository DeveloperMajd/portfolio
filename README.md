# developermajd.com

Personal portfolio of Majd Kalthoum. Next.js 16 (App Router, static), Tailwind CSS v4, Motion, English and German.

```bash
npm install
npm run dev     # http://localhost:3000 (redirects to /en or /de)
npm run build   # every page is prerendered; only unknown URLs under /en and /de render on demand, as a 404
npm run lint
```

## Where things live

| What | Where |
| --- | --- |
| All page text, EN and DE | `app/[lang]/dictionaries/en.ts`, `de.ts` (`de` is typed against `en`, so a missing key fails the build) |
| Email, phone, postal address, GitHub, LinkedIn, Calendly, CV per language | `lib/site.ts` |
| Impressum and Datenschutz (both languages, `noindex`) | `app/[lang]/impressum/page.tsx`, `app/[lang]/datenschutz/content.tsx` |
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

## Deployment

Vercel builds every push to `main` and serves it at https://developermajd.com (www redirects to it).
Other branches get their own preview URLs.

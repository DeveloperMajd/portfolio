export const en = {
  meta: {
    title: "Majd Kalthoum | Fullstack developer in Berlin",
    description:
      "Fullstack developer in Berlin working with React, TypeScript, Node.js and Laravel. Projects include RTM, a real-time messenger, and Designo, a CMS-driven website.",
    ogLocale: "en_US",
  },
  nav: {
    skip: "Skip to content",
    home: "Majd Kalthoum, back to top",
    primary: "Main",
    work: "Work",
    experience: "Experience",
    stack: "Stack",
    contact: "Contact",
    language: "Language",
    theme: "Dark mode",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    cv: "Download CV",
  },
  hero: {
    role: "Fullstack developer in Berlin",
    messages: [
      "Hi, I’m Majd. I build web apps end to end: React and TypeScript in the browser, Node.js and Laravel on the server.",
      "Most recently I built RTM, a real-time messenger with live typing and presence. It’s the first project below.",
    ],
    typing: "Majd is typing…",
    status: "Open to full-time roles in Berlin or remote",
    contact: "Get in touch",
    portraitAlt: "Portrait of Majd Kalthoum",
  },
  work: {
    title: "Things I’ve built and shipped",
    allRepos: "All repositories on GitHub",
    liveSite: "Live site",
    frontendCode: "Frontend code",
    backendCode: "Backend code",
    details: "How it’s built",
    rtm: {
      title: "RTM",
      subtitle: "A real-time messenger",
      description:
        "Direct and group chats that update live, with typing indicators, read receipts, online presence and reactions, all without a page refresh. A Laravel API and WebSocket server sit behind a React 19 and TypeScript app.",
      details: [
        "Laravel Reverb delivers messages, typing and presence live; Redis holds that short-lived state so it never touches the main database.",
        "Group roles with promote, demote and admin-only actions. Members who leave keep read access to the history up to that point.",
        "PostgreSQL full-text search across message history, and private, short-lived signed URLs for attachments.",
        "Sanctum cookie sessions, Google sign-in and a complete password-reset flow by email.",
        "Light and dark themes, keyboard navigation and screen-reader live regions.",
        "128 backend tests with Pest, CI, and zero-downtime automated deploys to Docker Compose on Oracle Cloud.",
      ],
      tags: [
        "React 19",
        "TypeScript",
        "TanStack Query",
        "Tailwind v4",
        "Laravel",
        "Reverb + Echo",
        "Redis",
        "PostgreSQL",
        "Docker",
      ],
      desktopAlt:
        "RTM on desktop: a group chat with a shared PDF, an image with reactions, and the group info panel",
      mobileAlt:
        "RTM on mobile: the chat list with unread counts and a live typing status",
    },
    designo: {
      title: "Designo",
      subtitle: "A CMS-driven agency website",
      description:
        "A seven-page agency site where every page, menu and label is edited in Strapi instead of being hard-coded. Editors build each page from reusable sections.",
      details: [
        "Ten section types, rendered by a single catch-all Next.js route.",
        "Pages are static and refresh every two minutes. If the API is down, the last good version stays online.",
        "The contact API validates, length-limits and HTML-escapes input, and accepts 5 requests per 15 minutes per IP.",
        "Strapi 4 is hardened: a middleware blocks filter queries on admin fields, and unused auth endpoints are closed on every start.",
        "A push to master deploys through GitHub Actions and waits for a healthy container. SQLite is backed up daily.",
      ],
      tags: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "SCSS + Bulma",
        "Framer Motion",
        "Strapi 4",
        "SQLite",
        "Docker",
        "Caddy",
        "GitHub Actions",
      ],
      note: "The visual design comes from a Frontend Mentor challenge. The build, CMS setup and deployment are my own.",
      diagram: {
        label:
          "Designo architecture: the browser requests a page from Next.js on Vercel and gets static HTML back. Next.js fetches content over REST from Strapi, which runs in Docker on an Oracle Cloud VM, at build time and when a page refreshes. The contact form posts directly to the Strapi API.",
        browser: {
          tag: "Client",
          meta: "Visitor",
          title: "Browser",
          body: "Gets prerendered HTML. The locations map loads in the browser from OpenStreetMap.",
        },
        request: "page request, static HTML back",
        vercel: {
          tag: "Vercel",
          meta: "refreshes every 2 min",
          title: "Next.js 15 and React 19",
          body: "One catch-all route renders any page from its list of CMS sections.",
        },
        refresh: "REST, at build time and on refresh",
        strapi: {
          tag: "Oracle Cloud VM",
          meta: "Docker",
          title: "Strapi 4 REST API",
          body: "Behind a Caddy proxy with automatic HTTPS. SQLite and uploads live on Docker volumes.",
        },
        form: ["Contact form", "posts to the API,", "5 per 15 min", "per IP"],
      },
    },
  },
  experience: {
    title: "Where I’ve worked",
    now: "now",
    // Excerpt from Christian Graumann's LinkedIn recommendation (19 Aug 2026), translated.
    recommendation: {
      quote:
        "“Majd was always helpful, easy to work with, and at the same time someone a less experienced developer could learn a lot from. […] I remember our time together very fondly and can recommend Majd without reservation, both professionally and personally.”",
      name: "Christian Graumann",
      role: "Software Engineer, worked with Majd at Aleks & Shantu",
      note: "Translated from German",
      link: "Full recommendation on LinkedIn",
    },
    jobs: [
      {
        start: "04/2025",
        end: null as string | null,
        company: "Freelance and own projects",
        role: "Fullstack web development",
        points: [
          "Built RTM, a real-time chat app with a Laravel REST API and a React and TypeScript frontend.",
          "Authentication and authorisation with Laravel Sanctum, plus OAuth2 social login with Laravel Socialite.",
          "Real-time features with Laravel Reverb and Echo, including live typing indicators and Redis-backed presence.",
        ],
      },
      {
        start: "06/2023",
        end: "03/2025",
        company: "Aleks & Shantu GmbH",
        role: "Fullstack web developer, Berlin",
        points: [
          "Built and optimised web apps with React, Next.js, TypeScript, Node.js and the WordPress REST API.",
          "Interactive animations and dynamic UI with Framer Motion; responsive builds from prototypes and style guides.",
          "Accessible frontends following WCAG, external API integrations and ongoing maintenance in an agile team.",
        ],
      },
      {
        start: "09/2021",
        end: "05/2022",
        company: "Radscheit GmbH (happycoding)",
        role: "Fullstack web developer, Berlin",
        points: [
          "Websites with React (Gatsby) on headless WordPress.",
          "WordPress theming and maintenance in PHP, SCSS and JavaScript, plus custom PHP API endpoints.",
          "Performance optimisation, code reviews, and feature planning with the design and marketing teams.",
        ],
      },
      {
        start: "05/2021",
        end: "07/2021",
        company: "Jobvector GmbH",
        role: "Web development intern, Düsseldorf",
        points: [
          "Frontend features and UI changes in Vue.js and Nuxt, including a dashboard that shows incidents.",
          "Testing, bug fixing and release preparation in a test-driven CI/CD setup.",
        ],
      },
    ],
  },
  stack: {
    title: "What I work with",
    intro: "Each tool with where I’ve used it.",
    groups: [
      {
        title: "Frontend",
        items: [
          { name: "React and TypeScript", where: "RTM, Designo, Aleks & Shantu" },
          { name: "Next.js", where: "Designo, Aleks & Shantu" },
          { name: "Tailwind CSS and SCSS", where: "RTM, Designo, Radscheit" },
          { name: "Motion (Framer Motion)", where: "This site, Designo, Aleks & Shantu" },
          { name: "Vue.js and Nuxt", where: "Jobvector" },
          { name: "Accessibility (WCAG)", where: "RTM, Aleks & Shantu" },
        ],
      },
      {
        title: "Backend and real-time",
        items: [
          { name: "Laravel and PHP", where: "RTM, Radscheit" },
          { name: "Laravel Reverb and Echo", where: "RTM" },
          { name: "Node.js", where: "Aleks & Shantu" },
          { name: "REST APIs", where: "RTM, Designo, Radscheit" },
          { name: "Sanctum and Google OAuth", where: "RTM" },
          { name: "Strapi and headless WordPress", where: "Designo, Radscheit, Aleks & Shantu" },
        ],
      },
      {
        title: "Data, testing and deployment",
        items: [
          { name: "PostgreSQL", where: "RTM, with full-text search" },
          { name: "Redis", where: "RTM" },
          { name: "Pest and Vitest", where: "RTM" },
          { name: "Docker Compose and Caddy", where: "RTM, Designo" },
          { name: "GitHub Actions", where: "RTM, Designo" },
          { name: "Vercel", where: "This site, RTM, Designo" },
        ],
      },
    ],
    alsoTitle: "Also worked with:",
    also: ["React Native", "Angular", "Python and Django", "GraphQL", "Socket.io", "JWT", "MySQL", "Gatsby", "GitLab"],
  },
  a11y: {
    newTab: "(opens in a new tab)",
  },
  contact: {
    title: "Hiring for a fullstack or frontend role?",
    body: "I’m open to full-time roles in Berlin or remote. Email me or book a 30-minute call, and I’m happy to walk you through any of the projects above.",
    book: "Book a 30-minute call",
    facts: [
      { label: "Based in", value: "Berlin, Germany" },
      { label: "Languages", value: "German (C1), English (C1), Arabic (native)" },
    ],
  },
};

export type Dictionary = typeof en;

import type { Dictionary } from "./en";

export const de: Dictionary = {
  meta: {
    title: "Majd Kalthoum | Fullstack-Entwickler in Berlin",
    description:
      "Fullstack-Entwickler in Berlin mit React, TypeScript, Node.js und Laravel. Zu den Projekten gehören RTM, ein Echtzeit-Messenger, und Designo, eine CMS-gesteuerte Website.",
    ogLocale: "de_DE",
  },
  nav: {
    skip: "Zum Inhalt springen",
    home: "Majd Kalthoum, zum Seitenanfang",
    primary: "Hauptmenü",
    work: "Projekte",
    experience: "Erfahrung",
    stack: "Technologien",
    contact: "Kontakt",
    language: "Sprache",
    theme: "Dunkles Design",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    cv: "Lebenslauf",
  },
  hero: {
    role: "Fullstack-Entwickler in Berlin",
    messages: [
      "Hallo, ich bin Majd. Ich entwickle Webanwendungen von Anfang bis Ende: React und TypeScript im Browser, Node.js und Laravel auf dem Server.",
      "Zuletzt habe ich RTM gebaut, einen Echtzeit-Messenger mit Live-Tippanzeige und Online-Status. Es ist das erste Projekt weiter unten.",
    ],
    typing: "Majd schreibt …",
    status: "Offen für eine Festanstellung in Berlin oder remote",
    contact: "Kontakt aufnehmen",
    portraitAlt: "Porträt von Majd Kalthoum",
  },
  work: {
    title: "Was ich gebaut und veröffentlicht habe",
    allRepos: "Alle Repositories auf GitHub",
    liveSite: "Live ansehen",
    frontendCode: "Frontend-Code",
    backendCode: "Backend-Code",
    details: "So ist es gebaut",
    rtm: {
      title: "RTM",
      subtitle: "Ein Echtzeit-Messenger",
      description:
        "Einzel- und Gruppenchats, die sich live aktualisieren: Tippanzeige, Lesebestätigungen, Online-Status und Reaktionen, ganz ohne Neuladen. Eine Laravel-API mit WebSocket-Server steht hinter einer App in React 19 und TypeScript.",
      details: [
        "Laravel Reverb liefert Nachrichten, Tippanzeige und Online-Status live aus; Redis hält diesen kurzlebigen Zustand, damit er nie die Hauptdatenbank berührt.",
        "Gruppenrollen mit Befördern, Zurückstufen und Aktionen nur für Admins. Wer eine Gruppe verlässt, kann den Verlauf bis dahin weiter lesen.",
        "PostgreSQL-Volltextsuche über den gesamten Nachrichtenverlauf und private, kurzlebige signierte URLs für Anhänge.",
        "Sanctum-Cookie-Sessions, Anmeldung mit Google und ein vollständiger Ablauf zum Zurücksetzen des Passworts per E-Mail.",
        "Helles und dunkles Design, Tastaturbedienung und Live-Regionen für Screenreader.",
        "128 Backend-Tests mit Pest, CI und automatische Deployments ohne Ausfallzeit auf Docker Compose in der Oracle Cloud.",
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
        "RTM auf dem Desktop: ein Gruppenchat mit geteiltem PDF, einem Bild mit Reaktionen und dem Bereich mit Gruppeninfos",
      mobileAlt:
        "RTM auf dem Smartphone: die Chatliste mit ungelesenen Nachrichten und einer Live-Tippanzeige",
    },
    designo: {
      title: "Designo",
      subtitle: "Eine CMS-gesteuerte Agentur-Website",
      description:
        "Eine Agentur-Website mit sieben Seiten, bei der jede Seite, jedes Menü und jede Beschriftung in Strapi gepflegt wird, statt fest im Code zu stehen. Redakteure setzen jede Seite aus wiederverwendbaren Abschnitten zusammen.",
      details: [
        "Zehn Abschnittstypen, gerendert über eine einzige Catch-all-Route in Next.js.",
        "Die Seiten sind statisch und werden alle zwei Minuten aktualisiert. Fällt die API aus, bleibt die letzte funktionierende Version online.",
        "Die Kontakt-API prüft, begrenzt und maskiert Eingaben und nimmt 5 Anfragen pro 15 Minuten und IP an.",
        "Strapi 4 ist abgesichert: Eine Middleware blockiert Filterabfragen auf Admin-Felder, und ungenutzte Auth-Endpunkte werden bei jedem Start geschlossen.",
        "Ein Push auf master deployt über GitHub Actions und wartet auf einen gesunden Container. SQLite wird täglich gesichert.",
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
      note: "Das visuelle Design stammt aus einer Frontend-Mentor-Challenge. Umsetzung, CMS-Einrichtung und Deployment sind meine eigene Arbeit.",
      diagram: {
        label:
          "Designo-Architektur: Der Browser fordert eine Seite von Next.js auf Vercel an und erhält statisches HTML. Next.js lädt die Inhalte per REST aus Strapi, das in Docker auf einer Oracle-Cloud-VM läuft, beim Build und bei jeder Aktualisierung. Das Kontaktformular sendet direkt an die Strapi-API.",
        browser: {
          tag: "Client",
          meta: "Besucher",
          title: "Browser",
          body: "Erhält vorgerendertes HTML. Die Standortkarte lädt im Browser von OpenStreetMap.",
        },
        request: "Seitenanfrage, statisches HTML zurück",
        vercel: {
          tag: "Vercel",
          meta: "aktualisiert alle 2 Min.",
          title: "Next.js 15 und React 19",
          body: "Eine Catch-all-Route rendert jede Seite aus ihrer Liste von CMS-Abschnitten.",
        },
        refresh: "REST, beim Build und bei Aktualisierung",
        strapi: {
          tag: "Oracle-Cloud-VM",
          meta: "Docker",
          title: "Strapi 4 REST-API",
          body: "Hinter einem Caddy-Proxy mit automatischem HTTPS. SQLite und Uploads liegen auf Docker-Volumes.",
        },
        form: ["Kontaktformular", "sendet an die API,", "5 pro 15 Min.", "pro IP"],
      },
    },
  },
  experience: {
    title: "Berufserfahrung",
    now: "heute",
    // Auszug aus Christian Graumanns LinkedIn-Empfehlung (19. Aug. 2026), im Original.
    recommendation: {
      quote:
        "„Majd war immer hilfsbereit, angenehm in der Zusammenarbeit und gleichzeitig jemand, von dem man als weniger erfahrener Entwickler einiges lernen konnte. […] Ich habe die gemeinsame Zeit sehr positiv in Erinnerung und kann Majd sowohl fachlich als auch menschlich uneingeschränkt empfehlen.“",
      name: "Christian Graumann",
      role: "Software Engineer, hat mit Majd bei Aleks & Shantu zusammengearbeitet",
      note: "",
      link: "Vollständige Empfehlung auf LinkedIn",
    },
    jobs: [
      {
        start: "04/2025",
        end: null,
        company: "Freiberuflich und eigene Projekte",
        role: "Fullstack-Webentwicklung",
        points: [
          "Entwicklung von RTM, einer Echtzeit-Chat-Anwendung mit Laravel-REST-API und einem Frontend in React und TypeScript.",
          "Authentifizierung und Autorisierung mit Laravel Sanctum sowie Social Login über OAuth2 mit Laravel Socialite.",
          "Echtzeitfunktionen mit Laravel Reverb und Echo, inklusive Live-Tippanzeige und Redis-basierter Präsenzanzeige.",
        ],
      },
      {
        start: "06/2023",
        end: "03/2025",
        company: "Aleks & Shantu GmbH",
        role: "Fullstack-Webentwickler, Berlin",
        points: [
          "Entwicklung und Optimierung von Webanwendungen mit React, Next.js, TypeScript, Node.js und der WordPress-REST-API.",
          "Interaktive Animationen und dynamische UI-Elemente mit Framer Motion; responsive Umsetzung nach Prototypen und Styleguides.",
          "Barrierefreie Frontends nach WCAG, Anbindung externer APIs und laufende Weiterentwicklung im agilen Team.",
        ],
      },
      {
        start: "09/2021",
        end: "05/2022",
        company: "Radscheit GmbH (happycoding)",
        role: "Fullstack-Webentwickler, Berlin",
        points: [
          "Websites mit React (Gatsby) und WordPress als Headless-CMS.",
          "Theming und Wartung von WordPress-Seiten mit PHP, SCSS und JavaScript sowie eigene PHP-API-Schnittstellen.",
          "Performance-Optimierung, Code-Reviews und Konzeption neuer Features mit den Design- und Marketingteams.",
        ],
      },
      {
        start: "05/2021",
        end: "07/2021",
        company: "Jobvector GmbH",
        role: "Praktikum Webentwicklung, Düsseldorf",
        points: [
          "Frontend-Umsetzungen und UI-Anpassungen mit Vue.js und Nuxt, darunter ein Dashboard zur Darstellung von Incidents.",
          "Testing, Bugfixing und Release-Vorbereitung in einem testgetriebenen CI/CD-Prozess.",
        ],
      },
    ],
  },
  stack: {
    title: "Womit ich arbeite",
    intro: "Jedes Werkzeug mit dem Ort, an dem ich es eingesetzt habe.",
    groups: [
      {
        title: "Frontend",
        items: [
          { name: "React und TypeScript", where: "RTM, Designo, Aleks & Shantu" },
          { name: "Next.js", where: "Designo, Aleks & Shantu" },
          { name: "Tailwind CSS und SCSS", where: "RTM, Designo, Radscheit" },
          { name: "Motion (Framer Motion)", where: "Diese Website, Designo, Aleks & Shantu" },
          { name: "Vue.js und Nuxt", where: "Jobvector" },
          { name: "Barrierefreiheit (WCAG)", where: "RTM, Aleks & Shantu" },
        ],
      },
      {
        title: "Backend und Echtzeit",
        items: [
          { name: "Laravel und PHP", where: "RTM, Radscheit" },
          { name: "Laravel Reverb und Echo", where: "RTM" },
          { name: "Node.js", where: "Aleks & Shantu" },
          { name: "REST-APIs", where: "RTM, Designo, Radscheit" },
          { name: "Sanctum und Google OAuth", where: "RTM" },
          { name: "Strapi und Headless-WordPress", where: "Designo, Radscheit, Aleks & Shantu" },
        ],
      },
      {
        title: "Daten, Tests und Deployment",
        items: [
          { name: "PostgreSQL", where: "RTM, mit Volltextsuche" },
          { name: "Redis", where: "RTM" },
          { name: "Pest und Vitest", where: "RTM" },
          { name: "Docker Compose und Caddy", where: "RTM, Designo" },
          { name: "GitHub Actions", where: "RTM, Designo" },
          { name: "Vercel", where: "Diese Website, RTM, Designo" },
        ],
      },
    ],
    alsoTitle: "Außerdem gearbeitet mit:",
    also: ["React Native", "Angular", "Python und Django", "GraphQL", "Socket.io", "JWT", "MySQL", "Gatsby", "GitLab"],
  },
  a11y: {
    newTab: "(öffnet in neuem Tab)",
  },
  contact: {
    title: "Sie suchen einen Fullstack- oder Frontend-Entwickler?",
    body: "Ich bin offen für eine Festanstellung in Berlin oder remote. Schreiben Sie mir eine E-Mail oder buchen Sie direkt ein 30-minütiges Gespräch. Ich stelle Ihnen gern jedes der Projekte oben im Detail vor.",
    book: "30-minütiges Gespräch buchen",
    facts: [
      { label: "Wohnort", value: "Berlin" },
      { label: "Sprachen", value: "Deutsch (C1), Englisch (C1), Arabisch (Muttersprache)" },
    ],
  },
  legal: {
    nav: "Rechtliches",
    impressum: { link: "Impressum", title: "Impressum" },
    privacy: { link: "Datenschutz", title: "Datenschutzerklärung" },
  },
};

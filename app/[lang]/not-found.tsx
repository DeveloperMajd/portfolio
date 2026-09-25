import Link from "next/link";

// Rendered inside the locale layout, which has no way to pass the locale
// down to not-found, so the copy is in both languages.
export default function NotFound() {
  return (
    <section className="wrap flex flex-col items-start gap-6 pt-24 pb-8 md:pt-32">
      <h1 className="section-title">Page not found</h1>
      <p lang="de" className="text-lg text-fg-2">
        Seite nicht gefunden.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/en" className="btn btn-primary">
          Go to the homepage
        </Link>
        <Link href="/de" lang="de" className="btn btn-secondary">
          Zur Startseite
        </Link>
      </div>
    </section>
  );
}

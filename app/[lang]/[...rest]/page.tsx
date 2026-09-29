import { notFound } from "next/navigation";

// Unknown paths under /en and /de would otherwise get Next's bare 404 page.
// Throwing here renders not-found.tsx inside the site's layout instead.
// It has to stay dynamic: with generateStaticParams, the layout's
// dynamicParams = false sends every unknown path back to the bare 404.
export default function UnknownPage() {
  notFound();
}

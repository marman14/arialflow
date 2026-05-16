import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { LOCATIONS } from "@/lib/locations-data";
import { MapPin, ArrowRight, Check, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/locations/$slug")({
  head: ({ params }) => {
    const loc = LOCATIONS.find((x) => x.slug === params.slug);
    const title = loc ? `AI Growth for Businesses in ${loc.city}, ${loc.state} — Arialflow` : "Location — Arialflow";
    const desc = loc?.description ?? "Arialflow service area detail.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const location = LOCATIONS.find((l) => l.slug === params.slug);
    if (!location) throw notFound();
    return { location };
  },
  component: LocationDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="text-4xl">Location not found</h1>
        <Link to="/" className="mt-6 inline-flex text-primary">Back home</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="text-3xl">Something broke.</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
      </div>
    </SiteLayout>
  ),
});

function LocationDetail() {
  const { location: loc } = Route.useLoaderData() as { location: typeof LOCATIONS[number] };

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-ember" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-8">
              <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h1 className="mt-6 text-5xl md:text-6xl">{loc.hero}</h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{loc.description}</p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground">
                  Get started in {loc.city} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <aside className="md:col-span-4">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Results in {loc.city}</p>
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="font-display text-3xl text-gradient-ember">{loc.stats.businessesHelped}</p>
                    <p className="text-sm">businesses Helped</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl text-gradient-ember">{loc.stats.avgRoas}</p>
                    <p className="text-sm">Average ROAS</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl text-gradient-ember">{loc.stats.reviewsGenerated}</p>
                    <p className="text-sm">Reviews Generated</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <p className="text-xs uppercase tracking-widest text-primary">Local Expertise</p>
        <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">How we help in {loc.city}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {loc.services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {loc.faq.length > 0 && (
        <section className="border-t border-border bg-surface/40">
          <div className="mx-auto max-w-4xl px-5 py-20 md:px-8">
            <h2 className="text-3xl md:text-4xl">{loc.city} FAQs</h2>
            <dl className="mt-8 space-y-4">
              {loc.faq.map((f) => (
                <div key={f.q} className="rounded-2xl border border-border bg-background p-6">
                  <dt className="font-medium">{f.q}</dt>
                  <dd className="mt-2 text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}
      
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 mt-12">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 to-surface p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl">Dominate your service area</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Stop losing jobs to the competition in {loc.city}. Start your free 30-minute audit today.</p>
          <Link to="/contact" className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground">
            Claim your free audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

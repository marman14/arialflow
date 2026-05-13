import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SERVICES } from "@/lib/services-data";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.slug);
    const title = s ? `${s.title} — Arialflow` : "Service — Arialflow";
    const desc = s?.short ?? "Arialflow service detail.";
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
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="text-4xl">Service not found</h1>
        <Link to="/services" className="mt-6 inline-flex text-primary">Back to services</Link>
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

function ServiceDetail() {
  const { service: s } = Route.useLoaderData() as { service: typeof SERVICES[number] };
  const Icon = s.icon;
  const others = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-ember" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-8">
              <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h1 className="mt-6 text-5xl md:text-6xl">{s.title}</h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{s.hero}</p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground">
                  Book a free demo <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground">{s.price}</span>
              </div>
            </div>
            <aside className="md:col-span-4">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Headline result</p>
                <p className="mt-3 font-display text-5xl text-gradient-ember">{s.stat.k}</p>
                <p className="mt-1 text-sm">{s.stat.v}</p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <p className="text-xs uppercase tracking-widest text-primary">What's inside</p>
        <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">Built deep, not wide.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {s.features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-xl font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {s.faq.length > 0 && (
        <section className="border-t border-border bg-surface/40">
          <div className="mx-auto max-w-4xl px-5 py-20 md:px-8">
            <h2 className="text-3xl md:text-4xl">Common questions</h2>
            <dl className="mt-8 space-y-4">
              {s.faq.map((f) => (
                <div key={f.q} className="rounded-2xl border border-border bg-background p-6">
                  <dt className="font-medium">{f.q}</dt>
                  <dd className="mt-2 text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <h2 className="text-3xl md:text-4xl">Other services</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {others.map((o) => {
            const OI = o.icon;
            return (
              <Link key={o.slug} to="/services/$slug" params={{ slug: o.slug }} className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/12 text-primary">
                  <OI className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{o.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{o.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 to-surface p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl">Want this live in your business?</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Book a 30-minute demo. We'll show you exactly how {s.title} would work for your trade and service area.</p>
          <Link to="/contact" className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground">
            Book my demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

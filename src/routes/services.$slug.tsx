import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SERVICES } from "@/lib/services-data";
import { ArrowRight, Check, ArrowLeft, Quote } from "lucide-react";

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
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-ember" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-8">
              <div className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary">
                <Icon className="h-7 w-7" />
              </div>
              <h1 className="mt-6 text-5xl md:text-6xl">{s.title}</h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{s.hero}</p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href="https://wa.me/+13072784862" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground">
                  Get started — Chat on WhatsApp <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <aside className="md:col-span-4">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Headline result</p>
                <p className="mt-3 font-display text-5xl text-gradient-ember">{s.stat.k}</p>
                <p className="mt-1 text-sm">{s.stat.v}</p>
                <ul className="mt-6 space-y-2">
                  {s.benefits.slice(0, 4).map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── The Problem / Why this matters ── */}
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8">
        <h2 className="text-3xl md:text-4xl">Why this matters for your business</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{s.longDescription}</p>
      </section>

      {/* ── Benefits ── */}
      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <p className="text-xs uppercase tracking-widest text-primary">What you get</p>
          <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">Simple benefits. Real results.</h2>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {s.benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <p className="text-xs uppercase tracking-widest text-primary">How it works</p>
        <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">Three simple steps.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {s.howItWorks.map((h, i) => (
            <div key={h.step} className="rounded-2xl border border-border bg-surface p-6">
              <div className="font-display text-sm text-primary">0{i + 1}</div>
              <h3 className="mt-2 text-lg font-semibold">{h.step}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <p className="text-xs uppercase tracking-widest text-primary">Under the hood</p>
          <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">What's included</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {s.features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-background p-6">
                <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study ── */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <p className="text-xs uppercase tracking-widest text-primary">Real results</p>
        <h2 className="mt-3 text-3xl md:text-4xl">See it in action</h2>
        <div className="mt-10 rounded-3xl border border-border/60 bg-surface p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.caseStudy.trade}</p>
              <p className="mt-1 text-lg font-semibold">{s.caseStudy.company}</p>
              <p className="mt-6 font-display text-6xl text-gradient-ember">{s.caseStudy.metric}</p>
              <p className="mt-1 text-sm text-foreground">{s.caseStudy.unit}</p>
            </div>
            <div className="md:col-span-8 flex items-center">
              <div>
                <Quote className="h-8 w-8 text-primary/30" />
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{s.caseStudy.story}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      {s.faq.length > 0 && (
        <section className="border-t border-border bg-surface/40">
          <div className="mx-auto max-w-4xl px-5 py-20 md:px-8">
            <h2 className="text-3xl md:text-4xl">Common questions</h2>
            <dl className="mt-8 space-y-4">
              {s.faq.map((f) => (
                <div key={f.q} className="rounded-2xl border border-border bg-background p-6">
                  <dt className="font-medium">{f.q}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* ── Other Services ── */}
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

      {/* ── Bottom CTA ── */}
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 to-surface p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl">Ready to get started?</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Send us a message on WhatsApp. We'll have a quick chat about your business and show you exactly how {s.title} would work for you. No pressure, no commitment.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://wa.me/+13072784862" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground">
              Chat on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-full border border-border/80 px-6 text-sm hover:bg-surface">
              Or fill out a form
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

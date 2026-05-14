import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SERVICES } from "@/lib/services-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Arialflow" },
      { name: "description", content: "AI calling, chatbots, review automation, lead nurturing, websites, paid ads and local SEO — built for HVAC, roofing and plumbing companies." },
      { property: "og:title", content: "Arialflow Services" },
      { property: "og:description", content: "The complete AI growth suite for contractors." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-ember" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-widest text-primary">What We Do</p>
          <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl">
            Everything your business needs to <span className="text-gradient-ember">grow on autopilot.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            We handle the calls, the follow-ups, the reviews, and the marketing — so you can stay on the job site and focus on what you do best.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col rounded-2xl border border-border bg-surface p-7 transition-all hover:border-primary/40 hover:-translate-y-0.5"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-xl font-semibold tracking-tight">{s.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <span className="rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary">{s.stat.k} {s.stat.v}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Simple CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-surface to-surface p-10 md:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-5xl">Not sure where to start?</h2>
            <p className="mt-4 text-muted-foreground">
              Book a free 30-minute call. We'll look at your business, find where you're losing jobs, and tell you exactly what we'd fix first. No pressure. No commitment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/+13072784862" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground ring-ember">
                Chat on WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-full border border-border/80 px-6 text-sm hover:bg-surface">
                Or fill out a form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

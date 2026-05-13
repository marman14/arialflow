import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SERVICES, PACKAGES } from "@/lib/services-data";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Arialflow AI Growth Suite for Contractors" },
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
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-ember" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-widest text-primary">Services</p>
          <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl">Plug every leak. <span className="text-gradient-ember">Capture every job.</span></h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Run individual modules à la carte, or bundle them into one of our managed plans. Every plan includes a free, conversion-optimized website and direct access to our team.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{s.price}</span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  See full details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <p className="text-xs uppercase tracking-widest text-primary">Or bundle it</p>
          <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">Three plans. One growth engine.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {PACKAGES.map((p) => (
              <Link
                key={p.slug}
                to="/packages/$tier"
                params={{ tier: p.slug }}
                className={`group flex flex-col rounded-2xl border p-7 transition-colors ${
                  p.slug === "done-for-you" ? "border-primary bg-primary/5" : "border-border bg-background hover:border-primary/40"
                }`}
              >
                <p className="text-xs uppercase tracking-widest text-primary">{p.name}</p>
                <p className="mt-3 font-display text-4xl">{p.price}<span className="text-base text-muted-foreground">{p.period}</span></p>
                <p className="mt-3 text-sm text-muted-foreground">{p.tagline}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  View plan <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

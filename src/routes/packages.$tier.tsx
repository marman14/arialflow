import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PACKAGES, SERVICES } from "@/lib/services-data";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/packages/$tier")({
  head: ({ params }) => {
    const p = PACKAGES.find((x) => x.slug === params.tier);
    const title = p ? `${p.name} Plan — Arialflow` : "Plan — Arialflow";
    const desc = p?.tagline ?? "Arialflow plan detail.";
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
    const pack = PACKAGES.find((p) => p.slug === params.tier);
    if (!pack) throw notFound();
    return { pack };
  },
  component: PackagePage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="text-4xl">Plan not found</h1>
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

function PackagePage() {
  const { pack } = Route.useLoaderData() as { pack: typeof PACKAGES[number] };
  const isFlagship = pack.slug === "done-for-you";

  const serviceMap: Record<string, string[]> = {
    starter: ["ai-calling-agent", "review-engine", "conversion-website"],
    growth: ["ai-calling-agent", "review-engine", "conversion-website", "ai-chatbot", "lead-follow-up", "local-seo-social"],
    "done-for-you": SERVICES.map((s) => s.slug),
  };
  const includedServices = SERVICES.filter((s) => serviceMap[pack.slug]?.includes(s.slug));

  return (
    <SiteLayout>
      <section className={`relative overflow-hidden border-b border-border ${isFlagship ? "bg-espresso" : ""}`}>
        <div className="absolute inset-0 bg-radial-ember" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {isFlagship && <Sparkles className="h-3.5 w-3.5" />}
            {pack.name} Plan
          </div>
          <h1 className={`mt-5 max-w-3xl text-5xl md:text-7xl ${isFlagship ? "text-espresso-foreground" : ""}`}>
            {pack.tagline.split(".")[0]}.{" "}
            <span className="text-gradient-ember">{pack.tagline.split(".")[1]?.trim()}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{pack.summary}</p>
          <div className="mt-8">
            <a href="https://wa.me/+13072784862" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground ring-ember">
              Get started — Chat on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-widest text-primary">What's included</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Everything you need.<br/>Nothing you don't.</h2>
            <ul className="mt-8 space-y-3">
              {pack.includes.map((i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                  <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-sm">{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="md:col-span-5">
            <div className="sticky top-24 rounded-3xl border border-border bg-surface p-7">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Best for</p>
              <p className="mt-3 text-lg">{pack.bestFor}</p>
              <div className="mt-6 border-t border-border pt-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Setup time</p>
                <p className="mt-2 font-display text-3xl">10–14 days</p>
              </div>
              <div className="mt-6 border-t border-border pt-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Contract</p>
                <p className="mt-2 font-display text-3xl">Month-to-month</p>
              </div>
              <a href="https://wa.me/+13072784862" target="_blank" rel="noreferrer" className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-medium text-primary-foreground">
                Talk to Arman <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <h2 className="text-3xl md:text-4xl">Included services</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Click any service to see exactly how it works.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {includedServices.map((s) => {
              const I = s.icon;
              return (
                <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/40">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/12 text-primary">
                    <I className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                    Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <h2 className="text-3xl md:text-4xl">Compare plans</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PACKAGES.map((p) => (
            <Link
              key={p.slug}
              to="/packages/$tier"
              params={{ tier: p.slug }}
              className={`rounded-2xl border p-6 transition-colors ${p.slug === pack.slug ? "border-primary bg-primary/5" : "border-border bg-surface hover:border-primary/40"}`}
            >
              <p className="text-xs uppercase tracking-widest text-primary">{p.name}</p>
              <p className="mt-3 text-sm text-muted-foreground">{p.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                {p.slug === pack.slug ? "Current plan" : "View plan"} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

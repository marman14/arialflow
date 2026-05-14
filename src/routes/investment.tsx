import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowRight, Check, Sparkles, Shield, Zap } from "lucide-react";

export const Route = createFileRoute("/investment")({
  head: () => ({
    meta: [
      { title: "Investment — Arialflow Growth Plans for Contractors" },
      { name: "description", content: "Transparent, month-to-month pricing for HVAC, roofing, and plumbing businesses. Choose the plan that fits your business — cancel any time." },
      { property: "og:title", content: "Arialflow Investment" },
      { property: "og:description", content: "Growth plans built for the trades. No long contracts." },
    ],
  }),
  component: InvestmentPage,
});

const plans = [
  {
    name: "Starter",
    icon: Shield,
    price: "$997",
    period: "/mo",
    tagline: "Plug the biggest leaks first.",
    description: "Perfect for owner-operators and small crews who are losing jobs to missed calls and a thin Google profile. This plan captures the revenue you're already earning — you're just not answering the phone fast enough.",
    includes: [
      "AI Calling Agent — answers every call 24/7",
      "Review Engine — 40+ new Google reviews per month",
      "Conversion Website — fast, mobile-first, built for your trade",
      "Call recordings & lead summaries sent to your phone",
      "Direct WhatsApp access to your account manager",
    ],
    bestFor: "Contractors doing $250K–$1M/yr who want to stop the bleeding.",
    highlight: false,
  },
  {
    name: "Growth",
    icon: Zap,
    price: "$1,497",
    period: "/mo",
    tagline: "Capture every lead. Follow up forever.",
    description: "For established businesses ready to scale. Everything in Starter, plus a chatbot on your website and social media, automated lead follow-up sequences, and full local SEO management — so you show up first on Google Maps.",
    includes: [
      "Everything in Starter",
      "AI Chatbot — website, Facebook & Instagram",
      "Lead Follow-Up — automated SMS + email sequences",
      "Local SEO — Google Business Profile managed weekly",
      "Social Media — branded posts on Facebook & Instagram",
      "Monthly strategy call with your account manager",
    ],
    bestFor: "Contractors doing $1M–$5M/yr who are ready to compound growth.",
    highlight: true,
  },
  {
    name: "Done-For-You",
    icon: Sparkles,
    price: "$2,497",
    period: "/mo",
    tagline: "We run it all. You run the trucks.",
    description: "The complete Arialflow operating system. We manage every channel, every campaign, every metric. You focus on delivering great work — we deliver the customers. This is the plan our highest-revenue contractors are on.",
    includes: [
      "Everything in Growth",
      "Paid Ads — Google Local Service Ads, Search & Meta",
      "Service-Area Domination — per-city SEO pages",
      "Dedicated account strategist (not a shared team)",
      "Weekly performance reports in plain English",
      "Quarterly strategy session (video or on-site)",
      "Priority WhatsApp & email support",
    ],
    bestFor: "Multi-truck operators and regional brands doing $3M+/yr.",
    highlight: false,
  },
];

function InvestmentPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-ember" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-widest text-primary">Investment</p>
          <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl">
            Simple pricing. <span className="text-gradient-ember">Real results.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            No setup fees. No long contracts. Month-to-month plans that pay for themselves in booked jobs. Pick the one that fits your business — or chat with us and we'll recommend one.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => {
            const PlanIcon = p.icon;
            return (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-3xl border p-8 ${
                  p.highlight
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border bg-surface"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/12 text-primary">
                    <PlanIcon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-semibold">{p.name}</h2>
                </div>
                <div className="mt-6">
                  <span className="font-display text-5xl">{p.price}</span>
                  <span className="text-lg text-muted-foreground">{p.period}</span>
                </div>
                <p className="mt-2 text-sm font-medium text-primary">{p.tagline}</p>
                <p className="mt-4 text-sm text-muted-foreground">{p.description}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {p.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-xl border border-border/60 bg-background/50 p-4">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Best for</p>
                  <p className="mt-1 text-sm">{p.bestFor}</p>
                </div>

                <a
                  href="https://wa.me/+13072784862"
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                    p.highlight
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background text-foreground hover:bg-surface"
                  }`}
                >
                  Get started <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Guarantees */}
      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "No setup fees", desc: "We build everything for you — calling agent, chatbot, website, review engine — at zero upfront cost." },
              { title: "Month-to-month", desc: "No annual contracts. No cancellation fees. If we don't earn your business every month, you shouldn't be paying us." },
              { title: "Live in 14 days", desc: "From the day you sign up, your complete growth system is configured, tested, and live in under two weeks." },
            ].map((g) => (
              <div key={g.title} className="rounded-2xl border border-border bg-background p-6">
                <h3 className="text-lg font-semibold">{g.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8">
        <h2 className="text-3xl md:text-4xl">Common questions</h2>
        <dl className="mt-8 space-y-4">
          {[
            { q: "Can I switch plans later?", a: "Yes. You can upgrade or downgrade at any time. Changes take effect on your next billing cycle." },
            { q: "Is there a setup fee?", a: "No. Setup, configuration, and your conversion website are all included at no extra cost." },
            { q: "How fast will I see results?", a: "Most contractors see their first AI-booked appointment within the first week. Review growth and SEO ranking improvements build over 30–90 days." },
            { q: "What if it doesn't work for me?", a: "Cancel any time — no penalty, no questions asked. We've never had a contractor cancel in the first 90 days because the ROI is immediate." },
            { q: "Do I need to be tech-savvy?", a: "Not at all. We set everything up and manage it for you. All you need is your phone." },
          ].map((f) => (
            <div key={f.q} className="rounded-2xl border border-border bg-surface p-6">
              <dt className="font-medium">{f.q}</dt>
              <dd className="mt-2 text-sm text-muted-foreground">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-surface to-surface p-10 md:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-5xl">Not sure which plan is right?</h2>
            <p className="mt-4 text-muted-foreground">
              Message us on WhatsApp. We'll ask a few questions about your business and recommend the right fit — no sales pitch, no pressure.
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowRight, Check, Sparkles, Shield, Zap, Calendar } from "lucide-react";

export const Route = createFileRoute("/investment")({
  head: () => ({
    meta: [
      { title: "Investment — Arialflow Growth Plans for Local Businesses" },
      { name: "description", content: "Growth plans for local businesses globally. Book a call to find the right fit." },
      { property: "og:title", content: "Arialflow Investment" },
      { property: "og:description", content: "Growth plans built for the trades." },
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
    bestFor: "businesses doing $250K–$1M/yr who want to stop the bleeding.",
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
    bestFor: "businesses doing $1M–$5M/yr who are ready to compound growth.",
    highlight: true,
  },
  {
    name: "Done-For-You",
    icon: Sparkles,
    price: "$2,497",
    period: "/mo",
    tagline: "We run it all. You run the trucks.",
    description: "The complete Arialflow operating system. We manage every channel, every campaign, every metric. You focus on delivering great work — we deliver the customers. This is the plan our highest-revenue businesses are on.",
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

const plansV2 = [
  {
    name: "Starter",
    icon: Shield,
    price: "$397",
    period: "/mo",
    tagline: "Plug the biggest leaks first.",
    description: "Perfect for local businesses losing jobs to missed calls and a thin online presence. Capture the revenue you're already earning with the right systems.",
    includes: [
      "Local business number that routes calls to your phone",
      "Missed-call text back so every unanswered call gets a reply",
      "Conversion-focused website or landing page, built for your trade",
      "Google Review engine – automated SMS requests after each job",
      "Simple lead inbox — every call, text and form in one place",
      "Monthly call & SMS usage up to fair-use limit (extra billed separately)",
    ],
    bestFor: "Local businesses ready to stop missing leads and start capturing every enquiry.",
    highlight: false,
  },
  {
    name: "Growth",
    icon: Zap,
    price: "$697",
    period: "/mo",
    tagline: "Capture every lead. Follow up automatically.",
    description: "Everything in Starter, plus automated follow-up flows, reactivation campaigns, and managed Google Business Profile — so you stay top of mind and top of search.",
    includes: [
      "Everything in Starter",
      "Advanced follow-up flows – automated SMS + email after quotes and missed calls",
      "Reactivation campaigns to bring back old leads in your phone or inbox",
      "Google Business Profile managed monthly (posts, photos, optimization)",
      "Simple performance report each month (calls, leads, reviews, top channels)",
      "Higher call & SMS usage limit included (extra billed separately)",
    ],
    bestFor: "Growing local businesses that want to capture every lead and follow up automatically.",
    highlight: true,
  },
  {
    name: "Done-For-You",
    icon: Sparkles,
    price: "$1,297",
    period: "/mo",
    tagline: "We run the follow-up. You run the jobs.",
    description: "Everything in Growth, plus an AI Receptionist, priority lead handling, deeper automation for larger tickets, and a quarterly strategy session to keep everything tuned.",
    includes: [
      "Everything in Growth",
      "AI Receptionist – answers overflow & after-hours calls, captures details and books callbacks",
      "Priority handling of new leads – alerts and summaries sent to you and your team",
      "Deeper follow-up automation for larger tickets and multi-step estimates",
      "Quarterly strategy session to tune offers, pages and follow-up sequences",
      "Highest included call, SMS & AI usage limit (overage at transparent rates)",
    ],
    bestFor: "Established local businesses that want a full done-for-you growth system.",
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
            Choose the plan that fits your business — or book a quick call and we'll walk you through everything and recommend the right fit.
          </p>
          <a href="https://calendly.com/arwebcrafts/30-mint" target="_blank" rel="noreferrer" className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground">
            <Calendar className="h-4 w-4" /> Book a free 30-min call
          </a>
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
                  href="https://calendly.com/arwebcrafts/30-mint"
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                    p.highlight
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background text-foreground hover:bg-surface"
                  }`}
                >
                  <Calendar className="h-4 w-4" /> Book a call
                </a>
              </div>
            );
          })}
        </div>

      </section>

      {/* Second Pricing Section */}
      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-widest text-primary">Also Available</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Flexible plans for <span className="text-gradient-ember">every stage.</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Straightforward monthly plans with no surprises. Pick the tier that matches where your business is right now.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plansV2.map((p) => {
              const PlanIcon = p.icon;
              return (
                <div
                  key={p.name + "-v2"}
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
                    <h3 className="text-xl font-semibold">{p.name}</h3>
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
                    href="https://calendly.com/arwebcrafts/30-mint"
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                      p.highlight
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-background text-foreground hover:bg-surface"
                    }`}
                  >
                    <Calendar className="h-4 w-4" /> Book a call
                  </a>
                </div>
              );
            })}
          </div>

          {/* Footnote + Global Markets */}
          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Setup fee excluded.</span>{" "}
              We work globally with local businesses across the USA.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Serving</span>
              {["🇺🇸 USA", "🇬🇧 UK", "🇨🇦 Canada", "🇦🇺 Australia"].map((country) => (
                <span
                  key={country}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8">
          <h2 className="text-3xl md:text-4xl">Common questions</h2>
          <dl className="mt-8 space-y-4">
            {[
              { q: "Can I switch plans later?", a: "Yes. You can upgrade or downgrade at any time. Changes take effect on your next billing cycle." },
              { q: "How fast will I see results?", a: "Most businesses see their first AI-booked appointment within the first week. Review growth and SEO ranking improvements build over 30–90 days." },
              { q: "Do I need to be tech-savvy?", a: "Not at all. We set everything up and manage it for you. All you need is your phone." },
              { q: "What happens on the call?", a: "We'll ask about your business, your service area, and where you're losing jobs. Then we'll recommend the best plan and walk you through exactly what to expect." },
            ].map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-background p-6">
                <dt className="font-medium">{f.q}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-surface to-surface p-10 md:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-5xl">Let's talk about your business.</h2>
            <p className="mt-4 text-muted-foreground">
              Book a free 30-minute call. We'll look at where you're losing leads and jobs, and show you exactly how we'd fix it. No commitment — just an honest conversation about your growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://calendly.com/arwebcrafts/30-mint" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground ring-ember">
                <Calendar className="h-4 w-4" /> Book your free call <ArrowRight className="h-4 w-4" />
              </a>
              <a href="https://wa.me/+13072784862" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full border border-border/80 px-6 text-sm hover:bg-surface">
                Or message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowRight, Calendar, Cog, Rocket, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "How It Works — Arialflow Onboarding in 14 Days" },
      { name: "description", content: "Audit, build, pilot, decide. Our four-step process gets your AI growth system live in under two weeks — risk free for 30 days." },
      { property: "og:title", content: "How Arialflow Works" },
      { property: "og:description", content: "Live in 14 days. Free for 30. Cancel any time." },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  { icon: Calendar, n: "01", title: "Free 30-min audit", time: "Day 0", desc: "We dig into your call logs, missed calls, lead sources and review velocity. You leave with a written report — even if you don't sign up." },
  { icon: Cog, n: "02", title: "We build your stack", time: "Days 1–10", desc: "Calling agent voice trained on your business, chatbot scripts, review SMS sequences, and your free conversion-optimized website." },
  { icon: Rocket, n: "03", title: "30-day live pilot", time: "Days 11–40", desc: "The system goes live. You watch booked jobs appear in your calendar and reviews land on Google — at zero cost." },
  { icon: ShieldCheck, n: "04", title: "Keep it or walk", time: "Day 40+", desc: "Continue on a transparent month-to-month plan. No contracts, no setup fees, no surprises. Cancel any time." },
];

function ProcessPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-radial-ember" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-widest text-primary">The process</p>
          <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl">From first call to <span className="text-gradient-ember">first booked job</span> in under two weeks.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">No long discovery decks. No 6-month contracts. We move fast because you do.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 md:px-8">
        <ol className="relative space-y-6 border-l border-border/60 pl-8">
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <div className="absolute -left-[42px] grid h-9 w-9 place-items-center rounded-full border border-primary/40 bg-background text-primary">
                <s.icon className="h-4 w-4" />
              </div>
              <div className="rounded-2xl border border-border/60 bg-surface p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                  <span className="font-display text-primary">{s.n}</span>
                  <span>·</span>
                  <span>{s.time}</span>
                </div>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">{s.title}</h2>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-surface p-6">
          <p className="text-sm text-muted-foreground">Ready to map the leaks in your funnel?</p>
          <Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground">
            Book your audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

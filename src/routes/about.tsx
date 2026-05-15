import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Arialflow, the AI growth partner for businesses" },
      { name: "description", content: "Founder-led. Trade-specialized. Direct access, transparent pricing, and month-to-month plans — that's how Arialflow does business." },
      { property: "og:title", content: "About Arialflow" },
      { property: "og:description", content: "Founder-led. Trade-specialized. Built for the field." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Trade-specialized", d: "We work exclusively with HVAC, roofing, plumbing, electrical and solar. We know your customers' objections better than your call center." },
  { t: "Founder-led", d: "You talk directly with Arman, not a junior account manager. Decisions get made on the call." },
  { t: "Transparent", d: "Flat monthly pricing. No setup fees. No long contracts. Cancel any time." },
  { t: "Outcome-obsessed", d: "We measure what matters: booked jobs, recovered leads, and reviews on Google. Vanity metrics stay off the dashboard." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-radial-ember" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-widest text-primary">About us</p>
          <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl">Built by people who'd rather <span className="text-gradient-ember">build something that works</span> than sell another login.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>Arialflow started with a simple observation: the best businesses in America are losing jobs to worse businesses with better follow-up.</p>
            <p>Our founder Arman spent two years inside HVAC and roofing companies watching the same pattern repeat — calls going to voicemail at 4pm, leads cooling overnight, happy customers never asked for a review. Every leak was a few thousand dollars walking out the door.</p>
            <p>We built Arialflow to close those leaks. Not with another dashboard you'll never log into, but with an AI system that runs in the background and a real human who answers when you have questions.</p>
            <p className="text-foreground">If your phone is ringing more than your competitors' but your bank account doesn't show it — we should talk.</p>
          </div>
          <aside className="md:col-span-5">
            <div className="rounded-2xl border border-border/60 bg-surface p-7">
              <p className="font-display text-3xl">Arman</p>
              <p className="text-sm text-muted-foreground">Founder · Arialflow</p>
              <blockquote className="mt-5 border-l-2 border-primary pl-4 text-sm italic text-muted-foreground">
                "I don't sell software. I sell booked jobs. If we can't move that number for you, we'll tell you straight — and you walk away owing nothing."
              </blockquote>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <h2 className="max-w-2xl text-4xl md:text-5xl">What we believe.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl border border-border/60 bg-surface p-6">
                <h3 className="text-xl font-semibold">{v.t}</h3>
                <p className="mt-2 text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 to-surface p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl">Let's talk for 30 minutes.</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">No deck, no pitch. Just an honest look at where your business is leaking jobs.</p>
          <Link to="/contact" className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground">
            Book the audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

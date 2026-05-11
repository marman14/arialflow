import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PhoneCall, MessageSquare, Star, Repeat, Globe, Megaphone, MapPin, Mail, ArrowRight, Check } from "lucide-react";

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

const services = [
  { icon: PhoneCall, title: "AI Calling Agent", price: "from $299/mo", points: ["Answers in 1 ring, 24/7", "Books jobs into your calendar", "Filters tire-kickers automatically", "Bilingual EN/ES available"] },
  { icon: MessageSquare, title: "AI Chatbot", price: "from $149/mo", points: ["Website + Facebook + Instagram", "<5 second first response", "Captures phone, address, scope", "Handoff to human any time"] },
  { icon: Star, title: "Review Engine", price: "from $99/mo", points: ["SMS request after every job", "Reactivates dormant customers", "Replies to negative reviews", "Targets 40+ reviews / month"] },
  { icon: Repeat, title: "Lead Follow-Up", price: "from $179/mo", points: ["Personalized SMS + email", "Maintenance reminder loops", "Win-back for cold leads", "30–50% bookings lift"] },
  { icon: Mail, title: "Local SEO & Social", price: "from $249/mo", points: ["Google Business optimization", "Weekly social content", "Map pack ranking strategy", "Citation cleanup"] },
  { icon: Globe, title: "Conversion Website", price: "free with any plan", points: ["Trade-specific design", "Mobile-first, fast (>95 Lighthouse)", "Live in 5–7 business days", "Click-to-call everywhere"] },
  { icon: Megaphone, title: "Paid Ads Management", price: "from $499/mo", points: ["Google LSA + search", "Meta retargeting", "Geo & service-area targeting", "Avg 8–12× ROAS"] },
  { icon: MapPin, title: "Service-Area Domination", price: "custom", points: ["Multi-location playbook", "Per-city landing pages", "Targeted outreach", "Reputation moat"] },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-ember" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-widest text-primary">Services</p>
          <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl">Plug every leak. <span className="text-gradient-ember">Capture every job.</span></h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Pick the modules you need or run the full growth suite. Every plan includes a free, conversion-optimized website and direct access to our team.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="flex flex-col rounded-2xl border border-border/60 bg-surface p-7 transition-colors hover:border-primary/40">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">{s.price}</span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight">{s.title}</h2>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 to-surface p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl">Not sure which modules you need?</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">In a 30-minute audit we'll review your call logs, lead flow and review velocity — then recommend the smallest set that moves the needle fastest.</p>
            <Link to="/contact" className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground">
              Book the free audit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

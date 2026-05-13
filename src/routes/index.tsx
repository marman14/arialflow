import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import heroImg from "@/assets/hero-contractor.jpg";
import {
  PhoneCall, MessageSquare, Star, Repeat, Globe, Megaphone,
  ArrowRight, Check, Quote, TrendingUp, Clock, ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arialflow — More calls. More jobs. More revenue, on autopilot." },
      { name: "description", content: "AI growth systems for HVAC, roofing & plumbing contractors. Capture every call, follow up every lead, win 5-star reviews — without leaving the job site." },
      { property: "og:title", content: "Arialflow — AI Growth for Contractors" },
      { property: "og:description", content: "Capture every call, follow up every lead, win 5-star reviews — without leaving the job site." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: PhoneCall, title: "AI Calling Agent", desc: "Answers, qualifies, and books every inbound call 24/7 — even at 2am.", stat: "100% pickup rate" },
  { icon: MessageSquare, title: "AI Chatbot", desc: "Replies on your site & Facebook in under 5 seconds with the right answer.", stat: "5-second response" },
  { icon: Star, title: "Reviews on Autopilot", desc: "SMS review requests after every job. Reactivate dormant customers.", stat: "+40 reviews / month" },
  { icon: Repeat, title: "Lead Follow-Up", desc: "Personalized SMS + email nurtures so leads never go cold again.", stat: "30–50% more bookings" },
  { icon: Globe, title: "Conversion Website", desc: "Fast, mobile, Google-optimized contractor site. Built to book jobs.", stat: "Live in 5–7 days" },
  { icon: Megaphone, title: "Paid Ads", desc: "Google & Meta ads targeting homeowners ready to buy in your service area.", stat: "8–12× ROAS" },
];

const steps = [
  { n: "01", title: "Free 30-min audit", desc: "We map the leaks in your current funnel — missed calls, slow follow-up, lost reviews." },
  { n: "02", title: "We build it for you", desc: "Calling agent, chatbot, review engine, and follow-up sequences configured to your business." },
  { n: "03", title: "Go live in 14 days", desc: "Your full growth stack ships in under two weeks. Booked jobs start landing in your calendar." },
  { n: "04", title: "Month-to-month, always", desc: "Simple monthly plan, no long contracts. Scale up or down whenever you want." },
];

const cases = [
  { who: "Dallas HVAC Pro", city: "Dallas, TX", metric: "61", unit: "new 5★ reviews", note: "in 30 days via SMS review automation." },
  { who: "Tampa Bay Roofing", city: "Tampa, FL", metric: "134", unit: "qualified leads", note: "first month with AI chatbot live." },
  { who: "Houston Plumbing Experts", city: "Houston, TX", metric: "+58%", unit: "repeat bookings", note: "from automated maintenance follow-ups." },
  { who: "Orlando AC & Cooling", city: "Orlando, FL", metric: "41", unit: "appointments", note: "booked by AI while crews were on site." },
];

const reviews = [
  { name: "Mike Harrington", co: "Harrington HVAC · Dallas, TX", body: "We were losing 3–4 calls a day to voicemail. Now the AI picks up, books the appointment, we just show up. Worth every penny." },
  { name: "Jason Reedley", co: "Reedley Roofing · Houston, TX", body: "Review automation paid for itself in week one. We went from 14 Google reviews to 67 in a month. Phone hasn't stopped ringing." },
  { name: "Steve Kowalski", co: "Kowalski Heating & Air · Orlando, FL", body: "Three months in, we've added over $40K in new revenue. The follow-up system alone recovered customers I thought were gone." },
  { name: "Maria Delgado", co: "Delgado Plumbing · San Antonio, TX", body: "Bilingual AI agent was a game changer for our market. We're booking 22 extra jobs a month from Spanish-speaking callers we used to lose." },
  { name: "Chris O'Donnell", co: "O'Donnell Electric · Tampa, FL", body: "I sleep at night now. Calls don't go to voicemail, leads don't go cold, reviews land themselves. Best operations decision I've made in 12 years." },
  { name: "Rachel Whitman", co: "Whitman Roofing · Phoenix, AZ", body: "The chatbot books storm-damage inspections at midnight. Our crews have a full pipeline before the office even opens. Unreal." },
  { name: "Daryl Pickens", co: "Pickens AC & Heat · Atlanta, GA", body: "Arman doesn't disappear after onboarding. He's on WhatsApp, makes tweaks the same day. That's not normal in this industry." },
  { name: "Lauren Brooks", co: "Brooks Solar · Denver, CO", body: "ROAS on Google ads jumped from 3× to 11× in the second month. They actually understand our trade — that's the difference." },
  { name: "Tom Barlow", co: "Barlow Heating · Manchester, UK", body: "We moved from a UK-based agency to Arialflow. Better systems, lower price, and they pick up the phone. Couldn't recommend more." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-radial-ember" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-12 md:gap-10 md:px-8 md:py-28">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Trusted by 80+ contractors across the US, UK & AU
            </div>
            <h1 className="mt-6 text-5xl leading-[1.02] md:text-7xl">
              More calls. More jobs.<br />
              <span className="text-gradient-ember">More revenue</span>, on autopilot.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Arialflow plugs the leaks in your contractor business — missed calls, slow follow-up, lost reviews — with a single AI growth system. You stay on the job site. We bring the work.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground ring-ember transition-transform hover:-translate-y-0.5">
                Request your free audit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/process" className="inline-flex h-12 items-center gap-2 rounded-full border border-border/80 px-6 text-sm font-medium text-foreground hover:bg-surface">
                See how it works
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "4.9★", v: "Avg client rating" },
                { k: "80+", v: "Active contractors" },
                { k: "<5s", v: "Lead response" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl text-foreground">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />
              <div className="overflow-hidden rounded-[1.75rem] border border-border/60">
                <img src={heroImg} alt="HVAC contractor at golden hour" width={1600} height={1200} className="h-full w-full object-cover" />
              </div>
              <div className="glass absolute -bottom-6 -left-6 hidden w-72 rounded-2xl p-4 md:block">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary"><PhoneCall className="h-5 w-5" /></div>
                  <div>
                    <p className="text-sm font-medium">Incoming call captured</p>
                    <p className="text-xs text-muted-foreground">AI booked: Tue · 9:30am · Frisco TX</p>
                  </div>
                </div>
              </div>
              <div className="glass absolute -right-4 -top-6 hidden w-60 rounded-2xl p-4 md:block">
                <div className="flex items-center gap-2 text-amber-300">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">"Booked our crew solid for 3 weeks straight."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted strip */}
      <section className="border-y border-border/60 bg-surface/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-6 text-xs uppercase tracking-widest text-muted-foreground md:px-8">
          <span>HVAC</span><span>Roofing</span><span>Plumbing</span><span>Electrical</span><span>Solar</span><span>Landscape</span>
        </div>
      </section>

      {/* Pain → Gain */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">The honest math</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Every missed call is a job your competitor just booked.</h2>
            <p className="mt-5 text-muted-foreground">
              The average contractor misses 38% of inbound calls during peak hours. Of those leads, 80% never call back — they call the next name on Google. That's not a marketing problem. That's a response problem.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { k: "38%", v: "Calls missed at peak hours" },
              { k: "80%", v: "Leads never call back" },
              { k: "12 min", v: "Avg time-to-response (industry)" },
              { k: "5 sec", v: "Avg time-to-response (Arialflow)" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border/60 bg-surface p-6">
                <p className="font-display text-3xl text-gradient-ember">{s.k}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-widest text-primary">The complete growth suite</p>
              <h2 className="mt-3 text-4xl md:text-5xl">One system. Every lead captured, every job booked.</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary">
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-surface-elevated p-6 transition-colors hover:border-primary/40">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <p className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                  <TrendingUp className="h-3.5 w-3.5" /> {s.stat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-primary">How it works</p>
            <h2 className="mt-3 text-4xl md:text-5xl">From audit to autopilot in under 14 days.</h2>
            <p className="mt-5 text-muted-foreground">No big agency runaround. You talk to the founder, we build, you watch leads come in.</p>
            <Link to="/contact" className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground">
              Start your free audit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ol className="grid gap-3 md:col-span-8 md:grid-cols-2">
            {steps.map((s) => (
              <li key={s.n} className="rounded-2xl border border-border/60 bg-surface p-6">
                <div className="font-display text-sm text-primary">{s.n}</div>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Case Studies */}
      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <p className="text-xs uppercase tracking-widest text-primary">Receipts</p>
          <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">Real numbers from real contractors.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cases.map((c) => (
              <article key={c.who} className="rounded-2xl border border-border/60 bg-surface-elevated p-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.city}</p>
                <p className="mt-1 text-sm font-medium">{c.who}</p>
                <p className="mt-6 font-display text-5xl text-gradient-ember">{c.metric}</p>
                <p className="mt-1 text-sm font-medium text-foreground">{c.unit}</p>
                <p className="mt-3 text-sm text-muted-foreground">{c.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-widest text-primary">What contractors say</p>
            <h2 className="mt-3 text-4xl md:text-5xl">5.0 from owners who stopped chasing leads.</h2>
          </div>
          <div className="flex items-center gap-2 text-amber-300">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            <span className="ml-2 text-sm text-muted-foreground">Verified Google Reviews</span>
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
              <Quote className="h-6 w-6 text-primary" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">"{r.body}"</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.co}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">Why Arialflow</p>
            <h2 className="mt-3 text-4xl md:text-5xl">A partner — not a login.</h2>
            <p className="mt-5 text-muted-foreground">
              Buying AI software is easy. Making it actually drive booked jobs for a local contractor is hard. We deploy, tune, and optimize the system for your trade — and stick around to make sure it works.
            </p>
          </div>
          <ul className="grid gap-4">
            {[
              { i: ShieldCheck, t: "Month-to-month, always", d: "Simple flat monthly pricing. No setup fees, no long contracts. Cancel any time." },
              { i: Clock, t: "Live in under 14 days", d: "Calling agent, chatbot, reviews and follow-ups configured for your business." },
              { i: Check, t: "Built for the trades", d: "Specialized for HVAC, roofing, plumbing, electrical, and solar." },
              { i: TrendingUp, t: "Founder-led, transparent", d: "Direct line to Arman. No anonymous support tickets." },
            ].map(({ i: Icon, t, d }) => (
              <li key={t} className="flex gap-4 rounded-2xl border border-border bg-surface p-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary"><Icon className="h-5 w-5" /></div>
                <div>
                  <p className="font-medium">{t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-surface to-surface p-10 md:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-5xl">Ready to stop missing money?</h2>
            <p className="mt-4 text-muted-foreground">Book a free 30-minute audit. We'll show you exactly where revenue is leaking — and what we'd do about it. No pitch. No pressure.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground ring-ember">
                Claim your free audit <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="mailto:contact@arialflow.com" className="inline-flex h-12 items-center gap-2 rounded-full border border-border/80 px-6 text-sm">
                Email us instead
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

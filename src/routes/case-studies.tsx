import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ArrowRight, Calendar, TrendingUp, Check, Star, MapPin, Clock, Users } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Arialflow Results for Real Contractors" },
      { name: "description", content: "See how HVAC, roofing, and plumbing contractors in Texas and Florida are using Arialflow to book more jobs, get more reviews, and grow revenue." },
      { property: "og:title", content: "Arialflow Case Studies" },
      { property: "og:description", content: "Real results from real contractors." },
    ],
  }),
  component: CaseStudiesPage,
});

const CALENDLY = "https://calendly.com/arwebcrafts/30-mint";

const studies = [
  {
    slug: "harrington-hvac",
    company: "Harrington HVAC",
    owner: "Mike Harrington",
    location: "Dallas, TX",
    trade: "HVAC",
    employees: "12 technicians",
    revenue: "$2.4M/yr before Arialflow",
    challenge: "Missing 3–4 calls per day during peak summer months",
    headline: "From 38% missed calls to zero — and $47K in recovered revenue per month.",
    heroStat: "$47K",
    heroUnit: "recovered revenue / month",
    services: ["AI Calling Agent", "Review Engine", "Lead Follow-Up"],
    timeline: "Results within first 14 days",
    story: [
      {
        title: "The Problem",
        text: "Harrington HVAC is a well-established operation in Dallas with 12 technicians and a solid reputation. But during the Texas summer — their busiest season — they were missing 3-4 calls per day. Their two-person office staff couldn't keep up with the phone volume, especially during lunch breaks and after 5 PM. Every missed call was a homeowner who called the next HVAC company on Google.",
      },
      {
        title: "What We Did",
        text: "We deployed an AI Calling Agent trained on Harrington's full service catalog, pricing tiers, service area (32 zip codes across DFW), and brand voice. The agent answers every call within 1 ring, qualifies the caller, books appointments directly into ServiceTitan, and sends Mike a text summary with a recording after every call. We also launched the Review Engine to request 5-star reviews via SMS 2 hours after each job, and set up Lead Follow-Up sequences for estimates that didn't close.",
      },
      {
        title: "The Results",
        text: "In the first 30 days, the AI agent captured 127 calls that would have gone to voicemail. 41 of those converted to booked appointments, generating approximately $47,000 in revenue that would have gone to competitors. The Review Engine pushed their Google reviews from 89 to 142 in the same period. Their Google Maps ranking improved from position 5 to position 2 for 'AC repair Dallas'. Mike's office staff now handles only VIP callbacks — the AI handles everything else.",
      },
    ],
    results: [
      { metric: "127", unit: "calls captured", note: "that would have gone to voicemail" },
      { metric: "41", unit: "jobs booked", note: "by AI in 30 days" },
      { metric: "$47K", unit: "monthly revenue", note: "recovered from missed calls" },
      { metric: "89→142", unit: "Google reviews", note: "in 30 days" },
    ],
    quote: "I couldn't believe the first monthly report. Forty-one booked jobs that would have been voicemails. That's not marketing — that's money I was throwing away. The AI agent paid for itself on day three.",
  },
  {
    slug: "tampa-bay-roofing",
    company: "Tampa Bay Roofing",
    owner: "Chris O'Donnell",
    location: "Tampa, FL",
    trade: "Roofing",
    employees: "8 crew members",
    revenue: "$1.8M/yr before Arialflow",
    challenge: "Low conversion from website traffic and Facebook ads",
    headline: "134 qualified leads in 30 days — and a 340% increase in website conversion rate.",
    heroStat: "134",
    heroUnit: "qualified leads in 30 days",
    services: ["AI Chatbot", "Conversion Website", "Paid Ads"],
    timeline: "Results within first 7 days",
    story: [
      {
        title: "The Problem",
        text: "Tampa Bay Roofing was spending $3,500/month on Facebook ads and getting plenty of clicks — but most visitors bounced without taking action. Their old website was slow, didn't have click-to-call, and had no way to capture leads after hours. Chris estimated that for every 100 visitors, only 2-3 would actually call. The rest disappeared.",
      },
      {
        title: "What We Did",
        text: "We built a conversion-optimized website from scratch — mobile-first, 97 Lighthouse speed score, click-to-call buttons on every section, before/after galleries, and trade-specific trust signals. Then we deployed the AI Chatbot on the site, Facebook, and Instagram. The chatbot replies in under 5 seconds, asks qualifying questions (roof type, age, damage type), gives ballpark estimates, and captures the homeowner's phone number and address. We also restructured their Facebook ads with tighter geo-targeting and storm-damage messaging.",
      },
      {
        title: "The Results",
        text: "The new website converted at 8.4% compared to the old site's 2.1% — a 340% improvement. The AI Chatbot captured 134 qualified leads in the first 30 days, with 67% coming after business hours when nobody would have been there to answer. Facebook ad ROAS jumped from 2.8× to 9.3× because the landing page and chatbot were finally converting the traffic. Chris hired two additional crew members to handle the volume.",
      },
    ],
    results: [
      { metric: "134", unit: "qualified leads", note: "in first 30 days" },
      { metric: "340%", unit: "conversion increase", note: "from 2.1% to 8.4%" },
      { metric: "9.3×", unit: "ad ROAS", note: "up from 2.8×" },
      { metric: "67%", unit: "after-hours leads", note: "captured by chatbot" },
    ],
    quote: "The chatbot books storm-damage inspections at midnight. My crews have a full pipeline before the office even opens. I hired two more guys just to keep up. The website and chatbot combo is unreal.",
  },
  {
    slug: "delgado-plumbing",
    company: "Delgado Plumbing",
    owner: "Maria & Carlos Delgado",
    location: "San Antonio, TX",
    trade: "Plumbing",
    employees: "6 technicians",
    revenue: "$1.1M/yr before Arialflow",
    challenge: "No repeat business system and losing Spanish-speaking customers",
    headline: "+58% repeat bookings and 22 new jobs per month from bilingual AI.",
    heroStat: "+58%",
    heroUnit: "repeat bookings increase",
    services: ["AI Calling Agent (Bilingual)", "Lead Follow-Up", "Review Engine"],
    timeline: "Results within first 21 days",
    story: [
      {
        title: "The Problem",
        text: "Delgado Plumbing serves a large Hispanic community in San Antonio, but their English-only phone system was losing Spanish-speaking callers who would hang up and call a competitor. On top of that, they had no system for follow-up — once a job was done, the customer was forgotten. No maintenance reminders, no review requests, no reactivation. Carlos estimated they were leaving $200K+ in annual repeat revenue on the table.",
      },
      {
        title: "What We Did",
        text: "We deployed a bilingual AI Calling Agent (English and Spanish) trained on their full service catalog and San Antonio service area. The agent detects language preference in the first few seconds and switches seamlessly. We set up Lead Follow-Up sequences with maintenance reminders — annual water heater flushes, drain cleanings, and seasonal pipe inspections — sent via SMS in both languages. The Review Engine sends bilingual review requests after every completed job.",
      },
      {
        title: "The Results",
        text: "The bilingual AI captured 22 additional jobs per month from Spanish-speaking callers who would have previously hung up. Lead Follow-Up maintenance reminders drove a 58% increase in repeat bookings within the first 90 days. The Review Engine pushed their Google reviews from 34 to 91, with many reviews in Spanish which boosted their visibility in the Hispanic community. Total monthly revenue increased by $31K within 3 months.",
      },
    ],
    results: [
      { metric: "22", unit: "new jobs / month", note: "from bilingual callers" },
      { metric: "+58%", unit: "repeat bookings", note: "from follow-up sequences" },
      { metric: "34→91", unit: "Google reviews", note: "including Spanish reviews" },
      { metric: "$31K", unit: "monthly revenue lift", note: "within 3 months" },
    ],
    quote: "The bilingual AI agent changed everything. We were losing our own community's business because we couldn't answer the phone in Spanish. Now we book 22 extra jobs a month — and those customers tell their neighbors.",
  },
  {
    slug: "orlando-ac-cooling",
    company: "Orlando AC & Cooling",
    owner: "Steve Kowalski",
    location: "Orlando, FL",
    trade: "HVAC",
    employees: "9 technicians",
    revenue: "$1.9M/yr before Arialflow",
    challenge: "Only 14 Google reviews and invisible on Maps",
    headline: "From 14 reviews to 142 — and the #1 Map Pack position in Orlando.",
    heroStat: "#1",
    heroUnit: "Google Maps ranking in Orlando",
    services: ["Review Engine", "Local SEO & Social", "Service-Area Domination"],
    timeline: "Map Pack #1 in 4 months",
    story: [
      {
        title: "The Problem",
        text: "Orlando AC & Cooling had been in business for 11 years with an excellent reputation — among people who already knew them. But they only had 14 Google reviews, their Google Business Profile was barely optimized, and they were buried on page 2 of Maps for their own city. Meanwhile, newer competitors with 200+ reviews were stealing all the organic search traffic. Steve was spending $5K/month on ads just to stay visible.",
      },
      {
        title: "What We Did",
        text: "We launched a three-pronged approach. First, the Review Engine started sending SMS review requests 2 hours after every completed job, plus a reactivation campaign to 400+ past customers. Second, we took over their Google Business Profile — weekly posts, optimized categories and services, professional photos, and Q&A management. Third, we built 12 city-specific landing pages targeting suburbs across the Orlando metro: Winter Park, Kissimmee, Altamonte Springs, and more.",
      },
      {
        title: "The Results",
        text: "Google reviews jumped from 14 to 142 in 4 months. Their Google Business Profile impressions increased by 780%. They hit the #1 Map Pack position for 'AC repair Orlando' and 'HVAC Orlando' within 4 months. The 12 city pages rank in the top 3 for their respective suburbs, generating an additional 85 inbound calls per month from organic search alone. Steve cut his ad spend by 40% because organic traffic now drives the majority of leads.",
      },
    ],
    results: [
      { metric: "14→142", unit: "Google reviews", note: "in 4 months" },
      { metric: "#1", unit: "Map Pack rank", note: "for 'AC repair Orlando'" },
      { metric: "780%", unit: "GBP impressions", note: "increase" },
      { metric: "85", unit: "organic calls/mo", note: "from city pages" },
    ],
    quote: "Three months in, we've added over $40K in new revenue. The follow-up system alone recovered customers I thought were gone. And now we're #1 on Google Maps — that's something I thought would take years.",
  },
];

function CaseStudiesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-ember" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-widest text-primary">Case Studies</p>
          <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl">
            Real contractors. <span className="text-gradient-ember">Real results.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Don't take our word for it. Here's exactly what happened when these contractors plugged in Arialflow — every number verified, every result documented.
          </p>
          <a href={CALENDLY} target="_blank" rel="noreferrer" className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground">
            <Calendar className="h-4 w-4" /> Want results like these? Book a call <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Overview stats */}
      <section className="border-b border-border/60 bg-surface/30">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-12 md:grid-cols-4 md:px-8">
          {[
            { k: "$47K", v: "Avg monthly revenue recovered" },
            { k: "340%", v: "Avg conversion increase" },
            { k: "100+", v: "Reviews per client in 90 days" },
            { k: "<14", v: "Days to go live" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl border border-border bg-background p-5 text-center">
              <p className="font-display text-3xl text-gradient-ember">{s.k}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      {studies.map((study, idx) => (
        <section key={study.slug} className={`${idx % 2 === 1 ? "bg-surface/30" : ""} border-b border-border/60`}>
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            {/* Header */}
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">{study.trade}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {study.location}</span>
                  <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {study.employees}</span>
                </div>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{study.company}</h2>
                <p className="mt-2 text-lg text-muted-foreground">{study.headline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.services.map((svc) => (
                    <span key={svc} className="rounded-full border border-border px-3 py-1 text-xs">{svc}</span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-2xl border border-border bg-surface p-6 text-center">
                  <p className="font-display text-6xl text-gradient-ember">{study.heroStat}</p>
                  <p className="mt-2 text-sm font-medium">{study.heroUnit}</p>
                  <div className="mt-4 flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" /> {study.timeline}
                  </div>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {study.story.map((s) => (
                <div key={s.title} className="rounded-2xl border border-border bg-background p-6">
                  <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>

            {/* Results grid */}
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {study.results.map((r) => (
                <div key={r.unit} className="rounded-2xl border border-border bg-surface p-5">
                  <p className="font-display text-3xl text-gradient-ember">{r.metric}</p>
                  <p className="mt-1 text-sm font-medium">{r.unit}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{r.note}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-lg leading-relaxed italic">"{study.quote}"</blockquote>
              <p className="mt-4 text-sm font-medium">{study.owner}</p>
              <p className="text-xs text-muted-foreground">{study.company} · {study.location}</p>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-surface to-surface p-10 md:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl md:text-5xl">Want to be the next case study?</h2>
            <p className="mt-4 text-muted-foreground">
              Book a free 30-minute call. We'll look at your business and show you exactly what kind of results you can expect — based on real data from contractors just like you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CALENDLY} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground ring-ember">
                <Calendar className="h-4 w-4" /> Book your free call <ArrowRight className="h-4 w-4" />
              </a>
              <a href="https://wa.me/+13072784862" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full border border-border/80 px-6 text-sm hover:bg-surface">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

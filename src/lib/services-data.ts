import { PhoneCall, MessageSquare, Star, Repeat, Globe, Megaphone, MapPin, Mail, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  price: string;
  hero: string;
  points: string[];
  features: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  stat: { k: string; v: string };
  caseStudies: { company: string; metric: string; unit: string; description: string; }[];
};

export const SERVICES: Service[] = [
  {
    slug: "ai-calling-agent",
    icon: PhoneCall,
    title: "AI Calling Agent",
    short: "Answers in 1 ring, 24/7. Books jobs straight into your calendar.",
    price: "from $299/mo",
    hero: "Never miss another booked job because the crew was on a roof.",
    points: ["Answers in 1 ring, 24/7", "Books jobs into your calendar", "Filters tire-kickers automatically", "Bilingual EN/ES available"],
    features: [
      { title: "Trained on your business", desc: "Service area, pricing tiers, brand voice and FAQ all baked into the agent." },
      { title: "Calendar integration", desc: "ServiceTitan, Housecall Pro, Jobber, Google Calendar — appointments land where you already work." },
      { title: "Live human handoff", desc: "Hot leads or VIP customers get transferred to your office instantly." },
      { title: "Call recordings & summaries", desc: "Every call transcribed, summarized, and emailed to the owner." },
    ],
    faq: [
      { q: "Will it sound like a robot?", a: "No. Our agents use natural conversational voices indistinguishable from a trained CSR — most callers never realize." },
      { q: "What about emergency calls?", a: "Emergencies are flagged and routed to your on-call tech immediately, day or night." },
    ],
    stat: { k: "100%", v: "Pickup rate" },
    caseStudies: [
      { company: "Dallas HVAC Pro", metric: "41", unit: "Appointments booked", description: "AI captured after-hours emergency calls, leading to 41 booked appointments that would have otherwise gone to voicemail and competitors." },
      { company: "Tampa Bay Plumbing", metric: "$12k", unit: "Revenue saved", description: "By answering within 1 ring, the AI retained customers who would hang up after 3 rings, recovering an estimated $12k in one month." }
    ]
  },
  {
    slug: "ai-chatbot",
    icon: MessageSquare,
    title: "AI Chatbot",
    short: "Replies on your site, Facebook & Instagram in under 5 seconds.",
    price: "from $149/mo",
    hero: "Capture homeowners the moment they hit your site — at 10pm or 10am.",
    points: ["Website + Facebook + Instagram", "<5 second first response", "Captures phone, address, scope", "Handoff to human any time"],
    features: [
      { title: "Omnichannel inbox", desc: "Web, Messenger, Instagram DMs and Google Business Chat unified in one feed." },
      { title: "Lead qualification", desc: "Asks the right diagnostic questions for each trade and tags lead quality." },
      { title: "Quote estimates", desc: "Ballpark pricing for common jobs so leads don't ghost waiting for a callback." },
      { title: "CRM sync", desc: "New chats become contacts in your CRM automatically with full transcript." },
    ],
    faq: [
      { q: "Does it know my pricing?", a: "Yes — we train it on your service catalog and give it ranges, not exact numbers, so you stay in control." },
      { q: "Can my office team take over?", a: "One click in the inbox to jump in mid-conversation." },
    ],
    stat: { k: "<5s", v: "First response" },
    caseStudies: [
      { company: "Houston Roofing Experts", metric: "134", unit: "Qualified leads", description: "The chatbot qualified incoming traffic from Facebook ads instantly, converting 134 leads in the first 30 days." },
    ]
  },
  {
    slug: "review-engine",
    icon: Star,
    title: "Review Engine",
    short: "SMS review requests after every job. Targets 40+ reviews / month.",
    price: "from $99/mo",
    hero: "Turn every happy customer into a 5-star Google review on autopilot.",
    points: ["SMS request after every job", "Reactivates dormant customers", "Replies to negative reviews", "Targets 40+ reviews / month"],
    features: [
      { title: "Smart timing", desc: "Sends 2 hours after job completion when satisfaction is highest." },
      { title: "Negative review shield", desc: "Routes 1–3 star feedback privately to the owner before it hits Google." },
      { title: "Reactivation campaigns", desc: "Wakes up past customers from your CRM and asks for the review you never got." },
      { title: "AI reply assistant", desc: "Drafts on-brand responses to every review for one-click approval." },
    ],
    faq: [
      { q: "Is this against Google's terms?", a: "No. We only ask happy customers — we never gate or filter reviews going to Google." },
      { q: "What if a customer leaves a 1-star?", a: "You're notified instantly and we draft a calm, professional public response." },
    ],
    stat: { k: "+40", v: "Reviews / month" },
    caseStudies: [
      { company: "Orlando AC & Cooling", metric: "61", unit: "New 5★ reviews", description: "Went from 14 to 75 Google reviews in a month using automated SMS triggers after job completion." },
    ]
  },
  {
    slug: "lead-follow-up",
    icon: Repeat,
    title: "Lead Follow-Up",
    short: "Personalized SMS + email nurtures so leads never go cold again.",
    price: "from $179/mo",
    hero: "80% of leads buy between contact #5 and #12. We make sure you're still in the conversation.",
    points: ["Personalized SMS + email", "Maintenance reminder loops", "Win-back for cold leads", "30–50% bookings lift"],
    features: [
      { title: "Multi-touch sequences", desc: "12-touch SMS + email cadences tuned per trade and lead source." },
      { title: "Maintenance reminders", desc: "Annual tune-up, filter change, gutter clean — auto-scheduled for repeat revenue." },
      { title: "Win-back campaigns", desc: "Reactivates leads that went quiet 30, 60, 90 days ago." },
      { title: "Hot-lead alerts", desc: "Owner gets pinged the moment a lead replies with intent." },
    ],
    faq: [
      { q: "Will customers feel spammed?", a: "Sequences pause the moment someone replies, books, or opts out. Industry-best deliverability." },
      { q: "Do you write the messages?", a: "Yes — we draft, you approve, we ship." },
    ],
    stat: { k: "30–50%", v: "More bookings" },
    caseStudies: [
      { company: "Delgado Plumbing", metric: "+58%", unit: "Repeat bookings", description: "Automated maintenance follow-ups reactivated dormant customers, increasing repeat bookings by 58%." },
    ]
  },
  {
    slug: "local-seo-social",
    icon: Mail,
    title: "Local SEO & Social",
    short: "Rank in the Google Map Pack and keep social fresh — done for you.",
    price: "from $249/mo",
    hero: "Show up first when a homeowner Googles \"AC repair near me.\"",
    points: ["Google Business optimization", "Weekly social content", "Map pack ranking strategy", "Citation cleanup"],
    features: [
      { title: "GBP optimization", desc: "Categories, services, photos, posts and Q&A managed weekly." },
      { title: "Citation cleanup", desc: "NAP consistency across 60+ directories, fixing what's silently hurting your rank." },
      { title: "Weekly social posts", desc: "Branded job photos, before/afters and tips on Facebook + Instagram." },
      { title: "Local link building", desc: "Partnerships with local blogs, chambers and supplier sites." },
    ],
    faq: [
      { q: "How fast will I rank?", a: "Map pack movement in 30–60 days; competitive cities take 3–6 months for sustained #1." },
    ],
    stat: { k: "Top 3", v: "Map pack target" },
    caseStudies: [
      { company: "Whitman Roofing", metric: "#1", unit: "Map Pack Ranking", description: "Dominated the local map pack in Phoenix within 4 months, driving an extra 85 inbound calls per month." },
    ]
  },
  {
    slug: "conversion-website",
    icon: Globe,
    title: "Conversion Website",
    short: "Trade-specific, mobile-first site live in 5–7 business days.",
    price: "free with any plan",
    hero: "A site built to book jobs — not just look pretty.",
    points: ["Trade-specific design", "Mobile-first, fast (>95 Lighthouse)", "Live in 5–7 business days", "Click-to-call everywhere"],
    features: [
      { title: "Trade templates", desc: "Designed for HVAC, roofing, plumbing — proven layouts that convert visitors to calls." },
      { title: "Speed score 95+", desc: "Engineered for Core Web Vitals so Google ranks you higher." },
      { title: "Click-to-call & schedule", desc: "Sticky call button on mobile, schedule widget on desktop, lead form on every section." },
      { title: "Hosting + SSL included", desc: "Zero hosting headaches. We maintain it." },
    ],
    faq: [
      { q: "What if I already have a site?", a: "We migrate your content and 301 your old URLs so you don't lose any SEO juice." },
    ],
    stat: { k: "5–7", v: "Days to launch" },
    caseStudies: [
      { company: "Barlow Heating", metric: "2.4x", unit: "Conversion rate", description: "Replacing their old site with our conversion-optimized template increased lead capture rate by 140%." },
    ]
  },
  {
    slug: "paid-ads",
    icon: Megaphone,
    title: "Paid Ads Management",
    short: "Google LSA, Search and Meta retargeting with avg 8–12× ROAS.",
    price: "from $499/mo",
    hero: "Buy customers, not impressions. Every dollar tracked to a booked job.",
    points: ["Google LSA + search", "Meta retargeting", "Geo & service-area targeting", "Avg 8–12× ROAS"],
    features: [
      { title: "Google LSA setup", desc: "Local Service Ads (the badged ones at the top) configured and managed end-to-end." },
      { title: "Search campaigns", desc: "Tightly themed ad groups by service and city for low CPC and high quality scores." },
      { title: "Meta retargeting", desc: "Win back website visitors who didn't book the first time." },
      { title: "Call tracking + ROI", desc: "Every booked job tied to its source so you know what's actually working." },
    ],
    faq: [
      { q: "How much should I spend?", a: "Start at $1.5k–$3k/month ad spend in most metros. We scale only when ROAS proves out." },
    ],
    stat: { k: "8–12×", v: "Avg ROAS" },
    caseStudies: [
      { company: "Brooks Solar", metric: "11x", unit: "ROAS", description: "Google Ads ROAS jumped from 3x to 11x in the second month by targeting high-intent service keywords." },
    ]
  },
  {
    slug: "service-area-domination",
    icon: MapPin,
    title: "Service-Area Domination",
    short: "Multi-city playbook — own the entire metro, not just your zip code.",
    price: "custom",
    hero: "When you're #1 in 12 cities at once, no one can compete with your phone volume.",
    points: ["Multi-location playbook", "Per-city landing pages", "Targeted outreach", "Reputation moat"],
    features: [
      { title: "Per-city landing pages", desc: "SEO-optimized pages for every service-area city you cover." },
      { title: "Localized GBP profiles", desc: "Where eligible, additional Google Business profiles managed in compliance." },
      { title: "Reputation moat", desc: "100+ reviews per city target so competitors can't catch up." },
      { title: "Outbound partnerships", desc: "Property managers, realtors, HOA networks for steady referral flow." },
    ],
    faq: [
      { q: "How long until I dominate?", a: "Realistic timeline: 6–12 months to own most service areas in a mid-size metro." },
    ],
    stat: { k: "12+", v: "Cities targeted" },
    caseStudies: [
      { company: "Pickens AC & Heat", metric: "14", unit: "Cities Dominated", description: "Deployed 14 localized city pages that organically rank in the top 3, capturing metro-wide search volume." },
    ]
  },
];

export const PACKAGES = [
  {
    slug: "starter",
    name: "Starter",
    tagline: "Stop missing calls. Start collecting reviews.",
    price: "$499",
    period: "/mo",
    summary: "The two highest-ROI modules for any contractor under $1M revenue. Plug the worst leaks first.",
    includes: ["AI Calling Agent (24/7)", "Review Engine (40+ reviews/mo)", "Conversion Website (free)", "Founder access via WhatsApp"],
    bestFor: "Small crews, owner-operators, businesses doing $250K–$1M/yr.",
  },
  {
    slug: "growth",
    name: "Growth",
    tagline: "Capture every lead. Follow up forever.",
    price: "$1,299",
    period: "/mo",
    summary: "Everything in Starter, plus chatbot, multi-touch follow-up and local SEO. The full lead engine for businesses ready to scale.",
    includes: [
      "Everything in Starter",
      "AI Chatbot (web + Meta)",
      "Lead Follow-Up sequences",
      "Local SEO & weekly social",
      "Monthly strategy call",
    ],
    bestFor: "Established contractors doing $1M–$5M/yr ready to compound growth.",
  },
  {
    slug: "done-for-you",
    name: "Done-For-You",
    tagline: "We run your entire growth engine. You run the trucks.",
    price: "$2,999",
    period: "/mo",
    summary: "The complete Arialflow operating system. Every channel, every funnel, every metric — managed by our team. You focus on delivery; we deliver the customers.",
    includes: [
      "Everything in Growth",
      "Paid Ads Management (Google LSA, Search, Meta)",
      "Service-Area Domination (per-city pages, multi-GBP)",
      "Dedicated account strategist",
      "Weekly performance reports",
      "Quarterly on-site or video planning session",
      "Priority WhatsApp & Slack support",
    ],
    bestFor: "Multi-truck operators and regional brands doing $3M+/yr who want a single accountable growth partner.",
  },
];

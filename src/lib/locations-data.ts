export type LocationData = {
  slug: string;
  city: string;
  state: string;
  hero: string;
  description: string;
  stats: {
    businessesHelped: string;
    avgRoas: string;
    reviewsGenerated: string;
  };
  services: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
};

export const LOCATIONS: LocationData[] = [
  {
    slug: "dallas-tx",
    city: "Dallas",
    state: "TX",
    hero: "Dallas' Premier AI Growth Partner for Businesses",
    description: "We help HVAC, roofing, and plumbing businesses in the DFW metroplex stop missing calls and start booking more jobs on autopilot.",
    stats: {
      businessesHelped: "45+",
      avgRoas: "9x",
      reviewsGenerated: "1,200+",
    },
    services: [
      { title: "Local SEO & Map Pack", desc: "Dominate the Dallas market when homeowners search for emergency repairs." },
      { title: "AI Calling & Chatbots", desc: "Never miss a lead in DFW, even during peak summer or winter storms." },
      { title: "Automated Review Generation", desc: "Turn every happy Dallas customer into a 5-star Google review." },
    ],
    faq: [
      { q: "Do you only work with Dallas businesses?", a: "No, we work nationwide, but Dallas is one of our primary markets with proven results for local trades." },
      { q: "How long until I rank in Dallas?", a: "The DFW market is highly competitive. Map pack movement usually starts in 30-60 days, with solid positioning in 3-6 months." },
    ]
  },
  {
    slug: "tampa-fl",
    city: "Tampa",
    state: "FL",
    hero: "Tampa's Trusted AI Growth System for the Trades",
    description: "Helping Tampa Bay area businesses capture every lead, respond in seconds, and dominate local search rankings.",
    stats: {
      businessesHelped: "30+",
      avgRoas: "11x",
      reviewsGenerated: "850+",
    },
    services: [
      { title: "Hurricane Season Ready", desc: "Automate your lead capture so you can handle the surge in demand during storm season." },
      { title: "Tampa Local SEO", desc: "Rank higher across Hillsborough and Pinellas counties." },
      { title: "Missed Call Text Back", desc: "Instantly engage homeowners if you can't pick up." },
    ],
    faq: [
      { q: "Can you handle high volume during storms?", a: "Yes, our AI handles unlimited simultaneous conversations so you capture every lead when demand spikes." },
      { q: "Do you cover the entire Tampa Bay area?", a: "Yes, including St. Pete, Clearwater, and surrounding suburbs." },
    ]
  },
  {
    slug: "houston-tx",
    city: "Houston",
    state: "TX",
    hero: "Scale Your Houston Contracting Business with AI",
    description: "From Katy to Sugar Land, we build the systems that help Houston trades businesses book more jobs and get more 5-star reviews.",
    stats: {
      businessesHelped: "50+",
      avgRoas: "10x",
      reviewsGenerated: "1,500+",
    },
    services: [
      { title: "Houston Area SEO", desc: "Be the first business they see in the massive Houston market." },
      { title: "Bilingual AI Agents", desc: "Capture both English and Spanish speaking leads effectively." },
      { title: "Lead Nurturing", desc: "Keep your pipeline full year-round with automated follow-ups." },
    ],
    faq: [
      { q: "Is the AI available in Spanish?", a: "Yes, our AI agents are fully bilingual and can seamlessly handle Spanish-speaking callers in the Houston market." },
    ]
  }
];

import { PhoneCall, MessageSquare, Star, Repeat, Globe, Megaphone, MapPin, Mail, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  hero: string;
  /** A longer, plain-language explanation of *why* this matters to a local business owner. */
  longDescription: string;
  /** Simple benefits a business owner can relate to. */
  benefits: string[];
  /** How we actually do it – kept simple. */
  howItWorks: { step: string; detail: string }[];
  features: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  stat: { k: string; v: string };
  caseStudy: { company: string; trade: string; metric: string; unit: string; story: string };
};

export const SERVICES: Service[] = [
  {
    slug: "ai-calling-agent",
    icon: PhoneCall,
    title: "AI Calling Agent",
    short: "Never miss a call again — even at 2 am.",
    hero: "Your phone rings. Nobody's at the desk. Our AI picks up, qualifies the caller, and books the job into your calendar. Every single time.",
    longDescription: "Most businesses miss 3–4 calls a day when the crew is on a job site. Every missed call is a customer who will call your competitor instead. Our AI Calling Agent answers every single call within 1 ring, 24 hours a day, 7 days a week — holidays included. It sounds like a real person, knows your services, your service area, and your availability. It books qualified appointments directly into your calendar so you wake up to a full schedule.",
    benefits: [
      "Every call answered in 1 ring, day or night",
      "Jobs booked straight into your calendar",
      "Tire-kickers filtered out automatically",
      "Emergency calls routed to your on-call tech",
      "Bilingual support (English + Spanish)",
      "Call recordings sent to your phone",
    ],
    howItWorks: [
      { step: "We learn your business", detail: "We train the AI on your services, service area, prices, and the way you talk to customers." },
      { step: "Calls get answered", detail: "Every inbound call is picked up by your AI agent. It asks the right questions and books qualified jobs." },
      { step: "You get notified", detail: "You receive a text and email summary after every call with full details and a recording." },
    ],
    features: [
      { title: "Trained on your business", desc: "Your service area, pricing tiers, brand voice and FAQ are all built into the agent." },
      { title: "Calendar integration", desc: "Works with ServiceTitan, Housecall Pro, Jobber, or Google Calendar." },
      { title: "Live human handoff", desc: "VIP customers or hot leads get transferred to your office instantly." },
      { title: "Call recordings & summaries", desc: "Every call is transcribed, summarized, and emailed to you." },
    ],
    faq: [
      { q: "Will it sound like a robot?", a: "No. Most callers never realize they're talking to AI. It uses natural, conversational voices." },
      { q: "What about emergency calls?", a: "Emergencies are flagged and routed to your on-call tech immediately, day or night." },
      { q: "Does it work with my existing phone number?", a: "Yes. We forward your calls — no need to change your number." },
    ],
    stat: { k: "100%", v: "Pickup rate" },
    caseStudy: {
      company: "Dallas HVAC Pro",
      trade: "HVAC",
      metric: "41",
      unit: "jobs booked in one month",
      story: "They were missing after-hours emergency calls. Our AI captured those calls and booked 41 appointments that would have gone to voicemail — and to their competitors.",
    },
  },
  {
    slug: "ai-chatbot",
    icon: MessageSquare,
    title: "AI Chatbot",
    short: "Replies to website visitors in under 5 seconds.",
    hero: "A homeowner lands on your site at 10 pm. Our chatbot greets them, answers their questions, and captures their info — before they bounce to a competitor.",
    longDescription: "When someone visits your website, you have about 8 seconds before they leave. If there's nobody to answer their question, they're gone. Our AI Chatbot lives on your website, Facebook page, and Instagram. It replies in under 5 seconds, asks the right questions to qualify the lead, and sends you their phone number and job details so you can follow up with a warm lead — not a cold one.",
    benefits: [
      "Replies in under 5 seconds, 24/7",
      "Works on your website, Facebook & Instagram",
      "Captures name, phone, address and job scope",
      "Your team can take over any conversation",
      "Answers common questions so you don't have to",
      "Sends you lead details instantly",
    ],
    howItWorks: [
      { step: "We install it for you", detail: "A small chat widget is added to your website, and we connect your Facebook and Instagram pages." },
      { step: "Visitors get instant answers", detail: "The bot responds to questions about your services, availability, and coverage areas." },
      { step: "You get warm leads", detail: "Qualified leads are sent to you via text or email with full conversation history." },
    ],
    features: [
      { title: "Omnichannel inbox", desc: "Web, Facebook Messenger, Instagram DMs and Google Business Chat — all in one feed." },
      { title: "Lead qualification", desc: "Asks the right diagnostic questions for your trade and tags lead quality automatically." },
      { title: "Quote estimates", desc: "Gives ballpark pricing for common jobs so leads don't ghost waiting for a callback." },
      { title: "CRM sync", desc: "New chats become contacts in your CRM automatically with the full transcript attached." },
    ],
    faq: [
      { q: "Does it know my pricing?", a: "Yes — we train it on your service catalog with price ranges, so you stay in control of final quotes." },
      { q: "Can my office team jump in?", a: "Absolutely. One click in the inbox and your team takes over mid-conversation." },
      { q: "Will it work on my existing website?", a: "Yes. We add a small code snippet — no redesign needed." },
    ],
    stat: { k: "<5s", v: "First response" },
    caseStudy: {
      company: "Houston Roofing Experts",
      trade: "Roofing",
      metric: "134",
      unit: "qualified leads in 30 days",
      story: "The chatbot qualified incoming traffic from their Facebook ads instantly. In the first month, 134 leads were captured — most of them after business hours.",
    },
  },
  {
    slug: "review-engine",
    icon: Star,
    title: "Review Engine",
    short: "Get 40+ new Google reviews every month on autopilot.",
    hero: "After every job, our system sends your customer a friendly text asking for a review. No awkward conversations. No forgetting. Just 5-star reviews rolling in.",
    longDescription: "Google reviews are the #1 factor in whether a homeowner calls you or your competitor. But asking for reviews is awkward and easy to forget. Our Review Engine sends a friendly SMS 2 hours after every completed job — when the customer is happiest. If they're unhappy, the feedback comes to you privately first, so you can fix the issue before it hits Google. Most of our businesses go from a handful of reviews to 40+ new ones per month.",
    benefits: [
      "Automatic SMS after every completed job",
      "Unhappy customers routed to you privately first",
      "Reactivates past customers for reviews",
      "AI drafts responses to every review for you",
      "40+ new reviews per month on average",
      "Works with Google, Yelp, and Facebook",
    ],
    howItWorks: [
      { step: "Job gets completed", detail: "When you mark a job as done, the system waits 2 hours then sends a friendly text to your customer." },
      { step: "Customer leaves a review", detail: "One tap takes them to your Google page. Happy customers leave a review. Unhappy ones message you privately." },
      { step: "You stay on top", detail: "AI drafts responses to every review for your one-click approval. Your reputation grows on autopilot." },
    ],
    features: [
      { title: "Smart timing", desc: "Sends 2 hours after job completion when customer satisfaction is highest." },
      { title: "Negative review shield", desc: "Routes 1–3 star feedback privately to you before it ever hits Google." },
      { title: "Reactivation campaigns", desc: "Wakes up past customers from your CRM and asks for the review you never got." },
      { title: "AI reply assistant", desc: "Drafts on-brand responses to every review for one-click approval." },
    ],
    faq: [
      { q: "Is this against Google's terms?", a: "No. We simply ask happy customers. We never gate or filter reviews." },
      { q: "What if someone leaves a 1-star?", a: "You're notified instantly. We draft a calm, professional public response for you." },
      { q: "Do I need special software?", a: "No. It works with your existing CRM or we can set it up standalone." },
    ],
    stat: { k: "+40", v: "Reviews / month" },
    caseStudy: {
      company: "Orlando AC & Cooling",
      trade: "HVAC",
      metric: "61",
      unit: "new 5-star reviews in 30 days",
      story: "They went from 14 Google reviews to 75 in a single month. Their phone started ringing more because homeowners saw the 5-star rating and chose them over competitors.",
    },
  },
  {
    slug: "lead-follow-up",
    icon: Repeat,
    title: "Lead Follow-Up",
    short: "Automated texts and emails so no lead goes cold.",
    hero: "80% of leads buy between the 5th and 12th contact. We make sure you're still in the conversation long after most businesses have given up.",
    longDescription: "You get a lead from your website or a referral. You call once, maybe twice. They don't pick up. You move on. But that lead isn't gone — they're just busy. Our automated follow-up system sends personalized texts and emails over days and weeks so you stay top-of-mind. When that homeowner is finally ready, you're the one they call — not the competitor who never followed up.",
    benefits: [
      "Personalized SMS + email sequences",
      "Maintenance reminders for repeat business",
      "Win-back campaigns for cold leads",
      "You get alerted when a lead replies",
      "30–50% more booked jobs on average",
      "We write all the messages for you",
    ],
    howItWorks: [
      { step: "A lead comes in", detail: "From your website, an ad, a referral — doesn't matter. They enter the follow-up sequence automatically." },
      { step: "We follow up for you", detail: "Over the next days and weeks, personalized texts and emails keep you top-of-mind." },
      { step: "They book when ready", detail: "When the homeowner replies or clicks, you get an instant alert so you can close the deal." },
    ],
    features: [
      { title: "Multi-touch sequences", desc: "12-touch SMS and email cadences tuned for your trade and lead source." },
      { title: "Maintenance reminders", desc: "Annual tune-up, filter change, gutter clean — auto-scheduled for repeat revenue." },
      { title: "Win-back campaigns", desc: "Reactivates leads that went quiet 30, 60, or 90 days ago." },
      { title: "Hot-lead alerts", desc: "You get pinged the moment a lead replies with buying intent." },
    ],
    faq: [
      { q: "Will customers feel spammed?", a: "No. Sequences pause the moment someone replies, books, or opts out." },
      { q: "Do you write the messages?", a: "Yes — we draft everything, you approve, we send." },
      { q: "How many more jobs will this get me?", a: "On average, businesses see a 30–50% lift in bookings from follow-up alone." },
    ],
    stat: { k: "30–50%", v: "More bookings" },
    caseStudy: {
      company: "Delgado Plumbing",
      trade: "Plumbing",
      metric: "+58%",
      unit: "repeat bookings",
      story: "Automated maintenance follow-ups reactivated customers they thought were gone. Repeat bookings jumped 58% — and those customers told their neighbors.",
    },
  },
  {
    slug: "local-seo-social",
    icon: Mail,
    title: "Local SEO & Social",
    short: "Show up first when homeowners Google your trade.",
    hero: "When someone searches \"AC repair near me\" or \"roofer in Dallas\", you want to be in the top 3 on Google Maps. We make that happen.",
    longDescription: "Most homeowners pick a business from the Google Map Pack — those 3 businesses that show up at the top of a local search. If you're not in that top 3, you're invisible. Our team optimizes your Google Business Profile every week, cleans up your online listings, posts content on your social media, and builds local links — all done for you. No technical knowledge required on your end.",
    benefits: [
      "Google Business Profile optimized weekly",
      "Show up in the Map Pack for your services",
      "Weekly posts on Facebook & Instagram",
      "Online listing cleanup across 60+ directories",
      "Local link building for better rankings",
      "Monthly ranking reports you can actually understand",
    ],
    howItWorks: [
      { step: "We audit your online presence", detail: "We find every listing, directory, and profile that mentions your business and fix what's wrong." },
      { step: "We optimize weekly", detail: "Your Google profile gets updated, your social pages get fresh content, and your rankings climb." },
      { step: "You see the results", detail: "Monthly reports show exactly where you rank, how many people found you, and what we did." },
    ],
    features: [
      { title: "GBP optimization", desc: "Categories, services, photos, posts and Q&A managed every single week." },
      { title: "Citation cleanup", desc: "NAP consistency across 60+ directories — fixing what's silently hurting your rank." },
      { title: "Weekly social posts", desc: "Branded job photos, before/afters and tips posted on Facebook + Instagram." },
      { title: "Local link building", desc: "Partnerships with local blogs, chambers of commerce and supplier sites." },
    ],
    faq: [
      { q: "How fast will I rank?", a: "You'll typically see Map Pack movement in 30–60 days. Competitive cities take 3–6 months." },
      { q: "Do I need to do anything?", a: "Just send us job photos occasionally. We handle everything else." },
      { q: "Will you post on my social media?", a: "Yes — we create and post content on your Facebook and Instagram pages weekly." },
    ],
    stat: { k: "Top 3", v: "Map pack target" },
    caseStudy: {
      company: "Whitman Roofing",
      trade: "Roofing",
      metric: "#1",
      unit: "Google Map Pack in Phoenix",
      story: "Within 4 months, they went from page 2 to the #1 spot in the Map Pack. That single change drove an extra 85 inbound calls per month.",
    },
  },
  {
    slug: "conversion-website",
    icon: Globe,
    title: "Conversion Website",
    short: "A fast, mobile-first website built to get you calls.",
    hero: "Not just a pretty website — a website engineered to turn visitors into booked jobs. Live in 5–7 business days.",
    longDescription: "Most business websites are slow, outdated, and don't convert visitors into calls. We build you a fast, mobile-first website designed specifically for your trade. Click-to-call buttons are everywhere. Your services, service area, and reviews are front and center. And because it scores 95+ on Google's speed test, you'll rank higher in search results. It's included free with any of our plans.",
    benefits: [
      "Designed specifically for your trade",
      "Mobile-first — looks great on any phone",
      "Click-to-call on every page",
      "Lightning fast (95+ speed score)",
      "Live in 5–7 business days",
      "We handle hosting and updates",
    ],
    howItWorks: [
      { step: "We gather your info", detail: "Your services, photos, reviews, and service area — we build the site around your business." },
      { step: "We build it in days", detail: "Your site goes live in 5–7 business days. You review it before launch." },
      { step: "We maintain it", detail: "Hosting, SSL, updates and tweaks — all included. No tech headaches for you." },
    ],
    features: [
      { title: "Trade templates", desc: "Proven layouts for HVAC, roofing, and plumbing that convert visitors into phone calls." },
      { title: "Speed score 95+", desc: "Engineered for Google's Core Web Vitals so you rank higher in search." },
      { title: "Click-to-call & schedule", desc: "Sticky call button on mobile, schedule widget on desktop, lead form on every section." },
      { title: "Hosting + SSL included", desc: "Zero hosting headaches. We maintain everything for you." },
    ],
    faq: [
      { q: "What if I already have a website?", a: "We migrate your content and redirect your old URLs so you don't lose any Google ranking." },
      { q: "Can I make changes later?", a: "Yes. Just message us on WhatsApp and we'll update it the same day." },
      { q: "Is hosting included?", a: "Yes — hosting, SSL certificate, and ongoing maintenance are all included." },
    ],
    stat: { k: "5–7", v: "Days to launch" },
    caseStudy: {
      company: "Barlow Heating",
      trade: "Heating",
      metric: "2.4x",
      unit: "more leads from their website",
      story: "Their old website looked fine but wasn't getting calls. After we replaced it with a conversion-optimized site, their lead capture rate jumped 140%.",
    },
  },
  {
    slug: "paid-ads",
    icon: Megaphone,
    title: "Paid Ads",
    short: "Google & Meta ads that bring in real, booked jobs.",
    hero: "Every ad dollar tracked to a booked job. We run Google and Meta ads targeting homeowners who are ready to buy — right now, in your service area.",
    longDescription: "Running ads without a system is like pouring water into a bucket with holes. We set up and manage your Google Local Service Ads, Google Search campaigns, and Meta retargeting — all targeting homeowners in your exact service area who need your services right now. Every dollar is tracked to a booked job so you know exactly what's working. On average, our businesses see 8–12× return on ad spend.",
    benefits: [
      "Google Local Service Ads (the badged ones)",
      "Google Search ads by service and city",
      "Meta retargeting for website visitors",
      "Every dollar tracked to a booked job",
      "Average 8–12× return on ad spend",
      "We manage everything end-to-end",
    ],
    howItWorks: [
      { step: "We set up your campaigns", detail: "We build ad campaigns targeting homeowners who need your services in your service area." },
      { step: "Leads start coming in", detail: "Calls, form fills, and messages from people who are ready to book — not tire-kickers." },
      { step: "We optimize weekly", detail: "We cut what's not working, double down on what is, and report results in plain English." },
    ],
    features: [
      { title: "Google LSA setup", desc: "Local Service Ads — the Google Guaranteed badge at the very top of search results." },
      { title: "Search campaigns", desc: "Tightly themed ad groups by service and city for low cost-per-click." },
      { title: "Meta retargeting", desc: "Win back website visitors who didn't book the first time." },
      { title: "Call tracking + ROI", desc: "Every booked job tied to its ad source so you know what's working." },
    ],
    faq: [
      { q: "How much should I spend on ads?", a: "Most businesses start with $1,500–$3,000/month. We scale only when results prove out." },
      { q: "How fast will I see results?", a: "Most businesses see qualified leads within the first week of launching campaigns." },
      { q: "Do you handle everything?", a: "Yes — setup, copywriting, targeting, optimization, and reporting. All you do is answer the phone." },
    ],
    stat: { k: "8–12×", v: "Return on ad spend" },
    caseStudy: {
      company: "Brooks Solar",
      trade: "Solar",
      metric: "11x",
      unit: "return on ad spend",
      story: "Their ROAS jumped from 3× to 11× in the second month. We targeted high-intent keywords like 'solar panel installation near me' and cut the wasted spend on broad terms.",
    },
  },
  {
    slug: "service-area-domination",
    icon: MapPin,
    title: "Service-Area Domination",
    short: "Own your entire metro — not just your zip code.",
    hero: "When you're #1 in 12 cities at once, no one can compete with your phone volume. We build the playbook to make that happen.",
    longDescription: "Most businesses only show up in Google for their home city. But your service area covers 10, 15, maybe 20 cities. Our Service-Area Domination program builds SEO-optimized pages for every city you serve, manages additional Google Business profiles where eligible, and builds a review moat so competitors can't catch up. The result? Your phone rings from every corner of your metro.",
    benefits: [
      "SEO pages for every city you serve",
      "Show up on Google Maps across the metro",
      "100+ reviews per city as a target",
      "Partnerships with local referral sources",
      "Competitors can't catch up to your lead",
      "Full metro coverage, not just one zip code",
    ],
    howItWorks: [
      { step: "We map your service area", detail: "We identify every city, suburb, and neighborhood you cover and build a domination plan." },
      { step: "We build the pages", detail: "SEO-optimized landing pages for each city go live, targeting the exact searches homeowners make." },
      { step: "Your phone rings everywhere", detail: "As pages rank and reviews build, you start getting calls from across your entire service area." },
    ],
    features: [
      { title: "Per-city landing pages", desc: "SEO-optimized pages for every service-area city you cover." },
      { title: "Localized Google profiles", desc: "Where eligible, additional Google Business profiles managed in full compliance." },
      { title: "Reputation moat", desc: "100+ reviews per city target so competitors can't catch up." },
      { title: "Referral partnerships", desc: "Property managers, realtors, HOA networks for steady referral flow." },
    ],
    faq: [
      { q: "How long until I see results?", a: "Realistic timeline: 6–12 months to dominate most service areas in a mid-size metro." },
      { q: "Is this different from regular SEO?", a: "Yes — this is a comprehensive, multi-city strategy designed to own an entire region, not just one keyword." },
      { q: "Do I need to be established already?", a: "It works best for businesses with some reviews and a track record, but we can start building from any level." },
    ],
    stat: { k: "12+", v: "Cities targeted" },
    caseStudy: {
      company: "Pickens AC & Heat",
      trade: "HVAC",
      metric: "14",
      unit: "cities ranking in top 3",
      story: "We deployed 14 localized city pages that now organically rank in the top 3. Their phone volume doubled because they went from 1 city to 14 on Google.",
    },
  },
];

export const PACKAGES = [
  {
    slug: "starter",
    name: "Starter",
    tagline: "Stop missing calls. Start collecting reviews.",
    summary: "The two highest-ROI tools for any business. Plug the worst leaks first.",
    includes: ["AI Calling Agent (24/7)", "Review Engine (40+ reviews/mo)", "Conversion Website", "Founder access via WhatsApp"],
    bestFor: "Small crews and owner-operators.",
  },
  {
    slug: "growth",
    name: "Growth",
    tagline: "Capture every lead. Follow up forever.",
    summary: "Everything in Starter, plus chatbot, multi-touch follow-up and local SEO. The full lead engine.",
    includes: [
      "Everything in Starter",
      "AI Chatbot (web + social)",
      "Lead Follow-Up sequences",
      "Local SEO & weekly social",
      "Monthly strategy call",
    ],
    bestFor: "Established businesses ready to scale.",
  },
  {
    slug: "done-for-you",
    name: "Done-For-You",
    tagline: "We run your entire growth engine. You run the trucks.",
    summary: "The complete Arialflow system. Every channel, every funnel, every metric — managed by our team.",
    includes: [
      "Everything in Growth",
      "Paid Ads (Google LSA, Search, Meta)",
      "Service-Area Domination",
      "Dedicated account strategist",
      "Weekly performance reports",
      "Priority WhatsApp support",
    ],
    bestFor: "Multi-truck operators and regional brands.",
  },
];

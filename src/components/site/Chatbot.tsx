import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Calendar, ArrowRight } from "lucide-react";

type Message = { role: "bot" | "user"; text: string; options?: string[] };

const CALENDLY = "https://calendly.com/arwebcrafts/30-mint";
const WHATSAPP = "https://wa.me/+13072784862";

const quickReplies = [
  "What services do you offer?",
  "How does the AI calling agent work?",
  "How much does it cost?",
  "I want to book a free call",
];

function getResponse(input: string): Message {
  const q = input.toLowerCase();

  if (q.includes("service") || q.includes("offer") || q.includes("what do you do")) {
    return {
      role: "bot",
      text: "We help HVAC, roofing, and plumbing contractors grow with AI-powered tools:\n\n• AI Calling Agent — answers every call 24/7\n• AI Chatbot — replies on your website & social\n• Review Engine — 40+ Google reviews per month\n• Lead Follow-Up — automated SMS & email\n• Local SEO & Social — rank in the Map Pack\n• Conversion Website — built for your trade\n• Paid Ads — Google & Meta, fully managed\n\nWant to learn more about any of these?",
      options: ["Tell me about AI Calling", "How much does it cost?", "Book a free call"],
    };
  }

  if (q.includes("calling") || q.includes("phone") || q.includes("answer")) {
    return {
      role: "bot",
      text: "Our AI Calling Agent answers every inbound call within 1 ring, 24/7 — even at 2am. It sounds like a real person, knows your services and service area, qualifies the caller, and books the job directly into your calendar.\n\nYou get a text and email summary after every call with a full recording. Emergency calls get routed straight to your on-call tech.\n\nWant to see it in action? Book a quick 30-minute call with our team!",
      options: ["Book a free call", "How much does it cost?", "Tell me about reviews"],
    };
  }

  if (q.includes("review") || q.includes("google review") || q.includes("star")) {
    return {
      role: "bot",
      text: "Our Review Engine sends a friendly SMS to your customers 2 hours after every completed job — when satisfaction is highest.\n\nHappy customers get a direct link to your Google page. Unhappy ones are routed to you privately first, so you can fix the issue before it hits Google.\n\nMost of our contractors go from a handful of reviews to 40+ new 5-star reviews per month!",
      options: ["Book a free call", "What other services do you offer?"],
    };
  }

  if (q.includes("cost") || q.includes("price") || q.includes("pricing") || q.includes("how much")) {
    return {
      role: "bot",
      text: "Great question! Our plans start at $997/month and go up depending on how many services you need. The best way to find the right fit is a quick 30-minute call — we'll look at your business and recommend exactly what you need.\n\nNo pressure, no hard sell. Just an honest conversation about your growth.",
      options: ["Book a free call", "Message on WhatsApp"],
    };
  }

  if (q.includes("book") || q.includes("call") || q.includes("consultation") || q.includes("meeting") || q.includes("schedule") || q.includes("demo")) {
    return {
      role: "bot",
      text: "Awesome! You can book a free 30-minute strategy call right now. We'll look at your business, find where you're losing jobs, and give you an honest plan.\n\nClick below to pick a time that works for you! 👇",
      options: ["📅 Book on Calendly", "💬 Message on WhatsApp"],
    };
  }

  if (q.includes("chatbot") || q.includes("website chat") || q.includes("facebook") || q.includes("instagram")) {
    return {
      role: "bot",
      text: "Our AI Chatbot lives on your website, Facebook page, and Instagram. It replies to visitors in under 5 seconds, 24/7.\n\nIt asks the right questions to qualify leads, captures their phone number and job details, and sends you everything instantly. Your team can take over any conversation with one click.\n\nWant to see how it would work for your business?",
      options: ["Book a free call", "How much does it cost?"],
    };
  }

  if (q.includes("follow") || q.includes("lead") || q.includes("sms") || q.includes("email") || q.includes("nurture")) {
    return {
      role: "bot",
      text: "80% of leads buy between the 5th and 12th contact. Our Lead Follow-Up system sends personalized texts and emails over days and weeks so you stay top-of-mind.\n\nWhen a lead is ready, they book — and you get an instant alert. Most contractors see a 30-50% lift in bookings from follow-up alone!",
      options: ["Book a free call", "What other services do you offer?"],
    };
  }

  if (q.includes("seo") || q.includes("google") || q.includes("map") || q.includes("rank")) {
    return {
      role: "bot",
      text: "We manage your Google Business Profile weekly, clean up your online listings across 60+ directories, post branded content on your social media, and build local links.\n\nThe goal? Get you into the top 3 on Google Maps for your services in your area. Most contractors see movement in 30-60 days.",
      options: ["Book a free call", "Tell me about paid ads"],
    };
  }

  if (q.includes("ad") || q.includes("paid") || q.includes("google ad") || q.includes("meta") || q.includes("facebook ad")) {
    return {
      role: "bot",
      text: "We run Google Local Service Ads, Google Search campaigns, and Meta retargeting — all targeting homeowners in your service area who need your services right now.\n\nEvery dollar is tracked to a booked job. Our contractors average 8-12× return on ad spend!",
      options: ["Book a free call", "How much does it cost?"],
    };
  }

  if (q.includes("website") || q.includes("site") || q.includes("web")) {
    return {
      role: "bot",
      text: "We build fast, mobile-first websites specifically designed for your trade. Click-to-call buttons everywhere, 95+ speed score, and live in 5-7 business days.\n\nIt's included with your plan — no extra cost for the website, hosting, or SSL!",
      options: ["Book a free call", "What other services do you offer?"],
    };
  }

  if (q.includes("whatsapp") || q.includes("message")) {
    return {
      role: "bot",
      text: "You can reach us anytime on WhatsApp! Our team typically responds within minutes during business hours.\n\nClick below to start a conversation 👇",
      options: ["💬 Message on WhatsApp", "📅 Book on Calendly"],
    };
  }

  if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("yo")) {
    return {
      role: "bot",
      text: "Hey there! 👋 Welcome to Arialflow. We help contractors like you capture more calls, get more reviews, and book more jobs — all on autopilot.\n\nWhat can I help you with today?",
      options: ["What services do you offer?", "How much does it cost?", "Book a free call"],
    };
  }

  // Default fallback
  return {
    role: "bot",
    text: "Great question! That's something our team can help you with in detail. The best way to get a personalized answer is to hop on a quick 30-minute call or message us on WhatsApp.\n\nWe'll give you an honest recommendation based on your business!",
    options: ["📅 Book a free call", "💬 Message on WhatsApp"],
  };
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hey! 👋 I'm the Arialflow assistant. I can answer questions about our services, pricing, and how we help contractors grow.\n\nWhat can I help you with?",
      options: quickReplies,
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend(text: string) {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text: text.trim() };

    // Handle special CTA clicks
    if (text.includes("Calendly")) {
      window.open(CALENDLY, "_blank");
      setMessages((prev) => [...prev, userMsg, { role: "bot", text: "Opening Calendly for you! 🎉 Pick a time that works best. Talk soon!" }]);
      setInput("");
      return;
    }
    if (text.includes("WhatsApp")) {
      window.open(WHATSAPP, "_blank");
      setMessages((prev) => [...prev, userMsg, { role: "bot", text: "Opening WhatsApp for you! 💬 Our team usually responds within minutes." }]);
      setInput("");
      return;
    }

    const botReply = getResponse(text);
    setMessages((prev) => [...prev, userMsg, botReply]);
    setInput("");
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 active:scale-95"
        aria-label="Chat with us"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl shadow-primary/10">
          {/* Header */}
          <div className="border-b border-border bg-gradient-to-r from-primary/10 to-surface px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">Arialflow</p>
                <p className="text-xs text-muted-foreground">Typically replies instantly</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4" style={{ maxHeight: "380px" }}>
            {messages.map((m, i) => (
              <div key={i}>
                <div className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "rounded-br-md bg-primary text-primary-foreground"
                        : "rounded-bl-md border border-border/60 bg-surface text-foreground"
                    }`}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {m.text}
                  </div>
                </div>
                {m.options && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {m.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSend(opt)}
                        className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/15"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick action bar */}
          <div className="border-t border-border/60 bg-surface/50 px-4 py-2">
            <div className="flex gap-2">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary/10 px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
              >
                <Calendar className="h-3.5 w-3.5" /> Book a call
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border/60 px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-surface"
              >
                WhatsApp us
              </a>
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-border px-4 py-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="h-10 flex-1 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

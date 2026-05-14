import { useState } from "react";
import { PhoneCall, Bot, User, Clock, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

type CallLine = { speaker: "ai" | "caller"; text: string };

const demos = [
  {
    id: "hvac-emergency",
    title: "After-hours emergency — AC unit failure",
    trade: "HVAC",
    location: "Dallas, TX",
    time: "11:47 PM",
    duration: "2 min 14 sec",
    result: "Emergency appointment booked for 7:00 AM",
    lines: [
      { speaker: "ai" as const, text: "Thank you for calling Dallas HVAC Pro. This is Sarah, how can I help you tonight?" },
      { speaker: "caller" as const, text: "Hey, my AC just stopped working and it's 95 degrees in here. I've got two kids sleeping. I need someone out here." },
      { speaker: "ai" as const, text: "I'm so sorry to hear that. I completely understand the urgency, especially with your kids. Let me get you taken care of right away. Can I get your name?" },
      { speaker: "caller" as const, text: "It's Mark Thompson." },
      { speaker: "ai" as const, text: "Thank you, Mark. And what's the best address for the service call?" },
      { speaker: "caller" as const, text: "4821 Oak Lawn Avenue, Dallas." },
      { speaker: "ai" as const, text: "Got it. And just to confirm — your AC unit stopped completely, no air flow at all?" },
      { speaker: "caller" as const, text: "Yeah, nothing. It was making a weird clicking noise and then just died." },
      { speaker: "ai" as const, text: "That sounds like it could be a capacitor or compressor issue. Our earliest available tech is tomorrow morning at 7 AM. Would that work for you, Mark?" },
      { speaker: "caller" as const, text: "Yes, 7 AM works. Please." },
      { speaker: "ai" as const, text: "Perfect. I've booked you for 7 AM with our senior technician, Mike. You'll get a confirmation text shortly. In the meantime, I'd suggest opening some windows if you can. Is there anything else I can help with?" },
      { speaker: "caller" as const, text: "No, that's great. Thank you so much." },
      { speaker: "ai" as const, text: "You're welcome, Mark. Stay cool tonight, and Mike will be there first thing. Have a good night!" },
    ],
  },
  {
    id: "roofing-estimate",
    title: "Storm damage — free inspection request",
    trade: "Roofing",
    location: "Tampa, FL",
    time: "2:15 PM",
    duration: "1 min 52 sec",
    result: "Free inspection booked for next day",
    lines: [
      { speaker: "ai" as const, text: "Good afternoon, Tampa Bay Roofing. This is Alex, how can I help you today?" },
      { speaker: "caller" as const, text: "Hi, we had that big storm last night and I think I've got some damage on my roof. There's a leak in my bedroom ceiling." },
      { speaker: "ai" as const, text: "I'm sorry to hear about the damage. That storm was pretty rough. Let's get someone out there to take a look. Do you know what type of roof you have — shingle, tile, or metal?" },
      { speaker: "caller" as const, text: "It's shingle. The house is about 15 years old." },
      { speaker: "ai" as const, text: "Got it. At 15 years, those shingles may have been vulnerable to the wind. We offer a free storm damage inspection — one of our guys will come out, document everything, and if there's damage, we'll help you file the insurance claim. Can I get your name?" },
      { speaker: "caller" as const, text: "Sure, it's Jennifer Walsh." },
      { speaker: "ai" as const, text: "Thank you, Jennifer. We have an opening tomorrow morning between 9 and 11. Would that window work for you?" },
      { speaker: "caller" as const, text: "That works perfectly." },
      { speaker: "ai" as const, text: "Great. I've got you down for tomorrow between 9 and 11 AM. Our estimator Dave will be there. He'll take photos of everything for the insurance documentation. You'll get a confirmation text in just a moment." },
    ],
  },
  {
    id: "plumbing-leak",
    title: "Kitchen pipe burst — emergency dispatch",
    trade: "Plumbing",
    location: "San Antonio, TX",
    time: "6:30 AM",
    duration: "1 min 38 sec",
    result: "Emergency dispatch within 45 minutes",
    lines: [
      { speaker: "ai" as const, text: "Thank you for calling Delgado Plumbing. This is Maria. How can I help you?" },
      { speaker: "caller" as const, text: "Hi, I have water everywhere in my kitchen. A pipe burst under the sink." },
      { speaker: "ai" as const, text: "Oh no, I understand how stressful that is. First thing — do you know where your main water shut-off valve is? It's usually near the water meter or in the garage." },
      { speaker: "caller" as const, text: "I don't know where it is." },
      { speaker: "ai" as const, text: "That's okay. Look under the kitchen sink — there should be two small valves. Turn them both clockwise to shut off the water to that area. That'll stop the flooding while we get someone to you." },
      { speaker: "caller" as const, text: "Okay, I found them. I'm turning them now. Okay, the water stopped." },
      { speaker: "ai" as const, text: "Perfect, great job. Now let me get a plumber out to you right away. Can I get your name and address?" },
      { speaker: "caller" as const, text: "It's Roberto Gutierrez, 2847 Commerce Street." },
      { speaker: "ai" as const, text: "Thank you, Roberto. I'm dispatching our emergency tech Carlos to you right now. He should be there within 45 minutes. He'll fix the pipe and make sure there's no water damage to your cabinets. You'll get a text with his ETA." },
    ],
  },
];

export function AIVoiceDemo() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-widest text-primary">AI call transcripts</p>
          <h2 className="mt-3 text-4xl md:text-5xl">See how our AI handles real calls.</h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-sm">These are transcripts from actual AI agent calls. The caller never knew they were talking to AI.</p>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {demos.map((demo) => (
          <CallTranscript key={demo.id} demo={demo} />
        ))}
      </div>
    </section>
  );
}

function CallTranscript({ demo }: { demo: typeof demos[number] }) {
  const [expanded, setExpanded] = useState(false);
  const visibleLines = expanded ? demo.lines : demo.lines.slice(0, 4);

  return (
    <div className="flex flex-col rounded-2xl border border-border bg-surface overflow-hidden">
      {/* Header */}
      <div className="border-b border-border/60 bg-gradient-to-r from-primary/8 to-transparent px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
            <PhoneCall className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">{demo.title}</p>
            <div className="mt-0.5 flex items-center gap-3 text-xs text-muted-foreground">
              <span>{demo.trade} · {demo.location}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {demo.time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call info bar */}
      <div className="flex items-center justify-between border-b border-border/40 bg-surface/50 px-5 py-2">
        <span className="text-xs text-muted-foreground">Duration: {demo.duration}</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-700">
          <CheckCircle className="h-3 w-3" /> Booked
        </span>
      </div>

      {/* Transcript */}
      <div className="flex-1 px-4 py-4 space-y-3">
        {visibleLines.map((line, i) => (
          <div key={i} className="flex gap-2.5">
            <div className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${
              line.speaker === "ai" ? "bg-primary/15 text-primary" : "bg-border/80 text-muted-foreground"
            }`}>
              {line.speaker === "ai" ? <Bot className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {line.speaker === "ai" ? "AI Agent" : "Caller"}
              </span>
              <p className="mt-0.5 text-sm leading-relaxed text-foreground">{line.text}</p>
            </div>
          </div>
        ))}

        {!expanded && demo.lines.length > 4 && (
          <div className="pt-1 text-center">
            <div className="h-8 bg-gradient-to-t from-surface to-transparent" />
          </div>
        )}
      </div>

      {/* Expand / Collapse */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-center gap-1.5 border-t border-border/60 px-5 py-3 text-xs font-medium text-primary transition-colors hover:bg-primary/5"
      >
        {expanded ? (
          <>Show less <ChevronUp className="h-3.5 w-3.5" /></>
        ) : (
          <>Read full transcript ({demo.lines.length} messages) <ChevronDown className="h-3.5 w-3.5" /></>
        )}
      </button>

      {/* Result */}
      <div className="border-t border-border/60 bg-primary/5 px-5 py-3">
        <p className="text-xs font-medium text-primary">✓ {demo.result}</p>
      </div>
    </div>
  );
}

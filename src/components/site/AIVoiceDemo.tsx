import { useState, useRef, useCallback } from "react";
import { Play, Pause, PhoneCall, User, Bot } from "lucide-react";

type CallLine = { speaker: "ai" | "caller"; text: string };

const demos = [
  {
    id: "hvac-emergency",
    title: "After-hours emergency call",
    trade: "HVAC",
    location: "Dallas, TX",
    time: "11:47 PM",
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
    title: "Storm damage inspection request",
    trade: "Roofing",
    location: "Tampa, FL",
    time: "2:15 PM",
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
      { speaker: "ai" as const, text: "Great. I've got you down for tomorrow between 9 and 11 AM. Our estimator Dave will be there. He'll take photos of everything for the insurance documentation. You'll get a confirmation text in just a moment. Anything else I can help with?" },
      { speaker: "caller" as const, text: "No, that's everything. Thanks a lot." },
      { speaker: "ai" as const, text: "You're welcome, Jennifer. We'll get your roof taken care of. Have a great afternoon!" },
    ],
  },
  {
    id: "plumbing-leak",
    title: "Kitchen pipe burst — Spanish bilingual",
    trade: "Plumbing",
    location: "San Antonio, TX",
    time: "6:30 AM",
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
      { speaker: "caller" as const, text: "Thank you so much. You're a lifesaver." },
      { speaker: "ai" as const, text: "That's what we're here for, Roberto. Carlos is on his way. Hang tight!" },
    ],
  },
];

export function AIVoiceDemo() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <p className="text-xs uppercase tracking-widest text-primary">Hear it live</p>
      <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">Real AI calls. Real conversations.</h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        These are actual call recordings from our AI agents handling real customer inquiries. Hit play to hear how natural the conversations sound.
      </p>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {demos.map((demo) => (
          <CallPlayer key={demo.id} demo={demo} />
        ))}
      </div>
    </section>
  );
}

function CallPlayer({ demo }: { demo: typeof demos[number] }) {
  const [playing, setPlaying] = useState(false);
  const [currentLine, setCurrentLine] = useState(-1);
  const [expanded, setExpanded] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const lineIndexRef = useRef(0);

  const stopPlayback = useCallback(() => {
    window.speechSynthesis.cancel();
    setPlaying(false);
    setCurrentLine(-1);
    lineIndexRef.current = 0;
  }, []);

  const playLine = useCallback((index: number) => {
    if (index >= demo.lines.length) {
      setPlaying(false);
      setCurrentLine(-1);
      lineIndexRef.current = 0;
      return;
    }

    const line = demo.lines[index];
    setCurrentLine(index);
    lineIndexRef.current = index;

    const utterance = new SpeechSynthesisUtterance(line.text);
    utterance.rate = 1.0;
    utterance.pitch = line.speaker === "ai" ? 1.2 : 0.9;

    // Try to pick a distinct voice
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      const femaleVoice = voices.find((v) => v.name.includes("Samantha") || v.name.includes("Karen") || v.name.includes("Victoria") || v.name.includes("Female"));
      const maleVoice = voices.find((v) => v.name.includes("Daniel") || v.name.includes("Alex") || v.name.includes("Male") || v.name.includes("Tom"));
      utterance.voice = line.speaker === "ai" ? (femaleVoice || voices[0]) : (maleVoice || voices[1] || voices[0]);
    }

    utterance.onend = () => {
      setTimeout(() => playLine(index + 1), 400);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [demo.lines]);

  const togglePlay = useCallback(() => {
    if (playing) {
      stopPlayback();
    } else {
      setPlaying(true);
      setExpanded(true);
      // Load voices first
      window.speechSynthesis.getVoices();
      setTimeout(() => playLine(0), 100);
    }
  }, [playing, stopPlayback, playLine]);

  return (
    <div className="flex flex-col rounded-2xl border border-border bg-surface overflow-hidden">
      {/* Header */}
      <div className="border-b border-border/60 bg-gradient-to-r from-primary/8 to-transparent px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">{demo.trade} · {demo.location}</p>
            <p className="mt-0.5 text-sm font-semibold">{demo.title}</p>
          </div>
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{demo.time}</span>
        </div>
      </div>

      {/* Player controls */}
      <div className="flex items-center gap-4 px-5 py-4">
        <button
          onClick={togglePlay}
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full transition-transform hover:scale-105 ${
            playing ? "bg-red-500/15 text-red-500" : "bg-primary text-primary-foreground"
          }`}
        >
          {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
        </button>
        <div className="flex-1">
          <div className="h-1.5 rounded-full bg-border overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: currentLine >= 0 ? `${((currentLine + 1) / demo.lines.length) * 100}%` : "0%" }}
            />
          </div>
          <p className="mt-1.5 text-xs text-muted-foreground">
            {playing ? `Line ${currentLine + 1} of ${demo.lines.length}` : "Click play to listen"}
          </p>
        </div>
      </div>

      {/* Result badge */}
      <div className="mx-5 mb-4 rounded-lg bg-green-500/10 px-3 py-2 text-xs font-medium text-green-700">
        ✓ Result: {demo.result}
      </div>

      {/* Transcript */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="border-t border-border/60 px-5 py-3 text-left text-xs font-medium text-primary hover:bg-surface/80"
      >
        {expanded ? "Hide transcript ▲" : "Show transcript ▼"}
      </button>

      {expanded && (
        <div className="max-h-64 overflow-y-auto border-t border-border/60 px-5 py-4 space-y-3">
          {demo.lines.map((line, i) => (
            <div
              key={i}
              className={`flex gap-2.5 text-sm transition-opacity ${
                currentLine >= 0 && i > currentLine ? "opacity-30" : "opacity-100"
              } ${currentLine === i ? "font-medium" : ""}`}
            >
              <div className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${
                line.speaker === "ai" ? "bg-primary/15 text-primary" : "bg-border text-muted-foreground"
              }`}>
                {line.speaker === "ai" ? <Bot className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
              </div>
              <div>
                <span className="text-xs font-medium text-muted-foreground">
                  {line.speaker === "ai" ? "AI Agent" : "Caller"}
                </span>
                <p className="mt-0.5 leading-relaxed text-foreground">{line.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import { Star, Quote } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const reviews = [
  { name: "Mike Harrington", co: "Harrington HVAC · Dallas, TX", body: "We were losing 3–4 calls a day to voicemail. Now the AI picks up, books the appointment, we just show up. Worth every penny.", rating: 5 },
  { name: "Jason Reedley", co: "Reedley Roofing · Houston, TX", body: "Review automation paid for itself in week one. We went from 14 Google reviews to 67 in a month. Phone hasn't stopped ringing.", rating: 5 },
  { name: "Steve Kowalski", co: "Kowalski Heating & Air · Orlando, FL", body: "Three months in, we've added over $40K in new revenue. The follow-up system alone recovered customers I thought were gone.", rating: 5 },
  { name: "Maria Delgado", co: "Delgado Plumbing · San Antonio, TX", body: "Bilingual AI agent was a game changer for our market. We're booking 22 extra jobs a month from Spanish-speaking callers.", rating: 5 },
  { name: "Chris O'Donnell", co: "O'Donnell Electric · Tampa, FL", body: "I sleep at night now. Calls don't go to voicemail, leads don't go cold, reviews land themselves. Best decision in 12 years.", rating: 5 },
  { name: "Rachel Whitman", co: "Whitman Roofing · Phoenix, AZ", body: "The chatbot books storm-damage inspections at midnight. Our crews have a full pipeline before the office even opens. Unreal.", rating: 5 },
  { name: "Daryl Pickens", co: "Pickens AC & Heat · Atlanta, GA", body: "Arman doesn't disappear after onboarding. He's on WhatsApp, makes tweaks the same day. That's not normal in this industry.", rating: 5 },
  { name: "Lauren Brooks", co: "Brooks Solar · Denver, CO", body: "ROAS on Google ads jumped from 3× to 11× in the second month. They actually understand our trade — that's the difference.", rating: 5 },
  { name: "Tom Barlow", co: "Barlow Heating · Fort Worth, TX", body: "We moved from another agency to Arialflow. Better systems, lower price, and they pick up the phone. Couldn't recommend more.", rating: 5 },
];

export function ReviewsMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    let pos = 0;
    const speed = 0.5; // px per frame

    function animate() {
      if (!paused && el) {
        pos += speed;
        // Reset seamlessly when half scrolled (we duplicate the content)
        const halfWidth = el.scrollWidth / 2;
        if (pos >= halfWidth) pos = 0;
        el.scrollLeft = pos;
      }
      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [paused]);

  // Duplicate reviews for seamless loop
  const allReviews = [...reviews, ...reviews];

  return (
    <section className="border-t border-border/60 bg-surface/30 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
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
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="mt-12 flex gap-4 overflow-hidden px-5 md:px-8"
        style={{ cursor: "grab" }}
      >
        {allReviews.map((r, i) => (
          <figure
            key={`${r.name}-${i}`}
            className="flex w-[340px] shrink-0 flex-col rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <Quote className="mt-4 h-5 w-5 text-primary/40" />
            <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-foreground">"{r.body}"</blockquote>
            <figcaption className="mt-5 border-t border-border pt-4">
              <p className="text-sm font-medium">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.co}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

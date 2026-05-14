import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useState } from "react";
import { Mail, MessageSquare, Send, Check, Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book your free Arialflow growth audit" },
      { name: "description", content: "Book a free 30-minute call with Arialflow. We'll review your business and show you exactly where you're losing jobs." },
      { property: "og:title", content: "Contact Arialflow" },
      { property: "og:description", content: "Book a free 30-minute growth call." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-radial-ember" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <p className="text-xs uppercase tracking-widest text-primary">Get in touch</p>
          <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl">Let's talk about <span className="text-gradient-ember">growing your business.</span></h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">The fastest way to get started is to book a free 30-minute call. We'll look at your business, find where you're losing jobs, and give you an honest recommendation.</p>
        </div>
      </section>

      {/* Book a Call — primary CTA */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface to-surface p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                <Calendar className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-3xl md:text-4xl">Book a free 30-minute call</h2>
              <p className="mt-3 text-muted-foreground">
                Pick a time that works for you. On the call, we'll ask about your business, your service area, and where you think you're losing the most jobs. Then we'll give you an honest plan — whether that includes us or not.
              </p>
              <a href="https://calendly.com/arwebcrafts/30-mint" target="_blank" rel="noreferrer" className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground ring-ember">
                <Calendar className="h-4 w-4" /> Pick a time on Calendly <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl border border-border/60 bg-background p-6">
                <p className="font-medium text-foreground">What you'll get on the call</p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Full audit of where you're losing leads",
                    "Custom plan recommendation for your trade",
                    "Honest go / no-go — no hard sell",
                    "Timeline and expectations if we're a fit",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other ways to reach us + form */}
      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <h2 className="text-3xl md:text-4xl">Or reach out directly</h2>
          <p className="mt-3 text-muted-foreground">Prefer to send a message first? Fill out the form below or contact us directly.</p>

          <div className="mt-10 grid gap-10 md:grid-cols-12">
            <aside className="md:col-span-4 space-y-4">
              {[
                { icon: MessageSquare, label: "WhatsApp", value: "+1 (307) 278-4862", link: "https://wa.me/+13072784862" },
                { icon: Mail, label: "Email", value: "contact@arialflow.com" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background p-5">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                    {c.link ? (
                      <a href={c.link} target="_blank" rel="noreferrer" className="mt-1 text-sm hover:text-primary transition-colors">{c.value}</a>
                    ) : (
                      <p className="mt-1 text-sm">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
              <div className="rounded-2xl border border-border/60 bg-background p-5 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Serving</p>
                <p className="mt-2">HVAC, Roofing, Plumbing, Electrical & Solar contractors across Texas and Florida.</p>
              </div>
            </aside>

            <div className="md:col-span-8">
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="rounded-3xl border border-border/60 bg-background p-7 md:p-10"
              >
                {sent ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 font-display text-3xl">Got it.</h2>
                    <p className="mt-2 text-muted-foreground">We'll be in touch within one business day.</p>
                    <a href="https://calendly.com/arwebcrafts/30-mint" target="_blank" rel="noreferrer" className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground">
                      <Calendar className="h-4 w-4" /> Or book a call now
                    </a>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-semibold tracking-tight">Tell us about your business</h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <Field label="Your name" type="text" required name="name" />
                      <Field label="Company" type="text" required name="company" />
                      <Field label="Email" type="email" required name="email" />
                      <Field label="Phone" type="tel" name="phone" />
                      <div className="md:col-span-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Trade</label>
                        <select className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary">
                          <option>HVAC</option><option>Roofing</option><option>Plumbing</option>
                          <option>Electrical</option><option>Solar</option><option>Other</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">What's your biggest bottleneck?</label>
                        <textarea rows={4} className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" placeholder="e.g. We miss 5+ calls a day and don't follow up with leads from Facebook." />
                      </div>
                    </div>
                    <button type="submit" className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground ring-ember">
                      Send message <Send className="h-4 w-4" />
                    </button>
                    <p className="mt-3 text-xs text-muted-foreground">We reply within 1 business day. No spam — ever.</p>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input {...props} className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary" />
    </div>
  );
}

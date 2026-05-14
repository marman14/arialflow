import { Link } from "@tanstack/react-router";
import { Flame, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-lg">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Flame className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight">Arialflow</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm text-foreground font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href="https://calendly.com/arwebcrafts/30-mint"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Book a Free Call
          </a>
        </div>
        <button className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
                {n.label}
              </Link>
            ))}
            <a href="https://calendly.com/arwebcrafts/30-mint" target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground">
              Book a Free Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

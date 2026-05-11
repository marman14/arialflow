import { Link } from "@tanstack/react-router";
import { Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Flame className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-semibold">Arialflow</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            The AI growth partner for HVAC, roofing & plumbing contractors. We capture every call, follow up every lead, and turn happy customers into 5-star reviews.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/process" className="hover:text-foreground">Process</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Get in touch</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>contact@arialflow.com</li>
            <li>Mon–Fri · 8am–7pm CT</li>
            <li>USA · UK · Canada · AU</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Arialflow. All rights reserved.</p>
          <p>Built for contractors who'd rather be on the job site.</p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { Flame, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-espresso">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Flame className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-semibold text-espresso-foreground">Arialflow</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Serving HVAC contractors, roofers & plumbers across the USA, UK, Canada & Australia. We help you get more reviews, capture every lead, and increase repeat bookings without the manual work.
          </p>
          <div className="mt-5 space-y-1.5 text-sm text-espresso-foreground">
            <div className="flex items-center gap-2">
              <span className="flex">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400"/>)}</span>
              <span>4.9/5 Google Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400"/>)}</span>
              <span>5/5 on Clutch</span>
            </div>
          </div>
        </div>
        <div>
          <p className="font-display text-base font-semibold text-espresso-foreground">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-espresso-foreground">Home</Link></li>
            <li><Link to="/services" className="hover:text-espresso-foreground">AI Services</Link></li>
            <li><Link to="/packages/done-for-you" className="hover:text-espresso-foreground">Done-For-You</Link></li>
            <li><Link to="/process" className="hover:text-espresso-foreground">Process</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-base font-semibold text-espresso-foreground">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-espresso-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-espresso-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-base font-semibold text-espresso-foreground">Service Areas</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/locations/$slug" params={{ slug: "dallas-tx" }} className="hover:text-espresso-foreground">Dallas, TX</Link></li>
            <li><Link to="/locations/$slug" params={{ slug: "tampa-fl" }} className="hover:text-espresso-foreground">Tampa, FL</Link></li>
            <li><Link to="/locations/$slug" params={{ slug: "houston-tx" }} className="hover:text-espresso-foreground">Houston, TX</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-base font-semibold text-espresso-foreground">Contact Us</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><span className="block text-espresso-foreground">WhatsApp</span><a href="https://wa.me/+13072784862" className="hover:text-espresso-foreground" target="_blank" rel="noreferrer">+1 (307) 278-4862</a></li>
            <li><span className="block text-espresso-foreground">Email</span>contact@arialflow.com</li>
            <li><span className="block text-espresso-foreground">Hours</span>Mon–Fri · 8am–7pm CT</li>
            <li><span className="block text-espresso-foreground">Regions</span>USA · UK · Canada · AU</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Arialflow. All rights reserved.</p>
          <p>Built for contractors who'd rather be on the job site.</p>
        </div>
      </div>
    </footer>
  );
}

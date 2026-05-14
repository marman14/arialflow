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
            AI-powered growth systems for HVAC contractors, roofers & plumbers across Texas and Florida. We help you capture every lead, get more reviews, and book more jobs — without the manual work.
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
            <li><Link to="/investment" className="hover:text-espresso-foreground">Investment</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-base font-semibold text-espresso-foreground">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-espresso-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-espresso-foreground">Contact</Link></li>
            <li><Link to="/terms" className="hover:text-espresso-foreground">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-espresso-foreground">Privacy Policy</Link></li>
          </ul>
          <p className="font-display mt-6 text-base font-semibold text-espresso-foreground">Book a Call</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="https://calendly.com/arwebcrafts/30-mint" target="_blank" rel="noreferrer" className="hover:text-espresso-foreground">Free 30-min Strategy Call</a></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-base font-semibold text-espresso-foreground">Contact Us</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><span className="block text-espresso-foreground">WhatsApp</span><a href="https://wa.me/+13072784862" className="hover:text-espresso-foreground" target="_blank" rel="noreferrer">+1 (307) 278-4862</a></li>
            <li><span className="block text-espresso-foreground">Email</span>contact@arialflow.com</li>
            <li><span className="block text-espresso-foreground">Hours</span>Mon–Fri · 8am–7pm CT</li>
            <li><span className="block text-espresso-foreground">Serving</span>Texas & Florida, USA</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Arialflow. All rights reserved. A companion of <a href="https://arwebcrafts.com" target="_blank" rel="noreferrer" className="text-espresso-foreground hover:text-primary">AR Webcrafts</a>.</p>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-espresso-foreground">Terms</Link>
            <Link to="/privacy" className="hover:text-espresso-foreground">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="border-b border-border/60 bg-surface/60">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-5 py-2 text-center text-xs text-muted-foreground md:px-8">
          <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-primary">Now Onboarding</span>
          <span className="ml-3 hidden md:inline">Free 30-day pilot · No contracts · Cancel any time</span>
          <span className="ml-3 md:hidden">Free 30-day pilot · No contracts</span>
        </div>
      </div>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

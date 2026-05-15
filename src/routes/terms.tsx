import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Arialflow" },
      { name: "description", content: "Terms of Service for Arialflow, a companion company of AR Webcrafts." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8">
        <p className="text-xs uppercase tracking-widest text-primary">Legal</p>
        <h1 className="mt-3 text-5xl md:text-6xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: May 14, 2026</p>

        <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. About Arialflow</h2>
            <p className="mt-3">
              Arialflow is a companion company of <strong className="text-foreground">AR Webcrafts</strong>. By using our website and services, you agree to these Terms of Service. Arialflow operates under the umbrella of AR Webcrafts and provides AI-powered growth solutions specifically designed for local businesses including local businesses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Services</h2>
            <p className="mt-3">
              Arialflow provides marketing automation, lead generation, review management, website development, search engine optimization, paid advertising management, and related digital growth services for local businesses. All services are delivered on a month-to-month basis unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. Billing & Payment</h2>
            <p className="mt-3">
              Services are billed monthly in advance. Payment is due upon receipt of invoice. All prices are in US dollars unless stated otherwise. There are no setup fees unless explicitly agreed upon. You may cancel your subscription at any time with 30 days' written notice. No refunds will be issued for partial months.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Client Responsibilities</h2>
            <p className="mt-3">
              You agree to provide accurate business information, respond to reasonable requests for content and approvals in a timely manner, and maintain the accuracy of any information shared with us. You are responsible for ensuring that your business complies with all applicable local, state, and federal laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Intellectual Property</h2>
            <p className="mt-3">
              Websites, content, and creative materials produced by Arialflow remain the property of Arialflow and AR Webcrafts until the client's account has been active for a minimum of 6 months, at which point ownership transfers to the client. Arialflow retains the right to showcase work in portfolios and case studies unless the client opts out in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
            <p className="mt-3">
              Arialflow and AR Webcrafts shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, or data. Our total liability for any claim arising from our services shall not exceed the total amount paid by you in the 3 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">7. No Guarantees</h2>
            <p className="mt-3">
              While we have a strong track record of delivering results for our clients, we do not guarantee specific outcomes such as search engine rankings, review counts, or revenue increases. Results vary depending on market conditions, competition, and client engagement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">8. Termination</h2>
            <p className="mt-3">
              Either party may terminate the service agreement with 30 days' written notice. Upon termination, Arialflow will provide a reasonable transition period and export any client data upon request. Access to Arialflow-managed tools and platforms will be revoked upon the effective termination date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">9. Governing Law</h2>
            <p className="mt-3">
              These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the courts of Dallas County, Texas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">10. Changes to These Terms</h2>
            <p className="mt-3">
              We reserve the right to update these Terms of Service at any time. Material changes will be communicated to active clients via email at least 30 days before taking effect. Your continued use of our services constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">11. Contact</h2>
            <p className="mt-3">
              If you have questions about these Terms, please contact us at{" "}
              <a href="mailto:contact@arialflow.com" className="text-primary hover:underline">contact@arialflow.com</a>{" "}
              or via WhatsApp at{" "}
              <a href="https://wa.me/+13072784862" target="_blank" rel="noreferrer" className="text-primary hover:underline">+1 (307) 278-4862</a>.
            </p>
            <p className="mt-3">
              Arialflow is a companion company of <strong className="text-foreground">AR Webcrafts</strong>.
            </p>
          </section>
        </div>
      </section>
    </SiteLayout>
  );
}

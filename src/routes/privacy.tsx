import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Arialflow" },
      { name: "description", content: "Privacy Policy for Arialflow, a companion company of AR Webcrafts." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8">
        <p className="text-xs uppercase tracking-widest text-primary">Legal</p>
        <h1 className="mt-3 text-5xl md:text-6xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: May 14, 2026</p>

        <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. Who We Are</h2>
            <p className="mt-3">
              Arialflow is a companion company of <strong className="text-foreground">AR Webcrafts</strong>. We provide AI-powered marketing and growth solutions for businesses. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
            <p className="mt-3">We may collect the following types of information:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">Contact Information:</strong> Name, email address, phone number, business name, and service area when you fill out forms, contact us via WhatsApp, or subscribe to our services.</li>
              <li><strong className="text-foreground">Business Information:</strong> Details about your trade, services offered, service area, and existing marketing efforts that help us serve you better.</li>
              <li><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, browser type, and device information collected via cookies and analytics tools.</li>
              <li><strong className="text-foreground">Communication Data:</strong> Records of correspondence between you and our team, including chat transcripts, emails, and call recordings (where applicable and disclosed).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
            <p className="mt-3">We use your information to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Communicate with you about your account and our services</li>
              <li>Customize and optimize your marketing campaigns</li>
              <li>Send you service-related updates and notifications</li>
              <li>Analyze website usage to improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Information Sharing</h2>
            <p className="mt-3">
              We do not sell, rent, or trade your personal information to third parties. We may share your information with:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">AR Webcrafts:</strong> As our parent company, AR Webcrafts may access information necessary for service delivery and business operations.</li>
              <li><strong className="text-foreground">Service Providers:</strong> Trusted third-party tools and platforms that help us deliver our services (e.g., email delivery, analytics, hosting). These providers are contractually obligated to protect your data.</li>
              <li><strong className="text-foreground">Legal Requirements:</strong> When required by law, court order, or governmental request.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Cookies & Tracking</h2>
            <p className="mt-3">
              Our website uses cookies and similar tracking technologies to understand how visitors use our site. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Data Security</h2>
            <p className="mt-3">
              We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">7. Data Retention</h2>
            <p className="mt-3">
              We retain your personal information for as long as your account is active or as needed to provide services. If you cancel your subscription, we will retain your data for up to 90 days to facilitate any transition, after which it will be deleted unless required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">8. Your Rights</h2>
            <p className="mt-3">Depending on your location, you may have the right to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Data portability (receive your data in a structured format)</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at the details provided below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">9. Children's Privacy</h2>
            <p className="mt-3">
              Our services are designed for businesses, not individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">10. Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Material changes will be communicated to active clients via email. Your continued use of our services after changes are posted constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">11. Contact</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, please contact us at{" "}
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
